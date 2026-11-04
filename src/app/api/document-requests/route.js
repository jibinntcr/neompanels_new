import { NextResponse } from 'next/server';
import {
  ensureStorageInitialized,
  appendRecordDurably,
  generateReferenceId,
  isValidEmail,
  readDocRequestsFromDisk,
  writeDocRequestsToDisk,
  DOC_REQUESTS_JSON_PATH,
  NOTIFICATIONS_LOG_PATH
} from '@/lib/storage';
import { getMongoDatabase } from '@/lib/mongodb';

export async function GET(request) {
  try {
    ensureStorageInitialized();
    let requests = readDocRequestsFromDisk();

    try {
      const db = await getMongoDatabase();
      if (db) {
        const col = db.collection('document_requests');
        const count = await col.countDocuments();
        if (count === 0 && requests.length > 0) {
          await col.insertMany(requests.map((r) => ({ ...r })));
        } else if (count > 0) {
          const mongoRecords = await col.find({}, { projection: { _id: 0 } }).toArray();
          if (mongoRecords.length > 0) {
            requests = mongoRecords;
            writeDocRequestsToDisk(requests);
          }
        }
      }
    } catch (_) {
      // Fallback to local records
    }

    const { searchParams } = new URL(request.url);
    const categoryFilter = (searchParams.get('category') || '').trim();
    const statusFilter = (searchParams.get('status') || '').trim();
    const search = (searchParams.get('search') || '').trim().toLowerCase();

    let filtered = [...requests].sort(
      (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );

    if (categoryFilter && categoryFilter !== 'all') {
      filtered = filtered.filter(
        (item) => (item.documentCategory || '').toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    if (statusFilter && statusFilter !== 'all') {
      filtered = filtered.filter(
        (item) => (item.status || 'pending').toLowerCase() === statusFilter.toLowerCase()
      );
    }

    if (search) {
      filtered = filtered.filter((item) => {
        const haystack = [
          item.reference,
          item.documentTitle,
          item.documentCategory,
          item.applicationScope,
          item.contact?.name,
          item.contact?.organisation,
          item.contact?.email
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(search);
      });
    }

    return NextResponse.json({
      ok: true,
      total: requests.length,
      filteredCount: filtered.length,
      requests: filtered
    });
  } catch (_) {
    return NextResponse.json(
      { ok: false, errors: ['Could not load document requests.'] },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const isTestHeader = request.headers.get('x-neom-test-mode') === 'true';
    const payload = await request.json();
    const isTestMode =
      isTestHeader || payload.testMode === 'true' || payload.testMode === true;

    if (payload.captchaExpected !== undefined && !isTestMode) {
      const expected = String(payload.captchaExpected || '').trim().toUpperCase();
      const answer = String(payload.captchaAnswer || '').trim().toUpperCase();
      if (!answer || answer !== expected) {
        return NextResponse.json(
          {
            ok: false,
            errors: ['Please enter the correct security verification code shown on the form.']
          },
          { status: 422 }
        );
      }
    }

    const documentTitle = String(payload.documentTitle || '').trim();
    const documentCategory = String(payload.documentCategory || '').trim();
    const name = String(payload.name || '').trim();
    const organisation = String(payload.organisation || '').trim();
    const email = String(payload.email || '').trim();
    const applicationScope = String(payload.applicationScope || '').trim();

    const errors = [];
    if (!documentTitle) errors.push('Please select the document you are requesting.');
    if (!name || name.length < 2) errors.push('Please enter your name.');
    if (!organisation || organisation.length < 2)
      errors.push('Please enter your company, organisation, or practice.');
    if (!isValidEmail(email)) errors.push('Please enter a valid business email address.');
    if (!applicationScope || applicationScope.length < 5) {
      errors.push(
        'Please briefly state the application or product grade so we can verify document scope.'
      );
    }

    if (errors.length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 422 });
    }

    const reference = generateReferenceId(isTestMode ? 'NEOM-DOC-TEST' : 'NEOM-DOC');
    const createdAt = new Date().toISOString();
    const record = {
      reference,
      createdAt,
      status: 'pending',
      documentTitle,
      documentCategory: documentCategory || 'Technical Documents',
      applicationScope,
      contact: { name, organisation, email },
      routedDesk: 'Product & Brand Information Desk'
    };

    if (!isTestMode) {
      appendRecordDurably(DOC_REQUESTS_JSON_PATH, NOTIFICATIONS_LOG_PATH, record);
      try {
        const db = await getMongoDatabase();
        if (db) {
          await db
            .collection('document_requests')
            .updateOne({ reference }, { $set: record }, { upsert: true });
        }
      } catch (_) {
        // Local durable store already updated
      }
    }

    return NextResponse.json(
      {
        ok: true,
        testMode: isTestMode,
        reference,
        createdAt,
        routedDesk: record.routedDesk
      },
      { status: 201 }
    );
  } catch (_) {
    return NextResponse.json(
      { ok: false, errors: ['Could not record document request.'] },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    ensureStorageInitialized();
    const body = await request.json();
    const reference = String(body.reference || '').trim();
    if (!reference) {
      return NextResponse.json(
        { ok: false, errors: ['Document request reference is required.'] },
        { status: 400 }
      );
    }

    const requests = readDocRequestsFromDisk();
    const idx = requests.findIndex((r) => r.reference === reference);
    if (idx < 0) {
      return NextResponse.json(
        { ok: false, errors: ['Document request not found.'] },
        { status: 404 }
      );
    }

    const updated = {
      ...requests[idx],
      ...(body.status ? { status: String(body.status).trim() } : {}),
      updatedAt: new Date().toISOString()
    };
    requests[idx] = updated;
    writeDocRequestsToDisk(requests);

    try {
      const db = await getMongoDatabase();
      if (db) {
        await db
          .collection('document_requests')
          .updateOne({ reference }, { $set: updated }, { upsert: true });
      }
    } catch (_) {
      // Ignore
    }

    return NextResponse.json({ ok: true, request: updated });
  } catch (_) {
    return NextResponse.json(
      { ok: false, errors: ['Could not update document request.'] },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    ensureStorageInitialized();
    const { searchParams } = new URL(request.url);
    const reference = (searchParams.get('reference') || '').trim();
    if (!reference) {
      return NextResponse.json(
        { ok: false, errors: ['Reference is required.'] },
        { status: 400 }
      );
    }

    const requests = readDocRequestsFromDisk();
    const remaining = requests.filter((r) => r.reference !== reference);
    writeDocRequestsToDisk(remaining);

    try {
      const db = await getMongoDatabase();
      if (db) {
        await db.collection('document_requests').deleteOne({ reference });
      }
    } catch (_) {
      // Ignore
    }

    return NextResponse.json({ ok: true, deletedReference: reference });
  } catch (_) {
    return NextResponse.json(
      { ok: false, errors: ['Could not delete document request.'] },
      { status: 500 }
    );
  }
}

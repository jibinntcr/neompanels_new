import { NextResponse } from 'next/server';
import {
  appendRecordDurably,
  generateReferenceId,
  isValidEmail,
  DOC_REQUESTS_JSON_PATH,
  NOTIFICATIONS_LOG_PATH
} from '@/lib/storage';

export async function POST(request) {
  try {
    const isTestHeader = request.headers.get('x-neom-test-mode') === 'true';
    const payload = await request.json();
    const isTestMode =
      isTestHeader || payload.testMode === 'true' || payload.testMode === true;
    const documentTitle = String(payload.documentTitle || '').trim();
    const documentCategory = String(payload.documentCategory || '').trim();
    const name = String(payload.name || '').trim();
    const organisation = String(payload.organisation || '').trim();
    const email = String(payload.email || '').trim();
    const applicationScope = String(payload.applicationScope || '').trim();

    const errors = [];
    if (!documentTitle) errors.push('Please select the document you are requesting.');
    if (!name || name.length < 2) errors.push('Please enter your name.');
    if (!organisation || organisation.length < 2) errors.push('Please enter your company, organisation, or practice.');
    if (!isValidEmail(email)) errors.push('Please enter a valid business email address.');
    if (!applicationScope || applicationScope.length < 5) {
      errors.push('Please briefly state the application or product grade so we can verify document scope.');
    }

    if (errors.length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 422 });
    }

    const reference = generateReferenceId(isTestMode ? 'NEOM-DOC-TEST' : 'NEOM-DOC');
    const createdAt = new Date().toISOString();
    const record = {
      reference,
      createdAt,
      documentTitle,
      documentCategory,
      applicationScope,
      contact: { name, organisation, email },
      routedDesk: 'Product & Brand Information Desk'
    };

    if (!isTestMode) {
      appendRecordDurably(DOC_REQUESTS_JSON_PATH, NOTIFICATIONS_LOG_PATH, record);
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

import { NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import { ENQUIRIES_JSON_PATH, PRIVATE_ATTACHMENTS_DIR } from '@/lib/storage';

export async function GET(request, { params }) {
  const configuredToken = process.env.NEOM_ADMIN_TOKEN;
  const headerToken = request.headers.get('x-admin-token');
  const authHeader = request.headers.get('authorization');
  const suppliedToken =
    headerToken || (authHeader ? authHeader.replace(/^Bearer\s+/i, '') : '');

  if (!configuredToken || suppliedToken !== configuredToken) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Unauthorized. Private enquiry attachments require a valid administrative token.'
      },
      { status: 401 }
    );
  }

  const attachmentId = path.basename(params.id || '');
  try {
    const enquiries = JSON.parse(fs.readFileSync(ENQUIRIES_JSON_PATH, 'utf8'));
    let foundAttachment = null;
    for (const enq of enquiries) {
      if (Array.isArray(enq.attachments)) {
        const match = enq.attachments.find((a) => a.id === attachmentId);
        if (match) {
          foundAttachment = match;
          break;
        }
      }
    }

    if (!foundAttachment) {
      return NextResponse.json({ ok: false, error: 'Attachment record not found.' }, { status: 404 });
    }

    const fullPath = path.join(PRIVATE_ATTACHMENTS_DIR, foundAttachment.storedFilename);
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ ok: false, error: 'Attachment file not found on disk.' }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(fullPath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': foundAttachment.mimeType,
        'Content-Length': String(fileBuffer.length),
        'Content-Disposition': `attachment; filename="${foundAttachment.originalName.replace(/"/g, '')}"`,
        'Cache-Control': 'private, no-store',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  } catch (_) {
    return NextResponse.json({ ok: false, error: 'Failed to retrieve attachment.' }, { status: 500 });
  }
}

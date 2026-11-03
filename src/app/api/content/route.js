import { NextResponse } from 'next/server';
import fs from 'node:fs';
import { CONTENT_JSON_PATH } from '@/lib/storage';

export async function GET() {
  try {
    const raw = fs.readFileSync(CONTENT_JSON_PATH, 'utf8');
    const content = JSON.parse(raw);
    const publicContent = {
      ...content,
      governance: {
        verifiedCompanyInformation: content.governance.verifiedCompanyInformation,
        adoptedPolicies: content.governance.adoptedPolicies
      }
    };
    return NextResponse.json(publicContent);
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'Unable to load structured content registry.' },
      { status: 500 }
    );
  }
}

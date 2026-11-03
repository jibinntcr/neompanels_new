import { NextResponse } from 'next/server';
import fs from 'node:fs';
import { ensureStorageInitialized, STORAGE_DIR, PRIVATE_ATTACHMENTS_DIR } from '@/lib/storage';

export async function GET() {
  ensureStorageInitialized();
  const webhookConfigured = Boolean(process.env.ENQUIRY_WEBHOOK_URL);
  const adminTokenConfigured = Boolean(process.env.NEOM_ADMIN_TOKEN);

  return NextResponse.json({
    ok: true,
    mode: 'live',
    framework: 'Next.js App Router',
    storageReady: fs.existsSync(STORAGE_DIR) && fs.existsSync(PRIVATE_ATTACHMENTS_DIR),
    privateAttachmentStorage: 'enabled',
    leadRouting: 'enabled',
    notificationTransport: webhookConfigured ? 'webhook_and_durable_log' : 'durable_dispatch_log',
    adminAttachmentAuthConfigured: adminTokenConfigured
  });
}

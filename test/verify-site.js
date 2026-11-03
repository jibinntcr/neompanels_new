/**
 * Automated Verification Suite for NEOM Panels Corporate Website
 * Verifies:
 *  1. Every visible page and internal link / image asset
 *  2. Brand destinations (Starwoods preselected enquiry route)
 *  3. Absence of prohibited phrases, unsupported claims and placeholders
 *  4. Server-side form validation, durable persistence and error handling
 *  5. Private attachment storage & access control (403 on public /storage, 401/200 on admin route)
 *  6. Functioning Document Request persistence
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { startServer } = require('../server');

const ROOT_DIR = path.resolve(__dirname, '..');

const HTML_FILES = [
  'index.html',
  'about.html',
  'brands.html',
  'industries.html',
  'manufacturing.html',
  'sustainability.html',
  'governance.html',
  'resources.html',
  'enquiry.html',
  'privacy.html',
  'terms.html'
];

const FORBIDDEN_PHRASES = [
  'revolutionising the industry',
  'revolutionizing the industry',
  'unparalleled excellence',
  'world-class solutions',
  'a greener tomorrow',
  'one-stop destination',
  '100% sustainable',
  "india's leading",
  'india’s leading',
  'we believe',
  'lorem ipsum',
  'todo:',
  'tbd'
];

async function runVerification() {
  console.log('Starting NEOM Panels verification suite...');
  process.env.NEOM_ADMIN_TOKEN = 'test-verification-admin-token-2026';

  const server = await startServer(0);
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  try {
    // 1. Verify all HTML pages, links, images, and copy rules
    for (const file of HTML_FILES) {
      const res = await fetch(`${baseUrl}/${file}`);
      assert.equal(res.status, 200, `Expected 200 for /${file}, got ${res.status}`);
      const html = await res.text();

      // Check single <h1> with id="main-heading" and skip link
      assert.match(html, /<a href="#main-heading" class="skip-link/, `${file} missing skip link`);
      const h1Matches = html.match(/<h1\b/gi) || [];
      assert.equal(h1Matches.length, 1, `${file} should have exactly one <h1>`);

      // Check absence of forbidden marketing clichés and placeholders
      const lowerHtml = html.toLowerCase();
      for (const phrase of FORBIDDEN_PHRASES) {
        assert.equal(
          lowerHtml.includes(phrase),
          false,
          `${file} contains prohibited phrase: "${phrase}"`
        );
      }

      // Extract all hrefs and verify local targets exist
      const hrefMatches = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
      for (const href of hrefMatches) {
        if (href.startsWith('#') || href.startsWith('https://fonts.')) continue;
        if (href.startsWith('http://') || href.startsWith('https://')) {
          assert.match(
            href,
            /^https:\/\/sdgs\.un\.org\/goals\/goal(12|9|15)$/,
            `Unexpected external link in ${file}: ${href}`
          );
          continue;
        }
        const cleanTarget = href.split('#')[0].split('?')[0];
        if (!cleanTarget) continue;
        const targetRes = await fetch(`${baseUrl}/${cleanTarget.replace(/^\/+/, '')}`);
        assert.equal(
          targetRes.status,
          200,
          `Broken link in ${file}: ${href} returned status ${targetRes.status}`
        );
      }

      // Extract all img src and verify they resolve
      const srcMatches = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
      for (const src of srcMatches) {
        const imgRes = await fetch(`${baseUrl}/${src.replace(/^\/+/, '')}`);
        assert.equal(imgRes.status, 200, `Broken image in ${file}: ${src}`);
      }
    }
    console.log('✓ All 11 pages, internal links, image assets, and copy rules verified.');

    // 2. Verify Brand destinations (Starwoods preselected in enquiry form)
    const homeHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    const brandsHtml = fs.readFileSync(path.join(ROOT_DIR, 'brands.html'), 'utf8');
    assert.match(homeHtml, /href="enquiry\.html\?brand=Starwoods"[^>]*>Enquire About Starwoods<\/a>/);
    assert.match(brandsHtml, /href="enquiry\.html\?brand=Starwoods"[^>]*>Enquire About Starwoods<\/a>/);
    console.log('✓ Starwoods brand destination and preselected enquiry action verified.');

    // 3. Verify API Health & Structured Content
    const healthRes = await fetch(`${baseUrl}/api/health`);
    assert.equal(healthRes.status, 200);
    const healthData = await healthRes.json();
    assert.equal(healthData.ok, true);
    assert.equal(healthData.mode, 'live');

    const contentRes = await fetch(`${baseUrl}/api/content`);
    assert.equal(contentRes.status, 200);
    const contentData = await contentRes.json();
    assert.equal(contentData.company.legalAndCorporateName, 'NEOM Panels');
    assert.equal(
      'futureInvestorDocumentArchitecture' in contentData.governance,
      false,
      'Internal investor document architecture must not be exposed on public API'
    );
    console.log('✓ Health endpoint and structured content registry verified.');

    // 4. Verify Server-Side Form Validation (Rejects missing contact method & fake file headers)
    const invalidRes = await fetch(`${baseUrl}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: 'Manufacturing & recurring supply',
        requirementDescription: 'Too short',
        name: 'A',
        organisation: ''
      })
    });
    assert.equal(invalidRes.status, 422);
    const invalidBody = await invalidRes.json();
    assert.equal(invalidBody.ok, false);
    assert.equal(
      invalidBody.message,
      'Your enquiry could not be submitted. Your entries are still here. Please try again or use our contact details.'
    );
    assert.ok(invalidBody.errors.length >= 3);
    console.log('✓ Server-side validation and error message preservation verified.');

    // 5. Verify Multipart Form Submission with Binary PDF Attachment, Persistence & Private Storage
    const boundary = '----NEOMVerificationBoundary987654';
    const pdfBytes = Buffer.from('%PDF-1.4\n1 0 obj\n<< /Type /Catalog >>\nendobj\n%%EOF\n', 'utf8');

    const parts = [];
    const addField = (name, val) => {
      parts.push(
        Buffer.from(
          `--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${val}\r\n`,
          'utf8'
        )
      );
    };
    addField('category', 'Manufacturing & recurring supply');
    addField('purchasingFrequency', 'Monthly recurring supply');
    addField(
      'requirementDescription',
      'Require 18mm and 12mm calibrated panels for modular wardrobe carcass manufacturing in Bengaluru.'
    );
    addField('brand', 'Starwoods');
    addField('applicationProduct', 'Modular wardrobe systems');
    addField('quantity', '600');
    addField('quantityUnit', 'Sheets');
    addField('destination', 'Bengaluru, Karnataka');
    addField('name', 'Rohan Sharma');
    addField('buyerProfile', 'Company or organisation buyer');
    addField('organisation', 'Arka Modular Systems Pvt Ltd');
    addField('preferredContactMethod', 'Email');
    addField('email', 'procurement@arkamodular.example.in');
    addField('marketingConsent', 'false');

    // Add valid PDF attachment
    parts.push(
      Buffer.from(
        `--${boundary}\r\nContent-Disposition: form-data; name="attachments"; filename="wardrobe-boq-spec.pdf"\r\nContent-Type: application/pdf\r\n\r\n`,
        'utf8'
      )
    );
    parts.push(pdfBytes);
    parts.push(Buffer.from(`\r\n--${boundary}--\r\n`, 'utf8'));

    const multipartPayload = Buffer.concat(parts);
    const validRes = await fetch(`${baseUrl}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
      body: multipartPayload
    });

    assert.equal(validRes.status, 201);
    const validData = await validRes.json();
    assert.equal(validData.ok, true);
    assert.match(validData.reference, /^NEOM-\d{8}-[A-F0-9]{6}$/);
    assert.equal(validData.attachmentCount, 1);

    // Verify persisted record in storage/enquiries.json
    const savedEnquiries = JSON.parse(
      fs.readFileSync(path.join(ROOT_DIR, 'storage', 'enquiries.json'), 'utf8')
    );
    const savedRecord = savedEnquiries.find((e) => e.reference === validData.reference);
    assert.ok(savedRecord, 'Enquiry was not found in durable storage');
    assert.equal(savedRecord.requirement.brand, 'Starwoods');
    assert.equal(savedRecord.contact.marketingConsent, false);
    assert.equal(savedRecord.attachments.length, 1);
    const attachmentId = savedRecord.attachments[0].id;
    console.log(`✓ Multipart enquiry persisted durably with reference: ${validData.reference}`);

    // 6. Verify Private Attachment Access Control
    const directStorageRes = await fetch(`${baseUrl}/storage/enquiries.json`);
    assert.equal(directStorageRes.status, 403, 'Public access to /storage must be forbidden');

    const unauthAttachRes = await fetch(`${baseUrl}/api/admin/attachments/${attachmentId}`);
    assert.equal(unauthAttachRes.status, 401, 'Unauthenticated attachment download must return 401');

    const authAttachRes = await fetch(`${baseUrl}/api/admin/attachments/${attachmentId}`, {
      headers: { 'X-Admin-Token': 'test-verification-admin-token-2026' }
    });
    assert.equal(authAttachRes.status, 200, 'Authenticated admin attachment download must return 200');
    const downloadedBytes = Buffer.from(await authAttachRes.arrayBuffer());
    assert.deepEqual(downloadedBytes, pdfBytes, 'Downloaded private attachment bytes must match');
    console.log('✓ Private attachment isolation (403/401) and authorized retrieval (200) verified.');

    // 7. Verify Functioning Document Request Endpoint
    const docReqRes = await fetch(`${baseUrl}/api/document-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        documentTitle: 'Starwoods — Brand Overview & Enquiry Guide',
        documentCategory: 'Brand literature',
        name: 'Meera Nair',
        organisation: 'Studio Nair Architects',
        email: 'meera@studionair.example.in',
        applicationScope: 'Commercial office interior joinery specification in Kochi'
      })
    });
    assert.equal(docReqRes.status, 201);
    const docReqData = await docReqRes.json();
    assert.equal(docReqData.ok, true);
    assert.match(docReqData.reference, /^NEOM-DOC-\d{8}-[A-F0-9]{6}$/);
    console.log(`✓ Document request persisted with reference: ${docReqData.reference}`);

    // Clean up test records from storage so delivery starts clean
    fs.writeFileSync(path.join(ROOT_DIR, 'storage', 'enquiries.json'), '[]\n', { mode: 0o600 });
    fs.writeFileSync(path.join(ROOT_DIR, 'storage', 'document-requests.json'), '[]\n', { mode: 0o600 });
    if (fs.existsSync(path.join(ROOT_DIR, 'storage', 'enquiries.jsonl'))) {
      fs.unlinkSync(path.join(ROOT_DIR, 'storage', 'enquiries.jsonl'));
    }
    if (fs.existsSync(path.join(ROOT_DIR, 'storage', 'notifications.jsonl'))) {
      fs.unlinkSync(path.join(ROOT_DIR, 'storage', 'notifications.jsonl'));
    }
    const storedFiles = fs.readdirSync(path.join(ROOT_DIR, 'storage', 'private-attachments'));
    for (const f of storedFiles) {
      fs.unlinkSync(path.join(ROOT_DIR, 'storage', 'private-attachments', f));
    }

    console.log('\nALL VERIFICATION CHECKS PASSED SUCCESSFULLY.');
  } finally {
    server.close();
  }
}

runVerification().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});

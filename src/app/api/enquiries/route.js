import { NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {
  ensureStorageInitialized,
  appendRecordDurably,
  generateReferenceId,
  isValidEmail,
  isValidPhone,
  verifyAttachmentFile,
  MAX_FILES,
  PRIVATE_ATTACHMENTS_DIR,
  ENQUIRIES_JSON_PATH,
  ENQUIRIES_JSONL_PATH,
  NOTIFICATIONS_LOG_PATH
} from '@/lib/storage';

const CATEGORY_ALIASES = {
  'industrial-packaging': 'Industrial Packaging / Packing Plywood',
  'Industrial Packaging / Packing Plywood': 'Industrial Packaging / Packing Plywood'
};

const BRAND_ALIASES = {
  'neom-packing-plywood': 'NEOM Packing Plywood',
  'NEOM Packing Plywood': 'NEOM Packing Plywood',
  starwoods: 'Starwoods',
  Starwoods: 'Starwoods',
  'general-neom-panels-enquiry': 'General NEOM Panels Enquiry',
  'General NEOM Panels Enquiry': 'General NEOM Panels Enquiry',
  'NEOM Panels (Corporate)': 'General NEOM Panels Enquiry',
  'help-me-choose': 'Help Me Choose',
  'Help Me Choose': 'Help Me Choose'
};

const ALLOWED_CATEGORIES = new Set([
  'Industrial Packaging / Packing Plywood',
  'Manufacturing & recurring supply',
  'Project requirement',
  'Institutional & public procurement',
  'Product information',
  'Distribution partnership',
  'Supplier introduction',
  'Other business enquiry'
]);

const LEAD_ROUTING_MAP = {
  'Industrial Packaging / Packing Plywood': {
    queueId: 'industrial-packaging-desk',
    deskName: 'NEOM Packing Plywood & Industrial Packaging Desk',
    priority: 'packaging-supply'
  },
  'Manufacturing & recurring supply': {
    queueId: 'oem-manufacturing-desk',
    deskName: 'OEM & Manufacturing Supply Desk',
    priority: 'standard-b2b'
  },
  'Project requirement': {
    queueId: 'project-specifications-desk',
    deskName: 'Commercial Projects & Fit-Out Desk',
    priority: 'project-schedule'
  },
  'Institutional & public procurement': {
    queueId: 'institutional-procurement-desk',
    deskName: 'Institutional & Public Procurement Desk',
    priority: 'documentation-review'
  },
  'Product information': {
    queueId: 'brand-technical-desk',
    deskName: 'Product & Brand Information Desk',
    priority: 'technical-query'
  },
  'Distribution partnership': {
    queueId: 'channel-partnerships-desk',
    deskName: 'Channel & Distribution Development',
    priority: 'commercial-partnership'
  },
  'Supplier introduction': {
    queueId: 'supplier-sourcing-desk',
    deskName: 'Materials & Vendor Sourcing Desk',
    priority: 'sourcing-review'
  },
  'Other business enquiry': {
    queueId: 'corporate-enquiries-desk',
    deskName: 'Corporate Business Enquiries',
    priority: 'general-b2b'
  }
};

export async function POST(request) {
  try {
    ensureStorageInitialized();
    const contentType = request.headers.get('content-type') || '';
    let fields = {};
    let uploadedFiles = [];

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'object' && value !== null && typeof value.arrayBuffer === 'function') {
          if (value.name && value.size > 0) {
            const arrBuf = await value.arrayBuffer();
            uploadedFiles.push({
              originalName: path.basename(value.name),
              mimeType: value.type || 'application/octet-stream',
              buffer: Buffer.from(arrBuf)
            });
          }
        } else {
          fields[key] = String(value || '').trim();
        }
      }
    } else if (contentType.includes('application/json')) {
      fields = await request.json();
    } else {
      return NextResponse.json(
        { ok: false, errors: ['Unsupported request content type.'] },
        { status: 415 }
      );
    }

    // Anti-spam honeypot check
    if (fields.company_website_hp && String(fields.company_website_hp).trim() !== '') {
      return NextResponse.json(
        { ok: false, errors: ['Submission rejected by spam filter.'] },
        { status: 400 }
      );
    }

    const errors = [];
    const rawCategory = String(fields.category || '').trim();
    const category = CATEGORY_ALIASES[rawCategory] || rawCategory;
    const requirementDescription = String(fields.requirementDescription || '').trim();
    const rawBrand = String(fields.brand || '').trim();
    const brand = BRAND_ALIASES[rawBrand] || rawBrand;
    const applicationProduct = String(fields.applicationProduct || '').trim();
    const quantity = String(fields.quantity || '').trim();
    const quantityUnit = String(fields.quantityUnit || '').trim();
    const destination = String(fields.destination || fields.deliveryLocation || '').trim();
    const requestedDate = String(fields.requestedDate || fields.requiredDeliveryDate || '').trim();

    // Packaging-specific conditional fields
    const packagingApplication = String(fields.packagingApplication || '').trim();
    const requiredThickness = String(fields.requiredThickness || '').trim();
    const sheetDimensions = String(fields.sheetDimensions || '').trim();
    const purchaseFrequency = String(
      fields.purchaseFrequency || fields.purchasingFrequency || ''
    ).trim();
    const deliveryLocation = String(fields.deliveryLocation || fields.destination || '').trim();
    const requiredDeliveryDate = String(
      fields.requiredDeliveryDate || fields.requestedDate || ''
    ).trim();
    const additionalSpecifications = String(fields.additionalSpecifications || '').trim();

    const purchasingFrequency = String(
      fields.purchasingFrequency || fields.purchaseFrequency || ''
    ).trim();
    const procurementReference = String(fields.procurementReference || '').trim();
    const territory = String(fields.territory || '').trim();

    const name = String(fields.name || '').trim();
    const buyerProfile = String(fields.buyerProfile || 'Company or organisation buyer').trim();
    const organisation = String(fields.organisation || '').trim();
    const preferredContactMethod = String(fields.preferredContactMethod || 'Email').trim();
    const email = String(fields.email || '').trim();
    const phone = String(fields.phone || '').trim();
    const marketingConsent =
      fields.marketingConsent === 'true' ||
      fields.marketingConsent === 'on' ||
      fields.marketingConsent === true;

    if (!ALLOWED_CATEGORIES.has(category)) {
      errors.push('Please select a valid enquiry category.');
    }

    if (!requirementDescription || requirementDescription.length < 10) {
      errors.push('Please provide a clear description of your requirement (at least 10 characters).');
    } else if (requirementDescription.length > 5000) {
      errors.push('Requirement description must be 5,000 characters or fewer.');
    }

    if (category === 'Distribution partnership' && !territory) {
      errors.push('Please specify the city, state, or territory for your distribution partnership proposal.');
    }

    if (category === 'Manufacturing & recurring supply' && !purchasingFrequency) {
      errors.push('Please select an indicative purchasing frequency for your manufacturing supply requirement.');
    }

    if (!name || name.length < 2) {
      errors.push('Please enter your full name.');
    }

    if (!organisation || organisation.length < 2) {
      errors.push('Please enter your company, organisation, or independent practice name.');
    }

    const hasValidEmail = isValidEmail(email);
    const hasValidPhone = isValidPhone(phone);

    if (email && !hasValidEmail) {
      errors.push('Please enter a valid email address.');
    }
    if (phone && !hasValidPhone) {
      errors.push('Please enter a valid telephone number (7 to 16 digits).');
    }

    if (!hasValidEmail && !hasValidPhone) {
      errors.push('Please provide at least one usable contact method (a valid email address or telephone number).');
    } else if (preferredContactMethod === 'Email' && !hasValidEmail) {
      errors.push('Please provide a valid email address to match your preferred contact method.');
    } else if (preferredContactMethod === 'Phone' && !hasValidPhone) {
      errors.push('Please provide a valid telephone number to match your preferred contact method.');
    }

    if (uploadedFiles.length > MAX_FILES) {
      errors.push(`A maximum of ${MAX_FILES} supporting files can be attached per enquiry.`);
    }

    const verifiedFiles = [];
    for (const f of uploadedFiles) {
      const check = verifyAttachmentFile(f.originalName, f.buffer);
      if (!check.valid) {
        errors.push(check.reason);
      } else {
        verifiedFiles.push({
          ...f,
          normalizedMime: check.normalizedMime,
          ext: check.ext
        });
      }
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message:
            'Your enquiry could not be submitted. Your entries are still here. Please try again or use our contact details.',
          errors
        },
        { status: 422 }
      );
    }

    const reference = generateReferenceId('NEOM');
    const savedAttachments = [];

    for (let i = 0; i < verifiedFiles.length; i++) {
      const vf = verifiedFiles[i];
      const attachmentId = `ATT-${reference}-${i + 1}-${crypto.randomBytes(3).toString('hex')}`;
      const safeBase = vf.originalName
        .replace(/[^a-zA-Z0-9._-]/g, '_')
        .replace(/_{2,}/g, '_')
        .slice(0, 80);
      const storedFilename = `${attachmentId}-${safeBase}`;
      const targetPath = path.join(PRIVATE_ATTACHMENTS_DIR, storedFilename);

      fs.writeFileSync(targetPath, vf.buffer, { mode: 0o600 });
      const sha256 = crypto.createHash('sha256').update(vf.buffer).digest('hex');

      savedAttachments.push({
        id: attachmentId,
        originalName: vf.originalName,
        storedFilename,
        mimeType: vf.normalizedMime,
        sizeBytes: vf.buffer.length,
        sha256
      });
    }

    const routingInfo = LEAD_ROUTING_MAP[category] || LEAD_ROUTING_MAP['Other business enquiry'];
    const createdAt = new Date().toISOString();

    const isPackagingEnquiry =
      category === 'Industrial Packaging / Packing Plywood' || brand === 'NEOM Packing Plywood';

    const enquiryRecord = {
      reference,
      createdAt,
      status: 'received',
      routing: {
        ...routingInfo,
        brandTag: brand || 'Unspecified'
      },
      requirement: {
        category,
        description: requirementDescription,
        brand: brand || null,
        applicationProduct: applicationProduct || packagingApplication || null,
        quantity: quantity || null,
        quantityUnit: quantity ? quantityUnit || 'Sheets' : null,
        destination: destination || null,
        requestedDate: requestedDate || null,
        conditionalDetails: {
          purchasingFrequency: purchasingFrequency || null,
          procurementReference: procurementReference || null,
          territory: territory || null,
          ...(isPackagingEnquiry
            ? {
                packagingApplication: packagingApplication || null,
                requiredThickness: requiredThickness || null,
                sheetDimensions: sheetDimensions || null,
                quantity: quantity || null,
                quantityUnit: quantityUnit || 'Sheets',
                purchaseFrequency: purchaseFrequency || null,
                deliveryLocation: deliveryLocation || null,
                requiredDeliveryDate: requiredDeliveryDate || null,
                additionalSpecifications: additionalSpecifications || null
              }
            : {})
        }
      },
      contact: {
        name,
        buyerProfile,
        organisation,
        preferredContactMethod,
        email: email || null,
        phone: phone || null,
        marketingConsent: Boolean(marketingConsent)
      },
      attachments: savedAttachments
    };

    appendRecordDurably(ENQUIRIES_JSON_PATH, ENQUIRIES_JSONL_PATH, enquiryRecord);

    const notificationEvent = {
      eventId: `NTF-${reference}`,
      reference,
      dispatchedAt: createdAt,
      routedQueue: routingInfo.queueId,
      routedDesk: routingInfo.deskName,
      category,
      brand: brand || null,
      organisation,
      attachmentCount: savedAttachments.length,
      transportStatus: process.env.ENQUIRY_WEBHOOK_URL ? 'webhook_queued' : 'logged_to_durable_queue'
    };
    fs.appendFileSync(NOTIFICATIONS_LOG_PATH, `${JSON.stringify(notificationEvent)}\n`, { mode: 0o600 });

    return NextResponse.json(
      {
        ok: true,
        reference,
        routedDesk: routingInfo.deskName,
        createdAt,
        attachmentCount: savedAttachments.length
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        message:
          'Your enquiry could not be submitted. Your entries are still here. Please try again or use our contact details.',
        errors: ['Unable to save your enquiry at this time.']
      },
      { status: 500 }
    );
  }
}

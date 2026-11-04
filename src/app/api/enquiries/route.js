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
import {
  ENQUIRY_CATEGORIES,
  normalizeBrandParam,
  normalizeCategoryParam
} from '@/lib/enquiry-config';

const ALLOWED_CATEGORIES = new Set(ENQUIRY_CATEGORIES);

export async function POST(request) {
  try {
    ensureStorageInitialized();
    const contentType = request.headers.get('content-type') || '';
    const isTestHeader = request.headers.get('x-neom-test-mode') === 'true';
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
    const rawCategory = String(fields.category || fields.requirementCategory || '').trim();
    const category = normalizeCategoryParam(rawCategory) || rawCategory;
    const rawBrand = String(fields.brand || '').trim();
    const brand = normalizeBrandParam(rawBrand);

    const packagingApplication = String(
      fields.packagingApplication || fields.applicationUseCase || ''
    ).trim();
    const requiredThickness = String(
      fields.requiredThickness || fields.thicknesses || ''
    ).trim();
    const sheetDimensions = String(fields.sheetDimensions || '').trim();
    const purchaseFrequency = String(
      fields.purchaseFrequency || fields.purchasingFrequency || fields.purchaseSchedule || ''
    ).trim();
    const additionalRequirements = String(
      fields.additionalRequirements || fields.additionalSpecifications || ''
    ).trim();

    const applicationProduct = String(
      fields.applicationProduct || packagingApplication || ''
    ).trim();
    const quantity = String(fields.quantity || '').trim();
    const quantityUnit = String(fields.quantityUnit || '').trim();
    const destination = String(fields.destination || fields.deliveryLocation || '').trim();
    const requestedDate = String(fields.requestedDate || fields.requiredDeliveryDate || '').trim();

    const purchasingFrequency = String(
      fields.purchasingFrequency || fields.purchaseFrequency || fields.purchaseSchedule || ''
    ).trim();
    const procurementReference = String(fields.procurementReference || '').trim();
    const territory = String(fields.territory || '').trim();

    const isPackagingEnquiry =
      category === 'Industrial Packaging / Packing Plywood' || brand === 'NEOM Packing Plywood';

    let requirementDescription = String(
      fields.requirementDescription || fields.description || additionalRequirements || ''
    ).trim();

    // For packaging enquiries where structured fields were supplied without a long free-text paragraph,
    // compose a clear summary from the structured packaging fields.
    if (isPackagingEnquiry && requirementDescription.length < 10) {
      const summaryParts = [];
      if (packagingApplication) summaryParts.push(`Application: ${packagingApplication}`);
      if (requiredThickness) summaryParts.push(`Thickness: ${requiredThickness}`);
      if (sheetDimensions) summaryParts.push(`Dimensions: ${sheetDimensions}`);
      if (quantity) summaryParts.push(`Quantity: ${quantity} ${quantityUnit || 'Sheets'}`);
      else if (quantityUnit) summaryParts.push(`Quantity: ${quantityUnit}`);
      if (purchaseFrequency) summaryParts.push(`Schedule: ${purchaseFrequency}`);
      if (destination) summaryParts.push(`Delivery: ${destination}`);
      if (requirementDescription) summaryParts.push(`Notes: ${requirementDescription}`);
      if (summaryParts.length > 0) {
        requirementDescription = summaryParts.join(' · ');
      }
    }

    const name = String(fields.name || fields.fullName || '').trim();
    const buyerProfile = String(fields.buyerProfile || 'Company or organisation buyer').trim();
    const organisation = String(
      fields.organisation || fields.companyName || ''
    ).trim();
    const preferredContactMethod = String(fields.preferredContactMethod || 'Email').trim();
    const email = String(fields.email || '').trim();
    const phone = String(fields.phone || '').trim();
    const marketingConsent =
      fields.marketingConsent === 'true' ||
      fields.marketingConsent === 'on' ||
      fields.marketingConsent === true;
    const isTestMode =
      isTestHeader || fields.testMode === 'true' || fields.testMode === true;

    if (!ALLOWED_CATEGORIES.has(category)) {
      errors.push('Please select a valid enquiry category.');
    }

    if (!requirementDescription || requirementDescription.length < 10) {
      errors.push(
        isPackagingEnquiry
          ? 'Please select a packaging application or enter your requirement details (at least 10 characters).'
          : 'Please provide a clear description of your requirement (at least 10 characters).'
      );
    } else if (requirementDescription.length > 5000) {
      errors.push('Requirement description must be 5,000 characters or fewer.');
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
      errors.push(
        'Please provide at least one usable contact method (a valid email address or telephone number).'
      );
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

    const reference = generateReferenceId(isTestMode ? 'NEOM-TEST' : 'NEOM');
    const createdAt = new Date().toISOString();

    if (isTestMode) {
      return NextResponse.json(
        {
          ok: true,
          testMode: true,
          reference,
          category,
          brand: brand || null,
          createdAt,
          attachmentCount: verifiedFiles.length
        },
        { status: 201 }
      );
    }

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

    const enquiryRecord = {
      reference,
      createdAt,
      status: 'received',
      requirement: {
        category,
        description: requirementDescription,
        brand: brand || null,
        applicationProduct: applicationProduct || null,
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
                deliveryLocation: destination || null,
                requiredDeliveryDate: requestedDate || null,
                additionalRequirements: additionalRequirements || requirementDescription || null
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
      recordedAt: createdAt,
      category,
      brand: brand || null,
      organisation,
      attachmentCount: savedAttachments.length
    };
    fs.appendFileSync(NOTIFICATIONS_LOG_PATH, `${JSON.stringify(notificationEvent)}\n`, { mode: 0o600 });

    return NextResponse.json(
      {
        ok: true,
        reference,
        category,
        brand: brand || null,
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

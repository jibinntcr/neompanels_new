export const ENQUIRY_BRANDS = [
  'Starwoods',
  'NEOM Packing Plywood',
  'General NEOM Panels Enquiry',
  'Help Me Choose'
];

export const ENQUIRY_CATEGORIES = [
  'Industrial Packaging / Packing Plywood',
  'Manufacturing & recurring supply',
  'Project requirement',
  'Institutional & public procurement',
  'Product information',
  'Distribution partnership',
  'Supplier introduction',
  'Other business enquiry'
];

export const PACKAGING_APPLICATIONS = [
  'Packing cases',
  'Crates and protective enclosures',
  'Dividers, liners and packaging panels',
  'Other industrial packaging application'
];

export const PURCHASE_SCHEDULES = [
  'One-time purchase',
  'Recurring monthly / scheduled supply',
  'Recurring quarterly supply',
  'Initial batch with planned repeat supply'
];

const BRAND_LOOKUP = {
  starwoods: 'Starwoods',
  starwood: 'Starwoods',
  'neom-packing-plywood': 'NEOM Packing Plywood',
  'neom packing plywood': 'NEOM Packing Plywood',
  'packing-plywood': 'NEOM Packing Plywood',
  'packing plywood': 'NEOM Packing Plywood',
  general: 'General NEOM Panels Enquiry',
  'general-neom-panels-enquiry': 'General NEOM Panels Enquiry',
  'general neom panels enquiry': 'General NEOM Panels Enquiry',
  'neom panels': 'General NEOM Panels Enquiry',
  'neom-panels': 'General NEOM Panels Enquiry',
  'neom panels (corporate)': 'General NEOM Panels Enquiry',
  'help-me-choose': 'Help Me Choose',
  'help me choose': 'Help Me Choose'
};

const CATEGORY_LOOKUP = {
  'industrial-packaging': 'Industrial Packaging / Packing Plywood',
  'industrial packaging': 'Industrial Packaging / Packing Plywood',
  'packing-plywood': 'Industrial Packaging / Packing Plywood',
  'packing plywood': 'Industrial Packaging / Packing Plywood',
  'industrial packaging / packing plywood': 'Industrial Packaging / Packing Plywood',

  manufacturing: 'Manufacturing & recurring supply',
  'manufacturing-supply': 'Manufacturing & recurring supply',
  'recurring-supply': 'Manufacturing & recurring supply',
  'recurring supply': 'Manufacturing & recurring supply',
  oem: 'Manufacturing & recurring supply',
  'oem-supply': 'Manufacturing & recurring supply',
  'manufacturing & recurring supply': 'Manufacturing & recurring supply',
  'manufacturing and recurring supply': 'Manufacturing & recurring supply',

  project: 'Project requirement',
  projects: 'Project requirement',
  'project-requirement': 'Project requirement',
  'project requirement': 'Project requirement',
  'project requirements': 'Project requirement',
  'commercial-interiors': 'Project requirement',

  institutional: 'Institutional & public procurement',
  procurement: 'Institutional & public procurement',
  'public-procurement': 'Institutional & public procurement',
  'institutional-procurement': 'Institutional & public procurement',
  'institutional procurement': 'Institutional & public procurement',
  'institutional & public procurement': 'Institutional & public procurement',
  'institutional and public procurement': 'Institutional & public procurement',

  'product-info': 'Product information',
  'product-information': 'Product information',
  'product information': 'Product information',
  'technical-documents': 'Product information',
  'technical documents': 'Product information',
  specification: 'Product information',
  literature: 'Product information',

  distribution: 'Distribution partnership',
  'distribution-partnership': 'Distribution partnership',
  'distribution partnership': 'Distribution partnership',
  'distribution partnerships': 'Distribution partnership',
  'channel-partnership': 'Distribution partnership',
  partnership: 'Distribution partnership',

  supplier: 'Supplier introduction',
  'supplier-introduction': 'Supplier introduction',
  'supplier introduction': 'Supplier introduction',
  vendor: 'Supplier introduction',

  other: 'Other business enquiry',
  'other-business-enquiry': 'Other business enquiry',
  'other business enquiry': 'Other business enquiry',
  general: 'Other business enquiry'
};

/**
 * Normalizes a brand query parameter or form input to an approved brand option.
 * Returns '' for unknown values so raw URL strings are never displayed in the UI.
 */
export function normalizeBrandParam(raw) {
  if (!raw || typeof raw !== 'string') return '';
  const cleaned = raw.trim().toLowerCase().replace(/\s+/g, ' ');
  return BRAND_LOOKUP[cleaned] || '';
}

/**
 * Normalizes a category query parameter or form input to an approved category option.
 * Returns '' for unknown values so raw URL strings are never displayed in the UI.
 */
export function normalizeCategoryParam(raw) {
  if (!raw || typeof raw !== 'string') return '';
  const cleaned = raw.trim().toLowerCase().replace(/\s+/g, ' ');
  return CATEGORY_LOOKUP[cleaned] || '';
}

/**
 * Sanitizes free-text query parameters (such as ?application= or ?document=)
 * so unknown or malformed URL values do not inject raw/unsafe text.
 */
export function sanitizeQueryText(raw, maxLength = 120) {
  if (!raw || typeof raw !== 'string') return '';
  const cleaned = raw
    .replace(/[\u0000-\u001F\u007F<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!cleaned || cleaned.length > maxLength) return '';
  return cleaned;
}

export function normalizePurchaseScheduleParam(raw) {
  if (!raw || typeof raw !== 'string') return '';
  const lower = raw.trim().toLowerCase();
  if (lower.includes('one-time') || lower === 'once' || lower === 'single') {
    return 'One-time purchase';
  }
  if (lower.includes('monthly') || lower.includes('recurring') || lower.includes('scheduled')) {
    return 'Recurring monthly / scheduled supply';
  }
  if (lower.includes('quarterly')) {
    return 'Recurring quarterly supply';
  }
  if (lower.includes('initial')) {
    return 'Initial batch with planned repeat supply';
  }
  return '';
}

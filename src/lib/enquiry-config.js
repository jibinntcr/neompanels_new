export const ENQUIRY_BRANDS = [
  'General NEOM Panels Enquiry',
  'Starwoods',
  'NEOM Packing Plywood',
  'Help Me Choose'
];

export const ENQUIRY_CATEGORIES = [
  'Product Enquiry',
  'Product information',
  'Project Supply',
  'Industrial Packaging / Packing Plywood',
  'Sample Request',
  'Manufacturing & recurring supply',
  'Project requirement',
  'Institutional & public procurement',
  'Distribution partnership',
  'Partnership',
  'Supplier introduction',
  'Other business enquiry'
];

export const PRIMARY_ENQUIRY_TYPES = [
  'Product Enquiry',
  'Product information',
  'Project Supply',
  'Industrial Packaging / Packing Plywood',
  'Sample Request',
  'Distribution partnership',
  'Institutional & public procurement',
  'Other business enquiry'
];

export const STAKEHOLDER_ROLES = [
  'Dealers & Distributors',
  'Builders & Interior Contractors',
  'Furniture Manufacturers',
  'Industrial Packaging Businesses',
  'Government & Institutional Buyers',
  'Other'
];

export const PRODUCT_FAMILIES = [
  'Structural & Specialty Plywood',
  'Engineered Boards',
  'Packaging-Grade Plywood (MR)',
  'All / Multiple Categories',
  'Other / General'
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
  'neom-architectural': 'General NEOM Panels Enquiry',
  'neom architectural': 'General NEOM Panels Enquiry',
  architectural: 'General NEOM Panels Enquiry',
  'help-me-choose': 'Help Me Choose',
  'help me choose': 'Help Me Choose'
};

const CATEGORY_LOOKUP = {
  'product-enquiry': 'Product Enquiry',
  'product enquiry': 'Product Enquiry',
  product: 'Product Enquiry',
  'project-supply': 'Project Supply',
  'project supply': 'Project Supply',
  partnership: 'Distribution partnership',
  partnerships: 'Distribution partnership',
  'channel-partnership': 'Distribution partnership',
  'sample-request': 'Sample Request',
  'sample request': 'Sample Request',
  sample: 'Sample Request',
  samples: 'Sample Request',

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

  project: 'Project Supply',
  projects: 'Project Supply',
  'project-requirement': 'Project requirement',
  'project requirement': 'Project requirement',
  'project requirements': 'Project requirement',
  'commercial-interiors': 'Project Supply',

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

  supplier: 'Supplier introduction',
  'supplier-introduction': 'Supplier introduction',
  'supplier introduction': 'Supplier introduction',
  vendor: 'Supplier introduction',

  other: 'Other business enquiry',
  'other-business-enquiry': 'Other business enquiry',
  'other business enquiry': 'Other business enquiry',
  general: 'Other business enquiry'
};

const FAMILY_LOOKUP = {
  'structural & specialty plywood': 'Structural & Specialty Plywood',
  'structural and specialty plywood': 'Structural & Specialty Plywood',
  plywood: 'Structural & Specialty Plywood',
  'engineered boards': 'Engineered Boards',
  'solid engineered boards': 'Engineered Boards',
  'engineered-boards': 'Engineered Boards',
  mdf: 'Engineered Boards',
  hdhmr: 'Engineered Boards',
  'packaging-grade plywood (mr)': 'Packaging-Grade Plywood (MR)',
  'packaging plywood': 'Packaging-Grade Plywood (MR)',
  'all / multiple categories': 'All / Multiple Categories',
  'all / multiple families': 'All / Multiple Categories',
  'decorative surfaces': 'Other / General',
  'decorative-surfaces': 'Other / General',
  surfaces: 'Other / General',
  'other / general': 'Other / General'
};

const ROLE_LOOKUP = {
  'dealers & distributors': 'Dealers & Distributors',
  'dealers and distributors': 'Dealers & Distributors',
  dealers: 'Dealers & Distributors',
  dealer: 'Dealers & Distributors',
  distributors: 'Dealers & Distributors',
  distributor: 'Dealers & Distributors',

  'builders & interior contractors': 'Builders & Interior Contractors',
  'builders and interior contractors': 'Builders & Interior Contractors',
  builders: 'Builders & Interior Contractors',
  builder: 'Builders & Interior Contractors',
  contractors: 'Builders & Interior Contractors',
  contractor: 'Builders & Interior Contractors',
  'interior contractors': 'Builders & Interior Contractors',
  architects: 'Builders & Interior Contractors',
  architect: 'Builders & Interior Contractors',
  'interior designers': 'Builders & Interior Contractors',
  'interior designer': 'Builders & Interior Contractors',

  'furniture manufacturers': 'Furniture Manufacturers',
  'furniture manufacturer': 'Furniture Manufacturers',
  manufacturers: 'Furniture Manufacturers',
  oem: 'Furniture Manufacturers',

  'industrial packaging businesses': 'Industrial Packaging Businesses',
  'industrial packaging business': 'Industrial Packaging Businesses',
  'industrial packaging': 'Industrial Packaging Businesses',
  'packaging businesses': 'Industrial Packaging Businesses',
  packaging: 'Industrial Packaging Businesses',

  'government & institutional buyers': 'Government & Institutional Buyers',
  'government and institutional buyers': 'Government & Institutional Buyers',
  'institutional buyers': 'Government & Institutional Buyers',
  'institutional buyer': 'Government & Institutional Buyers',
  institutional: 'Government & Institutional Buyers',
  government: 'Government & Institutional Buyers',

  other: 'Other'
};

export function normalizeBrandParam(raw) {
  if (!raw || typeof raw !== 'string') return '';
  const cleaned = raw.trim().toLowerCase().replace(/\s+/g, ' ');
  return BRAND_LOOKUP[cleaned] || '';
}

export function normalizeCategoryParam(raw) {
  if (!raw || typeof raw !== 'string') return '';
  const cleaned = raw.trim().toLowerCase().replace(/\s+/g, ' ');
  return CATEGORY_LOOKUP[cleaned] || '';
}

export function normalizeFamilyParam(raw) {
  if (!raw || typeof raw !== 'string') return '';
  const cleaned = raw.trim().toLowerCase().replace(/\s+/g, ' ');
  return FAMILY_LOOKUP[cleaned] || '';
}

export function normalizeRoleParam(raw) {
  if (!raw || typeof raw !== 'string') return '';
  const cleaned = raw.trim().toLowerCase().replace(/\s+/g, ' ');
  return ROLE_LOOKUP[cleaned] || '';
}

export function sanitizeQueryText(raw, maxLength = 120) {
  if (!raw || typeof raw !== 'string') return '';
  const cleaned = raw
    .replace(/[\u0000-\u001F\u007F<>`]/g, '')
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

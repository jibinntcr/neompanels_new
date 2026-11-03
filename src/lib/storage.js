import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const STORAGE_DIR = path.join(process.cwd(), 'storage');
export const PRIVATE_ATTACHMENTS_DIR = path.join(STORAGE_DIR, 'private-attachments');
export const ENQUIRIES_JSON_PATH = path.join(STORAGE_DIR, 'enquiries.json');
export const ENQUIRIES_JSONL_PATH = path.join(STORAGE_DIR, 'enquiries.jsonl');
export const DOC_REQUESTS_JSON_PATH = path.join(STORAGE_DIR, 'document-requests.json');
export const NOTIFICATIONS_LOG_PATH = path.join(STORAGE_DIR, 'notifications.jsonl');
export const CONTENT_JSON_PATH = path.join(process.cwd(), 'data', 'content.json');

export function getSiteContent() {
  let rawContent = {};
  try {
    rawContent = JSON.parse(fs.readFileSync(CONTENT_JSON_PATH, 'utf8'));
  } catch (_) {
    rawContent = {};
  }

  return {
    ...rawContent,
    manufacturingParameters: [
      {
        code: 'SPEC-01',
        parameter: 'Intended Application & Interior Zone',
        buyerInput:
          'Specify whether the panel is for dry residential furniture, modular kitchens/wardrobes, commercial worktops, or institutional joinery.',
        manufacturingRelevance:
          'Aligns substrate grade selection and adhesive system with environmental humidity and mechanical load.'
      },
      {
        code: 'SPEC-02',
        parameter: 'Panel Thickness & Sheet Dimensions',
        buyerInput:
          'Confirm nominal thickness (in mm), standard sheet dimensions, and acceptable dimensional tolerances.',
        manufacturingRelevance:
          'Ensures pressing, calibration, and trimming schedules match CNC nesting and hardware boring setups.'
      },
      {
        code: 'SPEC-03',
        parameter: 'Surface & Finishing Method',
        buyerInput:
          'Share whether panels will receive HPL lamination, veneer pressing, membrane routing, direct painting, or pre-finished surfaces.',
        manufacturingRelevance:
          'Determines surface smoothness, sanding grit sequence, and core density profile requirements.'
      },
      {
        code: 'SPEC-04',
        parameter: 'Machining & Edge Treatment',
        buyerInput:
          'Indicate edge-banding thickness (PVC/ABS), grooving, mitre-folding, or heavy screw-holding zones.',
        manufacturingRelevance:
          'Supports clean edge machining, consistent core integrity, and reliable fastener retention.'
      },
      {
        code: 'SPEC-05',
        parameter: 'Batch Volume & Delivery Schedule',
        buyerInput:
          'Provide order quantities by thickness, single-drop vs. phased call-off schedule, and destination unloading constraints.',
        manufacturingRelevance:
          'Allows production batching, pallet protection, and dispatch planning aligned to your factory floor.'
      }
    ],
    sustainabilityPriorities: [
      {
        id: 'material-sourcing',
        number: '01',
        title: 'Material sourcing',
        focusArea: 'ORIGINS & SUPPLIER TRACEABILITY',
        body: 'Our priority is to strengthen our understanding of material origins and the information available from suppliers.'
      },
      {
        id: 'material-use-waste',
        number: '02',
        title: 'Material use & waste',
        focusArea: 'YIELD, OFFCUTS & PACKAGING',
        body: 'We intend to identify avoidable material losses and assess practical opportunities to improve yield, handle residual materials responsibly and reduce unnecessary packaging.'
      },
      {
        id: 'energy-water',
        number: '03',
        title: 'Energy & water',
        focusArea: 'MEASUREMENT & PROCESS EFFICIENCY',
        body: 'Measurement is the starting point. Our approach is to establish a clearer view of consumption and evaluate improvements suited to our operations.'
      },
      {
        id: 'people-safety',
        number: '04',
        title: 'People & workplace safety',
        focusArea: 'FACTORY FLOOR SAFETY & SKILLS',
        body: 'Workplace safety, relevant skills and clear responsibilities are priorities for the company we are building.'
      },
      {
        id: 'product-information',
        number: '05',
        title: 'Product information',
        focusArea: 'DOCUMENTED MATERIAL SCOPE',
        body: 'We aim to connect product and environmental information to the relevant material, document and scope.'
      }
    ],
    sdgAlignment: [
      {
        goal: 'SDG 12',
        role: 'Primary Focus',
        isPrimary: true,
        title: 'Responsible Consumption and Production',
        description:
          'Focused on material efficiency, responsible sourcing visibility, yield discipline, and accurate product documentation across panel manufacturing.',
        url: 'https://sdgs.un.org/goals/goal12'
      },
      {
        goal: 'SDG 9',
        role: 'Supporting Focus',
        isPrimary: false,
        title: 'Industry, Innovation and Infrastructure',
        description:
          'Focused on developing reliable domestic manufacturing capability, process discipline, and durable materials for built spaces.',
        url: 'https://sdgs.un.org/goals/goal9'
      },
      {
        goal: 'SDG 15',
        role: 'Supporting Focus',
        isPrimary: false,
        title: 'Life on Land',
        description:
          'Focused on strengthening awareness of raw-material origins and responsible timber/fibre stewardship in the wood-panel value chain.',
        url: 'https://sdgs.un.org/goals/goal15'
      }
    ],
    governance: {
      companyInfo: [
        {
          label: 'Legal & Corporate Name',
          value: 'NEOM Panels'
        },
        {
          label: 'Corporate Tagline',
          value: 'ENGINEERED EXCELLENCE, DESIGNED FOR SPACES'
        },
        {
          label: 'Principal Business Activity',
          value:
            'Indian wood-panel manufacturing business with its own factory; corporate parent of product brands.'
        },
        {
          label: 'Official Brand Relationships',
          value: 'Starwoods (NEOM Panels product brand)'
        },
        {
          label: 'Commercial & Grievance Communication',
          value:
            'Routed through the official NEOM Panels Business Enquiry desk with tracked reference numbers.'
        }
      ],
      policies: [
        {
          code: 'GOV-01',
          title: 'Code of Business Conduct',
          status: 'Approved Principle',
          summary:
            'Standards for ethical commercial dealing, transparent contracting, and anti-bribery compliance across customer and supplier relationships.'
        },
        {
          code: 'GOV-02',
          title: 'Quality and Product Information Principles',
          status: 'Approved Principle',
          summary:
            'Requires product dimensions, tolerances, and performance references to be tied to the specific brand, grade, and current technical document.'
        },
        {
          code: 'GOV-03',
          title: 'Workplace Health and Safety Policy',
          status: 'Approved Principle',
          summary:
            'Establishes machine guarding, dust and material handling protocols, protective equipment standards, and clear floor responsibilities.'
        },
        {
          code: 'GOV-04',
          title: 'Supplier and Sourcing Expectations',
          status: 'Approved Principle',
          summary:
            'Sets expectations for raw-material documentation, lawful timber/fibre origin declarations, and batch consistency from supply partners.'
        },
        {
          code: 'GOV-05',
          title: 'Environmental and Resource-Use Policy',
          status: 'Approved Principle',
          summary:
            'Guides practical measurement of energy and water use, offcut and waste handling, and packaging reduction in factory operations.'
        },
        {
          code: 'GOV-06',
          title: 'Privacy Notice',
          status: 'Published Online',
          summary:
            'Explains how B2B contact details, specification briefs, and uploaded BOQ attachments are collected, stored, and safeguarded.',
          href: '/privacy'
        },
        {
          code: 'GOV-07',
          title: 'Website Terms',
          status: 'Published Online',
          summary:
            'Governs use of the NEOM Panels website, brand references, and non-binding commercial information.',
          href: '/terms'
        }
      ]
    },
    resourceCategories: [
      {
        code: 'DOC-CORP',
        title: 'Company information',
        availability: 'Available on Request',
        description:
          'Corporate overview, business enquiry information and published policies for vendor registration and institutional onboarding.'
      },
      {
        code: 'DOC-BRAND',
        title: 'Brand literature',
        availability: 'Available on Request',
        description:
          'Starwoods catalogues and brand documents when available, matched to your commercial or regional requirement.'
      },
      {
        code: 'DOC-TECH',
        title: 'Product documents',
        availability: 'Issued per Grade',
        description:
          'Technical data sheets, storage and handling notes, and test documents where applicable to the product being discussed.'
      },
      {
        code: 'DOC-SUST',
        title: 'Sustainability updates',
        availability: 'Published & Request',
        description:
          'Policies and operational disclosures as they are published, covering sourcing, resource efficiency, and SDG alignment.'
      }
    ],
    buyerGuidance: [
      {
        id: 'before-you-request-quotation',
        title: 'Before You Request a Panel Quotation',
        readTime: 'BUYER BRIEFING 01',
        summary:
          'Defining application conditions, thickness tolerances, sheet dimensions, batch quantities, and delivery schedules before requesting a quote.',
        points: [
          'Identify the exact interior zone or furniture component (dry-zone carcass, shutter, worktop, or wall panelling).',
          'State nominal thickness (mm), sheet size, and whether special calibration or sanding tolerances are needed for your machinery.',
          'Clarify whether the requirement is a one-time project BOQ or a recurring monthly OEM production schedule.',
          'Include delivery city/state and site or factory unloading requirements so logistics can be planned accurately.'
        ]
      },
      {
        id: 'reading-a-product-data-sheet',
        title: 'Reading a Product Data Sheet',
        readTime: 'BUYER BRIEFING 02',
        summary:
          'Why dimensions, construction parameters, and performance figures must be checked against the specific brand, grade, and test method scope.',
        points: [
          'Confirm that the data sheet corresponds to the exact brand (e.g., Starwoods) and product grade under review.',
          'Review dimensional tolerances (thickness, length, width, squareness, and edge straightness) alongside mechanical properties.',
          'Check the referenced test standard and conditioning environment rather than relying on generic industry shorthand.',
          'Verify that storage and acclimatisation notes are followed on site prior to fabrication.'
        ]
      },
      {
        id: 'planning-repeat-panel-requirements',
        title: 'Planning Repeat Panel Requirements',
        readTime: 'BUYER BRIEFING 03',
        summary:
          'Practical considerations for OEMs and modular furniture manufacturers coordinating recurring batch supply and specification continuity.',
        points: [
          'Share rolling monthly or quarterly consumption estimates by thickness to align factory pressing schedules.',
          'Establish agreed incoming quality inspection checkpoints tied to the purchase specification.',
          'Align pallet stacking heights, corner protection, and moisture-wrap requirements with your warehouse handling.',
          'Maintain a single specification reference sheet across repeat orders to avoid grade drift.'
        ]
      },
      {
        id: 'understanding-scope-of-test-report',
        title: 'Understanding the Scope of a Test Report',
        readTime: 'BUYER BRIEFING 04',
        summary:
          'How institutional buyers, project consultants, and quality teams can verify that a test report corresponds to the actual material grade and period.',
        points: [
          'Check that the report identifies the specific product name, grade, and nominal thickness tested.',
          'Note the sample test date and whether the report covers a type test or batch-specific inspection.',
          'Distinguish tested physical/mechanical parameters from broader commercial descriptions.',
          'Request grade-specific clarification through the NEOM Panels technical desk when preparing institutional submittals.'
        ]
      }
    ]
  };
}

export function ensureStorageInitialized() {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true, mode: 0o700 });
  }
  if (!fs.existsSync(PRIVATE_ATTACHMENTS_DIR)) {
    fs.mkdirSync(PRIVATE_ATTACHMENTS_DIR, { recursive: true, mode: 0o700 });
  }
  if (!fs.existsSync(ENQUIRIES_JSON_PATH)) {
    fs.writeFileSync(ENQUIRIES_JSON_PATH, JSON.stringify([], null, 2), { mode: 0o600 });
  }
  if (!fs.existsSync(DOC_REQUESTS_JSON_PATH)) {
    fs.writeFileSync(DOC_REQUESTS_JSON_PATH, JSON.stringify([], null, 2), { mode: 0o600 });
  }
}

export function appendRecordDurably(jsonFilePath, jsonlFilePath, record) {
  ensureStorageInitialized();
  let existing = [];
  try {
    const raw = fs.readFileSync(jsonFilePath, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) existing = parsed;
  } catch (_) {
    existing = [];
  }
  existing.push(record);
  const tempPath = `${jsonFilePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(existing, null, 2), { mode: 0o600 });
  fs.renameSync(tempPath, jsonFilePath);

  if (jsonlFilePath) {
    fs.appendFileSync(jsonlFilePath, `${JSON.stringify(record)}\n`, { mode: 0o600 });
  }
}

export function generateReferenceId(prefix = 'NEOM') {
  const now = new Date();
  const yyyy = now.getUTCFullYear();
  const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(now.getUTCDate()).padStart(2, '0');
  const randomSuffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `${prefix}-${yyyy}${mm}${dd}-${randomSuffix}`;
}

export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

export function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 16;
}

export const MAX_FILES = 3;
export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export function verifyAttachmentFile(filename, buffer) {
  if (!buffer || buffer.length === 0) {
    return { valid: false, reason: `Attachment "${filename}" is empty.` };
  }
  if (buffer.length > MAX_FILE_SIZE_BYTES) {
    return { valid: false, reason: `Attachment "${filename}" exceeds the 10MB per-file limit.` };
  }

  const ext = path.extname(filename || '').toLowerCase();
  const isPdfHeader =
    buffer.length >= 5 &&
    buffer[0] === 0x25 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x44 &&
    buffer[3] === 0x46 &&
    buffer[4] === 0x2d;

  const isJpegHeader =
    buffer.length >= 3 &&
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer[2] === 0xff;

  const isPngHeader =
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a;

  if (ext === '.pdf' && isPdfHeader) {
    return { valid: true, normalizedMime: 'application/pdf', ext: '.pdf' };
  }
  if ((ext === '.jpg' || ext === '.jpeg') && isJpegHeader) {
    return { valid: true, normalizedMime: 'image/jpeg', ext: '.jpg' };
  }
  if (ext === '.png' && isPngHeader) {
    return { valid: true, normalizedMime: 'image/png', ext: '.png' };
  }

  return {
    valid: false,
    reason: `Attachment "${filename}" must be a valid PDF, JPG, or PNG file.`
  };
}

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const STORAGE_DIR = process.env.VERCEL
  ? path.join('/tmp', 'neom-storage')
  : path.join(process.cwd(), 'storage');
export const PRIVATE_ATTACHMENTS_DIR = path.join(STORAGE_DIR, 'private-attachments');
export const ENQUIRIES_JSON_PATH = path.join(STORAGE_DIR, 'enquiries.json');
export const ENQUIRIES_JSONL_PATH = path.join(STORAGE_DIR, 'enquiries.jsonl');
export const DOC_REQUESTS_JSON_PATH = path.join(STORAGE_DIR, 'document-requests.json');
export const NOTIFICATIONS_LOG_PATH = path.join(STORAGE_DIR, 'notifications.jsonl');
export const CONTENT_JSON_PATH = path.join(process.cwd(), 'data', 'content.json');

export function getVerifiedContactDetails() {
  let rawContent = {};
  try {
    rawContent = JSON.parse(fs.readFileSync(CONTENT_JSON_PATH, 'utf8'));
  } catch (_) {
    rawContent = {};
  }
  const c = rawContent?.company?.verifiedContactDetails || {};
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || c.verifiedPhone || null;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || c.verifiedEmail || null;
  const whatsapp = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || c.verifiedWhatsapp || null;
  const address =
    process.env.NEXT_PUBLIC_CONTACT_ADDRESS || c.verifiedRegisteredAddress || null;
  const factoryLocation =
    c.verifiedFactoryLocation || 'India (Company-owned wood-panel manufacturing facility)';

  return {
    phone,
    email,
    whatsapp,
    address,
    factoryLocation,
    enquiryRouteUrl: '/enquiry'
  };
}

export function getSiteContent() {
  let rawContent = {};
  try {
    rawContent = JSON.parse(fs.readFileSync(CONTENT_JSON_PATH, 'utf8'));
  } catch (_) {
    rawContent = {};
  }

  return {
    ...rawContent,
    verifiedContacts: getVerifiedContactDetails(),
    manufacturingParameters: [
      {
        parameter: 'Intended Application & Operating Environment',
        buyerInput:
          'Specify whether the panel is for dry furniture carcasses, modular kitchens or wardrobes, commercial fit-outs, or industrial packing cases and crates.',
        manufacturingRelevance:
          'Aligns brand selection (Starwoods or NEOM Packing Plywood), substrate grade and adhesive system with humidity exposure and mechanical load.'
      },
      {
        parameter: 'Panel Thickness & Sheet Dimensions',
        buyerInput:
          'State required nominal thickness in mm, sheet length and width (mm or ft), and any critical dimensional tolerances.',
        manufacturingRelevance:
          'Matches pressing, calibration, sanding and edge-trimming settings to your fabrication or packing layout.'
      },
      {
        parameter: 'Surface & Finishing Method',
        buyerInput:
          'Indicate whether panels will receive laminate pressing, veneer overlay, routing, painting, or remain unfinished for industrial packaging.',
        manufacturingRelevance:
          'Determines face veneer selection, sanding sequence and surface flatness requirements.'
      },
      {
        parameter: 'Machining, Fastening & Handling',
        buyerInput:
          'Share CNC machining, edge-banding, nailing/screwing for crate assembly, or forklift and stacking conditions.',
        manufacturingRelevance:
          'Supports core integrity, fastener retention and edge stability during fabrication and transit.'
      },
      {
        parameter: 'Order Quantity & Delivery Schedule',
        buyerInput:
          'Provide sheet quantities by thickness, one-time or recurring schedule, and delivery destination.',
        manufacturingRelevance:
          'Allows production batching, pallet protection and dispatch scheduling aligned to your site or factory.'
      }
    ],
    sustainabilityCurrentPractices: [
      {
        id: 'material-sourcing',
        title: 'Material sourcing & supplier documentation',
        category: 'Sourcing & Origins',
        body: 'We review supplier documentation for incoming timber, veneer and resin inputs and maintain batch records linking raw materials to production runs.'
      },
      {
        id: 'material-use-waste',
        title: 'Yield discipline & process residue handling',
        category: 'Factory Material Efficiency',
        body: 'We match panel specifications to the intended application before production to reduce downstream rejection, and we segregate edge-trim offcuts and sanding residues on the factory floor.'
      },
      {
        id: 'people-safety',
        title: 'Workplace health, machine guarding & training',
        category: 'Factory Floor Safety',
        body: 'Our factory operations enforce machine guarding, dust-management routines, personal protective equipment (PPE) use and defined supervisor responsibilities across pressing, trimming and handling.'
      },
      {
        id: 'product-information',
        title: 'Grade-specific product & moisture guidance',
        category: 'Accurate Documentation',
        body: 'We tie dimensional, grade and moisture-resistance descriptions to the exact product being supplied—such as clearly distinguishing MR packaging-grade plywood from waterproof grades.'
      }
    ],
    sustainabilityFutureAmbitions: [
      {
        id: 'energy-water-monitoring',
        title: 'Structured energy and water tracking',
        timeframe: 'Planned operational improvement',
        body: 'Establish consistent per-batch monitoring of thermal press energy, electrical load and facility water consumption to guide future equipment and process upgrades.'
      },
      {
        id: 'packaging-waste-reduction',
        title: 'Secondary waste & pallet protection optimisation',
        timeframe: 'Planned operational improvement',
        body: 'Evaluate reusable dunnage and optimised pallet wrapping formats that protect finished sheets during domestic transit while reducing disposable packaging waste.'
      },
      {
        id: 'period-scoped-reporting',
        title: 'Period-scoped operational disclosures',
        timeframe: 'Long-term reporting goal',
        body: 'Publish dated, period-scoped resource and safety summaries once multi-quarter factory measurement baselines are formally verified.'
      }
    ],
    sdgAlignment: [
      {
        goal: 'SDG 12',
        role: 'Primary Focus',
        isPrimary: true,
        title: 'Responsible Consumption and Production',
        activities: [
          'Matching panel grade and thickness to the exact furniture, interior or packaging application before fabrication to avoid material waste.',
          'Segregating panel trim offcuts and process residues during sheet sizing and calibration.',
          'Providing clear MR grade and storage guidance so panels are not misapplied in unsuitable wet environments.'
        ],
        url: 'https://sdgs.un.org/goals/goal12'
      },
      {
        goal: 'SDG 9',
        role: 'Supporting Focus',
        isPrimary: false,
        title: 'Industry, Innovation and Infrastructure',
        activities: [
          'Operating a company-owned wood-panel manufacturing facility in India serving domestic furniture makers, interior contractors and industrial packaging fabricators.',
          'Maintaining structured dimensional and surface checks across pressing, calibration and dispatch.'
        ],
        url: 'https://sdgs.un.org/goals/goal9'
      },
      {
        goal: 'SDG 15',
        role: 'Supporting Focus',
        isPrimary: false,
        title: 'Life on Land',
        activities: [
          'Reviewing supplier origin declarations and lawful sourcing documentation for timber and veneer inputs entering the factory.',
          'Promoting durable panel specification and proper storage to extend the service life of wood-based products.'
        ],
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
            'Indian wood-panel manufacturing business with its own factory; corporate parent of Starwoods and NEOM Packing Plywood.'
        },
        {
          label: 'Product Brands',
          value: 'Starwoods (Furniture & Interiors) and NEOM Packing Plywood (Industrial Packaging)'
        },
        {
          label: 'Manufacturing Footprint',
          value: 'Company-owned wood-panel manufacturing facility in India'
        },
        {
          label: 'Business Enquiries & Document Requests',
          value:
            'Recorded with a reference number through the NEOM Panels Business Enquiry page for review by our team.'
        }
      ],
      policies: [
        {
          id: 'code-of-conduct',
          title: 'Code of Business Conduct',
          status: 'Adopted Operating Principle',
          summary:
            'Standards for ethical commercial dealing, transparent contracting and anti-bribery compliance across customer and supplier relationships.'
        },
        {
          id: 'quality-product-info',
          title: 'Quality and Product Information Standard',
          status: 'Adopted Operating Principle',
          summary:
            'Requires product dimensions, tolerances and grade references to be tied to the specific brand, grade and current technical document.',
          href: '/manufacturing#specification-parameters',
          linkLabel: 'View Specification Parameters'
        },
        {
          id: 'health-safety',
          title: 'Workplace Health and Safety Policy',
          status: 'Adopted Operating Principle',
          summary:
            'Establishes machine guarding, dust and material handling protocols, protective equipment standards and clear floor responsibilities.'
        },
        {
          id: 'supplier-sourcing',
          title: 'Supplier and Sourcing Expectations',
          status: 'Adopted Operating Principle',
          summary:
            'Sets expectations for raw-material documentation, lawful timber/veneer origin declarations and batch consistency from supply partners.'
        },
        {
          id: 'environmental-resource',
          title: 'Environmental and Resource-Use Policy',
          status: 'Adopted Operating Principle',
          summary:
            'Guides raw-material yield discipline, offcut handling, and energy and water monitoring in factory operations.',
          href: '/sustainability',
          linkLabel: 'View Sustainability Practices'
        },
        {
          id: 'privacy-notice',
          title: 'Privacy Notice',
          status: 'Published Online',
          summary:
            'Explains how B2B contact details, specification briefs and uploaded attachments are collected, stored and safeguarded.',
          href: '/privacy',
          linkLabel: 'Read Privacy Notice'
        },
        {
          id: 'website-terms',
          title: 'Website Terms',
          status: 'Published Online',
          summary:
            'Governs use of the NEOM Panels website, brand references and non-binding commercial information.',
          href: '/terms',
          linkLabel: 'Read Website Terms'
        }
      ]
    },
    resourceCategories: [
      {
        id: 'company-information',
        title: 'Company & vendor registration pack',
        categoryLabel: 'Corporate Information',
        reviewType: 'Individual Review',
        description:
          'Corporate introduction, manufacturing overview and governance summary for vendor registration and institutional onboarding.'
      },
      {
        id: 'brand-literature',
        title: 'Starwoods & NEOM Packing Plywood brand briefs',
        categoryLabel: 'Brand Information',
        reviewType: 'Individual Review',
        description:
          'Application overviews and specification checklists for Starwoods (furniture and interiors) and NEOM Packing Plywood (MR industrial packaging).'
      },
      {
        id: 'product-documents',
        title: 'Grade-specific technical specifications & handling notes',
        categoryLabel: 'Technical Documents',
        reviewType: 'Issued per Requirement',
        description:
          'Dimensional parameters, grade details, storage and handling guidance prepared against your specific product, thickness and application scope.'
      },
      {
        id: 'corporate-policies',
        title: 'Governance & sustainability policy copies',
        categoryLabel: 'Corporate Policies',
        reviewType: 'Published Online & Request',
        description:
          'Operating principles for business conduct, workplace safety, supplier sourcing and resource stewardship.'
      }
    ],
    buyerGuidance: [
      {
        id: 'before-you-request-quotation',
        title: 'Before You Request a Panel Quotation',
        topicLabel: 'Quotation Preparation',
        summary:
          'Defining application conditions, thickness tolerances, sheet dimensions, batch quantities and delivery schedules before requesting a quote.',
        points: [
          'Identify the exact furniture component, interior zone or industrial packaging application (packing case, crate panel, divider or liner).',
          'State required nominal thickness in mm, sheet dimensions (mm or ft), and any machining or calibration expectations.',
          'Clarify whether the requirement is a one-time purchase or a recurring monthly/quarterly production schedule.',
          'Include delivery city/state and site or factory unloading requirements so dispatch can be planned accurately.'
        ]
      },
      {
        id: 'reading-a-product-data-sheet',
        title: 'Reading a Product Data Sheet',
        topicLabel: 'Technical Specification Review',
        summary:
          'Why dimensions, construction parameters and grade descriptions must be checked against the specific brand, grade and intended exposure.',
        points: [
          'Confirm that the specification corresponds to the exact brand (Starwoods or NEOM Packing Plywood) and product grade under review.',
          'Review dimensional tolerances (thickness, length, width, squareness and edge straightness) alongside core construction.',
          'Remember that Moisture Resistant (MR) plywood is designed for interior or covered packaging humidity resistance and is not waterproof.',
          'Follow recommended flat, dry storage and acclimatisation practices on site prior to fabrication.'
        ]
      },
      {
        id: 'planning-repeat-panel-requirements',
        title: 'Planning Repeat Panel Requirements',
        topicLabel: 'OEM & Packaging Supply Planning',
        summary:
          'Practical considerations for furniture OEMs, modular fabricators and packaging manufacturers coordinating recurring batch supply.',
        points: [
          'Share indicative monthly or quarterly volume estimates by thickness to align production planning.',
          'Establish agreed incoming inspection checkpoints tied to the purchase specification.',
          'Align pallet stacking heights, corner protection and moisture-wrap formats with your warehouse handling.',
          'Maintain a consistent specification reference across repeat purchase orders.'
        ]
      },
      {
        id: 'understanding-scope-of-test-report',
        title: 'Understanding the Scope of a Test Report',
        topicLabel: 'Institutional & Quality Verification',
        summary:
          'How institutional buyers, project consultants and quality teams can verify that technical documentation corresponds to the actual material grade.',
        points: [
          'Check that the document identifies the specific product name, grade and nominal thickness.',
          'Note the document date and whether figures represent a specific batch inspection or grade reference.',
          'Distinguish verified physical parameters from general product category descriptions.',
          'Request grade-specific technical documents from NEOM Panels when preparing institutional submittals.'
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
  if (jsonFilePath === ENQUIRIES_JSON_PATH) {
    existing = readEnquiriesFromDisk();
  } else if (jsonFilePath === DOC_REQUESTS_JSON_PATH) {
    existing = readDocRequestsFromDisk();
  } else {
    try {
      const raw = fs.readFileSync(jsonFilePath, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) existing = parsed;
    } catch (_) {
      existing = [];
    }
  }
  existing.unshift(record);
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

export const INITIAL_SEED_ENQUIRIES = [
  {
    reference: 'NEOM-20261101-A84F21',
    createdAt: '2026-11-01T10:15:00.000Z',
    status: 'in-review',
    adminNotes: 'Verified 18mm & 12mm calibrated specification; preparing batch quotation.',
    requirement: {
      category: 'Manufacturing & Custom / OEM Supply',
      description:
        'Monthly recurring supply of 18mm and 12mm calibrated plywood sheets (8 x 4 ft) for modular kitchen carcasses and wardrobe shutters.',
      brand: 'Starwoods',
      applicationProduct: 'Modular kitchen carcasses & wardrobe systems',
      quantity: '1400',
      quantityUnit: 'Sheets',
      destination: 'Bengaluru, Karnataka',
      requestedDate: '2026-11-20',
      conditionalDetails: {
        purchasingFrequency: 'Recurring monthly / quarterly schedule',
        procurementReference: 'OEM-BLR-2026-Q4',
        territory: null
      }
    },
    contact: {
      name: 'Rajesh Menon',
      buyerProfile: 'Furniture / modular interior manufacturer (OEM)',
      organisation: 'Crestline Modular Systems Pvt. Ltd.',
      preferredContactMethod: 'Email',
      email: 'procurement@crestlinemodular.in',
      phone: '+91 98450 11234',
      marketingConsent: true
    },
    attachments: []
  },
  {
    reference: 'NEOM-20261102-C91E04',
    createdAt: '2026-11-02T14:40:00.000Z',
    status: 'quoted',
    adminNotes: 'Quotation sent for 9mm & 12mm MR packaging-grade plywood sheets.',
    requirement: {
      category: 'Industrial Packaging / Packing Plywood',
      description:
        'Application: Packing cases · Thickness: 9mm, 12mm · Dimensions: 2440 x 1220 mm (8 x 4 ft) · Quantity: 950 Sheets · Schedule: Recurring monthly / quarterly supply · Delivery: Pune, Maharashtra',
      brand: 'NEOM Packing Plywood',
      applicationProduct: 'Packing cases',
      quantity: '950',
      quantityUnit: 'Sheets',
      destination: 'Chakan Industrial Area, Pune, Maharashtra',
      requestedDate: '2026-11-18',
      conditionalDetails: {
        purchasingFrequency: 'Recurring monthly / quarterly supply',
        packagingApplication: 'Packing cases',
        requiredThickness: '9mm, 12mm',
        sheetDimensions: '2440 x 1220 mm (8 x 4 ft)',
        quantity: '950',
        quantityUnit: 'Sheets',
        purchaseFrequency: 'Recurring monthly / quarterly supply',
        deliveryLocation: 'Chakan Industrial Area, Pune, Maharashtra',
        requiredDeliveryDate: '2026-11-18',
        additionalRequirements:
          'Used for heavy automotive component export packing cases and internal dividers.'
      }
    },
    contact: {
      name: 'Vikram Deshmukh',
      buyerProfile: 'Industrial packaging / crating fabricator',
      organisation: 'Sahyadri Industrial Crating & Logistics',
      preferredContactMethod: 'Phone',
      email: 'vikram@sahyadricrating.com',
      phone: '+91 98220 44890',
      marketingConsent: false
    },
    attachments: []
  },
  {
    reference: 'NEOM-20261103-D47B19',
    createdAt: '2026-11-03T11:25:00.000Z',
    status: 'received',
    adminNotes: '',
    requirement: {
      category: 'Project Requirement',
      description:
        'Commercial office fit-out BOQ requiring 16mm and 18mm interior-grade panels for acoustic wall panelling, workstations and custom joinery across 3 floors.',
      brand: 'Starwoods',
      applicationProduct: 'Commercial wall panelling & custom joinery',
      quantity: '620',
      quantityUnit: 'Sheets',
      destination: 'Kochi, Kerala',
      requestedDate: '2026-11-25',
      conditionalDetails: {
        purchasingFrequency: 'Phased project delivery',
        procurementReference: 'BOQ-KOCHI-ITPARK-09',
        territory: null
      }
    },
    contact: {
      name: 'Arunima Nair',
      buyerProfile: 'Interior contractor / project specifier',
      organisation: 'Vanguard Turnkey Interiors',
      preferredContactMethod: 'Email',
      email: 'tenders@vanguardinteriors.in',
      phone: '+91 94470 77812',
      marketingConsent: true
    },
    attachments: []
  },
  {
    reference: 'NEOM-20261104-F12A88',
    createdAt: '2026-11-04T08:50:00.000Z',
    status: 'received',
    adminNotes: '',
    requirement: {
      category: 'Distribution / Channel Partnership',
      description:
        'Interested in regional distribution partnership for Starwoods furniture panels and NEOM Packing Plywood across Coimbatore and Tiruppur industrial belt.',
      brand: 'Both Brands',
      applicationProduct: 'Full range dealer stock (Starwoods & NEOM Packing Plywood)',
      quantity: '1',
      quantityUnit: 'Truckload',
      destination: 'Coimbatore, Tamil Nadu',
      requestedDate: '2026-11-30',
      conditionalDetails: {
        purchasingFrequency: 'Recurring monthly / quarterly schedule',
        procurementReference: null,
        territory: 'Coimbatore, Tiruppur & Erode Districts (Tamil Nadu)'
      }
    },
    contact: {
      name: 'Karthik Sundaram',
      buyerProfile: 'Distributor / channel partner',
      organisation: 'Kongu Timber & Panel Agencies',
      preferredContactMethod: 'Phone',
      email: 'karthik@kongupanels.com',
      phone: '+91 98422 55310',
      marketingConsent: true
    },
    attachments: []
  }
];

export const INITIAL_SEED_DOC_REQUESTS = [
  {
    reference: 'NEOM-DOC-20261102-88C12A',
    createdAt: '2026-11-02T15:10:00.000Z',
    status: 'sent',
    documentTitle: 'Starwoods & NEOM Packing Plywood brand briefs',
    documentCategory: 'Brand Information',
    applicationScope: '12mm & 18mm MR packaging-grade plywood for machinery crates',
    contact: {
      name: 'Sandeep Kulkarni',
      organisation: 'Apex Heavy Packaging Solutions',
      email: 'sandeep@apexpackaging.in'
    },
    routedDesk: 'Product & Brand Information Desk'
  },
  {
    reference: 'NEOM-DOC-20261103-41B90E',
    createdAt: '2026-11-03T16:45:00.000Z',
    status: 'pending',
    documentTitle: 'Company & vendor registration pack',
    documentCategory: 'Corporate Information',
    applicationScope: 'Vendor registration for institutional furniture & joinery tender in Hyderabad',
    contact: {
      name: 'Priya Reddy',
      organisation: 'Deccan Infrastructure & Interiors Ltd.',
      email: 'procurement@deccaninfra.co.in'
    },
    routedDesk: 'Product & Brand Information Desk'
  },
  {
    reference: 'NEOM-DOC-20261104-19D77F',
    createdAt: '2026-11-04T09:20:00.000Z',
    status: 'pending',
    documentTitle: 'Grade-specific technical specifications & handling notes',
    documentCategory: 'Technical Documents',
    applicationScope: 'Calibrated 16mm & 18mm Starwoods substrates for modular kitchen factory line',
    contact: {
      name: 'Nitin Sharma',
      organisation: 'Nordic Living Modular Kitchens',
      email: 'nitin@nordicliving.in'
    },
    routedDesk: 'Product & Brand Information Desk'
  }
];

export function readEnquiriesFromDisk() {
  ensureStorageInitialized();
  try {
    const raw = fs.readFileSync(ENQUIRIES_JSON_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (_) {
    // Fallback
  }
  fs.writeFileSync(ENQUIRIES_JSON_PATH, JSON.stringify(INITIAL_SEED_ENQUIRIES, null, 2), {
    mode: 0o600
  });
  return INITIAL_SEED_ENQUIRIES;
}

export function writeEnquiriesToDisk(records) {
  ensureStorageInitialized();
  fs.writeFileSync(ENQUIRIES_JSON_PATH, JSON.stringify(records, null, 2), { mode: 0o600 });
}

export function readDocRequestsFromDisk() {
  ensureStorageInitialized();
  try {
    const raw = fs.readFileSync(DOC_REQUESTS_JSON_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (_) {
    // Fallback
  }
  fs.writeFileSync(DOC_REQUESTS_JSON_PATH, JSON.stringify(INITIAL_SEED_DOC_REQUESTS, null, 2), {
    mode: 0o600
  });
  return INITIAL_SEED_DOC_REQUESTS;
}

export function writeDocRequestsToDisk(records) {
  ensureStorageInitialized();
  fs.writeFileSync(DOC_REQUESTS_JSON_PATH, JSON.stringify(records, null, 2), { mode: 0o600 });
}

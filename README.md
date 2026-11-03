# NEOM Panels — Corporate B2B Website (Next.js App Router)

**Tagline:** `ENGINEERED EXCELLENCE, DESIGNED FOR SPACES`

Corporate website for **NEOM Panels**, an Indian wood-panel manufacturing business with its own factory and the corporate parent behind product brands including **Starwoods**.

---

## Architecture & Tech Stack

- **Framework:** [Next.js 14 (App Router)](file:///Users/jibinn/Desktop/NEOM/package.json) with React 18 Server & Client Components.
- **Design System:** Custom editorial B2B architecture in [`src/app/globals.css`](file:///Users/jibinn/Desktop/NEOM/src/app/globals.css) implementing the NEOM Panels color palette (`#073B2A` Forest, `#73943E` Leaf, `#DFE9DC` Sage, `#C7AF89` Natural Oak, `#F7F7F0` Warm White, `#FFFFFF` White) and typography (`Manrope` 600 headings, `Source Sans 3` body/navigation/forms).
- **Visual Assets (`public/assets/`):**
  - Faithful transparent-background extractions of the supplied NEOM Panels logo ([`logo-horizontal.png`](file:///Users/jibinn/Desktop/NEOM/public/assets/logo-horizontal.png) and [`logo-full.png`](file:///Users/jibinn/Desktop/NEOM/public/assets/logo-full.png)).
  - 4 flat editorial illustrations matching the reference illustration style ([`illustration-home-materials.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/illustration-home-materials.jpg), [`illustration-manufacturing.png`](file:///Users/jibinn/Desktop/NEOM/public/assets/illustration-manufacturing.png), [`illustration-sustainability.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/illustration-sustainability.jpg), [`illustration-enquiry.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/illustration-enquiry.jpg)).
  - 6 studio & architectural material visuals ([`hero-architectural-panels.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/hero-architectural-panels.jpg), [`starwoods-brand-showcase.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/starwoods-brand-showcase.jpg), [`industry-furniture-oem.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/industry-furniture-oem.jpg), [`industry-modular-interiors.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/industry-modular-interiors.jpg), [`industry-commercial-projects.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/industry-commercial-projects.jpg), [`sustainability-materials-studio.jpg`](file:///Users/jibinn/Desktop/NEOM/public/assets/sustainability-materials-studio.jpg)).

---

## Pages & Routes

| Route | Source File | Description |
| :--- | :--- | :--- |
| `/` | [`src/app/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/page.js) | Split Hero, Company Statement, Starwoods Brand Feature, Interactive Application Explorer, 4 Buyer Routes, Manufacturing, Sustainability, and Direct Enquiry Band |
| `/about` | [`src/app/about/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/about/page.js) | Corporate overview, operating principles, and governance structure |
| `/brands` | [`src/app/brands/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/brands/page.js) | Starwoods featured brand showcase and specification guidance |
| `/industries` | [`src/app/industries/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/industries/page.js) | 7 B2B buyer and specification segments with visual application spotlights |
| `/manufacturing` | [`src/app/manufacturing/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/manufacturing/page.js) | Factory perspective, requirement checklist, and 5-parameter technical specification table |
| `/sustainability` | [`src/app/sustainability/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/sustainability/page.js) | 5 operational priorities, Progress Statement, and UN SDG 12 (primary), SDG 9, and SDG 15 alignment |
| `/governance` | [`src/app/governance/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/governance/page.js) | Official company information record and 7 corporate governance policies |
| `/resources` | [`src/app/resources/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/resources/page.js) | 4 document categories with interactive request modals and 4 B2B buyer guidance briefings |
| `/enquiry` | [`src/app/enquiry/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/enquiry/page.js) | Dynamic B2B enquiry journey with URL parameter pre-selection (`?brand=Starwoods`, `?category=...`) and specification file upload |
| `/privacy` | [`src/app/privacy/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/privacy/page.js) | B2B Privacy Notice |
| `/terms` | [`src/app/terms/page.js`](file:///Users/jibinn/Desktop/NEOM/src/app/terms/page.js) | Website Terms |

---

## API Routes & Storage

- `GET /api/health` — [`src/app/api/health/route.js`](file:///Users/jibinn/Desktop/NEOM/src/app/api/health/route.js)
- `GET /api/content` — [`src/app/api/content/route.js`](file:///Users/jibinn/Desktop/NEOM/src/app/api/content/route.js)
- `POST /api/enquiries` — [`src/app/api/enquiries/route.js`](file:///Users/jibinn/Desktop/NEOM/src/app/api/enquiries/route.js) (Validates fields, verifies PDF/JPG/PNG magic bytes up to 10 MB, stores attachments outside `public/` in `storage/private_attachments/`, and appends records to `data/enquiries.jsonl`)
- `POST /api/document-requests` — [`src/app/api/document-requests/route.js`](file:///Users/jibinn/Desktop/NEOM/src/app/api/document-requests/route.js)
- `GET /api/admin/attachments/[id]` — [`src/app/api/admin/attachments/[id]/route.js`](file:///Users/jibinn/Desktop/NEOM/src/app/api/admin/attachments/%5Bid%5D/route.js) (Token-protected attachment retrieval via `X-Admin-Token`)

---

## Running Locally

```bash
# Development server (http://127.0.0.1:3000)
npm run dev

# Production build & start
npm run build
npm run start
```

# S.E.A. Group of Institutions — Complete React Website

A complete, multi-page, responsive university and institutional digital platform built for **S.E.A. Group of Institutions** (managed by the **South East Asian Education Trust**, K.R. Puram, Bengaluru), with the homepage prominently representing its flagship technical institution:

**S.E.A. College of Engineering & Technology (SEACET)**

---

## 1. Technology Stack

- **Framework:** React 18 + TypeScript + Vite 6
- **Routing:** React Router v6 (`react-router-dom`)
- **Styling:** Tailwind CSS v3 with custom editorial design tokens (`#102747` Deep Navy, `#174E87` Primary Blue, `#A92F38` Institutional Red, `#C7A45B` Gold Accent, `#F5F6F8` Soft Surface) and Google Fonts (`Plus Jakarta Sans`, `Manrope`, `Inter`)
- **Icons:** Lucide React (`lucide-react`)
- **Testing:** Vitest + React Testing Library + `@testing-library/user-event` (`jsdom`)

---

## 2. Installation & Local Development

### Prerequisites
- Node.js `v18+` (tested on `v24.12.0`) and `npm`

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Run Automated Tests
```bash
npm test
```

### Run Type Check & Production Build
```bash
npm run build
```

### Preview Production Build Locally
```bash
npm run preview
```

---

## 3. Project Structure

```text
c:\SEA Clg Website
├── public/
│   ├── assets/                 # Crest SVG, Hero poster & bespoke campus/lab SVG plates
│   ├── _redirects              # Netlify / static host SPA fallback rule
│   ├── robots.txt              # Search crawler configuration
│   └── sitemap.xml             # XML sitemap for all primary routes
├── src/
│   ├── components/
│   │   ├── Breadcrumbs/        # Accessible Breadcrumbs component
│   │   ├── Footer/             # 5-column institutional Footer
│   │   ├── Forms/              # Validated Demo Admission Enquiry Form
│   │   ├── Gallery/            # Filterable, keyboard-accessible Lightbox Gallery
│   │   ├── Header/             # Sticky Header with utility bar & mega menu triggers
│   │   ├── Hero/               # VideoHero, AdmissionsTicker & interior PageBanner
│   │   ├── MegaMenu/           # Desktop Mega Menu across all 7 primary sections
│   │   ├── MobileNavigation/   # Accessible Mobile Drawer with nested accordions
│   │   ├── ProgrammeCards/     # Searchable & filterable 25-programme Career Explorer
│   │   └── Statistics/         # Scope-verified Institutional Statistics section
│   ├── config/
│   │   └── siteConfig.ts       # Centralised academic year, contact & media configuration
│   ├── data/
│   │   ├── about.ts            # Verified S.E.A.E.T. leadership & chronological milestones
│   │   ├── admissions.ts       # Institution-specific eligibility matrix & document checklist
│   │   ├── campus.ts           # Campus Life facility pages & Gallery metadata
│   │   ├── events.ts           # Demo Events & Sample News articles with dynamic date status
│   │   ├── institutions.ts     # All 12 constituent institutions across 4 visual categories
│   │   ├── navigation.ts       # Main navigation & Mega Menu hierarchy
│   │   ├── placements.ts       # Semester-wise placement training & verified recruiters
│   │   ├── programmes.ts       # 25 Explorer programmes & 16 Academic Category page configs
│   │   └── statistics.ts       # Institutional statistics with editorial metadata
│   ├── hooks/
│   │   └── useDocumentMeta.ts  # Per-route SEO title, description, canonical & SR announcer
│   ├── layouts/
│   │   └── MainLayout.tsx      # Persistent Header, main content landmark & Footer
│   ├── pages/
│   │   ├── About/              # /about, /about/trust, /about/vision-mission, /about/leadership, /about/contact
│   │   ├── Academics/          # /academics, 16 category routes & /programmes/:slug
│   │   ├── Admissions/         # /admissions & 8 sub-routes
│   │   ├── Blog/               # /blog, /blog/news, /blog/events, /blog/events/upcoming & detail pages
│   │   ├── CampusLife/         # /campus-life, /campus-life/gallery & 7 facility detail routes
│   │   ├── Home/               # Homepage in strict Section A–H sequence
│   │   ├── Institutions/       # /institutions directory & 12 /institutions/:slug pages
│   │   ├── Placements/         # /placements, /placements/training, /placements/recruiters, /placements/achievements
│   │   └── UtilityPages.tsx    # /privacy-policy & 404 NotFoundPage
│   ├── services/
│   │   └── enquiryService.ts   # Validation & API integration service layer for enquiries
│   ├── styles/
│   │   └── index.css           # Design tokens, typography & reduced-motion rules
│   └── test/
│       ├── app.test.tsx        # Automated test suite for menus, filters, forms & routes
│       └── setup.ts            # Vitest + Testing Library setup
├── CONTENT_REVIEW.md           # Governance log of missing assets & pending content checks
├── README.md                   # Project documentation
└── vercel.json                 # Vercel SPA rewrite configuration
```

---

## 4. Asset Replacement Procedure

1. **Campus Tour Video:** Place the authorised MP4 file at `public/assets/sea-campus-tour.mp4`, place the optimised WebP poster at `public/assets/sea-campus-poster.webp`, and update `SITE_CONFIG.hasAuthorizedCampusVideo = true` and `SITE_CONFIG.heroPosterUrl = '/assets/sea-campus-poster.webp'` in `src/config/siteConfig.ts`.
2. **Official Logo:** Replace `public/assets/sea-crest.svg` with the official master SVG/WebP emblem.
3. **Campus & Lab Photography:** Replace the architectural SVG plates in `public/assets/` (`sea-engineering-quad.svg`, `sea-computing-lab.svg`, `sea-library-hall.svg`, `sea-nursing-clinical.svg`, `sea-law-mootcourt.svg`, `sea-sports-arena.svg`, `sea-auditorium.svg`, `sea-hostel-residences.svg`) and update image paths in `src/data/institutions.ts`, `src/data/programmes.ts`, and `src/data/campus.ts`.

---

## 5. Content Update & API Integration Procedure

- **Academic Year & Admissions Ticker:** Edit `activeAcademicYear` and `admissionsTickerText` in `src/config/siteConfig.ts`.
- **Programmes & Eligibility:** Update `src/data/programmes.ts` and `src/data/admissions.ts`. Every factual item carries an internal `EditorialMetadata` object (`sourceUrl`, `institutionScope`, `verificationStatus`, `lastVerifiedDate`) kept out of public UI rendering.
- **Connecting a Live Enquiry Backend API:** Set the environment variable `VITE_ENQUIRY_API_ENDPOINT=https://your-api.seaedu.ac.in/enquiries`. `submitAdmissionEnquiry()` in `src/services/enquiryService.ts` will automatically switch from local Demo Validation Mode to `POST` requests against the configured endpoint.

---

## 6. Deployment Instructions

Build the static bundle using `npm run build` (outputs to `dist/`).
- **Netlify / Cloudflare Pages:** `public/_redirects` (`/* /index.html 200`) is automatically copied into `dist/_redirects` so deep URL refreshes work out of the box.
- **Vercel:** `vercel.json` is pre-configured to rewrite all nested paths to `/index.html`.
- **Nginx / Apache:** Configure `try_files $uri $uri/ /index.html;` so React Router handles nested routes cleanly.

---

## 7. Reference Inspection Status & Remaining Content Decisions

- See [CONTENT_REVIEW.md](file:///c:/SEA%20Clg%20Website/CONTENT_REVIEW.md) for the complete governance log covering:
  - Pending live visual comparison with `srmist.edu.in` (due to sandbox outbound HTTP restrictions).
  - Clarification of `2000` (Trust founding year) vs. `2007` (SEACET founding year).
  - Reconciliation of `45-acre` SEACET overview footprint vs. `50+ acre` group design-review figure.
  - Confirmation of `15,000+` student count scope and current session tuition fee schedules.

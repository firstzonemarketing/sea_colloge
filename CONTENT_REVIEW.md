# S.E.A. Group of Institutions — Content & Asset Governance Review (`CONTENT_REVIEW.md`)

**Last Updated:** 2026-11-16  
**Scope:** Complete S.E.A. Group of Institutions Digital Platform & Flagship S.E.A. College of Engineering & Technology (SEACET) Homepage

---

## 1. Executive Governance Summary

In strict compliance with Section 18 of the Master Prompt, this document tracks all pending official media assets, conflicting or design-review statistics, quota-dependent admission/fee parameters, affiliation verification notes, and the status of the SRMIST reference comparison.

No stock photographs from unrelated universities have been passed off as S.E.A. campus photographs, and no unverified placement percentages, salary packages, rankings, or guest names have been fabricated.

---

## 2. Missing & Placeholder Media Assets

| Asset Key | Target Path | Current Implementation | Action Required Before Publication |
|---|---|---|---|
| **Campus Tour Video** | `/public/assets/sea-campus-tour.mp4` | `SITE_CONFIG.hasAuthorizedCampusVideo` is set to `false`. The `<VideoHero />` component automatically renders the high-resolution architectural poster `/assets/sea-campus-poster.svg` and switches to `<video>` playback once the official `.mp4` file is placed at `/public/assets/sea-campus-tour.mp4` and `hasAuthorizedCampusVideo` is toggled to `true`. | Supply authorised drone/campus tour MP4 footage (720p/1080p, H.264, muted loop). |
| **Hero Poster Image** | `/public/assets/sea-campus-poster.webp` & `/public/assets/sea-campus-poster.svg` | Custom architectural SVG elevation of the SEACET K.R. Puram rotunda and academic block (`/assets/sea-campus-poster.svg`). | Replace with authorised WebP photograph of the SEACET main facade. |
| **Campus & Facility Photographs** | `/public/assets/sea-*.svg` (`sea-engineering-quad.svg`, `sea-computing-lab.svg`, `sea-library-hall.svg`, `sea-nursing-clinical.svg`, `sea-law-mootcourt.svg`, `sea-sports-arena.svg`, `sea-auditorium.svg`, `sea-hostel-residences.svg`) | Bespoke architectural and laboratory illustration plates with explicit captions noting architectural representation. | Replace with authorised, high-resolution WebP photographs of SEACET labs, Central Library, Nursing simulation rooms, Law Moot Court, Hostels, and Sports grounds. |
| **Official Crest / Logo** | `/public/assets/sea-crest.svg` | Vector academic crest in Deep Navy (`#102747`), Primary Blue (`#174E87`), Institutional Red (`#A92F38`), and Gold Accent (`#C7A45B`) bearing "S.E.A. • ESTD. 2000". | Replace with the official vector SVG/PNG master emblem from the S.E.A. Trust branding office and confirm exact Pantone/Hex swatches. |

---

## 3. Institutional Statistics & Scope Audit

| Statistic | Displayed Value | Verified Fact vs. Discrepancy Analysis | Resolution in UI |
|---|---|---|---|
| **Founding Year** | `2000` — *S.E.A. Trust Established* | **Verified:** South East Asian Education Trust (S.E.A.E.T.) was founded in **2000** by Late Sri A. Krishnappa. **S.E.A. College of Engineering & Technology (SEACET)** was established in **2007**. | `2000` is strictly labelled as **S.E.A. Trust Established**, with an explicit scope note on the Homepage and About pages stating that SEACET was established in **2007**. |
| **Campus Acreage** | `50+` — *Acres of Green Campus* | **Conflicting Figures:** The design brief proposes `50+ Acres`, whereas the official SEACET engineering overview cites a **45-acre** campus and secondary directories cite 45–60 acres across the multi-institution K.R. Puram enclave. | Marked with a visible **Pending Official Scope Audit** badge and clarification note distinguishing the design-review group figure from the 45-acre SEACET overview figure. |
| **Student Count** | `15,000+` — *Students* | **Unverified Scope:** Requires confirmation from the Central Administrative Office whether `15,000+` represents active annual enrolment across all 12 constituent institutions or cumulative student/alumni reach. | Marked with a **Group-Wide Scope Pending Verification** badge and explanatory footnote. |

---

## 4. Admissions, Fees, Eligibility & Intake Verification

- **Active Academic Year (`2026–2027`):** Centralised in `src/config/siteConfig.ts` (`activeAcademicYear` and `admissionsTickerText`). Confirm the active admission cycle status before production launch.
- **Course Fees & Seat Intake:** Statutory fees vary by admission quota (KEA KCET / COMEDK / PGCET / Institutional Management Quota). Rather than publishing unverified fee numbers, all programme pages display a verified eligibility summary and route fee/seat-matrix queries to the **Admission Enquiry Form**.
- **Programme Terminology Compliance:**
  - **MTTM:** Spelled `MTTM` (*Master of Tourism & Travel Management*), never `MTTTM`.
  - **Hospital Administration:** Classified strictly as a **Postgraduate (PG) Diploma in Hospital Administration** per `https://seaedu.ac.in/page/hospital-administration`, never renamed an MBA or bachelor's degree.
  - **MBA (VTU) vs. MBA (BU):** Maintained on separate routes (`/academics/pg/mba-vtu` for SEACET under VTU Belagavi; `/academics/pg/mba-bu` under the Bengaluru North University / Bangalore University degree stream).

---

## 5. Pending Affiliation & Facility Confirmations

| Institution / Section | Status | Notes |
|---|---|---|
| **SEA College of Engineering & Technology (SEACET)** | Verified | Affiliated to VTU, Belagavi; Approved by AICTE, New Delhi; Recognised by Govt. of Karnataka; NAAC Accredited. |
| **SEA College of Nursing** | Verified | Affiliated to RGUHS, Bengaluru; Recognised by INC & KNC. |
| **SEA College of Law** | Verified | Affiliated to KSLU, Hubballi; Approved by Bar Council of India (BCI), New Delhi (Est. 2012). |
| **SEA College of Science, Commerce & Arts** | Verified | Affiliated to Bengaluru North University; Recognised by Govt. of Karnataka. |
| **SEA Composite PU College** | Verified | Recognised by Dept. of Pre-University Education (DPUE), Govt. of Karnataka. |
| **SEA B.Ed College** | Verified | Recognised by NCTE & state university framework. |
| **SEA Evening College** | Pending Session Audit | Confirm active evening degree combinations and university code for the 2026–2027 academic session. |
| **SEA Industrial Training Institute (ITI)** | Pending Trade Audit | Confirm active NCVT/SCVT trade list and intake numbers with the ITI Principal's office. |
| **SEA International School & Primary/Higher Secondary School** | Pending Board Stream Matrix | Confirm grade-wise State / ICSE / CBSE stream availability with the School Admissions Desk. |
| **Placements & Achievements (`/placements/achievements`)** | Governed | No unverified placement percentages, highest/average salary figures, or unverified testimonials are published. Prospective students are directed to request official department-wise placement reports via the Placement Cell Enquiry CTA. |

---

## 6. Reference Website Inspection Status (`srmist.edu.in`)

- **Information Architecture Research:** The global header structure, utility bar segmentation, academic faculty hierarchy, programme finder workflow, transactional admissions architecture, and campus life categorization of `https://www.srmist.edu.in/` were researched via indexed architectural summaries.
- **Direct Sandbox HTTP Access Note:** Direct live HTTP requests from the local build sandbox timed out due to sandbox network restrictions. In accordance with Section 1 of the Master Prompt, exact live visual comparison against `srmist.edu.in` is recorded as **pending live browser comparison**, while all structural, navigational, and editorial requirements of the prompt have been implemented in full with a unique S.E.A. identity.

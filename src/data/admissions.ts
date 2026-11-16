export interface EligibilityRow {
  institution: string;
  programmeGroup: string;
  affiliatingBody: string;
  eligibilityCriteria: string;
  selectionPathway: string;
}

export const VERIFIED_ELIGIBILITY_TABLE: EligibilityRow[] = [
  {
    institution: 'SEA College of Engineering & Technology (SEACET)',
    programmeGroup: 'B.E. (9 Engineering Branches)',
    affiliatingBody: 'VTU, Belagavi & AICTE',
    eligibilityCriteria: 'Pass in 10+2 / II PUC with Physics & Mathematics (compulsory) + Chemistry / CS / Electronics / Biology / Agriculture as per VTU & Government of Karnataka norms.',
    selectionPathway: 'KEA (KCET) / COMEDK / Institutional Quota Counselling',
  },
  {
    institution: 'SEA College of Engineering & Technology (SEACET)',
    programmeGroup: 'M.Tech (CSE & VLSI Design)',
    affiliatingBody: 'VTU, Belagavi & AICTE',
    eligibilityCriteria: 'B.E. / B.Tech in the relevant engineering branch with minimum 50% aggregate marks (45% for SC/ST/Cat-I of Karnataka) as per VTU norms.',
    selectionPathway: 'Karnataka PGCET / GATE / Institutional Quota',
  },
  {
    institution: 'SEA College of Engineering & Technology (SEACET)',
    programmeGroup: 'MBA (VTU)',
    affiliatingBody: 'VTU, Belagavi & AICTE',
    eligibilityCriteria: 'Recognised Bachelor’s degree (minimum 3 years) with 50% aggregate marks (45% for reserved categories of Karnataka).',
    selectionPathway: 'Karnataka PGCET / KMAT / MAT / CAT & Counselling',
  },
  {
    institution: 'SEA College of Management Studies / Degree College',
    programmeGroup: 'MBA (BU)',
    affiliatingBody: 'Bengaluru North University & AICTE',
    eligibilityCriteria: 'Recognised Bachelor’s degree in any discipline with minimum 50% aggregate (45% for SC/ST/Cat-I of Karnataka).',
    selectionPathway: 'Karnataka PGCET / KMAT / University Norms',
  },
  {
    institution: 'SEA College of Science, Commerce & Arts',
    programmeGroup: 'UG Degree (B.Com, BBA, BCA, B.Sc, B.A.) & B.Sc Clinical Nutrition',
    affiliatingBody: 'Bengaluru North University',
    eligibilityCriteria: 'Pass in 10+2 / II PUC or equivalent recognised board examination in the relevant stream.',
    selectionPathway: 'Merit & Institutional Admission Counselling',
  },
  {
    institution: 'SEA College of Science, Commerce & Arts',
    programmeGroup: 'MTTM (Master of Tourism & Travel Management)',
    affiliatingBody: 'Bengaluru North University',
    eligibilityCriteria: 'Bachelor’s degree in any discipline with minimum 50% aggregate (45% for reserved categories of Karnataka).',
    selectionPathway: 'University PG Admission / Institutional Counselling',
  },
  {
    institution: 'SEA College of Science, Commerce & Arts',
    programmeGroup: 'M.Com, M.Sc (CS) & Master of Arts (M.A.)',
    affiliatingBody: 'Bengaluru North University',
    eligibilityCriteria: 'Relevant Bachelor’s degree (B.Com/BBA for M.Com; BCA/B.Sc CS for M.Sc CS; B.A./Graduate for M.A.) meeting university aggregate norms.',
    selectionPathway: 'University PG Merit & Institutional Counselling',
  },
  {
    institution: 'SEA Group (Management & Allied Health Studies)',
    programmeGroup: 'Hospital Administration (PG Diploma)',
    affiliatingBody: 'Postgraduate Diploma Classification',
    eligibilityCriteria: 'Graduation in any discipline (Medical, Nursing, Allied Health, Life Sciences, Commerce, Management, or Arts) from a recognised university.',
    selectionPathway: 'Direct Academic Screening & Counselling',
  },
  {
    institution: 'SEA College of Nursing',
    programmeGroup: 'B.Sc Nursing, Post Basic B.Sc Nursing, GNM & M.Sc Nursing',
    affiliatingBody: 'RGUHS, INC & KNC',
    eligibilityCriteria: 'B.Sc Nursing: 10+2 with PCB & English. M.Sc Nursing: B.Sc/PB B.Sc Nursing with 55% aggregate & required clinical experience.',
    selectionPathway: 'KEA / RGUHS / Institutional Admission Norms',
  },
  {
    institution: 'SEA College of Law',
    programmeGroup: '5-Year Integrated B.A. LL.B & 3-Year LL.B',
    affiliatingBody: 'KSLU, Hubballi & Bar Council of India (BCI)',
    eligibilityCriteria: 'B.A. LL.B: Pass in 10+2 / II PUC. LL.B (3-Year): Graduation in any discipline meeting BCI & KSLU minimum percentage criteria.',
    selectionPathway: 'KSLU / BCI Eligibility Verification & Counselling',
  },
  {
    institution: 'SEA Composite PU College',
    programmeGroup: 'I & II PUC (Science, Commerce & Arts)',
    affiliatingBody: 'Dept. of Pre-University Education, Karnataka',
    eligibilityCriteria: 'Pass in Class 10 / SSLC / ICSE / CBSE or equivalent recognised board.',
    selectionPathway: 'Merit-based Registration & Counselling',
  },
];

export const ADMISSIONS_DOCUMENTS_CHECKLIST = [
  'Class 10 (SSLC / CBSE / ICSE) Original Marks Card & Transfer Certificate',
  'Class 12 / II PUC Marks Card (for Undergraduate, Integrated Law, and Nursing applicants)',
  'All Semester Marks Cards & Provisional/Degree Certificate (for M.Tech, MBA, M.Com, M.Sc, MTTM, PG Diploma, 3-Year LL.B, and Ph.D. applicants)',
  'Entrance Rank / Score Card where applicable (KCET / COMEDK / PGCET / GATE / KMAT)',
  'Migration Certificate (for applicants from boards or universities outside Karnataka)',
  'Eligibility Certificate from the respective affiliating university (VTU / Bengaluru North University / RGUHS / KSLU) for non-Karnataka / International students',
  'Caste & Income Certificate issued by competent Karnataka authority (if claiming reserved category relaxation or government scholarship)',
  'Six recent passport-size and stamp-size colour photographs & valid Government Photo ID (Aadhaar / Passport)',
];

export const ADMISSIONS_FAQS = [
  {
    question: 'Does S.E.A. Group conduct its own separate entrance examination like SRMJEEE?',
    answer: 'No. S.E.A. Group institutions admit students in accordance with the statutory norms of their respective affiliating universities and regulatory bodies in Karnataka—such as KEA (KCET), COMEDK, Karnataka PGCET, GATE, KMAT, and direct institutional merit counselling.',
  },
  {
    question: 'How can I obtain the confirmed fee structure for my chosen programme?',
    answer: 'Tuition and hostel fees depend on the specific constituent college, programme, and admission quota (Government/KEA quota vs. Management quota). Submit an enquiry through our Admissions Enquiry form to receive the official fee schedule from the Admissions Office.',
  },
  {
    question: 'Can I visit the K.R. Puram campus before applying?',
    answer: 'Yes. Prospective students and parents are welcome to visit the Central Admissions Office at Ekta Nagar, Basavanapura, K.R. Puram, Bengaluru – 560049 between Monday and Saturday (9:00 AM to 4:30 PM) for guided campus tours and faculty interaction.',
  },
];

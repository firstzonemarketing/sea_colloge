import { EditorialMetadata } from '../config/siteConfig';

export type InstitutionCategory =
  | 'Higher Education'
  | 'Professional Education'
  | 'School Education'
  | 'Research and Skill Development';

export const INSTITUTION_CATEGORIES: InstitutionCategory[] = [
  'Higher Education',
  'Professional Education',
  'School Education',
  'Research and Skill Development',
];

export interface Institution {
  id: string;
  slug: string;
  route: string;
  name: string;
  shortName: string;
  category: InstitutionCategory;
  establishedYear?: number;
  tagline: string;
  shortDescription: string;
  introduction: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  verifiedProgrammesOrLevels: string[];
  facilities: string[];
  affiliationsAndApprovals: string[];
  affiliationVerified: boolean;
  location: {
    address: string;
    campusZone: string;
    phone: string;
    email: string;
  };
  relatedAcademicRoutes: { label: string; href: string }[];
  officialWebsite?: string;
  metadata: EditorialMetadata;
}

export const INSTITUTIONS: Institution[] = [
  {
    id: 'engineering-technology',
    slug: 'engineering-technology',
    route: '/institutions/engineering-technology',
    name: 'SEA College of Engineering & Technology',
    shortName: 'SEACET',
    category: 'Professional Education',
    establishedYear: 2007,
    tagline: 'Flagship Technical Institution • Affiliated to VTU, Belagavi & Approved by AICTE',
    shortDescription:
      'Established in 2007 in K.R. Puram, Bengaluru, SEACET delivers undergraduate B.E., postgraduate M.Tech and MBA, and VTU-recognised doctoral research programmes.',
    introduction: [
      'S.E.A. College of Engineering & Technology (SEACET), established in 2007 under the South East Asian Education Trust, serves as the flagship technical institution of the S.E.A. Group of Institutions in K.R. Puram, Bengaluru.',
      'Affiliated to Visvesvaraya Technological University (VTU), Belagavi, approved by the All India Council for Technical Education (AICTE), New Delhi, and recognised by the Government of Karnataka, SEACET combines rigorous engineering fundamentals with hands-on laboratory investigation, industry project work, and research mentorship.',
    ],
    image: '/assets/official/engineering.jpg',
    imageAlt: 'Official S.E.A. College of Engineering and Technology (SEACET) Est. 2007 institutional profile',
    imageCaption: 'S.E.A. College of Engineering & Technology (Est. 2007) — Advancing Knowledge, Transforming Lives',
    verifiedProgrammesOrLevels: [
      'B.E. in Computer Science & Engineering',
      'B.E. in Information Science & Engineering',
      'B.E. in Electronics & Communication Engineering',
      'B.E. in Mechanical Engineering',
      'B.E. in Civil Engineering',
      'B.E. in Artificial Intelligence & Machine Learning',
      'B.E. in Computer Science & Engineering — IoT and Cyber Security including Blockchain Technology',
      'B.E. in Agricultural Engineering',
      'B.E. in Artificial Intelligence & Data Science',
      'M.Tech in Computer Science & Engineering',
      'M.Tech in VLSI Design and Embedded Systems',
      'Master of Business Administration — MBA (VTU)',
      'VTU-Recognised Ph.D. & M.Sc. (Engg.) by Research Programmes',
    ],
    facilities: [
      'Departmental computing, AI/ML, VLSI, CAD/CAM, civil testing, and electronics laboratories',
      'Central Engineering Library with digital journal subscriptions and quiet reading halls',
      'Smart lecture theatres and acoustically treated seminar halls',
      'Dedicated Placement & Career Training Cell starting from the third semester',
      'Shared campus residential hostels, cafeteria, sports grounds, and transport fleet',
    ],
    affiliationsAndApprovals: [
      'Affiliated to Visvesvaraya Technological University (VTU), Belagavi',
      'Approved by All India Council for Technical Education (AICTE), New Delhi',
      'Recognised by the Government of Karnataka',
      'Accredited by NAAC (National Assessment and Accreditation Council)',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'SEACET Engineering Block, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'principal@seacet.edu.in',
    },
    relatedAcademicRoutes: [
      { label: 'B.E. Undergraduate Programmes', href: '/academics/ug/be' },
      { label: 'M.Tech Postgraduate Programmes', href: '/academics/pg/mtech' },
      { label: 'MBA (VTU)', href: '/academics/pg/mba-vtu' },
      { label: 'Research Center', href: '/academics/research-center' },
    ],
    officialWebsite: 'https://www.seacet.edu.in/',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/about-us.html',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'management-studies',
    slug: 'management-studies',
    route: '/institutions/management-studies',
    name: 'SEA College of Management Studies',
    shortName: 'SEACMS',
    category: 'Higher Education',
    establishedYear: 2007,
    tagline: 'MBA @ S.E.A. • Marketing, Finance, Human Resource & Health Management (Est. 2007)',
    shortDescription:
      'Preparing future business leaders, corporate analysts, and healthcare administrators through university-affiliated management and postgraduate diploma programmes.',
    introduction: [
      'SEA College of Management Studies (established in 2007) focuses on management education, executive leadership, organisational strategy, and specialised healthcare administration within the S.E.A. Group campus in Bengaluru.',
      'Through case-method pedagogy, industry seminars, corporate internships, and analytical workshops, the institution equips students for careers across Marketing, Finance, Human Resource Management, Operations, and Health Management.',
    ],
    image: '/assets/official/management.jpg',
    imageAlt: 'Official SEA College of Management Studies MBA @ SEA institutional poster',
    imageCaption: 'SEA College of Management Studies (Est. 2007) — Marketing, Finance, HR & Health Management',
    verifiedProgrammesOrLevels: [
      'Master of Business Administration — MBA (BU)',
      'PG Diploma in Hospital Administration',
      'Undergraduate Business & Management Foundation Tracks',
    ],
    facilities: [
      'Interactive seminar rooms for case-study discussions and executive presentations',
      'Management resource centre with business periodicals and digital databases',
      'Placement & corporate internship coordination desk',
      'Access to group-wide auditoriums, computing labs, and residential hostels',
    ],
    affiliationsAndApprovals: [
      'Affiliated to Bengaluru North University / Bangalore University framework (programme-specific verification advised during admission)',
      'Recognised by the Government of Karnataka',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'Management & Commerce Block, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'MBA (BU)', href: '/academics/pg/mba-bu' },
      { label: 'Hospital Administration (PG Diploma)', href: '/academics/hospital-administration' },
      { label: 'MTTM', href: '/academics/mttm' },
    ],
    officialWebsite: 'https://www.seaedu.ac.in/',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/page/overview',
      institutionScope: 'Management Studies',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'research-development-center',
    slug: 'research-development-center',
    route: '/institutions/research-development-center',
    name: 'SEA College of Research & Development Center',
    shortName: 'SEA R&D Center',
    category: 'Research and Skill Development',
    establishedYear: 2000,
    tagline: 'Doctoral Supervision & Sponsored Research • ME, CSE, ECE, MBA, Chemistry & Mathematics',
    shortDescription:
      'Driving doctoral scholarship, VTU-recognised research supervision, and applied technical innovation across engineering, basic sciences, mathematics, and management.',
    introduction: [
      'The SEA College of Research & Development Center coordinates doctoral research (Ph.D.), M.Sc. (Engineering) by Research, and interdisciplinary academic inquiry across the S.E.A. Group of Institutions.',
      'Working closely with VTU-recognised research departments in Mechanical Engineering (ME), Computer Science & Engineering (CSE), Electronics & Communication Engineering (ECE), MBA, Chemistry, and Mathematics, the centre supports scholars with instrumentation access, methodology workshops, and publication ethics guidance.',
    ],
    image: '/assets/official/research.jpg',
    imageAlt: 'Official SEA College Research and Development Center institutional image',
    imageCaption: 'SEA College of Research & Development Center — ME, CSE, ECE, MBA, Chemistry & Mathematics',
    verifiedProgrammesOrLevels: [
      'Ph.D. Research Programmes in Mechanical Engineering (ME), CSE, ECE, MBA, Chemistry & Mathematics',
      'M.Sc. (Engineering) by Research',
      'Faculty & Student Applied Innovation Projects',
    ],
    facilities: [
      'Dedicated research cubicles and high-performance computing workstations',
      'Digital repository access to peer-reviewed engineering and scientific journals',
      'Research Advisory Committee (RAC) seminar room for doctoral colloquia',
      'Inter-departmental prototyping and analytical testing support',
    ],
    affiliationsAndApprovals: [
      'Research departments recognised by Visvesvaraya Technological University (VTU), Belagavi',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'SEACET Research Wing, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'principal@seacet.edu.in',
    },
    relatedAcademicRoutes: [
      { label: 'Research Center Overview', href: '/academics/research-center' },
      { label: 'M.Tech Programmes', href: '/academics/pg/mtech' },
      { label: 'B.E. Programmes', href: '/academics/ug/be' },
    ],
    officialWebsite: 'https://www.seacet.edu.in/',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'Skill & Research',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'nursing',
    slug: 'nursing',
    route: '/institutions/nursing',
    name: 'SEA College of Nursing',
    shortName: 'SEA Nursing',
    category: 'Professional Education',
    establishedYear: 2000,
    tagline: 'Clinical Excellence & Compassionate Healthcare Education • Affiliated to RGUHS (Est. 2000)',
    shortDescription:
      'Offering GNM, B.Sc Nursing, Post Basic B.Sc Nursing, and M.Sc Nursing programmes approved by INC and KNC and affiliated with RGUHS.',
    introduction: [
      'SEA College of Nursing (established in 2000) prepares skilled, ethical, and compassionate nursing professionals ready to serve in modern hospitals, community health centres, and global healthcare environments.',
      'Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka, and recognised by the Indian Nursing Council (INC) and Karnataka State Nursing Council (KNC), the college combines foundational medical science laboratories with supervised clinical rotations.',
    ],
    image: '/assets/official/nursing.jpg',
    imageAlt: 'Official SEA College of Nursing B.Sc, M.Sc, GNM and Post Basic Nursing image',
    imageCaption: 'SEA College of Nursing (Est. 2000) — RGUHS Affiliated & INC/KNC Recognised',
    verifiedProgrammesOrLevels: [
      'B.Sc Nursing (4 Years)',
      'Post Basic B.Sc Nursing (2 Years)',
      'General Nursing & Midwifery — GNM',
      'M.Sc Nursing (2 Years Postgraduate Specialisations)',
    ],
    facilities: [
      'Nursing Foundation, Maternal & Child Health, Community Health, and Anatomy & Physiology laboratories',
      'Nutrition and dietetics demonstration laboratory',
      'Health sciences library with RGUHS HELINET digital access',
      'Clinical rotation transport to partner multi-speciality hospitals in Bengaluru',
    ],
    affiliationsAndApprovals: [
      'Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru',
      'Recognised by Indian Nursing Council (INC), New Delhi',
      'Approved by Karnataka State Nursing Council (KNC) & Government of Karnataka',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'Health Sciences & Nursing Block, Main Campus',
      phone: '+91 80 2561 8624',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'Undergraduate Nursing', href: '/academics/ug/nursing' },
      { label: 'M.Sc Nursing (PG)', href: '/academics/pg/msc-nursing' },
      { label: 'B.Sc Clinical Nutrition', href: '/academics/bsc-clinical-nutrition' },
      { label: 'Hospital Administration', href: '/academics/hospital-administration' },
    ],
    officialWebsite: 'https://seanursing.edu.in/',
    metadata: {
      sourceUrl: 'https://seanursing.edu.in/',
      institutionScope: 'Nursing College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'law',
    slug: 'law',
    route: '/institutions/law',
    name: 'SEA College of Law',
    shortName: 'SEA Law',
    category: 'Professional Education',
    establishedYear: 2012,
    tagline: 'Jurisprudence, Advocacy & Constitutional Ethics • Affiliated to KSLU & Approved by BCI',
    shortDescription:
      'Delivering 3-Year LL.B and 5-Year Integrated B.A. LL.B legal education approved by the Bar Council of India and affiliated to Karnataka State Law University.',
    introduction: [
      'SEA College of Law is dedicated to rigorous legal scholarship, courtroom advocacy, constitutional literacy, and public service ethics.',
      'Affiliated to Karnataka State Law University (KSLU), Hubballi, and approved by the Bar Council of India (BCI), New Delhi, the college trains aspiring advocates, corporate legal advisors, and judicial service candidates through moot court competitions, legal aid clinics, and court internships.',
    ],
    image: '/assets/official/law.jpg',
    imageAlt: 'Official SEA College of Law LL.B 3-Year and 5-Year programme image',
    imageCaption: 'SEA College of Law — Educating Powerful Advocates for Justice (3-Year & 5-Year LL.B)',
    verifiedProgrammesOrLevels: [
      '5-Year Integrated B.A. LL.B',
      '3-Year LL.B (Bachelor of Laws)',
    ],
    facilities: [
      'Dedicated Moot Court Hall modelled for trial and appellate advocacy practice',
      'Law Library with All India Reporter (AIR), Supreme Court Cases (SCC), statutes, and legal databases',
      'Legal Aid Clinic for community legal awareness and pro-bono outreach',
      'Seminar halls for judicial colloquia and constitutional law workshops',
    ],
    affiliationsAndApprovals: [
      'Affiliated to Karnataka State Law University (KSLU), Hubballi',
      'Approved by the Bar Council of India (BCI), New Delhi',
      'Recognised by the Government of Karnataka',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'Law College Block, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'Law Programmes (LL.B & B.A. LL.B)', href: '/academics/ug/law' },
      { label: 'Admissions & Eligibility', href: '/admissions/eligibility' },
    ],
    officialWebsite: 'https://sealawcollege.edu.in/',
    metadata: {
      sourceUrl: 'https://sealawcollege.edu.in/',
      institutionScope: 'Law College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'science-commerce-arts',
    slug: 'science-commerce-arts',
    route: '/institutions/science-commerce-arts',
    name: 'SEA College of Science, Commerce & Arts',
    shortName: 'SEA Degree College',
    category: 'Higher Education',
    establishedYear: 2000,
    tagline: 'Multidisciplinary Undergraduate & Postgraduate Degree Studies • Bengaluru North University (Est. 2000)',
    shortDescription:
      'Offering comprehensive UG and PG degree programmes across Commerce, Computer Applications, Management, Sciences, Clinical Nutrition, Tourism (MTTM), and Humanities.',
    introduction: [
      'SEA College of Science, Commerce & Arts (established in 2000 and widely known as SEA Degree College) is a cornerstone of undergraduate and postgraduate higher education within the S.E.A. Group of Institutions.',
      'Affiliated to Bengaluru North University and recognised by the Government of Karnataka, the college offers career-oriented degree programmes in Commerce (B.Com, M.Com), Computer Applications & Science (BCA, B.Sc, M.Sc CS), Business Administration (BBA), Clinical Nutrition & Dietetics, Tourism & Travel Management (MTTM), and Master of Arts.',
    ],
    image: '/assets/official/degree.jpg',
    imageAlt: 'Official SEA College of Science, Commerce and Arts Est. 2000 image',
    imageCaption: 'SEA College of Science, Commerce & Arts (Est. 2000) — Degree & Postgraduate Studies',
    verifiedProgrammesOrLevels: [
      'Undergraduate Degree Programmes: B.Com, BBA, BCA, B.Sc, B.A.',
      'B.Sc in Clinical Nutrition & Dietetics (3 Years / 6 Semesters)',
      'Master of Commerce (M.Com)',
      'Master of Science in Computer Science — M.Sc (CS)',
      'Master of Tourism & Travel Management (MTTM)',
      'Master of Arts (M.A.)',
      'Master of Business Administration — MBA (BU)',
    ],
    facilities: [
      'Computer Science, Electronics, Food Science & Clinical Nutrition laboratories',
      'Commerce, Accounting, and Tourism simulation workshops',
      'Central Degree Library with digital learning terminals',
      'Cultural auditorium, NSS/NCC units, and career placement cell',
    ],
    affiliationsAndApprovals: [
      'Affiliated to Bengaluru North University, Tamaka, Kolar',
      'Recognised by the Government of Karnataka',
      'Approved by AICTE (for applicable professional management/computer streams)',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'Degree College Block, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'Undergraduate Degree Programmes', href: '/academics/ug/degree' },
      { label: 'B.Sc Clinical Nutrition', href: '/academics/bsc-clinical-nutrition' },
      { label: 'MTTM (Tourism & Travel Management)', href: '/academics/mttm' },
      { label: 'M.Com', href: '/academics/pg/mcom' },
      { label: 'M.Sc (CS)', href: '/academics/pg/msc-cs' },
      { label: 'Master of Arts', href: '/academics/pg/master-of-arts' },
    ],
    officialWebsite: 'https://seadegree.ac.in/',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'composite-pu-college',
    slug: 'composite-pu-college',
    route: '/institutions/composite-pu-college',
    name: 'SEA Composite PU College',
    shortName: 'SEA PU College',
    category: 'School Education',
    establishedYear: 2002,
    tagline: 'Pre-University Foundation in Science, Commerce & Arts (Class XI & XII • Est. 2002)',
    shortDescription:
      'Recognised by the Karnataka Department of Pre-University Education, offering rigorous two-year PU streams in Science, Commerce, and Arts.',
    introduction: [
      'SEA Composite PU College (established in 2002) provides a structured academic bridge between secondary schooling and university education for Class XI (I PUC) and Class XII (II PUC) students.',
      'Recognised by the Department of Pre-University Education, Government of Karnataka, the college offers combinations in Science (PCMB, PCMC, PCME), Commerce (CEBA, SEBA, HEBA), and Arts, supported by laboratory practicals and competitive entrance guidance.',
    ],
    image: '/assets/official/pu.jpg',
    imageAlt: 'Official SEA Composite Pre-University College Est. 2002 image',
    imageCaption: 'SEA Composite PU College (Est. 2002) — Opening Minds, Building Futures',
    verifiedProgrammesOrLevels: [
      'Science Stream (PCMB, PCMC, PCME)',
      'Commerce Stream (CEBA, SEBA, HEBA)',
      'Arts & Humanities Stream (HEPS)',
    ],
    facilities: [
      'Dedicated Physics, Chemistry, Biology, Electronics, and Computer Science PU laboratories',
      'Structured study hours and board examination preparation mentoring',
      'PU Library and reading hall',
      'Campus transport and safe sporting grounds',
    ],
    affiliationsAndApprovals: [
      'Recognised by the Department of Pre-University Education (DPUE), Government of Karnataka',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'Pre-University Block, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'Pre-University Programmes', href: '/academics/pre-university' },
      { label: 'Undergraduate Degree Pathways', href: '/academics/ug/degree' },
      { label: 'B.E. Engineering Pathways', href: '/academics/ug/be' },
    ],
    officialWebsite: 'https://www.seaedu.ac.in/',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/page/overview',
      institutionScope: 'PU & School',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'evening-college',
    slug: 'evening-college',
    route: '/institutions/evening-college',
    name: 'SEA Evening College',
    shortName: 'SEA Evening College',
    category: 'Higher Education',
    tagline: 'Flexible Higher Education for Working Professionals & Aspiring Graduates',
    shortDescription:
      'Enabling working learners and career-focused students to pursue university-recognised undergraduate education through evening academic schedules.',
    introduction: [
      'SEA Evening College extends the mission of the South East Asian Education Trust to working adults, early-career professionals, and students requiring flexible academic schedules.',
      'Operating on the K.R. Puram campus, the institution provides structured evening lecture sessions, library access, and faculty mentoring so learners can advance their academic qualifications alongside employment commitments.',
    ],
    image: '/assets/campus-photos/dept-2.jpg',
    imageAlt: 'SEA Evening College academic block on the K.R. Puram campus',
    imageCaption: 'SEA Evening College — Continuing & Flexible Higher Education Block',
    verifiedProgrammesOrLevels: [
      'Evening Undergraduate Degree Tracks in Commerce & Arts (Enquire for active session intake and combinations)',
    ],
    facilities: [
      'Evening-accessible lecture halls and computer laboratories',
      'Extended-hour library and reference services',
      'Academic counselling and examination support desk',
    ],
    affiliationsAndApprovals: [
      'Operates under South East Asian Education Trust within the Bengaluru North University jurisdiction (confirm current session combinations with Admissions Desk)',
    ],
    affiliationVerified: false,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'Degree Block, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'Undergraduate Degree Programmes', href: '/academics/ug/degree' },
      { label: 'Admission Enquiry', href: '/admissions/enquiry' },
    ],
    officialWebsite: 'https://www.seaedu.ac.in/',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Design-Review / Pending Confirmation',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'bed-college',
    slug: 'bed-college',
    route: '/institutions/bed-college',
    name: 'SEA B.Ed College',
    shortName: 'SEA B.Ed',
    category: 'Professional Education',
    tagline: 'Teacher Education, Pedagogical Innovation & Classroom Leadership',
    shortDescription:
      'Preparing qualified secondary and higher-secondary educators through structured Bachelor of Education (B.Ed.) training, micro-teaching, and school internships.',
    introduction: [
      'SEA B.Ed College is dedicated to the professional preparation of teachers, educational administrators, and curriculum practitioners.',
      'Through foundational courses in educational psychology, pedagogical methodology, instructional technology, micro-teaching clinics, and supervised practice-teaching in partner schools, the college cultivates reflective and inspiring educators.',
    ],
    image: '/assets/campus-photos/dept-4.jpg',
    imageAlt: 'SEA College of Education B.Ed portico on the K.R. Puram campus',
    imageCaption: 'SEA College of Education (B.Ed) — Teacher Education Building',
    verifiedProgrammesOrLevels: [
      'Bachelor of Education (B.Ed.) — 2-Year Professional Teacher Training Programme',
    ],
    facilities: [
      'Psychology, Educational Technology, Science & Mathematics curriculum laboratories',
      'Micro-teaching studio and pedagogical resource library',
      'Practice-teaching internships across S.E.A. schools and partner institutions',
    ],
    affiliationsAndApprovals: [
      'Recognised by National Council for Teacher Education (NCTE) and affiliated to the state university framework',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'Education Block, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'Academic Overview', href: '/academics' },
      { label: 'Admission Enquiry', href: '/admissions/enquiry' },
    ],
    officialWebsite: 'https://www.seaedu.ac.in/',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/page/overview',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'international-school',
    slug: 'international-school',
    route: '/institutions/international-school',
    name: 'SEA International School',
    shortName: 'SEA International School',
    category: 'School Education',
    establishedYear: 2000,
    tagline: 'ICSE Syllabus & Holistic Schooling Since 2000',
    shortDescription:
      'Nurturing young learners through ICSE curriculum instruction, STEM labs, arts, and athletics on the S.E.A. campus.',
    introduction: [
      'SEA International School (established in 2000 and offering the ICSE syllabus) provides a student-centred schooling environment that balances strong foundational academics in mathematics, sciences, languages, and social studies with creative arts, leadership, and physical education.',
      'Located within the secure S.E.A. campus in K.R. Puram, the school provides modern digital classrooms, dedicated science and computer labs, library periods, and supervised sports coaching.',
    ],
    image: '/assets/official/school.jpg',
    imageAlt: 'Official SEA International School ICSE Syllabus Since 2000 image',
    imageCaption: 'SEA International School (Since 2000) — ICSE Syllabus & Holistic Schooling',
    verifiedProgrammesOrLevels: [
      'Foundational & Preparatory Years (Pre-Primary & Primary)',
      'Middle & Secondary School Education',
    ],
    facilities: [
      'Smart classrooms with interactive audio-visual learning aids',
      'Dedicated school science, mathematics, and computer laboratories',
      'Child-safe play zones, athletics grounds, and indoor sports facilities',
      'GPS-monitored school bus network across East Bengaluru',
    ],
    affiliationsAndApprovals: [
      'Operated by South East Asian Education Trust (Contact school admissions desk for specific board stream availability by grade)',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'School Campus Wing, K.R. Puram',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'Pre-University Pathway', href: '/academics/pre-university' },
      { label: 'Admissions Enquiry', href: '/admissions/enquiry' },
    ],
    officialWebsite: 'https://www.seaedu.ac.in/',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/',
      institutionScope: 'PU & School',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'primary-higher-secondary-school',
    slug: 'primary-higher-secondary-school',
    route: '/institutions/primary-higher-secondary-school',
    name: 'SEA Primary & Higher Secondary School',
    shortName: 'SEA School',
    category: 'School Education',
    tagline: 'Value-Based Primary & High School Education Since the Founding of the Trust',
    shortDescription:
      'Delivering accessible, disciplined, and value-driven primary and secondary school education recognised by the Government of Karnataka.',
    introduction: [
      'SEA Primary & Higher Secondary School embodies the foundational vision of the South East Asian Education Trust: making high-quality, disciplined school education accessible to families across K.R. Puram and East Bengaluru.',
      'With experienced school faculty, structured language and science instruction, cultural celebrations, and athletics meets, the school prepares students for board examinations and higher pre-university studies.',
    ],
    image: '/assets/campus-photos/dept-7.jpg',
    imageAlt: 'SEA Primary and Higher Secondary School campus and transport bus',
    imageCaption: 'SEA Primary & Higher Secondary School — K.R. Puram Campus',
    verifiedProgrammesOrLevels: [
      'Primary School (Grades I to VII)',
      'High School / Secondary Education (Grades VIII to X)',
    ],
    facilities: [
      'Well-ventilated classrooms and foundational science demonstration labs',
      'School library, computer literacy lab, and art activity rooms',
      'Playgrounds for athletics, kho-kho, kabaddi, volleyball, and cricket',
    ],
    affiliationsAndApprovals: [
      'Recognised by the Department of School Education and Literacy, Government of Karnataka',
    ],
    affiliationVerified: true,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'School Wing, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'SEA Composite PU College', href: '/institutions/composite-pu-college' },
      { label: 'Admission Enquiry', href: '/admissions/enquiry' },
    ],
    officialWebsite: 'https://www.seaedu.ac.in/',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/page/overview',
      institutionScope: 'PU & School',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'industrial-training-institute',
    slug: 'industrial-training-institute',
    route: '/institutions/industrial-training-institute',
    name: 'SEA Industrial Training Institute',
    shortName: 'SEA ITI',
    category: 'Research and Skill Development',
    tagline: 'Hands-On Vocational & Technical Trade Training for Industry Readiness',
    shortDescription:
      'Equipping youth with practical workshop skills, technical trade certifications, and direct industrial employability.',
    introduction: [
      'SEA Industrial Training Institute (ITI) focuses on hands-on vocational training and technical trade mastery for students seeking direct entry into manufacturing, electrical, electronics, and mechanical service industries.',
      'Through intensive workshop practice, safety certification, and industrial tool operation, trainees build job-ready technical competencies.',
    ],
    image: '/assets/campus-photos/dept-15.jpg',
    imageAlt: 'SEA Industrial Training Institute mechanical and lathe workshop on campus',
    imageCaption: 'SEA Industrial Training Institute — Vocational & Technical Lathe Workshops',
    verifiedProgrammesOrLevels: [
      'Technical & Vocational ITI Trade Certificate Programmes (Enquire with Admissions Desk for active trade intake)',
    ],
    facilities: [
      'Dedicated mechanical, electrical, and electronics trade workshops',
      'Industrial drafting and measurement instrumentation tools',
      'Placement assistance for technical trade apprentices',
    ],
    affiliationsAndApprovals: [
      'Operated under South East Asian Education Trust (Contact Admissions Desk for NCVT/SCVT trade code details)',
    ],
    affiliationVerified: false,
    location: {
      address: 'Ekta Nagar, Basavanapura, Virgonagar Post, K.R. Puram, Bengaluru – 560049, Karnataka',
      campusZone: 'Technical Workshop Wing, Main Campus',
      phone: '+91 80 2561 8623',
      email: 'info@seaedu.ac.in',
    },
    relatedAcademicRoutes: [
      { label: 'B.E. Engineering Programmes', href: '/academics/ug/be' },
      { label: 'Admission Enquiry', href: '/admissions/enquiry' },
    ],
    officialWebsite: 'https://www.seaedu.ac.in/',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/',
      institutionScope: 'Skill & Research',
      verificationStatus: 'Design-Review / Pending Confirmation',
      lastVerifiedDate: '2026-11-16',
    },
  },
];

export function getInstitutionBySlug(slug: string): Institution | undefined {
  return INSTITUTIONS.find((inst) => inst.slug === slug);
}

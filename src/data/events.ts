export type PostType = 'event' | 'news';

export type PostCategory =
  | 'All'
  | 'Technology Symposium'
  | 'Cultural Festival'
  | 'Sports Meet'
  | 'Research Workshop'
  | 'Student Orientation'
  | 'Alumni Gathering'
  | 'Academic Bulletin';

export const POST_CATEGORIES: PostCategory[] = [
  'All',
  'Technology Symposium',
  'Cultural Festival',
  'Sports Meet',
  'Research Workshop',
  'Student Orientation',
  'Alumni Gathering',
  'Academic Bulletin',
];

export interface BlogOrEventItem {
  id: string;
  slug: string;
  type: PostType;
  isDemo: boolean;
  demoBadgeLabel: 'Demo Event' | 'Sample News Article';
  title: string;
  category: Exclude<PostCategory, 'All'>;
  dateIso: string; // YYYY-MM-DD — compared dynamically against current date
  timeRange?: string;
  venue: string;
  offeringUnit: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  bodyParagraphs: string[];
  agendaOrHighlights: string[];
  registrationAvailable: boolean;
}

export const BLOG_AND_EVENT_ITEMS: BlogOrEventItem[] = [
  {
    id: 'evt-tech-symposium',
    slug: 'seacet-annual-technology-symposium-2026',
    type: 'event',
    isDemo: true,
    demoBadgeLabel: 'Demo Event',
    title: 'SEACET Inter-Departmental Technology & Innovation Symposium',
    category: 'Technology Symposium',
    dateIso: '2026-12-14',
    timeRange: '09:30 AM – 04:30 PM IST',
    venue: 'SEACET Main Auditorium & Computing Block, K.R. Puram Campus',
    offeringUnit: 'S.E.A. College of Engineering & Technology',
    image: '/assets/campus-photos/dept-11.jpg',
    imageAlt: 'SEACET Technology Symposium computing and project showcase illustration',
    shortDescription:
      'Sample preview of an inter-departmental engineering symposium featuring student paper presentations, AI/ML prototyping demos, VLSI design exhibits, and coding challenges.',
    bodyParagraphs: [
      'This entry is a structured Demo Event illustrating how technical symposiums at S.E.A. College of Engineering & Technology (SEACET) are presented on the institutional portal.',
      'The symposium brings together undergraduate B.E. and postgraduate M.Tech students across Computer Science, Information Science, AI & ML, AI & Data Science, Cyber Security & Blockchain, ECE, Mechanical, Civil, and Agricultural Engineering to demonstrate working prototypes and technical papers.',
      'Sessions are organised into parallel tracks covering software architecture, embedded systems, sustainable civil infrastructure, and smart agricultural engineering.',
    ],
    agendaOrHighlights: [
      '09:30 AM — Inaugural Address & Departmental Exhibition Opening',
      '11:00 AM — Technical Paper Presentations across 5 Engineering Tracks',
      '01:30 PM — Algorithmic Coding & Cybersecurity Capture-The-Flag (CTF) Round',
      '03:30 PM — Prototype Demonstration & Valedictory Session',
    ],
    registrationAvailable: true,
  },
  {
    id: 'evt-cultural-fest',
    slug: 'sea-group-annual-cultural-festival-utsav',
    type: 'event',
    isDemo: true,
    demoBadgeLabel: 'Demo Event',
    title: 'S.E.A. Group Annual Multidisciplinary Cultural Festival',
    category: 'Cultural Festival',
    dateIso: '2027-01-22',
    timeRange: '10:00 AM – 06:00 PM IST',
    venue: 'Main Campus Auditorium & Open-Air Stage, K.R. Puram',
    offeringUnit: 'S.E.A. Group Cultural Committee',
    image: '/assets/campus-photos/dept-20.jpg',
    imageAlt: 'S.E.A. Group Annual Cultural Festival auditorium stage illustration',
    shortDescription:
      'Demo Event showcasing the annual campus cultural celebration uniting students from Engineering, Degree, Nursing, Law, Management, and PU colleges.',
    bodyParagraphs: [
      'This Demo Event entry illustrates the scheduling and showcase format for S.E.A. Group’s annual inter-institutional cultural festival on the K.R. Puram campus.',
      'Students from all 12 constituent institutions participate in classical and folk dance, vocal and instrumental music, literary debates, theatre skits, fine arts, and ethnic heritage showcases.',
    ],
    agendaOrHighlights: [
      'Classical & Folk Dance Ensembles',
      'Literary Debate, Quiz & Creative Writing Forums',
      'Fine Arts, Photography & Rangoli Showcase',
      'Inter-Institutional Musical Evening',
    ],
    registrationAvailable: true,
  },
  {
    id: 'evt-sports-meet',
    slug: 'sea-inter-collegiate-athletics-sports-meet',
    type: 'event',
    isDemo: true,
    demoBadgeLabel: 'Demo Event',
    title: 'Annual Inter-Institutional Athletics & Team Sports Championship',
    category: 'Sports Meet',
    dateIso: '2027-02-10',
    timeRange: '08:00 AM – 05:00 PM IST',
    venue: 'S.E.A. Campus Sports Grounds & Indoor Gymnasium',
    offeringUnit: 'Department of Physical Education & Sports',
    image: '/assets/campus-photos/dept-13.jpg',
    imageAlt: 'S.E.A. Campus Sports Grounds athletics championship illustration',
    shortDescription:
      'Demo Event highlighting track and field athletics, cricket, football, volleyball, basketball, kabaddi, and indoor badminton competitions.',
    bodyParagraphs: [
      'This Demo Event represents the annual athletics and games championship hosted on the K.R. Puram campus sports grounds.',
      'Teams representing Engineering, Degree, Nursing, Law, Management, and Pre-University streams compete in track events and tournament brackets under the supervision of the Department of Physical Education.',
    ],
    agendaOrHighlights: [
      'March-Past & Torch Relay at the Main Athletics Track',
      '100m, 200m, 400m, Relay & Field Events',
      'Inter-College Cricket, Football, Volleyball & Kabaddi Finals',
      'Indoor Table Tennis, Chess & Carrom Tournaments',
    ],
    registrationAvailable: true,
  },
  {
    id: 'evt-research-workshop',
    slug: 'vtu-research-methodology-ipr-workshop',
    type: 'event',
    isDemo: true,
    demoBadgeLabel: 'Demo Event',
    title: 'Faculty & Doctoral Scholar Workshop on Research Methodology & Publication Ethics',
    category: 'Research Workshop',
    dateIso: '2026-12-05',
    timeRange: '10:00 AM – 03:30 PM IST',
    venue: 'SEA Research & Development Center Seminar Hall',
    offeringUnit: 'SEA College of Research & Development Center',
    image: '/assets/campus-photos/dept-10.jpg',
    imageAlt: 'Research methodology and publication ethics workshop illustration',
    shortDescription:
      'Demo Event for Ph.D. scholars, M.Tech postgraduate students, and faculty covering literature synthesis, experimental design, and academic integrity.',
    bodyParagraphs: [
      'This Demo Event entry previews a scholarly methodology workshop organised by the SEA College of Research & Development Center in collaboration with SEACET’s VTU-recognised research departments.',
      'Sessions address structured literature review using IEEE and ScienceDirect databases, statistical validation, patent documentation fundamentals, and ethical academic publishing.',
    ],
    agendaOrHighlights: [
      'Structuring Doctoral Research Proposals & Literature Matrices',
      'Statistical Validation & Reproducible Experimental Workflows',
      'Academic Writing, Citation Standards & Plagiarism Prevention',
      'Introduction to Intellectual Property & Patent Filing Process',
    ],
    registrationAvailable: true,
  },
  {
    id: 'evt-student-orientation',
    slug: 'first-year-student-induction-orientation-programme',
    type: 'event',
    isDemo: true,
    demoBadgeLabel: 'Demo Event',
    title: 'First-Year Student Induction & Academic Orientation Programme',
    category: 'Student Orientation',
    dateIso: '2026-09-10',
    timeRange: '09:30 AM – 01:30 PM IST',
    venue: 'S.E.A. Main Auditorium, K.R. Puram Campus',
    offeringUnit: 'S.E.A. Group Academic Council',
    image: '/assets/campus-photos/dept-17.jpg',
    imageAlt: 'First-year student orientation at S.E.A. Main Auditorium illustration',
    shortDescription:
      'Demo Event archive of the induction programme introducing incoming undergraduate students and parents to university curricula, laboratories, and campus support.',
    bodyParagraphs: [
      'This Demo Event entry illustrates the annual student induction and orientation programme welcoming first-year cohorts and their families to the K.R. Puram campus.',
      'The orientation introduces VTU, Bengaluru North University, RGUHS, and KSLU academic regulations, library resources, mentor-proctor allocation, anti-ragging policies, and placement cell roadmaps.',
    ],
    agendaOrHighlights: [
      'Welcome Address & Introduction to S.E.A. Group Heritage',
      'Overview of University Examination & Outcome-Based Education Norms',
      'Guided Tour of Departmental Laboratories, Central Library & Hostels',
      'Interaction with Faculty Mentors & Student Support Cells',
    ],
    registrationAvailable: false,
  },
  {
    id: 'evt-alumni-gathering',
    slug: 'sea-group-annual-alumni-homecoming-meet',
    type: 'event',
    isDemo: true,
    demoBadgeLabel: 'Demo Event',
    title: 'S.E.A. Alumni Homecoming & Career Mentorship Confluence',
    category: 'Alumni Gathering',
    dateIso: '2027-01-09',
    timeRange: '10:30 AM – 03:00 PM IST',
    venue: 'SEACET Seminar Hall, K.R. Puram Campus',
    offeringUnit: 'S.E.A. Alumni Association & Placement Cell',
    image: '/assets/campus-photos/dept-6.jpg',
    imageAlt: 'S.E.A. Alumni Homecoming and Career Mentorship gathering illustration',
    shortDescription:
      'Demo Event connecting graduated cohorts with pre-final and final-year students for career panels, industry insights, and campus networking.',
    bodyParagraphs: [
      'This Demo Event illustrates the format of the S.E.A. Alumni Homecoming and Career Mentorship meet held at the K.R. Puram campus.',
      'Graduates across Engineering, Management, Nursing, Law, and Degree streams return to campus to share industry perspectives, review student project portfolios, and strengthen the alumni mentorship network.',
    ],
    agendaOrHighlights: [
      'Campus Tour & Departmental Faculty Interaction',
      'Alumni-Student Career Readiness Panel Discussions',
      'Networking Luncheon at the Campus Courtyard',
    ],
    registrationAvailable: true,
  },
  {
    id: 'news-admissions-bulletin',
    slug: 'academic-session-2026-2027-admissions-enquiry-bulletin',
    type: 'news',
    isDemo: true,
    demoBadgeLabel: 'Sample News Article',
    title: 'Admissions & Programme Counselling Desk Open for Academic Session 2026–2027',
    category: 'Academic Bulletin',
    dateIso: '2026-11-01',
    venue: 'Central Admissions Office, K.R. Puram Campus',
    offeringUnit: 'Central Admissions Cell',
    image: '/assets/campus-photos/dept-17.jpg',
    imageAlt: 'Central Admissions Office at S.E.A. Group of Institutions illustration',
    shortDescription:
      'Sample News Bulletin detailing how prospective students and parents can explore undergraduate, postgraduate, research, and pre-university programmes.',
    bodyParagraphs: [
      'This Sample News Article demonstrates how institutional announcements and admission bulletins are published in the Campus News section.',
      'Prospective applicants for B.E., M.Tech, MBA (VTU), MBA (BU), Undergraduate Degree (B.Com, BBA, BCA, B.Sc, B.A.), B.Sc Clinical Nutrition, MTTM, PG Diploma in Hospital Administration, Nursing, Law, and Pre-University courses can schedule a campus tour or submit an online enquiry.',
    ],
    agendaOrHighlights: [
      'In-person academic counselling Monday to Saturday (9:00 AM – 4:30 PM)',
      'Guided tours of departmental laboratories, library, and hostels',
      'Institution-specific eligibility and document verification guidance',
    ],
    registrationAvailable: false,
  },
  {
    id: 'news-clinical-nutrition-mttm-spotlight',
    slug: 'spotlight-on-specialised-healthcare-and-tourism-programmes',
    type: 'news',
    isDemo: true,
    demoBadgeLabel: 'Sample News Article',
    title: 'Academic Spotlight: B.Sc Clinical Nutrition, MTTM & PG Diploma in Hospital Administration',
    category: 'Academic Bulletin',
    dateIso: '2026-10-18',
    venue: 'SEA College of Science, Commerce & Arts / Management Wing',
    offeringUnit: 'Academic Affairs Desk',
    image: '/assets/official/nursing.jpg',
    imageAlt: 'Specialised Healthcare, Clinical Nutrition and Tourism programmes illustration',
    shortDescription:
      'Sample News Article highlighting S.E.A. Group’s specialized career programmes in Clinical Nutrition & Dietetics, Tourism & Travel Management (MTTM), and Hospital Administration.',
    bodyParagraphs: [
      'This Sample News Article highlights three specialized career-oriented academic programmes offered within the S.E.A. Group of Institutions in Bengaluru.',
      'Students interested in allied healthcare and clinical wellness can pursue the 3-year B.Sc Clinical Nutrition degree or the 1-year Postgraduate Diploma in Hospital Administration, while graduates aspiring to global hospitality and aviation leadership can enrol in the 2-year Master of Tourism & Travel Management (MTTM).',
    ],
    agendaOrHighlights: [
      'B.Sc Clinical Nutrition — 3-Year (6-Semester) Undergraduate Science Degree',
      'Master of Tourism & Travel Management (MTTM) — 2-Year Postgraduate Degree',
      'Hospital Administration — Postgraduate (PG) Diploma Programme',
    ],
    registrationAvailable: false,
  },
];

export function isUpcomingDate(dateIso: string, referenceDate = new Date('2026-11-16T00:00:00')): boolean {
  const target = new Date(`${dateIso}T23:59:59`);
  return target.getTime() >= referenceDate.getTime();
}

export function getBlogOrEventBySlug(slug: string): BlogOrEventItem | undefined {
  return BLOG_AND_EVENT_ITEMS.find((item) => item.slug === slug);
}

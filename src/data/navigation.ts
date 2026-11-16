export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavLinkItem[];
}

export interface MainNavItem {
  id: string;
  label: string;
  href: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
  groups: NavGroup[];
}

export const MAIN_NAVIGATION: MainNavItem[] = [
  {
    id: 'academics',
    label: 'Academics',
    href: '/academics',
    summary: 'Explore undergraduate, postgraduate, doctoral research, pre-university, and specialised healthcare & hospitality programmes across the S.E.A. Group.',
    ctaLabel: 'Explore Academic Overview',
    ctaHref: '/academics',
    groups: [
      {
        title: 'Academic Overview',
        items: [
          {
            label: 'Academic Overview',
            href: '/academics',
            description: 'Complete academic framework, faculties, and programme finder',
          },
        ],
      },
      {
        title: 'Undergraduate',
        items: [
          { label: 'B.E.', href: '/academics/ug/be', description: '9 VTU-affiliated Bachelor of Engineering branches at SEACET' },
          { label: 'Degree', href: '/academics/ug/degree', description: 'B.Com, BBA, BCA, B.Sc & B.A. programmes (Bengaluru North University)' },
          { label: 'Law', href: '/academics/ug/law', description: '3-Year LL.B & 5-Year Integrated B.A. LL.B (KSLU & BCI Approved)' },
          { label: 'Nursing', href: '/academics/ug/nursing', description: 'B.Sc Nursing, Post Basic B.Sc & GNM (RGUHS, INC & KNC)' },
        ],
      },
      {
        title: 'Postgraduate',
        items: [
          { label: 'M.Tech', href: '/academics/pg/mtech', description: 'Computer Science & Engineering, VLSI Design & Embedded Systems' },
          { label: 'MBA (VTU)', href: '/academics/pg/mba-vtu', description: 'Master of Business Administration at SEACET (VTU Affiliated)' },
          { label: 'MBA (BU)', href: '/academics/pg/mba-bu', description: 'Master of Business Administration (University Affiliated)' },
          { label: 'M.Com', href: '/academics/pg/mcom', description: 'Master of Commerce in Accounting, Finance & Taxation' },
          { label: 'M.Sc Nursing', href: '/academics/pg/msc-nursing', description: 'Advanced Clinical Nursing Specialisations (RGUHS)' },
          { label: 'Master of Arts', href: '/academics/pg/master-of-arts', description: 'Postgraduate Humanities & Social Sciences' },
          { label: 'M.Sc (CS)', href: '/academics/pg/msc-cs', description: 'Master of Science in Computer Science' },
        ],
      },
      {
        title: 'Additional Academic Programmes',
        items: [
          { label: 'Research Center', href: '/academics/research-center', description: 'VTU-recognised Ph.D. & M.Sc. (Engg.) by Research departments' },
          { label: 'Pre-University', href: '/academics/pre-university', description: 'Class XI & XII Science, Commerce & Arts streams' },
          { label: 'MTTM', href: '/academics/mttm', description: 'Master of Tourism & Travel Management' },
          { label: 'B.Sc Clinical Nutrition', href: '/academics/bsc-clinical-nutrition', description: 'Clinical Nutrition & Dietetics undergraduate programme' },
          { label: 'Hospital Administration', href: '/academics/hospital-administration', description: 'PG Diploma in Hospital Administration & Healthcare Management' },
        ],
      },
    ],
  },
  {
    id: 'institutions',
    label: 'Institutions',
    href: '/institutions',
    summary: 'Twelve specialised constituent institutions operating on our integrated multidisciplinary campus in K.R. Puram, Bengaluru.',
    ctaLabel: 'View All 12 Institutions',
    ctaHref: '/institutions',
    groups: [
      {
        title: 'Higher Education',
        items: [
          { label: 'SEA College of Science, Commerce & Arts', href: '/institutions/science-commerce-arts' },
          { label: 'SEA College of Management Studies', href: '/institutions/management-studies' },
          { label: 'SEA Evening College', href: '/institutions/evening-college' },
        ],
      },
      {
        title: 'Professional Education',
        items: [
          { label: 'SEA College of Engineering & Technology', href: '/institutions/engineering-technology', badge: 'Flagship' },
          { label: 'SEA College of Nursing', href: '/institutions/nursing' },
          { label: 'SEA College of Law', href: '/institutions/law' },
          { label: 'SEA B.Ed College', href: '/institutions/bed-college' },
        ],
      },
      {
        title: 'School Education',
        items: [
          { label: 'SEA Composite PU College', href: '/institutions/composite-pu-college' },
          { label: 'SEA International School', href: '/institutions/international-school' },
          { label: 'SEA Primary & Higher Secondary School', href: '/institutions/primary-higher-secondary-school' },
        ],
      },
      {
        title: 'Research and Skill Development',
        items: [
          { label: 'SEA College of Research & Development Center', href: '/institutions/research-development-center' },
          { label: 'SEA Industrial Training Institute', href: '/institutions/industrial-training-institute' },
        ],
      },
    ],
  },
  {
    id: 'admissions',
    label: 'Admissions',
    href: '/admissions',
    summary: 'Transparent admission pathways, programme-specific eligibility criteria, document guidance, and dedicated applicant support.',
    ctaLabel: 'Admissions Overview',
    ctaHref: '/admissions',
    groups: [
      {
        title: 'Application & Process',
        items: [
          { label: 'Admissions Overview', href: '/admissions' },
          { label: 'Apply Online', href: '/admissions/apply', badge: '2026–27' },
          { label: 'Admission Procedure', href: '/admissions/procedure' },
          { label: 'Eligibility', href: '/admissions/eligibility' },
          { label: 'Fees & Financial Aid', href: '/admissions/fees-financial-aid' },
        ],
      },
      {
        title: 'Global & Applicant Support',
        items: [
          { label: 'International Admissions', href: '/admissions/international' },
          { label: 'NRI Admissions', href: '/admissions/nri' },
          { label: 'Prospectus', href: '/admissions/prospectus' },
          { label: 'Admission Enquiry', href: '/admissions/enquiry' },
        ],
      },
    ],
  },
  {
    id: 'campus-life',
    label: 'Campus Life',
    href: '/campus-life',
    summary: 'Experience a vibrant, secure, and lush green academic environment in K.R. Puram with modern laboratories, libraries, hostels, and athletics.',
    ctaLabel: 'Explore Campus Life',
    ctaHref: '/campus-life',
    groups: [
      {
        title: 'Infrastructure & Learning',
        items: [
          { label: 'Campus Life Overview', href: '/campus-life' },
          { label: 'Campus Infrastructure', href: '/campus-life/infrastructure' },
          { label: 'Digital Infrastructure', href: '/campus-life/digital-infrastructure' },
          { label: 'Library & Learning Resources', href: '/campus-life/library' },
        ],
      },
      {
        title: 'Student Living & Culture',
        items: [
          { label: 'Accommodation & Hostels', href: '/campus-life/hostels' },
          { label: 'Sports & Fitness', href: '/campus-life/sports' },
          { label: 'Clubs & Cultural Activities', href: '/campus-life/clubs-culture' },
          { label: 'Student Support & Safety', href: '/campus-life/student-support' },
          { label: 'Campus Gallery', href: '/campus-life/gallery' },
        ],
      },
    ],
  },
  {
    id: 'placements',
    label: 'Placements',
    href: '/placements',
    summary: 'Structured career readiness, aptitude and technical training, industry partnerships, and campus recruitment support.',
    ctaLabel: 'Placements Overview',
    ctaHref: '/placements',
    groups: [
      {
        title: 'Career Development',
        items: [
          { label: 'Overview', href: '/placements', description: 'Placement Cell structure, career guidance, and internship facilitation' },
          { label: 'Training', href: '/placements/training', description: 'Semester-wise technical, aptitude, and communication training' },
          { label: 'Recruiters', href: '/placements/recruiters', description: 'Verified industry recruiting partners and corporate engagement' },
          { label: 'Achievements', href: '/placements/achievements', description: 'Student career milestones and placement enquiry desk' },
        ],
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    summary: 'Founded under the South East Asian Education Trust in 2000 to advance inclusive, value-based academic and technical excellence.',
    ctaLabel: 'About S.E.A. Group',
    ctaHref: '/about',
    groups: [
      {
        title: 'Institutional Heritage',
        items: [
          { label: 'About Overview', href: '/about', description: 'History and profile of S.E.A. Group of Institutions & SEACET' },
          { label: 'Trust', href: '/about/trust', description: 'South East Asian Education Trust (S.E.A.E.T.) & founding legacy' },
          { label: 'Vision & Mission', href: '/about/vision-mission', description: 'Core educational philosophy and institutional charter' },
          { label: 'Leadership', href: '/about/leadership', description: 'Trustees, governance, and executive leadership' },
          { label: 'Contact', href: '/about/contact', description: 'Verified K.R. Puram campus address, phone numbers, and enquiry desk' },
        ],
      },
    ],
  },
  {
    id: 'news-events',
    label: 'News & Events',
    href: '/blog',
    summary: 'Stay informed on technical symposiums, research workshops, cultural festivals, athletic meets, and campus announcements.',
    ctaLabel: 'View All News & Events',
    ctaHref: '/blog',
    groups: [
      {
        title: 'Updates & Media',
        items: [
          { label: 'All Posts', href: '/blog', description: 'Complete feed of campus news, events, and academic updates' },
          { label: 'Campus News', href: '/blog/news', description: 'Academic bulletins, research seminars, and institutional updates' },
          { label: 'College Events', href: '/blog/events', description: 'Symposiums, cultural fests, and orientation programmes' },
          { label: 'Upcoming Events', href: '/blog/events/upcoming', description: 'Scheduled academic and student activities' },
          { label: 'Gallery', href: '/campus-life/gallery', description: 'Visual archive of campus architecture, labs, and student life' },
        ],
      },
    ],
  },
];

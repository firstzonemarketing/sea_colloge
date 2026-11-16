import { EditorialMetadata } from '../config/siteConfig';

export interface CampusFacilityPage {
  route: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  bannerImage: string;
  bannerAlt: string;
  galleryPhotos: { src: string; caption: string }[];
  introduction: string[];
  highlights: string[];
  practicalInfo: { label: string; value: string }[];
  relatedRoutes: { label: string; href: string }[];
  metadata: EditorialMetadata;
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'All'
    | 'Architecture & Campus'
    | 'Laboratories & Research'
    | 'Library & Learning'
    | 'Sports & Hostels'
    | 'Events & Culture';
  image: string;
  alt: string;
  caption: string;
  scopeNote: string;
}

export const GALLERY_CATEGORIES: GalleryItem['category'][] = [
  'All',
  'Architecture & Campus',
  'Laboratories & Research',
  'Library & Learning',
  'Sports & Hostels',
  'Events & Culture',
];

export const CAMPUS_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Aerial Panorama of S.E.A. Group Campus in K.R. Puram',
    category: 'Architecture & Campus',
    image: '/assets/campus-photos/sea-campus-aerial.jpg',
    alt: 'Aerial panoramic view of S.E.A. Group of Institutions campus in K.R. Puram, Bengaluru',
    caption:
      'Expansive aerial view of the multidisciplinary S.E.A. Group of Institutions campus in Ekta Nagar, Basavanapura, K.R. Puram, Bengaluru.',
    scopeNote: 'Group-Wide Campus Enclave',
  },
  {
    id: 'gal-2',
    title: 'SEACET Central Rotunda & Landscaped Lawns',
    category: 'Architecture & Campus',
    image: '/assets/campus-photos/dept-16.jpg',
    alt: 'Drone view of SEACET rotunda, gardens, and engineering block',
    caption:
      'Aerial view of the central rotunda, landscaped gardens, and engineering academic wing at S.E.A. College of Engineering & Technology.',
    scopeNote: 'SEACET Flagship Engineering Block',
  },
  {
    id: 'gal-3',
    title: 'South East Asian Education Trust Entrance Archway',
    category: 'Architecture & Campus',
    image: '/assets/official/campus.jpg',
    alt: 'Main entrance arch of South East Asian Education Trust in Bengaluru',
    caption:
      'Main campus entrance archway bearing the name of South East Asian Education Trust (R) in K.R. Puram, Bengaluru.',
    scopeNote: 'Main Campus Entrance',
  },
  {
    id: 'gal-4',
    title: 'Main Academic Block & Palm-Lined Avenue',
    category: 'Architecture & Campus',
    image: '/assets/campus-photos/dept-2.jpg',
    alt: 'Main academic building facade lined with palm trees at S.E.A. Group campus',
    caption:
      'Palm-lined academic avenue leading to the Science, Commerce, Arts & Education buildings on campus.',
    scopeNote: 'Academic Infrastructure',
  },
  {
    id: 'gal-5',
    title: 'Electronics & Hardware Engineering Laboratory',
    category: 'Laboratories & Research',
    image: '/assets/campus-photos/dept-11.jpg',
    alt: 'Faculty and students conducting experiments in the S.E.A. Electronics Laboratory',
    caption:
      'Hands-on circuit and hardware instrumentation practical session with faculty guidance at SEACET.',
    scopeNote: 'SEACET Departmental Laboratories',
  },
  {
    id: 'gal-6',
    title: 'Mechanical Engineering & ITI Lathe Machine Shop',
    category: 'Laboratories & Research',
    image: '/assets/campus-photos/dept-15.jpg',
    alt: 'Mechanical engineering and ITI lathe workshop at S.E.A. College',
    caption:
      'Industrial lathe machines and manufacturing workshop serving Mechanical Engineering and ITI students.',
    scopeNote: 'Mechanical & ITI Workshops',
  },
  {
    id: 'gal-7',
    title: 'Central Library & Academic Reading Hall',
    category: 'Library & Learning',
    image: '/assets/campus-photos/dept-10.jpg',
    alt: 'Students studying in the S.E.A. Central Library reading hall with book stacks',
    caption:
      'Spacious Central Library reading room lined with engineering, science, management, and reference collections.',
    scopeNote: 'Central & Institutional Libraries',
  },
  {
    id: 'gal-8',
    title: 'Auditorium & Seminar Lecture Hall',
    category: 'Library & Learning',
    image: '/assets/campus-photos/dept-17.jpg',
    alt: 'Students in uniform blazers attending a seminar in the S.E.A. Auditorium',
    caption:
      'Students attending an academic seminar and orientation session in the campus auditorium.',
    scopeNote: 'Seminar & Conference Halls',
  },
  {
    id: 'gal-9',
    title: 'Outdoor Volleyball Courts & Team Athletics',
    category: 'Sports & Hostels',
    image: '/assets/campus-photos/dept-13.jpg',
    alt: 'Students competing on the outdoor volleyball court at S.E.A. campus',
    caption:
      'Inter-departmental volleyball match on the outdoor sports courts at the K.R. Puram campus.',
    scopeNote: 'Campus Sports Grounds',
  },
  {
    id: 'gal-10',
    title: 'Indoor Basketball & Multi-Sport Stadium',
    category: 'Sports & Hostels',
    image: '/assets/campus-photos/dept-14.jpg',
    alt: 'Indoor basketball arena with gallery balconies at S.E.A. campus',
    caption:
      'Indoor sports stadium equipped for basketball, badminton, and inter-collegiate tournaments.',
    scopeNote: 'Indoor Sports Complex',
  },
  {
    id: 'gal-11',
    title: 'On-Campus Fitness & Weight Training Gymnasium',
    category: 'Sports & Hostels',
    image: '/assets/campus-photos/dept-19.jpg',
    alt: 'Students training in the S.E.A. on-campus fitness gymnasium',
    caption:
      'Multi-station fitness gymnasium accessible to students and on-campus hostel residents.',
    scopeNote: 'Student Fitness Centre',
  },
  {
    id: 'gal-12',
    title: 'Annual Cultural Dance & Stage Performance',
    category: 'Events & Culture',
    image: '/assets/campus-photos/dept-20.jpg',
    alt: 'Students performing traditional dance on the S.E.A. Auditorium stage',
    caption:
      'Vibrant cultural dance ensemble performing on the main auditorium stage during the annual college festival.',
    scopeNote: 'Cultural & Student Forums',
  },
];

export const CAMPUS_LIFE_PAGES: Record<string, CampusFacilityPage> = {
  '/campus-life/infrastructure': {
    route: '/campus-life/infrastructure',
    slug: 'infrastructure',
    title: 'Campus Infrastructure',
    subtitle:
      'Academic Blocks, Departmental Laboratories, Seminar Halls & Multidisciplinary Learning Spaces',
    category: 'Infrastructure & Learning',
    bannerImage: '/assets/campus-photos/sea-campus-aerial.jpg',
    bannerAlt: 'Aerial view of S.E.A. Group of Institutions infrastructure in K.R. Puram, Bengaluru',
    galleryPhotos: [
      { src: '/assets/campus-photos/dept-16.jpg', caption: 'SEACET Central Rotunda & Landscaped Quadrangle' },
      { src: '/assets/campus-photos/dept-2.jpg', caption: 'Main Academic & Degree Block Facade' },
      { src: '/assets/campus-photos/dept-4.jpg', caption: 'SEA College of Science, Commerce, Arts & Education Portico' },
    ],
    introduction: [
      'Situated in Ekta Nagar, Basavanapura, K.R. Puram, Bengaluru, the S.E.A. Group of Institutions operates an integrated multidisciplinary campus designed to support schooling, pre-university, undergraduate, postgraduate, and doctoral education.',
      'Purpose-built academic blocks house S.E.A. College of Engineering & Technology (SEACET), SEA College of Nursing, SEA College of Law, SEA College of Science, Commerce & Arts, SEA College of Management Studies, and our school/PU wings, linked by tree-lined avenues and shared student amenities.',
    ],
    highlights: [
      'Spacious, well-ventilated lecture halls and audio-visual smart classrooms',
      'Specialized engineering laboratories across CSE, ISE, AI & ML, ECE, Mechanical, Civil, and Agricultural Engineering',
      'Dedicated Nursing Foundation, Clinical Nutrition, and Moot Court practice halls',
      'Acoustically treated seminar halls and main auditorium for academic conferences and cultural convocations',
      'Hygienic campus cafeteria and fleet of institutional buses serving major Bengaluru corridors',
    ],
    practicalInfo: [
      {
        label: 'Campus Location',
        value: 'Ekta Nagar, Basavanapura, Virgonagar P.O., K.R. Puram, Bengaluru – 560049',
      },
      {
        label: 'Academic Blocks',
        value: 'Dedicated blocks for Engineering (SEACET), Degree & Management, Nursing, Law, PU & Schools',
      },
      {
        label: 'Transit Access',
        value: 'Connected via K.R. Puram Railway Station, Whitefield/KR Puram Metro corridor, and college bus routes',
      },
    ],
    relatedRoutes: [
      { label: 'Digital Infrastructure', href: '/campus-life/digital-infrastructure' },
      { label: 'Library & Learning Resources', href: '/campus-life/library' },
      { label: 'Accommodation & Hostels', href: '/campus-life/hostels' },
    ],
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/page/overview',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-17',
    },
  },
  '/campus-life/digital-infrastructure': {
    route: '/campus-life/digital-infrastructure',
    slug: 'digital-infrastructure',
    title: 'Digital Infrastructure',
    subtitle: 'Wi-Fi-Enabled Campus, High-Performance Computing Clusters & E-Learning Resources',
    category: 'Infrastructure & Learning',
    bannerImage: '/assets/campus-photos/dept-11.jpg',
    bannerAlt: 'Digital and electronics laboratory infrastructure at S.E.A. College of Engineering and Technology',
    galleryPhotos: [
      { src: '/assets/departments/cse.jpg', caption: 'Software Engineering & Programming Clusters' },
      { src: '/assets/campus-photos/dept-11.jpg', caption: 'Electronics & Microcontroller Hardware Lab' },
      { src: '/assets/departments/aiml.jpg', caption: 'AI, Machine Learning & Data Science Workstations' },
    ],
    introduction: [
      'Modern technical and professional education relies on robust digital connectivity. S.E.A. Group of Institutions maintains networked computer laboratories, ICT-enabled smart classrooms, and digital library portals across its constituent colleges.',
      'At SEACET and SEA Degree College, dedicated computing centres support software development, artificial intelligence and data science workflows, CAD/CAM simulation, VLSI design, and online examination readiness.',
    ],
    highlights: [
      'Wi-Fi-enabled academic zones and dedicated internet browsing centres in the libraries',
      'Multi-lab computing infrastructure running Linux and Windows developer environments',
      'ICT-equipped smart classrooms with projection and digital teaching aids',
      'Access to VTU e-Consortium, IEEE Xplore, and RGUHS HELINET digital scholarly databases',
    ],
    practicalInfo: [
      {
        label: 'Computing Labs',
        value: 'Dedicated labs for CSE, ISE, AI & ML, AI & DS, Cyber Security, BCA, and M.Sc (CS)',
      },
      {
        label: 'Digital Consortia',
        value: 'VTU Consortium (Engineering/MBA) & RGUHS HELINET (Nursing/Health Sciences)',
      },
      {
        label: 'Classroom Tech',
        value: 'Audio-visual projection systems for technical lectures and seminar presentations',
      },
    ],
    relatedRoutes: [
      { label: 'Campus Infrastructure', href: '/campus-life/infrastructure' },
      { label: 'Library & Learning Resources', href: '/campus-life/library' },
      { label: 'B.E. Programmes', href: '/academics/ug/be' },
    ],
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-17',
    },
  },
  '/campus-life/hostels': {
    route: '/campus-life/hostels',
    slug: 'hostels',
    title: 'Accommodation & Hostels',
    subtitle:
      'Safe, Supervised On-Campus Residential Facilities for Boys, Girls & International Students',
    category: 'Student Living & Culture',
    bannerImage: '/assets/campus-photos/dept-3.jpg',
    bannerAlt: 'On-campus residential blocks and tree-lined avenues at S.E.A. Group of Institutions',
    galleryPhotos: [
      { src: '/assets/campus-photos/dept-3.jpg', caption: 'Morning View Along the Residential & Academic Avenue' },
      { src: '/assets/campus-photos/dept-8.jpg', caption: 'Landscaped Campus Gardens & Student Recreation Courtyards' },
      { src: '/assets/campus-photos/dept-19.jpg', caption: 'On-Campus Fitness Gymnasium for Resident Students' },
    ],
    introduction: [
      'S.E.A. Group of Institutions provides separate, well-maintained on-campus residential hostels for boys and girls, as well as dedicated accommodation options supporting national and international students.',
      'Designed as a disciplined and supportive home away from home, the hostels offer furnished shared rooms, nutritious dining halls, study hours, recreational spaces, and round-the-clock warden and security supervision.',
    ],
    highlights: [
      'Separate on-campus residential blocks for Men and Women with 24/7 security and CCTV surveillance',
      'Furnished shared rooms equipped with cots, study tables, chairs, and storage cupboards',
      'Hygienic hostel mess and campus cafeteria serving balanced vegetarian and non-vegetarian meals',
      'Dedicated residential wardens, anti-ragging compliance, and on-call medical support',
      'Quiet evening study hours and access to campus sports and gymnasium facilities',
    ],
    practicalInfo: [
      {
        label: 'Eligibility',
        value: 'Open to full-time students across Engineering, Nursing, Law, Degree, Management & PU colleges',
      },
      {
        label: 'Room Configuration',
        value: 'Shared occupancy rooms (enquire with Hostel Office for current tariff and room options)',
      },
      {
        label: 'Safety & Supervision',
        value: '24/7 security guards, resident wardens, and strict zero-tolerance anti-ragging policy',
      },
    ],
    relatedRoutes: [
      { label: 'Student Support & Safety', href: '/campus-life/student-support' },
      { label: 'Sports & Fitness', href: '/campus-life/sports' },
      { label: 'Admission Enquiry', href: '/admissions/enquiry' },
    ],
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-17',
    },
  },
  '/campus-life/sports': {
    route: '/campus-life/sports',
    slug: 'sports',
    title: 'Sports & Fitness',
    subtitle: 'Outdoor Athletics Grounds, Indoor Stadium, Cricket Nets & Multi-Station Gymnasium',
    category: 'Student Living & Culture',
    bannerImage: '/assets/campus-photos/dept-13.jpg',
    bannerAlt: 'Outdoor volleyball and sports courts at S.E.A. Group of Institutions',
    galleryPhotos: [
      { src: '/assets/campus-photos/dept-13.jpg', caption: 'Outdoor Volleyball Courts' },
      { src: '/assets/campus-photos/dept-14.jpg', caption: 'Indoor Basketball & Multi-Sport Stadium' },
      { src: '/assets/campus-photos/dept-12.jpg', caption: 'Campus Cricket Practice Nets' },
    ],
    introduction: [
      'Physical fitness, teamwork, and sportsmanship have been integral to the S.E.A. Group ethos since its founding. The expansive K.R. Puram campus features dedicated outdoor playing fields, indoor stadium courts, cricket nets, and an on-campus fitness gymnasium.',
      'Guided by qualified Physical Education Directors, S.E.A. students regularly compete in VTU inter-collegiate tournaments, Bengaluru North University sports meets, and state-level athletics events.',
    ],
    highlights: [
      'Expansive outdoor grounds for Cricket, Football, and Track & Field athletics',
      'Dedicated courts for Basketball, Volleyball, Throwball, Kabaddi, and Kho-Kho',
      'Indoor stadium and recreation facilities for Basketball, Badminton, Table Tennis, Chess, and Carrom',
      'On-campus Multi-Gymnasium accessible to students and hostel residents',
      'Annual Inter-Collegiate and Intramural Sports Meets across the S.E.A. Group',
    ],
    practicalInfo: [
      {
        label: 'Outdoor Facilities',
        value: 'Cricket ground & nets, Football field, Volleyball courts, Athletics track',
      },
      {
        label: 'Indoor Facilities',
        value: 'Indoor Basketball/Badminton Stadium, Table Tennis, Chess, Carrom & Fitness Gym',
      },
      {
        label: 'University Competitions',
        value: 'Active participation in VTU, Bengaluru North University, RGUHS, and KSLU sports tournaments',
      },
    ],
    relatedRoutes: [
      { label: 'Clubs & Cultural Activities', href: '/campus-life/clubs-culture' },
      { label: 'Campus Gallery', href: '/campus-life/gallery' },
      { label: 'Upcoming Events', href: '/blog/events/upcoming' },
    ],
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-17',
    },
  },
  '/campus-life/library': {
    route: '/campus-life/library',
    slug: 'library',
    title: 'Library & Learning Resources',
    subtitle: 'Central & Institutional Libraries, Digital Consortia & Quiet Study Halls',
    category: 'Infrastructure & Learning',
    bannerImage: '/assets/campus-photos/dept-10.jpg',
    bannerAlt: 'Central Library reading hall and book stacks at S.E.A. Group',
    galleryPhotos: [
      { src: '/assets/campus-photos/dept-10.jpg', caption: 'Central Library Reading Hall & Reference Stacks' },
      { src: '/assets/campus-photos/dept-17.jpg', caption: 'Academic Seminar & Lecture Hall' },
      { src: '/assets/departments/law.jpg', caption: 'Law & Jurisprudence Statutory Reference Collection' },
    ],
    introduction: [
      'The Central and Institutional Libraries across the S.E.A. Group serve as the intellectual heart of the campus, supporting undergraduate learners, postgraduate scholars, and doctoral researchers.',
      'In addition to extensive print collections of textbooks, reference manuals, statutory reporters, and national/international journals, students enjoy access to digital libraries, e-journals, and computer browsing terminals.',
    ],
    highlights: [
      'Dedicated libraries for Engineering (SEACET), Degree & Management, Nursing, Law, and PU wings',
      'Access to VTU e-Consortium (IEEE, Springer, Elsevier, Taylor & Francis) for engineering and management',
      'Access to RGUHS HELINET digital medical and nursing journals for health science students',
      'Dedicated Law Library housing All India Reporter (AIR), Supreme Court Cases (SCC), and bare acts',
      'Spacious reading halls, digital browsing centres, book-bank schemes, and previous-year question repositories',
    ],
    practicalInfo: [
      {
        label: 'Library Divisions',
        value: 'Lending Section, Reference Hall, Periodicals Wing, and Digital Browsing Centre',
      },
      {
        label: 'Digital Access',
        value: 'VTU Consortium, RGUHS HELINET, DELNET / NDL India resources',
      },
      {
        label: 'Study Environment',
        value: 'Quiet reading halls with extended study hours during university examination periods',
      },
    ],
    relatedRoutes: [
      { label: 'Digital Infrastructure', href: '/campus-life/digital-infrastructure' },
      { label: 'Research Center', href: '/academics/research-center' },
      { label: 'Academics Overview', href: '/academics' },
    ],
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-17',
    },
  },
  '/campus-life/clubs-culture': {
    route: '/campus-life/clubs-culture',
    slug: 'clubs-culture',
    title: 'Clubs & Cultural Activities',
    subtitle: 'Technical Chapters, NSS/NCC Service Units, Cultural Festivals & Student Leadership',
    category: 'Student Living & Culture',
    bannerImage: '/assets/campus-photos/dept-20.jpg',
    bannerAlt: 'Students performing cultural dance on the S.E.A. Auditorium stage',
    galleryPhotos: [
      { src: '/assets/campus-photos/dept-20.jpg', caption: 'Annual Cultural Festival Stage Performance' },
      { src: '/assets/campus-photos/dept-21.jpg', caption: 'Student Campus Bonfire & Musical Evening' },
      { src: '/assets/campus-photos/dept-17.jpg', caption: 'Auditorium Symposiums & Student Inductions' },
    ],
    introduction: [
      'Education at S.E.A. Group of Institutions extends far beyond the lecture hall. Students participate in departmental technical associations, cultural ensembles, literary clubs, and social service units that nurture confidence, creativity, and civic responsibility.',
      'Annual inter-collegiate cultural festivals, engineering symposiums, ethnic days, and national commemorative events bring together students from every state and discipline on campus.',
    ],
    highlights: [
      'Departmental Technical Forums & Coding/Robotics interest groups at SEACET',
      'National Service Scheme (NSS), Youth Red Cross, and community outreach initiatives',
      'Annual Cultural Fest showcasing classical and contemporary music, dance, theatre, and fine arts',
      'Moot Court Society & Legal Aid Clinic activities at SEA College of Law',
      'Public Health & Nutrition awareness drives led by Nursing and Clinical Nutrition students',
    ],
    practicalInfo: [
      {
        label: 'Student Forums',
        value: 'Departmental Technical Associations, Cultural Committee, Literary & Debate Forum',
      },
      {
        label: 'Social Outreach',
        value: 'NSS blood donation camps, rural literacy drives, environmental plantation & legal aid',
      },
      {
        label: 'Venues',
        value: 'Main Campus Auditorium, Open-Air Stage, and Departmental Seminar Halls',
      },
    ],
    relatedRoutes: [
      { label: 'College Events', href: '/blog/events' },
      { label: 'Campus Gallery', href: '/campus-life/gallery' },
      { label: 'Sports & Fitness', href: '/campus-life/sports' },
    ],
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-17',
    },
  },
  '/campus-life/student-support': {
    route: '/campus-life/student-support',
    slug: 'student-support',
    title: 'Student Support & Safety',
    subtitle: 'Mentorship, Anti-Ragging Compliance, Medical Care, Transport & Grievance Redressal',
    category: 'Student Living & Culture',
    bannerImage: '/assets/campus-photos/dept-7.jpg',
    bannerAlt: 'S.E.A. Group campus bus transport and safe student environment',
    galleryPhotos: [
      { src: '/assets/campus-photos/dept-7.jpg', caption: 'Institutional Bus Fleet Serving Bengaluru Routes' },
      { src: '/assets/campus-photos/dept-9.jpg', caption: 'Faculty Proctor & Student Mentorship Culture' },
      { src: '/assets/campus-photos/dept-6.jpg', caption: 'Inclusive & Safe Multidisciplinary Campus Community' },
    ],
    introduction: [
      'Student wellbeing, campus safety, and academic mentorship are foundational priorities across the S.E.A. Group of Institutions.',
      'Every student is assigned a faculty mentor/proctor for academic and personal guidance, while statutory cells—including the Anti-Ragging Committee, Internal Complaints Committee (ICC), and Student Grievance Redressal Cell—ensure a dignified, inclusive, and secure learning environment.',
    ],
    highlights: [
      'Faculty Proctor / Mentor system monitoring individual academic progress and wellbeing',
      'Strict Zero-Tolerance Anti-Ragging Policy in compliance with UGC, AICTE, VTU, RGUHS, and BCI mandates',
      '24/7 gated campus security, CCTV coverage, and supervised hostel wards',
      'On-campus medical care room with qualified healthcare support and 24/7 emergency ambulance readiness',
      'Institutional bus fleet connecting major residential hubs across Bengaluru',
      'Scholarship guidance desk assisting eligible students with State (SSP) and National (NSP) government scholarships',
    ],
    practicalInfo: [
      {
        label: 'Statutory Committees',
        value: 'Anti-Ragging Cell, Internal Complaints Committee (POSH), SC/ST/OBC Cell & Grievance Cell',
      },
      {
        label: 'Medical & Emergency',
        value: 'On-campus first-aid/medical care & round-the-clock ambulance tie-up',
      },
      {
        label: 'Scholarship Assistance',
        value: 'Support for Karnataka SSP, National Scholarship Portal (NSP), and minority/merit schemes',
      },
    ],
    relatedRoutes: [
      { label: 'Accommodation & Hostels', href: '/campus-life/hostels' },
      { label: 'Fees & Financial Aid', href: '/admissions/fees-financial-aid' },
      { label: 'Contact Support', href: '/about/contact' },
    ],
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-17',
    },
  },
};

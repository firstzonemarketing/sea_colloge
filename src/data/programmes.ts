import { EditorialMetadata } from '../config/siteConfig';

export type ExplorerCategory =
  | 'All'
  | 'Engineering'
  | 'Management'
  | 'Science & Commerce'
  | 'Arts'
  | 'Law'
  | 'Nursing'
  | 'Research'
  | 'Pre-University'
  | 'Other Programmes';

export const EXPLORER_CATEGORIES: ExplorerCategory[] = [
  'All',
  'Engineering',
  'Management',
  'Science & Commerce',
  'Arts',
  'Law',
  'Nursing',
  'Research',
  'Pre-University',
  'Other Programmes',
];

export type AcademicLevel =
  | 'Undergraduate (B.E.)'
  | 'Undergraduate Degree'
  | 'Undergraduate Law'
  | 'Undergraduate Nursing'
  | 'Postgraduate (M.Tech)'
  | 'Postgraduate (MBA)'
  | 'Postgraduate Degree'
  | 'Postgraduate Nursing'
  | 'Postgraduate Diploma'
  | 'Doctoral / Research'
  | 'Pre-University (Class XI–XII)';

export interface ProgrammeItem {
  id: string;
  slug: string;
  name: string;
  shortCode: string;
  explorerCategory: Exclude<ExplorerCategory, 'All'>;
  academicLevel: AcademicLevel;
  academicSectionRoute: string; // e.g., /academics/ug/be
  institutionId: string;
  offeringInstitution: string;
  verifiedAffiliation: string;
  duration?: string; // Only when verified by official source
  eligibilitySummary: string;
  shortDescription: string;
  overview: string[];
  specialisationsOrStreams?: string[];
  academicFacilities: string[];
  learningOpportunities: string[];
  careerPaths: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
  metadata: EditorialMetadata;
}

export interface AcademicPageConfig {
  route: string;
  slug: string;
  groupLabel: 'Undergraduate Programmes' | 'Postgraduate Programmes' | 'Additional Academic Programmes';
  title: string;
  officialSubtitle: string;
  offeringInstitution: string;
  offeringInstitutionRoute: string;
  verifiedAffiliation: string;
  duration?: string;
  eligibility: string;
  introduction: string[];
  programmeHighlights: string[];
  specialisations: { name: string; slug: string; note?: string }[];
  academicFacilities: string[];
  learningOpportunities: string[];
  careerPaths: string[];
  faqs: { question: string; answer: string }[];
  relatedRoutes: { label: string; href: string }[];
  bannerImage: string;
  bannerAlt: string;
  metadata: EditorialMetadata;
}

export const PROGRAMMES: ProgrammeItem[] = [
  // 1. CSE
  {
    id: 'be-cse',
    slug: 'be-computer-science-engineering',
    name: 'Computer Science & Engineering',
    shortCode: 'B.E. CSE',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC with Physics and Mathematics as compulsory subjects along with Chemistry / Computer Science / Electronics / Biology (as per VTU & KEA norms).',
    shortDescription: 'Core undergraduate engineering programme covering algorithms, operating systems, cloud computing, full-stack architecture, and distributed systems.',
    overview: [
      'The Bachelor of Engineering in Computer Science & Engineering at SEACET provides a rigorous foundation in computational theory, software engineering, database architecture, computer networks, and modern systems design.',
      'Following the Visvesvaraya Technological University (VTU) outcome-based curriculum, students progress from foundational programming and data structures to full-stack product engineering, cloud deployment, and industry-mentored capstone projects.',
    ],
    academicFacilities: [
      'Dedicated Programming, Data Structures, Algorithms, and Cloud Computing Laboratories',
      'High-speed campus network and Linux/Windows development clusters',
      'SEACET Central Library with IEEE, Springer, and VTU Consortium digital access',
    ],
    learningOpportunities: [
      'Semester-long technical mini-projects and final-year industry capstone project',
      'Coding club hackathons, technical symposiums, and VTU inter-collegiate competitions',
      'Early placement readiness training starting from the third semester',
    ],
    careerPaths: [
      'Software Development Engineer (SDE)',
      'Cloud & DevOps Architect',
      'Systems & Enterprise Application Engineer',
      'Database & Backend Platform Specialist',
    ],
    faqs: [
      {
        question: 'Which university confers the B.E. Computer Science & Engineering degree?',
        answer: 'The degree is conferred by Visvesvaraya Technological University (VTU), Belagavi, and the programme is approved by AICTE, New Delhi.',
      },
      {
        question: 'What entrance pathways are accepted for B.E. admission?',
        answer: 'Admissions follow Government of Karnataka / KEA (KCET), COMEDK, and institutional management quota norms in accordance with VTU eligibility guidelines. Contact the Admissions Desk for current intake details.',
      },
    ],
    image: '/assets/departments/cse.jpg',
    imageAlt: 'SEACET Computer Science and Engineering computing laboratory illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 2. ISE
  {
    id: 'be-ise',
    slug: 'be-information-science-engineering',
    name: 'Information Science & Engineering',
    shortCode: 'B.E. ISE',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC with Physics and Mathematics and required technical/science subjects as per VTU & Government of Karnataka norms.',
    shortDescription: 'Focused on enterprise information systems, software engineering, data management, web technologies, and information security.',
    overview: [
      'The B.E. in Information Science & Engineering at SEACET prepares engineers to architect, manage, and secure large-scale information systems and enterprise software platforms.',
      'Students master software design patterns, relational and NoSQL data stores, cloud services, and human-computer interaction through laboratory coursework and applied projects.',
    ],
    academicFacilities: [
      'Information Systems, Web Engineering, and Database Management Laboratories',
      'Departmental seminar hall and project incubation workbenches',
    ],
    learningOpportunities: [
      'Full-stack application development workshops and industry internships',
      'Participation in national technical symposiums and coding bootcamps',
    ],
    careerPaths: [
      'Information Systems Engineer',
      'Full-Stack Software Developer',
      'Business Intelligence & Data Analyst',
      'Quality Assurance & DevOps Engineer',
    ],
    faqs: [
      {
        question: 'How does Information Science & Engineering relate to Computer Science?',
        answer: 'While sharing strong foundations in programming and algorithms, ISE places additional emphasis on enterprise information architecture, software lifecycle management, and data engineering.',
      },
    ],
    image: '/assets/departments/ise.jpg',
    imageAlt: 'SEACET Information Science and Engineering laboratory illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 3. ECE
  {
    id: 'be-ece',
    slug: 'be-electronics-communication-engineering',
    name: 'Electronics & Communication Engineering',
    shortCode: 'B.E. ECE',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC with Physics and Mathematics as compulsory subjects and Chemistry / Electronics / Computer Science as per VTU norms.',
    shortDescription: 'Bridging analog and digital electronics, VLSI design, embedded microcontrollers, signal processing, and wireless communication networks.',
    overview: [
      'The B.E. in Electronics & Communication Engineering at SEACET equips students with deep technical competency in semiconductor devices, integrated circuits, digital signal processing, microwave engineering, and embedded systems.',
      'Supported by specialized hardware laboratories and an M.Tech/Research pathway in VLSI Design, the department prepares graduates for both core semiconductor/telecom industries and software systems roles.',
    ],
    academicFacilities: [
      'Analog & Digital Electronics, Microcontroller, DSP, VLSI, and Microwave Laboratories',
      'EDA simulation suites and hardware prototyping benches',
    ],
    learningOpportunities: [
      'Hands-on PCB design, IoT sensor integration, and embedded firmware workshops',
      'Access to VTU-recognised departmental research guidance',
    ],
    careerPaths: [
      'Embedded Systems Engineer',
      'VLSI & Semiconductor Design Engineer',
      'Telecommunications & RF Network Engineer',
      'IoT Hardware & Firmware Specialist',
    ],
    faqs: [
      {
        question: 'Does SEACET offer postgraduate progression in Electronics?',
        answer: 'Yes, SEACET offers an M.Tech in VLSI Design and Embedded Systems as well as VTU-recognised doctoral research in ECE.',
      },
    ],
    image: '/assets/campus-photos/dept-11.jpg',
    imageAlt: 'SEACET Electronics and Communication Engineering wing illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 4. Mechanical Engineering
  {
    id: 'be-mech',
    slug: 'be-mechanical-engineering',
    name: 'Mechanical Engineering',
    shortCode: 'B.E. ME',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC in Science with Physics, Mathematics, and Chemistry/optional technical subject as per VTU regulations.',
    shortDescription: 'Core mechanical design, thermal sciences, CAD/CAM automation, manufacturing technology, and materials engineering.',
    overview: [
      'The B.E. in Mechanical Engineering at SEACET grounds students in kinematics, thermodynamics, fluid mechanics, finite element analysis, and advanced manufacturing processes.',
      'Extensive workshop and laboratory sessions enable students to design, simulate, fabricate, and test mechanical assemblies and energy systems.',
    ],
    academicFacilities: [
      'Machine Shop, Foundry & Forging, Thermal Engineering, Fluid Mechanics, and Metrology Labs',
      'CAD/CAM/CAE Design Studio for 3D solid modelling and structural simulation',
    ],
    learningOpportunities: [
      'Industrial visits to manufacturing plants around Bengaluru and Peenya/Whitefield industrial corridors',
      'Fabrication projects in automotive, robotics, and renewable energy systems',
    ],
    careerPaths: [
      'Mechanical Design & CAD/CAE Engineer',
      'Manufacturing & Production Operations Engineer',
      'Thermal & HVAC Systems Engineer',
      'Automotive & Aerospace R&D Engineer',
    ],
    faqs: [
      {
        question: 'Are research facilities available in the Mechanical Engineering department?',
        answer: 'Yes, Mechanical Engineering is one of SEACET’s VTU-recognised research departments supporting advanced material and thermal engineering studies.',
      },
    ],
    image: '/assets/campus-photos/dept-15.jpg',
    imageAlt: 'SEACET Mechanical Engineering academic and workshop block illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 5. Civil Engineering
  {
    id: 'be-civil',
    slug: 'be-civil-engineering',
    name: 'Civil Engineering',
    shortCode: 'B.E. Civil',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC with Physics, Mathematics, and Chemistry as per VTU norms.',
    shortDescription: 'Structural engineering, geotechnical analysis, surveying, environmental systems, and sustainable urban infrastructure.',
    overview: [
      'The B.E. in Civil Engineering at SEACET prepares engineers to plan, design, construct, and maintain resilient infrastructure—including buildings, transportation corridors, water resource systems, and smart urban developments.',
      'Students gain practical mastery in modern surveying instruments, concrete and highway materials testing, structural CAD software, and environmental engineering.',
    ],
    academicFacilities: [
      'Strength of Materials, Concrete & Highway Material Testing, Geotechnical, and Environmental Engineering Labs',
      'Total Station surveying equipment and structural design CAD laboratory',
    ],
    learningOpportunities: [
      'Field survey camps, construction site visits, and structural modelling workshops',
      'Preparation support for public sector engineering services and infrastructure consulting',
    ],
    careerPaths: [
      'Structural Design Engineer',
      'Construction Project & Site Manager',
      'Geotechnical & Highway Infrastructure Engineer',
      'Urban Planning & Environmental Consultant',
    ],
    faqs: [
      {
        question: 'Does the Civil Engineering curriculum include field surveying practice?',
        answer: 'Yes, students complete hands-on surveying practicals using Theodolites and Total Stations alongside structural CAD coursework.',
      },
    ],
    image: '/assets/departments/civil.jpg',
    imageAlt: 'SEACET Civil Engineering infrastructure and testing block illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 6. AI & ML
  {
    id: 'be-aiml',
    slug: 'be-artificial-intelligence-machine-learning',
    name: 'Artificial Intelligence & Machine Learning',
    shortCode: 'B.E. AI & ML',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC with Physics and Mathematics as compulsory subjects and Chemistry / Computer Science / Electronics as per VTU norms.',
    shortDescription: 'Specialised B.E. programme in deep learning, neural networks, natural language processing, computer vision, and intelligent systems.',
    overview: [
      'The B.E. in Artificial Intelligence & Machine Learning at SEACET addresses the surging global demand for engineers capable of building intelligent, autonomous, and data-driven software systems.',
      'Combining mathematical foundations in linear algebra, probability, and optimization with deep learning architectures, computer vision, and NLP, students learn to train, evaluate, and deploy production AI models.',
    ],
    academicFacilities: [
      'AI & Machine Learning Computing Lab equipped for Python, PyTorch, and TensorFlow workflows',
      'Collaborative project workspace for applied AI research',
    ],
    learningOpportunities: [
      'Applied machine learning capstones in healthcare, agriculture, and smart mobility',
      'Technical seminars on generative AI, ethical AI governance, and model deployment',
    ],
    careerPaths: [
      'Machine Learning Engineer',
      'AI Research & Applied Scientist',
      'Computer Vision / NLP Engineer',
      'Intelligent Automation & MLOps Specialist',
    ],
    faqs: [
      {
        question: 'How is AI & ML different from AI & Data Science?',
        answer: 'AI & ML focuses deeply on learning algorithms, neural network architectures, autonomous agents, and pattern recognition, whereas AI & Data Science places stronger emphasis on statistical modelling, big data pipelines, and predictive analytics.',
      },
    ],
    image: '/assets/departments/aiml.jpg',
    imageAlt: 'SEACET Artificial Intelligence and Machine Learning laboratory illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 7. CSE — IoT & Cyber Security including Blockchain Technology
  {
    id: 'be-cse-iot-cyber-blockchain',
    slug: 'be-cse-iot-cyber-security-blockchain',
    name: 'Computer Science & Engineering — Internet of Things and Cyber Security including Blockchain Technology',
    shortCode: 'B.E. CSE (IoT, Cyber Security & Blockchain)',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC with Physics and Mathematics and required science/technical subjects as per VTU norms.',
    shortDescription: 'Interdisciplinary CSE degree uniting connected IoT architectures, network defence, cryptography, and decentralised blockchain systems.',
    overview: [
      'Offered at SEACET under the VTU emerging-technology framework, the B.E. in Computer Science & Engineering — Internet of Things and Cyber Security including Blockchain Technology integrates core computer science with edge computing, ethical security engineering, and distributed ledger protocols.',
      'Students learn to design secure connected devices, conduct vulnerability assessments, implement cryptographic protocols, and build smart contracts.',
    ],
    academicFacilities: [
      'Network Security, Cryptography, and IoT Sensor Prototyping Laboratories',
      'Dedicated computing clusters for blockchain and distributed systems simulation',
    ],
    learningOpportunities: [
      'Capture-The-Flag (CTF) cybersecurity exercises and IoT hardware-software integration projects',
      'Smart contract auditing and secure cloud architecture workshops',
    ],
    careerPaths: [
      'Cyber Security Analyst & Security Architect',
      'IoT Solutions & Edge Computing Engineer',
      'Blockchain & Distributed Ledger Developer',
      'Network Defence & Penetration Testing Specialist',
    ],
    faqs: [
      {
        question: 'Does this programme cover core Computer Science subjects as well?',
        answer: 'Yes. Students complete core CSE subjects—data structures, operating systems, DBMS, and computer networks—alongside specialised courses in IoT, Cyber Security, and Blockchain.',
      },
    ],
    image: '/assets/departments/cyber-iot.jpg',
    imageAlt: 'SEACET IoT, Cyber Security and Blockchain computing laboratory illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 8. Agricultural Engineering
  {
    id: 'be-agri',
    slug: 'be-agricultural-engineering',
    name: 'Agricultural Engineering',
    shortCode: 'B.E. Agricultural Engg.',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC with Physics, Chemistry, Mathematics / Biology / Agriculture as per VTU and KEA eligibility norms.',
    shortDescription: 'Applying engineering principles to soil and water conservation, precision irrigation, farm machinery, and post-harvest food processing.',
    overview: [
      'The B.E. in Agricultural Engineering at SEACET combines mechanical, civil, biological, and environmental engineering principles to modernise agricultural productivity and sustainable resource management.',
      'Coursework covers farm machinery design, micro-irrigation and watershed engineering, renewable ag-energy, and post-harvest processing technologies.',
    ],
    academicFacilities: [
      'Soil & Water Engineering, Farm Machinery, and Post-Harvest Processing Laboratories',
      'Field demonstration plots and surveying equipment on the green K.R. Puram campus',
    ],
    learningOpportunities: [
      'Field visits to agricultural research stations, food processing parks, and watershed projects',
      'Interdisciplinary projects in smart IoT-enabled precision irrigation',
    ],
    careerPaths: [
      'Agricultural & Irrigation Systems Engineer',
      'Farm Machinery & Agri-Tech Design Engineer',
      'Food Processing & Post-Harvest Technologist',
      'Watershed & Rural Development Officer',
    ],
    faqs: [
      {
        question: 'What industries recruit Agricultural Engineering graduates?',
        answer: 'Graduates pursue careers in tractor and farm equipment manufacturing, micro-irrigation firms, food processing corporations, agri-tech startups, and government agricultural engineering departments.',
      },
    ],
    image: '/assets/departments/agri.jpg',
    imageAlt: 'SEACET Agricultural Engineering campus and laboratory block illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 9. AI & Data Science
  {
    id: 'be-aids',
    slug: 'be-artificial-intelligence-data-science',
    name: 'Artificial Intelligence & Data Science',
    shortCode: 'B.E. AI & DS',
    explorerCategory: 'Engineering',
    academicLevel: 'Undergraduate (B.E.)',
    academicSectionRoute: '/academics/ug/be',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '4 Years (8 Semesters)',
    eligibilitySummary: '10+2 / II PUC with Physics and Mathematics and required science/technical subjects as per VTU norms.',
    shortDescription: 'Statistical modelling, big data engineering, predictive analytics, data visualisation, and applied machine intelligence.',
    overview: [
      'The B.E. in Artificial Intelligence & Data Science at SEACET trains engineers to extract actionable intelligence from massive, complex datasets across technology, finance, healthcare, and retail.',
      'Students build expertise in statistical inference, data warehousing, distributed big-data pipelines, machine learning algorithms, and executive data storytelling.',
    ],
    academicFacilities: [
      'Data Science & Big Data Analytics Computing Laboratory',
      'Modern Python, R, SQL, and distributed data processing environments',
    ],
    learningOpportunities: [
      'Data analytics hackathons, predictive modelling challenges, and industry datasets',
      'Integrated career preparation for data engineering and analytics roles',
    ],
    careerPaths: [
      'Data Scientist & Predictive Modeller',
      'Big Data & Analytics Pipeline Engineer',
      'Machine Learning & AI Solutions Engineer',
      'Business Intelligence Architect',
    ],
    faqs: [
      {
        question: 'Is B.E. AI & Data Science affiliated with VTU?',
        answer: 'Yes, the programme is affiliated with Visvesvaraya Technological University (VTU), Belagavi, and approved by AICTE.',
      },
    ],
    image: '/assets/departments/aids.jpg',
    imageAlt: 'SEACET Artificial Intelligence and Data Science laboratory illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 10. M.Tech — CSE
  {
    id: 'mtech-cse',
    slug: 'mtech-computer-science-engineering',
    name: 'M.Tech — Computer Science & Engineering',
    shortCode: 'M.Tech CSE',
    explorerCategory: 'Engineering',
    academicLevel: 'Postgraduate (M.Tech)',
    academicSectionRoute: '/academics/pg/mtech',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '2 Years (4 Semesters)',
    eligibilitySummary: 'B.E. / B.Tech in relevant Computer Science / Information Science branch with valid GATE / Karnataka PGCET qualification as per VTU norms.',
    shortDescription: 'Advanced postgraduate engineering study in distributed computing, advanced algorithms, cloud security, and research dissertation.',
    overview: [
      'The M.Tech in Computer Science & Engineering at SEACET is designed for engineering graduates seeking deep specialization in advanced computing systems, machine intelligence, and academic or industrial R&D.',
      'The second year emphasises independent research dissertation work, technical paper publication, and industry internship engagement.',
    ],
    academicFacilities: [
      'Dedicated Postgraduate Research & Computing Lab',
      'Access to IEEE Xplore, Springer, and VTU e-Consortium research libraries',
    ],
    learningOpportunities: [
      'Mentorship by Ph.D.-qualified faculty in the VTU-recognised CSE Research Centre',
      'Teaching assistantship and conference publication support',
    ],
    careerPaths: [
      'Senior Software & Systems Architect',
      'R&D Computing Specialist',
      'Academic Faculty & Doctoral Scholar',
      'Lead Data & Cloud Platform Engineer',
    ],
    faqs: [
      {
        question: 'Can M.Tech CSE graduates pursue a Ph.D. at SEACET?',
        answer: 'Yes, SEACET houses a VTU-recognised Research Centre in Computer Science & Engineering for doctoral progression.',
      },
    ],
    image: '/assets/departments/mtech-cse.jpg',
    imageAlt: 'SEACET M.Tech Computer Science research lab illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 11. M.Tech — VLSI Design and Embedded Systems
  {
    id: 'mtech-vlsi',
    slug: 'mtech-vlsi-design-embedded-systems',
    name: 'M.Tech — VLSI Design and Embedded Systems',
    shortCode: 'M.Tech VLSI',
    explorerCategory: 'Engineering',
    academicLevel: 'Postgraduate (M.Tech)',
    academicSectionRoute: '/academics/pg/mtech',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to VTU, Belagavi | Approved by AICTE, New Delhi',
    duration: '2 Years (4 Semesters)',
    eligibilitySummary: 'B.E. / B.Tech in ECE / EEE / Telecommunication / Instrumentation with valid GATE / Karnataka PGCET score as per VTU norms.',
    shortDescription: 'Postgraduate mastery in CMOS VLSI design, ASIC/FPGA verification, RTOS, and advanced embedded system-on-chip architectures.',
    overview: [
      'The M.Tech in VLSI Design and Embedded Systems at SEACET prepares specialists for India’s rapidly expanding semiconductor design, chip verification, and embedded product engineering ecosystem in Bengaluru.',
      'Students work extensively with HDL design, synthesis, physical design concepts, and real-time embedded operating systems.',
    ],
    academicFacilities: [
      'VLSI Design & Embedded Systems Postgraduate Laboratory',
      'FPGA development boards, logic analysers, and EDA simulation environments',
    ],
    learningOpportunities: [
      'Full-year semiconductor or embedded hardware dissertation project',
      'Interaction with the VTU-recognised ECE Research Centre',
    ],
    careerPaths: [
      'VLSI Front-End / RTL Design & Verification Engineer',
      'ASIC Physical Design Engineer',
      'Embedded Firmware & RTOS Architect',
      'FPGA Prototyping Specialist',
    ],
    faqs: [
      {
        question: 'Which undergraduate branches are eligible for M.Tech VLSI Design and Embedded Systems?',
        answer: 'Graduates with B.E./B.Tech in Electronics & Communication, Electrical & Electronics, Instrumentation, or allied electronics branches as specified by VTU/PGCET norms are eligible.',
      },
    ],
    image: '/assets/departments/mtech-vlsi.jpg',
    imageAlt: 'SEACET M.Tech VLSI Design and Embedded Systems laboratory illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 12. MBA (VTU)
  {
    id: 'mba-vtu',
    slug: 'mba-vtu',
    name: 'MBA (VTU)',
    shortCode: 'MBA (VTU)',
    explorerCategory: 'Management',
    academicLevel: 'Postgraduate (MBA)',
    academicSectionRoute: '/academics/pg/mba-vtu',
    institutionId: 'engineering-technology',
    offeringInstitution: 'SEA College of Engineering & Technology',
    verifiedAffiliation: 'Affiliated to Visvesvaraya Technological University (VTU), Belagavi | Approved by AICTE',
    duration: '2 Years (4 Semesters)',
    eligibilitySummary: 'Bachelor’s degree of minimum 3 years duration with at least 50% aggregate marks (45% for reserved categories of Karnataka) and valid PGCET / KMAT / MAT / CAT score as per VTU norms.',
    shortDescription: 'VTU-affiliated Master of Business Administration offered at SEACET with specialisations in Finance, Marketing, Human Resources, and Analytics.',
    overview: [
      'The MBA (VTU) programme is offered by the Department of Management Studies at S.E.A. College of Engineering & Technology (SEACET) and is affiliated to Visvesvaraya Technological University, Belagavi.',
      'Kept distinct from the university-affiliated MBA (BU), the VTU MBA curriculum integrates quantitative decision science, managerial economics, corporate finance, digital marketing, human capital strategy, and a mandatory corporate internship.',
    ],
    academicFacilities: [
      'SEACET Management Seminar Hall & Executive Case Discussion Rooms',
      'Business analytics lab and management library collection',
    ],
    learningOpportunities: [
      'Industry corporate internships, organizational studies, and business plan competitions',
      'Access to SEACET’s VTU-recognised Management Research Centre',
    ],
    careerPaths: [
      'Corporate Finance & Investment Analyst',
      'Marketing & Brand Strategy Manager',
      'Human Resource & Talent Acquisition Partner',
      'Business Operations & Management Consultant',
    ],
    faqs: [
      {
        question: 'How is MBA (VTU) distinct from MBA (BU) at S.E.A. Group?',
        answer: 'MBA (VTU) is offered at SEA College of Engineering & Technology under Visvesvaraya Technological University (VTU), Belagavi, whereas MBA (BU) operates under the university degree/management stream affiliated with Bengaluru North University / Bangalore University framework.',
      },
    ],
    image: '/assets/official/management.jpg',
    imageAlt: 'SEACET Department of Management Studies MBA VTU seminar hall illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 13. MBA (BU)
  {
    id: 'mba-bu',
    slug: 'mba-bu',
    name: 'MBA (BU)',
    shortCode: 'MBA (BU)',
    explorerCategory: 'Management',
    academicLevel: 'Postgraduate (MBA)',
    academicSectionRoute: '/academics/pg/mba-bu',
    institutionId: 'management-studies',
    offeringInstitution: 'SEA College of Management Studies / SEA College of Science, Commerce & Arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University (formerly Bangalore University jurisdiction) | Approved by AICTE',
    duration: '2 Years (4 Semesters)',
    eligibilitySummary: 'Any recognised Bachelor’s degree with minimum 50% aggregate (45% for SC/ST/Cat-I candidates of Karnataka) and valid PGCET / KMAT score.',
    shortDescription: 'University-affiliated Master of Business Administration cultivating strategic leadership, entrepreneurship, finance, and marketing excellence.',
    overview: [
      'The MBA (BU) programme at S.E.A. Group of Institutions provides postgraduate management education under the Bengaluru North University (formerly Bangalore University) academic framework.',
      'Students develop managerial leadership through case studies, live corporate projects, industrial visits, and dual/core functional specialisations.',
    ],
    academicFacilities: [
      'Management Lecture Theatres and Audio-Visual Presentation Studios',
      'Dedicated Management & Commerce Library with business journals',
    ],
    learningOpportunities: [
      'Corporate leadership conclaves, entrepreneurship workshops, and summer internships',
      'Pre-placement communication, group discussion, and executive interview grooming',
    ],
    careerPaths: [
      'Financial Services & Banking Executive',
      'Corporate Marketing & Sales Leader',
      'HR Operations & Organizational Development Specialist',
      'Supply Chain & Enterprise Operations Manager',
    ],
    faqs: [
      {
        question: 'Which entrance tests are accepted for MBA (BU)?',
        answer: 'Karnataka PGCET and KMAT scores are accepted in accordance with university and Government of Karnataka guidelines.',
      },
    ],
    image: '/assets/departments/mba-bu.jpg',
    imageAlt: 'SEA College of Management Studies MBA BU lecture hall illustration',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Management Studies',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 14. Undergraduate Degree Programmes (B.Com, BBA, BCA, B.Sc, B.A.)
  {
    id: 'ug-degree-programmes',
    slug: 'undergraduate-degree-programmes',
    name: 'Undergraduate Degree Programmes (B.Com, BBA, BCA, B.Sc, B.A.)',
    shortCode: 'UG Degree',
    explorerCategory: 'Science & Commerce',
    academicLevel: 'Undergraduate Degree',
    academicSectionRoute: '/academics/ug/degree',
    institutionId: 'science-commerce-arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University | Recognised by Govt. of Karnataka',
    duration: '3 Years (6 Semesters) / As per University Curriculum Framework',
    eligibilitySummary: 'Completion of 10+2 / II PUC or equivalent from a recognised board in the relevant stream.',
    shortDescription: 'Comprehensive undergraduate degree tracks in Commerce (B.Com), Business Administration (BBA), Computer Applications (BCA), Sciences (B.Sc), and Arts (B.A.).',
    overview: [
      'Offered through SEA College of Science, Commerce & Arts, the Undergraduate Degree portfolio provides multidisciplinary pathways tailored to corporate finance, software development, scientific inquiry, business management, and the humanities.',
      'Programmes are affiliated to Bengaluru North University and blend classroom instruction with computer lab practicals, commerce workshops, and placement training.',
    ],
    specialisationsOrStreams: [
      'Bachelor of Commerce (B.Com)',
      'Bachelor of Business Administration (BBA & BBA Aviation)',
      'Bachelor of Computer Applications (BCA)',
      'Bachelor of Science (B.Sc — Computer Science, Physics, Mathematics, Electronics, Biotechnology)',
      'Bachelor of Arts (B.A. — Humanities & Social Sciences)',
    ],
    academicFacilities: [
      'Computer Applications, Electronics, and Basic Science Laboratories',
      'Commerce & Management Resource Library',
    ],
    learningOpportunities: [
      'Tally, financial modelling, full-stack coding, and communication skill certifications',
      'Cultural fests, NSS/NCC service, and campus placement drives',
    ],
    careerPaths: [
      'Chartered Accountancy / Corporate Finance & Audit Associate',
      'Software Application Developer & IT Analyst',
      'Business Development & Operations Executive',
      'Civil Services & Postgraduate Academic Progression',
    ],
    faqs: [
      {
        question: 'Which university is SEA College of Science, Commerce & Arts affiliated with?',
        answer: 'The college is affiliated with Bengaluru North University and recognised by the Government of Karnataka.',
      },
    ],
    image: '/assets/official/degree.jpg',
    imageAlt: 'SEA College of Science, Commerce and Arts degree block illustration',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 15. Law Programmes (LL.B & B.A. LL.B)
  {
    id: 'ug-law-programmes',
    slug: 'law-llb-ba-llb',
    name: 'Law Programmes (3-Year LL.B & 5-Year Integrated B.A. LL.B)',
    shortCode: 'LL.B / B.A. LL.B',
    explorerCategory: 'Law',
    academicLevel: 'Undergraduate Law',
    academicSectionRoute: '/academics/ug/law',
    institutionId: 'law',
    offeringInstitution: 'SEA College of Law',
    verifiedAffiliation: 'Affiliated to Karnataka State Law University (KSLU), Hubballi | Approved by Bar Council of India (BCI)',
    duration: '3 Years (LL.B) / 5 Years (Integrated B.A. LL.B)',
    eligibilitySummary: '5-Year B.A. LL.B: Pass in 10+2 / II PUC. 3-Year LL.B: Graduation in any discipline from a recognised university (minimum marks as per BCI & KSLU norms).',
    shortDescription: 'BCI-approved professional legal education featuring moot court advocacy, constitutional law, corporate jurisprudence, and clinical legal aid.',
    overview: [
      'SEA College of Law offers both the 5-Year Integrated B.A. LL.B for students entering directly after 10+2 and the 3-Year LL.B for graduates from any academic discipline.',
      'Approved by the Bar Council of India (BCI) and affiliated to Karnataka State Law University (KSLU), Hubballi, the curriculum combines substantive and procedural law with practical trial advocacy and chamber internships.',
    ],
    academicFacilities: [
      'Dedicated Moot Court Hall for simulated trial and appellate proceedings',
      'Law Library with AIR, SCC, legal journals, and statutory repositories',
      'Free Legal Aid Clinic serving community legal awareness',
    ],
    learningOpportunities: [
      'National moot court competitions, client counselling, and legal drafting clinics',
      'Internships with High Court advocates, trial courts, corporate legal cells, and NGOs',
    ],
    careerPaths: [
      'Litigation Advocate (Trial Courts, High Courts & Supreme Court)',
      'Corporate Counsel & Legal Compliance Officer',
      'Judicial Services (Civil Judge / Magistrate Examinations)',
      'Public Prosecutor, Legal Policy Researcher & Arbitrator',
    ],
    faqs: [
      {
        question: 'Are both 3-Year LL.B and 5-Year B.A. LL.B approved by the Bar Council of India?',
        answer: 'Yes, SEA College of Law is approved by the Bar Council of India (BCI), New Delhi, and affiliated to Karnataka State Law University (KSLU), Hubballi.',
      },
    ],
    image: '/assets/official/law.jpg',
    imageAlt: 'SEA College of Law Moot Court Hall illustration',
    metadata: {
      sourceUrl: 'https://sealawcollege.edu.in/',
      institutionScope: 'Law College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 16. Nursing Programmes (B.Sc Nursing, Post Basic B.Sc, GNM)
  {
    id: 'ug-nursing-programmes',
    slug: 'nursing-bsc-gnm',
    name: 'Nursing Programmes (B.Sc Nursing, Post Basic B.Sc Nursing & GNM)',
    shortCode: 'B.Sc Nursing / GNM',
    explorerCategory: 'Nursing',
    academicLevel: 'Undergraduate Nursing',
    academicSectionRoute: '/academics/ug/nursing',
    institutionId: 'nursing',
    offeringInstitution: 'SEA College of Nursing',
    verifiedAffiliation: 'Affiliated to RGUHS, Bengaluru | Recognised by INC & KNC',
    duration: '4 Years (B.Sc Nursing) / 2 Years (Post Basic B.Sc) / 3 Years (GNM)',
    eligibilitySummary: 'B.Sc Nursing: 10+2 / II PUC with Physics, Chemistry, Biology, and English (minimum aggregate & KCET/RGUHS norms as applicable).',
    shortDescription: 'Professional clinical nursing education recognised by INC & KNC and affiliated with Rajiv Gandhi University of Health Sciences.',
    overview: [
      'SEA College of Nursing delivers rigorous undergraduate and diploma nursing programmes designed to develop clinical precision, patient advocacy, and healthcare leadership.',
      'Students train in specialized nursing simulation laboratories on campus before completing supervised clinical rotations across multi-speciality partner hospitals in Bengaluru.',
    ],
    academicFacilities: [
      'Nursing Foundation, OBG, Paediatric, Community Health, and Pre-Clinical Science Labs',
      'Health Sciences Library with RGUHS HELINET digital consortium access',
    ],
    learningOpportunities: [
      'Hands-on inpatient and outpatient clinical postings at partner hospitals',
      'Community health camps, Rural/Urban health postings, and basic life support (BLS) training',
    ],
    careerPaths: [
      'Registered Clinical & ICU Nurse in Multi-Speciality Hospitals',
      'Community Health Officer & Public Health Nurse',
      'International Healthcare & Hospital Nursing Specialist',
      'Clinical Instructor & Nursing Administrator',
    ],
    faqs: [
      {
        question: 'Which regulatory councils recognise SEA College of Nursing?',
        answer: 'The college is recognised by the Indian Nursing Council (INC), Karnataka State Nursing Council (KNC), Government of Karnataka, and is affiliated to Rajiv Gandhi University of Health Sciences (RGUHS).',
      },
    ],
    image: '/assets/official/nursing.jpg',
    imageAlt: 'SEA College of Nursing clinical laboratory illustration',
    metadata: {
      sourceUrl: 'https://seanursing.edu.in/',
      institutionScope: 'Nursing College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 17. M.Com
  {
    id: 'pg-mcom',
    slug: 'master-of-commerce-mcom',
    name: 'Master of Commerce (M.Com)',
    shortCode: 'M.Com',
    explorerCategory: 'Science & Commerce',
    academicLevel: 'Postgraduate Degree',
    academicSectionRoute: '/academics/pg/mcom',
    institutionId: 'science-commerce-arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University',
    duration: '2 Years (4 Semesters)',
    eligibilitySummary: 'B.Com / BBA or equivalent commerce/management undergraduate degree from a recognised university as per Bengaluru North University norms.',
    shortDescription: 'Postgraduate commerce programme specialising in corporate accounting, taxation, financial markets, and auditing.',
    overview: [
      'The Master of Commerce (M.Com) at SEA College of Science, Commerce & Arts provides advanced mastery in financial management, international accounting standards, direct and indirect taxation, and quantitative business research.',
      'Ideal for aspiring financial analysts, tax consultants, corporate accountants, and commerce educators, the programme blends analytical rigour with practical case studies.',
    ],
    academicFacilities: [
      'Commerce & Financial Analytics Computer Lab',
      'Postgraduate reference section in the Central Degree Library',
    ],
    learningOpportunities: [
      'Dissertation project on contemporary financial, banking, or taxation topics',
      'Preparation support for UGC-NET / KSET and corporate finance roles',
    ],
    careerPaths: [
      'Corporate Finance & Taxation Specialist',
      'Audit, Risk & Compliance Analyst',
      'Banking & Financial Services Officer',
      'Commerce Lecturer & Academic Researcher',
    ],
    faqs: [
      {
        question: 'Are BBA graduates eligible to apply for M.Com?',
        answer: 'Yes, B.Com and BBA graduates meeting the minimum aggregate marks prescribed by Bengaluru North University are eligible to apply.',
      },
    ],
    image: '/assets/departments/mcom.jpg',
    imageAlt: 'SEA College M.Com commerce library illustration',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 18. M.Sc Nursing
  {
    id: 'pg-msc-nursing',
    slug: 'msc-nursing',
    name: 'M.Sc Nursing',
    shortCode: 'M.Sc Nursing',
    explorerCategory: 'Nursing',
    academicLevel: 'Postgraduate Nursing',
    academicSectionRoute: '/academics/pg/msc-nursing',
    institutionId: 'nursing',
    offeringInstitution: 'SEA College of Nursing',
    verifiedAffiliation: 'Affiliated to RGUHS, Bengaluru | Recognised by INC & KNC',
    duration: '2 Years',
    eligibilitySummary: 'B.Sc Nursing / Post Basic B.Sc Nursing from an INC-recognised institution with minimum 55% aggregate and required clinical experience as per RGUHS/INC norms.',
    shortDescription: 'Postgraduate clinical nursing specialisations preparing nurse educators, clinical researchers, and senior nursing superintendents.',
    overview: [
      'The M.Sc Nursing programme at SEA College of Nursing offers advanced clinical training, nursing research methodology, and healthcare leadership under Rajiv Gandhi University of Health Sciences (RGUHS).',
      'Graduates assume leadership roles as clinical nurse specialists, nursing college faculty, and hospital nursing administrators.',
    ],
    academicFacilities: [
      'Advanced Clinical Simulation & Specialty Nursing Labs',
      'RGUHS HELINET medical research database and dissertation guidance cell',
    ],
    learningOpportunities: [
      'Clinical specialty postings, nursing pedagogy practicum, and independent clinical thesis',
      'Participation in national nursing conferences and healthcare quality audits',
    ],
    careerPaths: [
      'Clinical Nurse Specialist & Nurse Practitioner',
      'Nursing College Professor / Lecturer',
      'Chief Nursing Officer / Hospital Nursing Superintendent',
      'Healthcare Clinical Research Coordinator',
    ],
    faqs: [
      {
        question: 'Is work experience required after B.Sc Nursing for M.Sc Nursing admission?',
        answer: 'Candidates must fulfil the clinical experience and registration requirements prescribed by the Indian Nursing Council (INC) and RGUHS for the active academic session.',
      },
    ],
    image: '/assets/departments/msc-nursing.jpg',
    imageAlt: 'SEA College of Nursing M.Sc Nursing clinical specialty illustration',
    metadata: {
      sourceUrl: 'https://seanursing.edu.in/',
      institutionScope: 'Nursing College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 19. Master of Arts
  {
    id: 'pg-master-of-arts',
    slug: 'master-of-arts-ma',
    name: 'Master of Arts (M.A.)',
    shortCode: 'M.A.',
    explorerCategory: 'Arts',
    academicLevel: 'Postgraduate Degree',
    academicSectionRoute: '/academics/pg/master-of-arts',
    institutionId: 'science-commerce-arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University',
    duration: '2 Years (4 Semesters)',
    eligibilitySummary: 'Bachelor’s degree (B.A. or equivalent graduate degree with relevant subject prerequisites as per Bengaluru North University norms).',
    shortDescription: 'Postgraduate humanities and social sciences study fostering critical scholarship, communication, policy analysis, and academic research.',
    overview: [
      'The Master of Arts (M.A.) programme at SEA College of Science, Commerce & Arts advances critical inquiry, textual and social analysis, research writing, and public discourse.',
      'Offered under the Bengaluru North University curriculum, the programme prepares graduates for academia, civil services, journalism, publishing, and social sector leadership.',
    ],
    academicFacilities: [
      'Humanities & Social Sciences Seminar Room and Central Library Reading Wing',
      'Digital reference terminals and academic writing mentorship',
    ],
    learningOpportunities: [
      'Postgraduate seminars, literary and social research projects, and guest lectures',
      'Guidance for competitive civil service examinations and NET/KSET',
    ],
    careerPaths: [
      'University / College Lecturer & Academic Researcher',
      'Public Policy, Civil Services & Development Sector Officer',
      'Editorial, Communications & Media Specialist',
      'Corporate Communications & Content Strategist',
    ],
    faqs: [
      {
        question: 'How can I confirm the active M.A. subject specialisations offered this academic year?',
        answer: 'Subject specialisations (such as Economics, English, or Political Science) are subject to university intake confirmation each academic year. Submit an enquiry to receive the current session syllabus.',
      },
    ],
    image: '/assets/departments/ma.jpg',
    imageAlt: 'SEA College Master of Arts humanities library illustration',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 20. M.Sc Computer Science
  {
    id: 'pg-msc-cs',
    slug: 'msc-computer-science',
    name: 'M.Sc Computer Science',
    shortCode: 'M.Sc (CS)',
    explorerCategory: 'Science & Commerce',
    academicLevel: 'Postgraduate Degree',
    academicSectionRoute: '/academics/pg/msc-cs',
    institutionId: 'science-commerce-arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University',
    duration: '2 Years (4 Semesters)',
    eligibilitySummary: 'BCA or B.Sc with Computer Science / Mathematics / Electronics as required by Bengaluru North University norms.',
    shortDescription: 'Postgraduate computer science degree emphasising software architecture, data analytics, machine learning, and systems programming.',
    overview: [
      'The Master of Science in Computer Science — M.Sc (CS) — at SEA College of Science, Commerce & Arts provides BCA and B.Sc graduates with advanced postgraduate mastery in algorithms, software systems, artificial intelligence, and cloud applications.',
      'Extensive laboratory sessions and a final-semester software project prepare graduates for high-impact software engineering and academic roles.',
    ],
    academicFacilities: [
      'Postgraduate Computer Science Laboratory with modern development toolchains',
      'Digital library access to computing literature and journals',
    ],
    learningOpportunities: [
      'Full-stack and data science capstone projects',
      'Integration with campus placement drives for IT and software product companies',
    ],
    careerPaths: [
      'Software Engineer & Application Architect',
      'Data Analyst & Machine Learning Developer',
      'Systems Administrator & Cloud Specialist',
      'Computer Science Lecturer & Research Scholar',
    ],
    faqs: [
      {
        question: 'Can BCA graduates apply for M.Sc (CS)?',
        answer: 'Yes, BCA graduates and B.Sc Computer Science graduates meeting Bengaluru North University eligibility norms can apply.',
      },
    ],
    image: '/assets/departments/msc-cs.jpg',
    imageAlt: 'SEA College M.Sc Computer Science laboratory illustration',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 21. Research Center
  {
    id: 'research-phd-msc-engg',
    slug: 'research-phd-programmes',
    name: 'Research Programmes (Ph.D. & M.Sc. Engineering by Research)',
    shortCode: 'Ph.D. / Research',
    explorerCategory: 'Research',
    academicLevel: 'Doctoral / Research',
    academicSectionRoute: '/academics/research-center',
    institutionId: 'research-development-center',
    offeringInstitution: 'SEA College of Engineering & Technology / SEA R&D Center',
    verifiedAffiliation: 'Recognised Research Centres under Visvesvaraya Technological University (VTU), Belagavi',
    eligibilitySummary: 'Master’s degree (M.Tech / M.E. / MBA / M.Sc.) in the relevant discipline and qualification in VTU-ETR (Entrance Test for Research) as per VTU Ph.D. regulations.',
    shortDescription: 'VTU-recognised doctoral and master’s-by-research programmes across Computer Science, ECE, Mechanical Engineering, Chemistry, and Management.',
    overview: [
      'The S.E.A. Research Center at SEACET fosters original scholarly inquiry and applied technological innovation through VTU-recognised research departments in Computer Science & Engineering, Electronics & Communication Engineering, Mechanical Engineering, Chemistry, and MBA.',
      'Scholars work under approved research supervisors with access to computing clusters, material testing facilities, and peer-reviewed digital libraries.',
    ],
    academicFacilities: [
      'VTU-Recognised Departmental Research Laboratories in CSE, ECE, Mechanical, Chemistry & MBA',
      'Plagiarism verification, research methodology coursework, and digital journal access',
    ],
    learningOpportunities: [
      'Doctoral colloquia, international conference presentations, and patent filing guidance',
      'Interdisciplinary research collaboration across the S.E.A. Group',
    ],
    careerPaths: [
      'University Professor & Principal Investigator',
      'Industrial R&D Scientist & Chief Technologist',
      'Postdoctoral Fellow & Policy Advisor',
    ],
    faqs: [
      {
        question: 'How are scholars admitted to Ph.D. programmes at SEACET?',
        answer: 'Admissions are governed by Visvesvaraya Technological University (VTU), Belagavi notifications, including the VTU Entrance Test for Research (VTU-ETR) and supervisor allocation interviews.',
      },
    ],
    image: '/assets/official/research.jpg',
    imageAlt: 'SEA Research Center doctoral computing and laboratory illustration',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'Skill & Research',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 22. Pre-University
  {
    id: 'pre-university-puc',
    slug: 'pre-university-science-commerce-arts',
    name: 'Pre-University Programmes (Science, Commerce & Arts — I & II PUC)',
    shortCode: 'PUC (Class XI–XII)',
    explorerCategory: 'Pre-University',
    academicLevel: 'Pre-University (Class XI–XII)',
    academicSectionRoute: '/academics/pre-university',
    institutionId: 'composite-pu-college',
    offeringInstitution: 'SEA Composite PU College',
    verifiedAffiliation: 'Recognised by the Department of Pre-University Education (DPUE), Government of Karnataka',
    duration: '2 Years (I PUC & II PUC)',
    eligibilitySummary: 'Pass in SSLC / Class 10 (ICSE / CBSE / State Board or equivalent recognised board).',
    shortDescription: 'Two-year Pre-University education in Science (PCMB, PCMC, PCME), Commerce (CEBA, SEBA, HEBA), and Arts streams.',
    overview: [
      'SEA Composite PU College prepares Class 11 and Class 12 students for excellence in Karnataka II PUC Board Examinations as well as competitive engineering, medical, law, and commerce entrance tests.',
      'With dedicated PU laboratories, experienced subject faculty, and regular assessment cycles, students build a rock-solid foundation for university studies.',
    ],
    specialisationsOrStreams: [
      'Science: PCMB (Physics, Chemistry, Mathematics, Biology)',
      'Science: PCMC (Physics, Chemistry, Mathematics, Computer Science)',
      'Science: PCME (Physics, Chemistry, Mathematics, Electronics)',
      'Commerce: CEBA / SEBA / HEBA',
      'Arts: HEPS (History, Economics, Political Science, Sociology)',
    ],
    academicFacilities: [
      'Dedicated Physics, Chemistry, Biology, Computer Science, and Electronics PU Labs',
      'PU Library, study halls, and campus sports grounds',
    ],
    learningOpportunities: [
      'Integrated KCET / NEET / JEE / CLAT / CA-Foundation orientation support',
      'Direct progression pathways to SEACET, SEA Degree, Nursing, and Law colleges',
    ],
    careerPaths: [
      'Progression to B.E. / B.Tech, MBBS, B.Sc Nursing, and Allied Health Sciences',
      'Progression to B.Com, BBA, BCA, Chartered Accountancy, and Integrated Law (B.A. LL.B)',
    ],
    faqs: [
      {
        question: 'Which board governs SEA Composite PU College?',
        answer: 'The college is recognised by the Department of Pre-University Education, Government of Karnataka.',
      },
    ],
    image: '/assets/official/pu.jpg',
    imageAlt: 'SEA Composite PU College academic building illustration',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/page/overview',
      institutionScope: 'PU & School',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 23. MTTM (Master of Tourism & Travel Management)
  {
    id: 'pg-mttm',
    slug: 'master-of-tourism-travel-management-mttm',
    name: 'Master of Tourism & Travel Management (MTTM)',
    shortCode: 'MTTM',
    explorerCategory: 'Other Programmes',
    academicLevel: 'Postgraduate Degree',
    academicSectionRoute: '/academics/mttm',
    institutionId: 'science-commerce-arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University',
    duration: '2 Years (4 Semesters)',
    eligibilitySummary: 'Bachelor’s degree in any discipline from a recognised university with minimum 50% aggregate marks (45% for SC/ST/Cat-I candidates of Karnataka) as per university norms.',
    shortDescription: 'Official Master of Tourism & Travel Management (MTTM) programme developing leadership in global tourism, aviation, hospitality, and destination management.',
    overview: [
      'The Master of Tourism & Travel Management (MTTM) at S.E.A. Group of Institutions is a two-year postgraduate degree programme offered through SEA College of Science, Commerce & Arts (affiliated to Bengaluru North University).',
      'The curriculum equips graduates with strategic competencies in tourism destination planning, travel agency and tour operations, airline and cargo management, hospitality marketing, heritage tourism, and sustainable ecotourism.',
    ],
    academicFacilities: [
      'Tourism & Hospitality Workshop Studio and Geography/Itinerary Planning Resources',
      'Computer reservation and travel operations lab',
    ],
    learningOpportunities: [
      'Field study tours, heritage destination audits, and industry internships with travel & hospitality firms',
      'Foreign language and intercultural communication workshops',
    ],
    careerPaths: [
      'Tourism Destination & Operations Manager',
      'Airline, Airport & Travel Agency Executive',
      'Hospitality, MICE & Event Tourism Strategist',
      'Government Tourism Development & Heritage Consultant',
    ],
    faqs: [
      {
        question: 'What is the official title and abbreviation of this programme?',
        answer: 'The official programme name is Master of Tourism & Travel Management (MTTM).',
      },
      {
        question: 'Can graduates from any stream apply for MTTM?',
        answer: 'Yes, graduates from Arts, Commerce, Management, Science, or Engineering streams meeting the university’s minimum aggregate eligibility can apply.',
      },
    ],
    image: '/assets/departments/mttm.jpg',
    imageAlt: 'Master of Tourism and Travel Management MTTM seminar hall illustration',
    metadata: {
      sourceUrl: 'https://seaedu.ac.in/page/mttm',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 24. B.Sc Clinical Nutrition
  {
    id: 'ug-bsc-clinical-nutrition',
    slug: 'bsc-clinical-nutrition-dietetics',
    name: 'B.Sc Clinical Nutrition',
    shortCode: 'B.Sc Clinical Nutrition',
    explorerCategory: 'Other Programmes',
    academicLevel: 'Undergraduate Degree',
    academicSectionRoute: '/academics/bsc-clinical-nutrition',
    institutionId: 'science-commerce-arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University',
    duration: '3 Years (6 Semesters)',
    eligibilitySummary: 'Completion of 10+2 / II PUC (Science stream with Biology/Chemistry preferred as per university norms) from a recognised board.',
    shortDescription: 'Three-year undergraduate science programme in human physiology, medical nutrition therapy, food science, and clinical dietetics.',
    overview: [
      'The B.Sc Clinical Nutrition (Clinical Nutrition & Dietetics) programme at S.E.A. Group of Institutions is a full-time, 3-year (6-semester) undergraduate degree offered through SEA College of Science, Commerce & Arts.',
      'Students gain a scientific mastery of human physiology, biochemistry, therapeutic nutrition, maternal and child nutrition, food safety, and community health dietetics, preparing them for clinical hospital dietetics and preventive wellness roles.',
    ],
    academicFacilities: [
      'Clinical Nutrition, Therapeutic Dietetics, Food Science, and Biochemistry Laboratories',
      'Access to health sciences library resources and nutritional assessment clinics',
    ],
    learningOpportunities: [
      'Dietary internships in multi-speciality hospitals and wellness centres',
      'Community nutrition outreach camps and therapeutic meal planning workshops',
    ],
    careerPaths: [
      'Clinical Dietitian in Multi-Speciality Hospitals',
      'Sports & Preventive Wellness Nutrition Consultant',
      'Public Health & Community Nutrition Officer',
      'Food Quality, Nutraceutical & Clinical Research Associate',
    ],
    faqs: [
      {
        question: 'Does the B.Sc Clinical Nutrition curriculum include practical laboratory training?',
        answer: 'Yes, the 6-semester curriculum includes practical laboratories in food science, human physiology, nutritional biochemistry, and therapeutic diet planning.',
      },
    ],
    image: '/assets/departments/nutrition.jpg',
    imageAlt: 'B.Sc Clinical Nutrition and Dietetics laboratory illustration',
    metadata: {
      sourceUrl: 'https://seaedu.ac.in/page/bsc-clinical-nutrition',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  // 25. Hospital Administration (PG Diploma)
  {
    id: 'pgd-hospital-administration',
    slug: 'pg-diploma-hospital-administration',
    name: 'Hospital Administration (PG Diploma in Hospital Administration)',
    shortCode: 'PG Diploma (Hospital Admin)',
    explorerCategory: 'Other Programmes',
    academicLevel: 'Postgraduate Diploma',
    academicSectionRoute: '/academics/hospital-administration',
    institutionId: 'management-studies',
    offeringInstitution: 'SEA Group of Institutions (Management & Allied Health Studies)',
    verifiedAffiliation: 'S.E.A. Group of Institutions — Postgraduate Diploma Classification (Verify active university/board affiliation with Admissions Desk)',
    duration: '1 Year (Postgraduate Diploma)',
    eligibilitySummary: 'Graduation in any discipline (Medical, Nursing, Allied Health, Life Sciences, Commerce, or Management) from a recognised university.',
    shortDescription: 'Official Postgraduate Diploma in Hospital Administration training professionals in healthcare operations, medical laws, NABH quality standards, and patient services.',
    overview: [
      'The Hospital Administration programme at S.E.A. Group of Institutions is officially structured as a Postgraduate Diploma (PG Diploma in Hospital Administration), designed to meet the growing demand for trained administrative professionals in India’s hospital and healthcare sector.',
      'Rather than a generic management course, this specialized postgraduate diploma focuses on hospital operations, clinical and non-clinical department coordination, healthcare laws and medical ethics, NABH/quality accreditation standards, medical records management, and healthcare finance.',
    ],
    academicFacilities: [
      'Healthcare Management & Hospital Case-Study Seminar Rooms',
      'Access to Nursing & Health Sciences library resources on the S.E.A. campus',
    ],
    learningOpportunities: [
      'Practical hospital administrative rotations and department observation studies',
      'Workshops on hospital quality accreditation, patient safety, and health insurance workflows',
    ],
    careerPaths: [
      'Hospital Operations & Facility Administrator',
      'Patient Services & Front-Office Healthcare Manager',
      'Quality & NABH Accreditation Coordinator',
      'Medical Records, TPA & Healthcare Insurance Executive',
    ],
    faqs: [
      {
        question: 'What is the official classification of the Hospital Administration programme?',
        answer: 'In accordance with official S.E.A. Group documentation (seaedu.ac.in/page/hospital-administration), this programme is classified as a Postgraduate (PG) Diploma in Hospital Administration.',
      },
      {
        question: 'Who can apply for the PG Diploma in Hospital Administration?',
        answer: 'Graduates from Nursing, Life Sciences, Allied Health, Commerce, Management, or Arts seeking administrative careers in hospitals and healthcare organizations are eligible to apply.',
      },
    ],
    image: '/assets/departments/hospital-admin.jpg',
    imageAlt: 'PG Diploma in Hospital Administration healthcare operations illustration',
    metadata: {
      sourceUrl: 'https://seaedu.ac.in/page/hospital-administration',
      institutionScope: 'Management Studies',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
];

export const ACADEMIC_PAGES: Record<string, AcademicPageConfig> = {
  '/academics/ug/be': {
    route: '/academics/ug/be',
    slug: 'be',
    groupLabel: 'Undergraduate Programmes',
    title: 'Bachelor of Engineering (B.E.) Programmes',
    officialSubtitle: 'Four-Year Undergraduate Technical Degrees at S.E.A. College of Engineering & Technology (SEACET)',
    offeringInstitution: 'SEA College of Engineering & Technology (SEACET)',
    offeringInstitutionRoute: '/institutions/engineering-technology',
    verifiedAffiliation: 'Affiliated to Visvesvaraya Technological University (VTU), Belagavi | Approved by AICTE, New Delhi | Recognised by Govt. of Karnataka',
    duration: '4 Years (8 Semesters)',
    eligibility: 'Pass in 10+2 / II PUC with Physics and Mathematics as compulsory subjects along with Chemistry / Biotechnology / Biology / Electronics / Computer Science, meeting minimum aggregate norms prescribed by VTU & KEA. Lateral Entry (Direct 2nd Year) available for 3-Year Diploma holders.',
    introduction: [
      'S.E.A. College of Engineering & Technology (SEACET) offers nine AICTE-approved and VTU-affiliated Bachelor of Engineering (B.E.) programmes spanning core engineering disciplines and frontier computing specialisations.',
      'Located on the lush green K.R. Puram campus in Bengaluru, our undergraduate engineering programmes integrate strong mathematical and scientific foundations with intensive laboratory experimentation, interdisciplinary mini-projects, and early career readiness training.',
    ],
    programmeHighlights: [
      'Outcome-Based Education (OBE) curriculum aligned with Visvesvaraya Technological University (VTU), Belagavi',
      '9 specialised B.E. branches across Computing, AI, Cyber Security, Electronics, Mechanical, Civil, and Agricultural Engineering',
      'Dedicated departmental laboratories, high-speed computing clusters, and central engineering library',
      'Structured placement training beginning in the 3rd semester covering aptitude, coding, and technical interviews',
    ],
    specialisations: [
      { name: 'Computer Science & Engineering', slug: 'be-computer-science-engineering', note: 'Core Computing & Software Systems' },
      { name: 'Information Science & Engineering', slug: 'be-information-science-engineering', note: 'Enterprise Systems & Data Architecture' },
      { name: 'Electronics & Communication Engineering', slug: 'be-electronics-communication-engineering', note: 'VLSI, Embedded Systems & Telecom' },
      { name: 'Mechanical Engineering', slug: 'be-mechanical-engineering', note: 'CAD/CAM, Thermal & Manufacturing' },
      { name: 'Civil Engineering', slug: 'be-civil-engineering', note: 'Structural, Geotechnical & Sustainable Infrastructure' },
      { name: 'Artificial Intelligence & Machine Learning', slug: 'be-artificial-intelligence-machine-learning', note: 'Deep Learning, NLP & Autonomous Systems' },
      { name: 'Computer Science & Engineering — Internet of Things and Cyber Security including Blockchain Technology', slug: 'be-cse-iot-cyber-security-blockchain', note: 'IoT, Network Defence & Distributed Ledgers' },
      { name: 'Agricultural Engineering', slug: 'be-agricultural-engineering', note: 'Precision Irrigation, Farm Machinery & Agri-Tech' },
      { name: 'Artificial Intelligence & Data Science', slug: 'be-artificial-intelligence-data-science', note: 'Big Data Pipelines & Predictive Analytics' },
    ],
    academicFacilities: [
      'High-performance computing labs for CSE, ISE, AI & ML, AI & DS, and IoT/Cyber Security',
      'VLSI, Embedded Microcontroller, DSP, Analog/Digital Electronics, and Microwave laboratories',
      'Mechanical Machine Shop, CAD/CAM Studio, Thermal, and Fluid Mechanics laboratories',
      'Civil Material Testing, Geotechnical, Environmental, and Total Station Surveying laboratories',
      'Agricultural Engineering soil, water conservation, and post-harvest testing facilities',
    ],
    learningOpportunities: [
      'VTU-mandated societal internships, industrial visits, and final-year capstone projects',
      'Participation in IEEE/ISTE student chapters, coding hackathons, and technical fests',
      'Research mentorship from faculty in SEACET’s VTU-recognised research departments',
    ],
    careerPaths: [
      'Software Development, AI/ML & Cloud Engineering across global technology leaders',
      'Semiconductor, VLSI, Embedded Firmware & Telecommunications R&D',
      'Core Manufacturing, Automotive, Aerospace & Infrastructure Engineering',
      'Higher studies (M.Tech / MS / MBA) and Public Sector Engineering Services (GATE / ESE)',
    ],
    faqs: [
      {
        question: 'What are the admission pathways for B.E. at SEACET?',
        answer: 'Students may enter through the Karnataka Examinations Authority (KCET), COMEDK UGET, or the Institutional Management Quota in accordance with VTU and AICTE eligibility norms.',
      },
      {
        question: 'Are hostel and transport facilities available for B.E. students?',
        answer: 'Yes, separate on-campus residential hostels for boys and girls and a fleet of college buses covering major Bengaluru routes are available.',
      },
    ],
    relatedRoutes: [
      { label: 'M.Tech Programmes', href: '/academics/pg/mtech' },
      { label: 'Research Center', href: '/academics/research-center' },
      { label: 'SEACET Institution Profile', href: '/institutions/engineering-technology' },
      { label: 'Admissions & Eligibility', href: '/admissions/eligibility' },
    ],
    bannerImage: '/assets/campus-photos/dept-16.jpg',
    bannerAlt: 'SEACET Bachelor of Engineering academic block in Bengaluru',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/ug/degree': {
    route: '/academics/ug/degree',
    slug: 'degree',
    groupLabel: 'Undergraduate Programmes',
    title: 'Undergraduate Degree Programmes',
    officialSubtitle: 'Commerce, Management, Computer Applications, Sciences & Humanities at SEA College of Science, Commerce & Arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    offeringInstitutionRoute: '/institutions/science-commerce-arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University | Recognised by the Government of Karnataka',
    duration: '3 Years (6 Semesters) / As per University NEP/SEP Curriculum',
    eligibility: 'Pass in 10+2 / II PUC or equivalent examination from a recognised board.',
    introduction: [
      'SEA College of Science, Commerce & Arts offers career-focused undergraduate degree programmes designed to build strong analytical, commercial, computational, and communication capabilities.',
      'Affiliated to Bengaluru North University, the college provides a vibrant multidisciplinary academic environment where commerce, management, computer applications, and pure science students learn alongside peers from across India.',
    ],
    programmeHighlights: [
      'University-affiliated B.Com, BBA, BCA, B.Sc, and B.A. undergraduate pathways',
      'Value-added skill modules in financial accounting, cloud programming, and corporate communication',
      'Dedicated science, electronics, and computer application laboratories',
      'Active NSS, NCC, cultural clubs, and placement cell support',
    ],
    specialisations: [
      { name: 'Bachelor of Commerce (B.Com)', slug: 'undergraduate-degree-programmes', note: 'Accounting, Taxation, Auditing & Banking' },
      { name: 'Bachelor of Business Administration (BBA)', slug: 'undergraduate-degree-programmes', note: 'Corporate Management, Marketing, HR & Aviation Management' },
      { name: 'Bachelor of Computer Applications (BCA)', slug: 'undergraduate-degree-programmes', note: 'Software Development, Web Technologies & Database Systems' },
      { name: 'Bachelor of Science (B.Sc)', slug: 'undergraduate-degree-programmes', note: 'Computer Science, Electronics, Physics, Mathematics & Life Sciences' },
      { name: 'B.Sc Clinical Nutrition', slug: 'bsc-clinical-nutrition-dietetics', note: 'Dedicated 3-Year Clinical Nutrition & Dietetics Programme' },
      { name: 'Bachelor of Arts (B.A.)', slug: 'undergraduate-degree-programmes', note: 'Humanities, Economics, Political Science & Journalism' },
    ],
    academicFacilities: [
      'Modern BCA & B.Sc Computer Science Laboratories with high-speed internet',
      'Physics, Electronics, Biotechnology, and Clinical Nutrition laboratories',
      'Central Degree Library with textbooks, reference works, and digital periodicals',
    ],
    learningOpportunities: [
      'Commerce & Management conclaves, IT fests, and industrial visits',
      'Soft-skills, aptitude, and interview preparation through the Placement Cell',
    ],
    careerPaths: [
      'Corporate Accounting, Taxation, Auditing & Banking Services',
      'Software Application Development, QA Testing & Cloud Support',
      'Marketing, HR, Operations & Business Analytics',
      'Postgraduate progression to MBA, M.Com, M.Sc (CS), MCA, M.A., or LL.B',
    ],
    faqs: [
      {
        question: 'Can degree students pursue evening classes if they are working?',
        answer: 'Working learners can also enquire about SEA Evening College on the same campus for flexible undergraduate schedules.',
      },
    ],
    relatedRoutes: [
      { label: 'B.Sc Clinical Nutrition', href: '/academics/bsc-clinical-nutrition' },
      { label: 'M.Com', href: '/academics/pg/mcom' },
      { label: 'M.Sc (CS)', href: '/academics/pg/msc-cs' },
      { label: 'MBA (BU)', href: '/academics/pg/mba-bu' },
    ],
    bannerImage: '/assets/campus-photos/dept-10.jpg',
    bannerAlt: 'SEA College of Science, Commerce and Arts degree wing',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/ug/law': {
    route: '/academics/ug/law',
    slug: 'law',
    groupLabel: 'Undergraduate Programmes',
    title: 'Law Programmes (LL.B & B.A. LL.B)',
    officialSubtitle: 'Professional Legal Education at SEA College of Law • Approved by BCI & Affiliated to KSLU',
    offeringInstitution: 'SEA College of Law',
    offeringInstitutionRoute: '/institutions/law',
    verifiedAffiliation: 'Affiliated to Karnataka State Law University (KSLU), Hubballi | Approved by the Bar Council of India (BCI), New Delhi',
    duration: '5 Years (Integrated B.A. LL.B) & 3 Years (LL.B)',
    eligibility: '5-Year Integrated B.A. LL.B: Pass in 10+2 / II PUC from a recognised board. 3-Year LL.B: Bachelor’s degree in any discipline from a recognised university with minimum aggregate marks prescribed by BCI and KSLU.',
    introduction: [
      'SEA College of Law, established in 2012, delivers rigorous legal education that blends constitutional philosophy and statutory analysis with courtroom advocacy and clinical legal practice.',
      'Approved by the Bar Council of India (BCI) and affiliated to Karnataka State Law University (KSLU), Hubballi, the college prepares graduates for the Bar, judicial services, corporate law firms, and public policy.',
    ],
    programmeHighlights: [
      '5-Year Integrated B.A. LL.B for 10+2 graduates combining political science, economics, sociology, and law',
      '3-Year LL.B professional degree for graduates from any discipline',
      'Regular Moot Court exercises, drafting and pleading clinics, and trial advocacy workshops',
      'Mandatory legal internships at trial courts, High Court chambers, corporate houses, and commissions',
    ],
    specialisations: [
      { name: '5-Year Integrated B.A. LL.B (10 Semesters)', slug: 'law-llb-ba-llb', note: 'Direct entry after 10+2 / II PUC' },
      { name: '3-Year LL.B — Bachelor of Laws (6 Semesters)', slug: 'law-llb-ba-llb', note: 'For graduates in any discipline' },
    ],
    academicFacilities: [
      'Dedicated Moot Court Hall replicating judicial bench and courtroom protocols',
      'Comprehensive Law Library housing All India Reporter (AIR), Supreme Court Cases (SCC), and legal journals',
      'Legal Aid Clinic for community legal literacy and dispute resolution guidance',
    ],
    learningOpportunities: [
      'Court observation visits to High Court of Karnataka and Bengaluru Civil/Sessions Courts',
      'National moot court competitions, parliamentary debates, and constitutional law seminars',
    ],
    careerPaths: [
      'Litigation Practice at District Courts, High Courts, and Supreme Court of India',
      'Corporate Legal Counsel, M&A Compliance & Contract Specialist',
      'Judicial Services (Civil Judge / Judicial Magistrate Examinations)',
      'Legal Officer in Banks, PSUs, Regulatory Bodies & International Organizations',
    ],
    faqs: [
      {
        question: 'Are graduates eligible to enrol as Advocates with the State Bar Council?',
        answer: 'Yes. Because SEA College of Law is approved by the Bar Council of India (BCI), graduates are eligible to enrol with the Karnataka State Bar Council and appear for the All India Bar Examination (AIBE).',
      },
    ],
    relatedRoutes: [
      { label: 'SEA College of Law Profile', href: '/institutions/law' },
      { label: 'Admissions & Eligibility', href: '/admissions/eligibility' },
      { label: 'Apply / Enquire', href: '/admissions/enquiry' },
    ],
    bannerImage: '/assets/official/law.jpg',
    bannerAlt: 'SEA College of Law Moot Court and Jurisprudence Hall',
    metadata: {
      sourceUrl: 'https://sealawcollege.edu.in/',
      institutionScope: 'Law College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/ug/nursing': {
    route: '/academics/ug/nursing',
    slug: 'nursing',
    groupLabel: 'Undergraduate Programmes',
    title: 'Undergraduate & Diploma Nursing Programmes',
    officialSubtitle: 'B.Sc Nursing, Post Basic B.Sc Nursing & GNM at SEA College of Nursing',
    offeringInstitution: 'SEA College of Nursing',
    offeringInstitutionRoute: '/institutions/nursing',
    verifiedAffiliation: 'Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru | Recognised by INC & KNC',
    duration: 'B.Sc Nursing: 4 Years | Post Basic B.Sc Nursing: 2 Years | GNM: 3 Years',
    eligibility: 'B.Sc Nursing: 10+2 / II PUC with Physics, Chemistry, Biology, and English (minimum aggregate as per RGUHS/INC norms). Post Basic B.Sc: GNM pass with KNC registration. GNM: 10+2 pass as per KSDNEB/INC guidelines.',
    introduction: [
      'SEA College of Nursing provides comprehensive nursing education rooted in scientific clinical care, medical ethics, and compassionate patient service.',
      'Recognised by the Indian Nursing Council (INC), New Delhi, and Karnataka State Nursing Council (KNC), and affiliated to RGUHS, the college equips students with foundational nursing skills and extensive hospital clinical experience.',
    ],
    programmeHighlights: [
      '4-Year B.Sc Nursing degree under Rajiv Gandhi University of Health Sciences (RGUHS)',
      '2-Year Post Basic B.Sc Nursing for registered GNM nurses upgrading to a degree',
      'General Nursing & Midwifery (GNM) diploma track',
      'Supervised clinical rotations at partner multi-speciality hospitals in Bengaluru',
    ],
    specialisations: [
      { name: 'B.Sc Nursing (4 Years)', slug: 'nursing-bsc-gnm', note: 'RGUHS Affiliated Undergraduate Degree' },
      { name: 'Post Basic B.Sc Nursing (2 Years)', slug: 'nursing-bsc-gnm', note: 'Degree Upgrade for Registered GNM Nurses' },
      { name: 'General Nursing & Midwifery — GNM (3 Years)', slug: 'nursing-bsc-gnm', note: 'Clinical Diploma Programme' },
    ],
    academicFacilities: [
      'Nursing Foundation, Medical-Surgical, Maternal & Child Health (OBG), Paediatric, and Community Health Labs',
      'Anatomy, Physiology, Microbiology, and Nutrition demonstration laboratories',
      'Health Sciences Library with RGUHS HELINET e-journal access',
    ],
    learningOpportunities: [
      'Clinical postings in medical, surgical, paediatric, psychiatric, and critical care wards',
      'Rural and urban community health outreach programmes',
    ],
    careerPaths: [
      'Registered Staff Nurse & Critical Care Specialist in Hospitals',
      'Community Health Officer & Public Health Educator',
      'Global Nursing Placements (UK, Middle East, Australia, Europe after licensing exams)',
      'Progression to M.Sc Nursing and Hospital Administration',
    ],
    faqs: [
      {
        question: 'Does SEA College of Nursing also offer postgraduate nursing studies?',
        answer: 'Yes, the college offers a 2-year M.Sc Nursing programme affiliated with RGUHS.',
      },
    ],
    relatedRoutes: [
      { label: 'M.Sc Nursing (PG)', href: '/academics/pg/msc-nursing' },
      { label: 'B.Sc Clinical Nutrition', href: '/academics/bsc-clinical-nutrition' },
      { label: 'Hospital Administration', href: '/academics/hospital-administration' },
      { label: 'SEA College of Nursing Profile', href: '/institutions/nursing' },
    ],
    bannerImage: '/assets/official/nursing.jpg',
    bannerAlt: 'SEA College of Nursing clinical skills laboratory',
    metadata: {
      sourceUrl: 'https://seanursing.edu.in/',
      institutionScope: 'Nursing College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/pg/mtech': {
    route: '/academics/pg/mtech',
    slug: 'mtech',
    groupLabel: 'Postgraduate Programmes',
    title: 'Master of Technology (M.Tech) Programmes',
    officialSubtitle: 'Advanced Postgraduate Engineering Specialisations at SEACET (VTU Affiliated)',
    offeringInstitution: 'SEA College of Engineering & Technology (SEACET)',
    offeringInstitutionRoute: '/institutions/engineering-technology',
    verifiedAffiliation: 'Affiliated to Visvesvaraya Technological University (VTU), Belagavi | Approved by AICTE, New Delhi',
    duration: '2 Years (4 Semesters)',
    eligibility: 'B.E. / B.Tech in the relevant engineering discipline with at least 50% aggregate marks (45% for SC/ST/Cat-I candidates of Karnataka) and valid GATE / Karnataka PGCET score as per VTU norms.',
    introduction: [
      'The Master of Technology (M.Tech) programmes at S.E.A. College of Engineering & Technology (SEACET) cultivate high-level research capability, architectural system design, and domain specialization.',
      'Offered in two high-demand technical streams—Computer Science & Engineering and VLSI Design & Embedded Systems—the curriculum pairs advanced seminar coursework with a full-year research dissertation.',
    ],
    programmeHighlights: [
      'M.Tech in Computer Science & Engineering (Advanced Algorithms, Cloud, AI & Distributed Systems)',
      'M.Tech in VLSI Design and Embedded Systems (CMOS Design, ASIC/FPGA & Real-Time Embedded Systems)',
      'Direct synergy with SEACET’s VTU-recognised Ph.D. research centres in CSE and ECE',
      'Research publication mentoring and industry internship opportunities',
    ],
    specialisations: [
      { name: 'M.Tech — Computer Science & Engineering', slug: 'mtech-computer-science-engineering', note: 'Department of CSE, SEACET' },
      { name: 'M.Tech — VLSI Design and Embedded Systems', slug: 'mtech-vlsi-design-embedded-systems', note: 'Department of ECE, SEACET' },
    ],
    academicFacilities: [
      'Dedicated M.Tech Research & Computing Laboratories',
      'VLSI CAD/EDA tools, FPGA boards, and embedded hardware analysers',
      'VTU Consortium digital library access to IEEE, ACM, and Elsevier journals',
    ],
    learningOpportunities: [
      'Two-semester individual dissertation project under doctoral faculty supervision',
      'Presentation at national/international peer-reviewed engineering conferences',
    ],
    careerPaths: [
      'Principal / Senior Software & Cloud Systems Architect',
      'VLSI RTL Design, Verification & Physical Design Engineer',
      'Embedded Systems & IoT Firmware Lead',
      'University Assistant Professor & Doctoral Research Scholar',
    ],
    faqs: [
      {
        question: 'How are M.Tech admissions conducted at SEACET?',
        answer: 'Admissions are conducted through Karnataka PGCET / GATE counselling as well as institutional quota seats in accordance with VTU and AICTE guidelines.',
      },
    ],
    relatedRoutes: [
      { label: 'B.E. Programmes', href: '/academics/ug/be' },
      { label: 'Research Center (Ph.D.)', href: '/academics/research-center' },
      { label: 'SEACET Profile', href: '/institutions/engineering-technology' },
    ],
    bannerImage: '/assets/campus-photos/dept-11.jpg',
    bannerAlt: 'SEACET M.Tech postgraduate computing and VLSI research lab',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/pg/mba-vtu': {
    route: '/academics/pg/mba-vtu',
    slug: 'mba-vtu',
    groupLabel: 'Postgraduate Programmes',
    title: 'MBA (VTU) — Master of Business Administration',
    officialSubtitle: 'VTU-Affiliated Postgraduate Management Programme at S.E.A. College of Engineering & Technology',
    offeringInstitution: 'SEA College of Engineering & Technology (Department of MBA)',
    offeringInstitutionRoute: '/institutions/engineering-technology',
    verifiedAffiliation: 'Affiliated to Visvesvaraya Technological University (VTU), Belagavi | Approved by AICTE, New Delhi',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Recognised Bachelor’s degree of minimum 3 years duration with at least 50% aggregate marks (45% for reserved categories of Karnataka) and valid PGCET / KMAT / MAT / CAT score as per VTU regulations.',
    introduction: [
      'The MBA (VTU) programme is hosted within S.E.A. College of Engineering & Technology (SEACET) and follows the contemporary management curriculum of Visvesvaraya Technological University (VTU), Belagavi.',
      'Designed to bridge technological enterprise and executive decision-making, this programme equips graduates with quantitative, financial, marketing, and human resource leadership skills.',
    ],
    programmeHighlights: [
      'Conferred by Visvesvaraya Technological University (VTU), Belagavi and approved by AICTE',
      'Core and dual specialisation options in Finance, Marketing, Human Resource Management, and Business Analytics',
      'Backed by a VTU-recognised Research Centre in Management Studies at SEACET',
      'Mandatory corporate internship and organizational study project',
    ],
    specialisations: [
      { name: 'Finance Management', slug: 'mba-vtu', note: 'Corporate Finance, Investment Analysis & Banking' },
      { name: 'Marketing Management', slug: 'mba-vtu', note: 'Brand Strategy, Digital Marketing & Consumer Insights' },
      { name: 'Human Resource Management', slug: 'mba-vtu', note: 'Talent Strategy, Organizational Behaviour & Labour Laws' },
    ],
    academicFacilities: [
      'SEACET MBA Seminar Hall, Case-Study Rooms, and Business Analytics Computer Lab',
      'Dedicated Management Library collection and digital databases',
    ],
    learningOpportunities: [
      'Live corporate projects, industrial visits, and management fests',
      'Executive communication, aptitude, and leadership mentorship',
    ],
    careerPaths: [
      'Financial Analyst, Corporate Banker & Investment Advisor',
      'Product, Brand & Digital Marketing Manager',
      'HR Business Partner & Talent Acquisition Lead',
      'Management Consultant & Entrepreneur',
    ],
    faqs: [
      {
        question: 'Why does S.E.A. Group list MBA (VTU) and MBA (BU) separately?',
        answer: 'S.E.A. Group offers two distinct university-affiliated MBA pathways: MBA (VTU) at SEA College of Engineering & Technology affiliated with Visvesvaraya Technological University, and MBA (BU) affiliated with the Bengaluru North University / Bangalore University degree framework.',
      },
    ],
    relatedRoutes: [
      { label: 'MBA (BU)', href: '/academics/pg/mba-bu' },
      { label: 'MTTM', href: '/academics/mttm' },
      { label: 'Hospital Administration', href: '/academics/hospital-administration' },
      { label: 'SEACET Profile', href: '/institutions/engineering-technology' },
    ],
    bannerImage: '/assets/campus-photos/dept-17.jpg',
    bannerAlt: 'SEACET MBA VTU executive seminar hall',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'SEACET (Engineering)',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/pg/mba-bu': {
    route: '/academics/pg/mba-bu',
    slug: 'mba-bu',
    groupLabel: 'Postgraduate Programmes',
    title: 'MBA (BU) — Master of Business Administration',
    officialSubtitle: 'University-Affiliated Postgraduate Management Programme at S.E.A. Group of Institutions',
    offeringInstitution: 'SEA College of Management Studies / SEA College of Science, Commerce & Arts',
    offeringInstitutionRoute: '/institutions/management-studies',
    verifiedAffiliation: 'Affiliated to Bengaluru North University (formerly Bangalore University jurisdiction) | Approved by AICTE',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Recognised Bachelor’s degree in any discipline with minimum 50% aggregate marks (45% for SC/ST/Cat-I candidates of Karnataka) and valid PGCET / KMAT / MAT score.',
    introduction: [
      'The MBA (BU) programme is offered under the Bengaluru North University (formerly Bangalore University) management curriculum through SEA College of Management Studies and SEA College of Science, Commerce & Arts.',
      'Focusing on holistic corporate leadership, entrepreneurship, financial strategy, and global business operations, the programme prepares graduates for dynamic management roles across Bengaluru’s corporate ecosystem.',
    ],
    programmeHighlights: [
      'University-affiliated 4-semester Master of Business Administration curriculum',
      'Specialisation tracks in Finance, Marketing, Human Resources, and Operations/Healthcare',
      'Case-study pedagogy, executive guest lecture series, and corporate internships',
      'Placement training in group discussions, business communication, and personal interviews',
    ],
    specialisations: [
      { name: 'MBA — Finance, Marketing & HR Specialisations', slug: 'mba-bu', note: 'Bengaluru North University Curriculum' },
    ],
    academicFacilities: [
      'Management Studies Lecture Theatres and Seminar Hall',
      'Commerce & Management Library and Computer Lab',
    ],
    learningOpportunities: [
      'Corporate internships, industrial immersion, and business plan competitions',
      'Workshops on financial modelling, digital marketing, and leadership ethics',
    ],
    careerPaths: [
      'Corporate Finance, Audit & Banking Manager',
      'Marketing, Sales & Business Development Manager',
      'Human Resources & Operations Manager',
      'Startup Founder & Enterprise Consultant',
    ],
    faqs: [
      {
        question: 'Can commerce, arts, science, and engineering graduates all apply for MBA (BU)?',
        answer: 'Yes, graduates from any recognised bachelor’s degree stream meeting the minimum aggregate percentage and entrance test requirements are eligible.',
      },
    ],
    relatedRoutes: [
      { label: 'MBA (VTU)', href: '/academics/pg/mba-vtu' },
      { label: 'M.Com', href: '/academics/pg/mcom' },
      { label: 'SEA College of Management Studies', href: '/institutions/management-studies' },
    ],
    bannerImage: '/assets/campus-photos/dept-17.jpg',
    bannerAlt: 'SEA College of Management Studies MBA BU lecture hall',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Management Studies',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/pg/mcom': {
    route: '/academics/pg/mcom',
    slug: 'mcom',
    groupLabel: 'Postgraduate Programmes',
    title: 'Master of Commerce (M.Com)',
    officialSubtitle: 'Postgraduate Commerce, Accounting & Financial Studies at SEA College of Science, Commerce & Arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    offeringInstitutionRoute: '/institutions/science-commerce-arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University | Recognised by Govt. of Karnataka',
    duration: '2 Years (4 Semesters)',
    eligibility: 'B.Com / BBA / BBS or equivalent degree with minimum aggregate marks as prescribed by Bengaluru North University.',
    introduction: [
      'The Master of Commerce (M.Com) programme at SEA College of Science, Commerce & Arts deepens expertise in corporate accounting, taxation policy, financial markets, cost management, and business research.',
      'Students engage with contemporary financial regulations, GST and corporate tax frameworks, and empirical commerce dissertation projects.',
    ],
    programmeHighlights: [
      '4-semester Bengaluru North University M.Com curriculum',
      'Advanced coursework in Accounting, Taxation, Financial Markets, and Research Methodology',
      'Preparation support for NET/KSET academic eligibility and corporate finance careers',
    ],
    specialisations: [
      { name: 'Master of Commerce (M.Com)', slug: 'master-of-commerce-mcom', note: 'Accounting, Finance & Taxation' },
    ],
    academicFacilities: [
      'Commerce Computer Lab with accounting and statistical analysis tools',
      'Postgraduate Commerce Reference Library',
    ],
    learningOpportunities: [
      'Master’s dissertation on banking, taxation, capital markets, or corporate governance',
      'Seminars on union budgets, GST compliance, and financial technology',
    ],
    careerPaths: [
      'Corporate Accountant, Tax Consultant & Financial Analyst',
      'Banking, Insurance & Wealth Management Officer',
      'Audit & Risk Advisory Associate',
      'Assistant Professor of Commerce & Research Scholar',
    ],
    faqs: [
      {
        question: 'Does the M.Com programme include a research project?',
        answer: 'Yes, final-year students complete a supervised dissertation project in commerce, accounting, or finance.',
      },
    ],
    relatedRoutes: [
      { label: 'Undergraduate Degree (B.Com / BBA)', href: '/academics/ug/degree' },
      { label: 'MBA (BU)', href: '/academics/pg/mba-bu' },
      { label: 'SEA College of Science, Commerce & Arts', href: '/institutions/science-commerce-arts' },
    ],
    bannerImage: '/assets/campus-photos/dept-10.jpg',
    bannerAlt: 'SEA College Master of Commerce library wing',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/pg/msc-nursing': {
    route: '/academics/pg/msc-nursing',
    slug: 'msc-nursing',
    groupLabel: 'Postgraduate Programmes',
    title: 'M.Sc Nursing',
    officialSubtitle: 'Postgraduate Clinical Nursing Specialisations at SEA College of Nursing (RGUHS Affiliated)',
    offeringInstitution: 'SEA College of Nursing',
    offeringInstitutionRoute: '/institutions/nursing',
    verifiedAffiliation: 'Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru | Recognised by INC & KNC',
    duration: '2 Years',
    eligibility: 'B.Sc Nursing / Post Basic B.Sc Nursing with minimum 55% aggregate marks from an INC-recognised institution, valid State Nursing Council registration, and clinical experience as per INC/RGUHS regulations.',
    introduction: [
      'The M.Sc Nursing programme at SEA College of Nursing prepares advanced clinical nurse practitioners, nursing educators, and healthcare researchers.',
      'Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS) and recognised by the Indian Nursing Council (INC) and Karnataka State Nursing Council (KNC), the programme combines clinical specialty mastery with nursing education and research dissertation work.',
    ],
    programmeHighlights: [
      '2-Year RGUHS-affiliated postgraduate nursing curriculum',
      'Advanced training in Nursing Education, Nursing Management, Nursing Research & Statistics, and Clinical Specialty',
      'Independent clinical nursing dissertation and specialty hospital postings',
    ],
    specialisations: [
      { name: 'M.Sc Nursing (Clinical Specialisations)', slug: 'msc-nursing', note: 'Medical-Surgical, OBG, Paediatric, Community Health & Psychiatric Nursing (enquire for seat matrix)' },
    ],
    academicFacilities: [
      'Specialty Nursing Simulation Labs and Pre-Clinical Science Facilities',
      'RGUHS HELINET Digital Medical Library and Research Room',
    ],
    learningOpportunities: [
      'Practice-teaching sessions for undergraduate nursing classes',
      'Super-speciality hospital clinical rotations and clinical research thesis',
    ],
    careerPaths: [
      'Nursing College Lecturer / Assistant Professor / Principal',
      'Clinical Nurse Specialist & Critical Care Educator',
      'Nursing Superintendent & Hospital Quality Manager',
      'Doctoral Scholar in Nursing Sciences',
    ],
    faqs: [
      {
        question: 'How can I verify specialty-wise seat availability for M.Sc Nursing?',
        answer: 'Submit an enquiry via the Admissions Desk to receive the current academic year’s specialty-wise seat matrix approved by RGUHS and INC.',
      },
    ],
    relatedRoutes: [
      { label: 'Undergraduate Nursing (B.Sc / GNM)', href: '/academics/ug/nursing' },
      { label: 'Hospital Administration', href: '/academics/hospital-administration' },
      { label: 'SEA College of Nursing Profile', href: '/institutions/nursing' },
    ],
    bannerImage: '/assets/official/nursing.jpg',
    bannerAlt: 'SEA College of Nursing M.Sc Nursing clinical specialty wing',
    metadata: {
      sourceUrl: 'https://seanursing.edu.in/',
      institutionScope: 'Nursing College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/pg/master-of-arts': {
    route: '/academics/pg/master-of-arts',
    slug: 'master-of-arts',
    groupLabel: 'Postgraduate Programmes',
    title: 'Master of Arts (M.A.)',
    officialSubtitle: 'Postgraduate Humanities & Social Sciences at SEA College of Science, Commerce & Arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    offeringInstitutionRoute: '/institutions/science-commerce-arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University | Recognised by Govt. of Karnataka',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor’s degree (B.A. or equivalent graduate degree fulfilling subject prerequisites prescribed by Bengaluru North University).',
    introduction: [
      'The Master of Arts (M.A.) programme at SEA College of Science, Commerce & Arts offers postgraduate scholarship in the humanities and social sciences under Bengaluru North University.',
      'Through seminar discussions, critical reading, research methodology, and dissertation writing, students prepare for careers in teaching, public service, media, and policy research.',
    ],
    programmeHighlights: [
      '4-semester postgraduate curriculum under Bengaluru North University',
      'Emphasis on research writing, critical theory, and interdisciplinary social inquiry',
      'Mentoring for UGC-NET, KSET, and civil service examinations',
    ],
    specialisations: [
      { name: 'Master of Arts (M.A.)', slug: 'master-of-arts-ma', note: 'Contact Admissions Desk for active session subject specialisations' },
    ],
    academicFacilities: [
      'Central Library Humanities & Social Sciences Collection',
      'Seminar rooms and digital academic repositories',
    ],
    learningOpportunities: [
      'Academic colloquia, literary forums, and field research projects',
      'Teacher-education and B.Ed progression guidance on campus',
    ],
    careerPaths: [
      'College Lecturer & Academic Researcher',
      'Civil Services (UPSC / KPSC) & Public Administration',
      'Journalism, Publishing, Editing & Corporate Communications',
      'NGO, Social Impact & Policy Research Specialist',
    ],
    faqs: [
      {
        question: 'Where can I confirm the active M.A. subjects offered for 2026–2027?',
        answer: 'Please use the Admission Enquiry form to confirm the exact M.A. subject combinations active for the current university admission cycle.',
      },
    ],
    relatedRoutes: [
      { label: 'Undergraduate Degree Programmes', href: '/academics/ug/degree' },
      { label: 'SEA B.Ed College', href: '/institutions/bed-college' },
      { label: 'SEA College of Science, Commerce & Arts', href: '/institutions/science-commerce-arts' },
    ],
    bannerImage: '/assets/campus-photos/dept-10.jpg',
    bannerAlt: 'SEA College Master of Arts library and seminar hall',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/pg/msc-cs': {
    route: '/academics/pg/msc-cs',
    slug: 'msc-cs',
    groupLabel: 'Postgraduate Programmes',
    title: 'M.Sc (CS) — Master of Science in Computer Science',
    officialSubtitle: 'Postgraduate Computer Science & Software Engineering at SEA College of Science, Commerce & Arts',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    offeringInstitutionRoute: '/institutions/science-commerce-arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University | Recognised by Govt. of Karnataka',
    duration: '2 Years (4 Semesters)',
    eligibility: 'B.Sc (Computer Science) / BCA or equivalent degree with Computer Science and Mathematics as prescribed by Bengaluru North University norms.',
    introduction: [
      'The M.Sc (CS) — Master of Science in Computer Science — programme at SEA College of Science, Commerce & Arts equips science and computer application graduates with deep theoretical and practical mastery in modern computing.',
      'Covering advanced algorithms, machine learning, cloud architecture, cybersecurity, and full-stack software engineering, the programme prepares students for senior technical roles in Bengaluru’s IT corridor.',
    ],
    programmeHighlights: [
      '4-semester Bengaluru North University postgraduate Computer Science curriculum',
      'Intensive laboratory practicals in Python, Java, Cloud, Data Science, and Web Engineering',
      'Final-semester major software development project',
    ],
    specialisations: [
      { name: 'M.Sc Computer Science', slug: 'msc-computer-science', note: 'Software Systems, Data Science & AI' },
    ],
    academicFacilities: [
      'Dedicated Postgraduate Computer Science Laboratory',
      'High-speed internet and digital computing library resources',
    ],
    learningOpportunities: [
      'Capstone software engineering projects and coding workshops',
      'Campus placement drives alongside engineering and degree streams',
    ],
    careerPaths: [
      'Software Development Engineer & Full-Stack Developer',
      'Data Scientist & Analytics Engineer',
      'Cloud Infrastructure & DevOps Specialist',
      'Computer Science Faculty & Doctoral Researcher',
    ],
    faqs: [
      {
        question: 'Are BCA graduates eligible for M.Sc (CS)?',
        answer: 'Yes, BCA and B.Sc Computer Science graduates fulfilling Bengaluru North University aggregate requirements are eligible to apply.',
      },
    ],
    relatedRoutes: [
      { label: 'Undergraduate Degree (BCA / B.Sc)', href: '/academics/ug/degree' },
      { label: 'M.Tech CSE', href: '/academics/pg/mtech' },
      { label: 'SEA College of Science, Commerce & Arts', href: '/institutions/science-commerce-arts' },
    ],
    bannerImage: '/assets/campus-photos/dept-11.jpg',
    bannerAlt: 'SEA College M.Sc Computer Science laboratory',
    metadata: {
      sourceUrl: 'https://seadegree.ac.in/',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/research-center': {
    route: '/academics/research-center',
    slug: 'research-center',
    groupLabel: 'Additional Academic Programmes',
    title: 'Research Center (Ph.D. & M.Sc. Engineering by Research)',
    officialSubtitle: 'VTU-Recognised Doctoral & Research Supervision at S.E.A. College of Engineering & Technology',
    offeringInstitution: 'SEA College of Engineering & Technology & SEA College of Research & Development Center',
    offeringInstitutionRoute: '/institutions/research-development-center',
    verifiedAffiliation: 'Recognised Research Centres under Visvesvaraya Technological University (VTU), Belagavi',
    eligibility: 'Master’s Degree (M.E. / M.Tech / M.Sc. / MBA) in the relevant discipline with minimum marks prescribed by VTU Ph.D. Regulations and qualification in the VTU Entrance Test for Research (VTU-ETR) or national fellowships (UGC-NET / CSIR / GATE).',
    introduction: [
      'The S.E.A. Research Center spearheads doctoral scholarship (Ph.D.), M.Sc. (Engineering) by Research, and sponsored R&D across S.E.A. College of Engineering & Technology (SEACET) and the SEA College of Research & Development Center.',
      'With VTU-recognised research departments in Computer Science & Engineering, Electronics & Communication Engineering, Mechanical Engineering, Chemistry, and Management (MBA), scholars receive structured supervision from experienced doctoral guides.',
    ],
    programmeHighlights: [
      'VTU-recognised Ph.D. research centres in CSE, ECE, Mechanical Engineering, Chemistry, and MBA',
      'Full-time and part-time doctoral registration pathways in accordance with VTU regulations',
      'Support for high-impact journal publications, patent filing, and funded research proposals',
    ],
    specialisations: [
      { name: 'Ph.D. / M.Sc. (Engg.) in Computer Science & Engineering', slug: 'research-phd-programmes', note: 'VTU-Recognised Research Centre' },
      { name: 'Ph.D. / M.Sc. (Engg.) in Electronics & Communication Engineering', slug: 'research-phd-programmes', note: 'VTU-Recognised Research Centre' },
      { name: 'Ph.D. / M.Sc. (Engg.) in Mechanical Engineering', slug: 'research-phd-programmes', note: 'VTU-Recognised Research Centre' },
      { name: 'Ph.D. in Chemistry', slug: 'research-phd-programmes', note: 'VTU-Recognised Basic Sciences Research Centre' },
      { name: 'Ph.D. in Management Studies (MBA)', slug: 'research-phd-programmes', note: 'VTU-Recognised Management Research Centre' },
    ],
    academicFacilities: [
      'Dedicated Research Scholar Cubicles and High-Performance Computing Workstations',
      'Departmental instrumentation, materials testing, VLSI, and analytical chemistry labs',
      'VTU e-Consortium access to IEEE, ScienceDirect, Springer, and Taylor & Francis',
    ],
    learningOpportunities: [
      'Doctoral coursework in Research Methodology, Quantitative Analysis, and Publication Ethics',
      'Biannual Research Advisory Committee (RAC) progress reviews and colloquia',
    ],
    careerPaths: [
      'University Professor, Dean & Academic Administrator',
      'Principal Research Scientist in Corporate R&D Labs',
      'Technology Patent Consultant & Policy Advisor',
    ],
    faqs: [
      {
        question: 'How do prospective Ph.D. scholars apply?',
        answer: 'Candidates apply through the official Visvesvaraya Technological University (VTU) Ph.D. admission portal when notifications are released, selecting SEACET’s recognised research centres for guide allocation.',
      },
    ],
    relatedRoutes: [
      { label: 'SEA Research & Development Center', href: '/institutions/research-development-center' },
      { label: 'M.Tech Programmes', href: '/academics/pg/mtech' },
      { label: 'SEACET Profile', href: '/institutions/engineering-technology' },
    ],
    bannerImage: '/assets/campus-photos/dept-11.jpg',
    bannerAlt: 'SEA Research Center doctoral computing and instrumentation wing',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/',
      institutionScope: 'Skill & Research',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/pre-university': {
    route: '/academics/pre-university',
    slug: 'pre-university',
    groupLabel: 'Additional Academic Programmes',
    title: 'Pre-University (PUC) Programmes',
    officialSubtitle: 'Science, Commerce & Arts Streams (Class XI & XII) at SEA Composite PU College',
    offeringInstitution: 'SEA Composite PU College',
    offeringInstitutionRoute: '/institutions/composite-pu-college',
    verifiedAffiliation: 'Recognised by the Department of Pre-University Education (DPUE), Government of Karnataka',
    duration: '2 Years (I PUC & II PUC)',
    eligibility: 'Successful completion of Class 10 / SSLC / ICSE / CBSE or equivalent recognised board examination.',
    introduction: [
      'SEA Composite PU College delivers disciplined, mentoring-driven Pre-University education in Science, Commerce, and Arts for students entering Class XI (I PUC) and Class XII (II PUC).',
      'Located on the integrated S.E.A. campus in K.R. Puram, PU students benefit from dedicated science and computer laboratories, experienced board-exam faculty, and seamless progression into undergraduate engineering, nursing, law, and degree colleges.',
    ],
    programmeHighlights: [
      'Science combinations: PCMB, PCMC, and PCME with daily laboratory practicals',
      'Commerce combinations: CEBA, SEBA, and HEBA with accounting and business foundations',
      'Arts combination: HEPS (History, Economics, Political Science, Sociology)',
      'Regular unit tests, parent-teacher academic reviews, and competitive entrance coaching support',
    ],
    specialisations: [
      { name: 'Science Stream (PCMB / PCMC / PCME)', slug: 'pre-university-science-commerce-arts', note: 'Preparation for Board Exams, KCET, NEET & JEE' },
      { name: 'Commerce Stream (CEBA / SEBA / HEBA)', slug: 'pre-university-science-commerce-arts', note: 'Preparation for B.Com, BBA, CA & CS' },
      { name: 'Arts Stream (HEPS)', slug: 'pre-university-science-commerce-arts', note: 'Preparation for Humanities, Law (B.A. LL.B) & Civil Services' },
    ],
    academicFacilities: [
      'Physics, Chemistry, Biology, Electronics, and Computer Science PU Laboratories',
      'Dedicated PU Library, seminar hall, and campus sports grounds',
    ],
    learningOpportunities: [
      'Competitive exam foundation workshops for KCET, NEET, JEE, and CLAT',
      'Annual science exhibitions, commerce symposiums, and inter-PU sports meets',
    ],
    careerPaths: [
      'Direct academic pathway to B.E. Engineering, MBBS, B.Sc Nursing & Clinical Nutrition',
      'Direct pathway to B.Com, BBA, BCA, 5-Year Integrated B.A. LL.B & Chartered Accountancy',
    ],
    faqs: [
      {
        question: 'When do admissions open for I PUC after Class 10 results?',
        answer: 'Provisional enquiry and registration open prior to board results, with formal admission confirmed immediately upon publication of SSLC / ICSE / CBSE Class 10 marks.',
      },
    ],
    relatedRoutes: [
      { label: 'SEA Composite PU College', href: '/institutions/composite-pu-college' },
      { label: 'B.E. Programmes', href: '/academics/ug/be' },
      { label: 'Undergraduate Degree', href: '/academics/ug/degree' },
    ],
    bannerImage: '/assets/campus-photos/dept-16.jpg',
    bannerAlt: 'SEA Composite PU College campus building',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/page/overview',
      institutionScope: 'PU & School',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/mttm': {
    route: '/academics/mttm',
    slug: 'mttm',
    groupLabel: 'Additional Academic Programmes',
    title: 'Master of Tourism & Travel Management (MTTM)',
    officialSubtitle: 'Two-Year Postgraduate Degree in Global Tourism, Aviation & Hospitality Management',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    offeringInstitutionRoute: '/institutions/science-commerce-arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University | Recognised by Govt. of Karnataka',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor’s degree in any discipline from a recognised university with minimum 50% aggregate marks (45% for SC/ST/Cat-I candidates of Karnataka) as per Bengaluru North University norms.',
    introduction: [
      'The Master of Tourism & Travel Management (MTTM) is an official two-year postgraduate programme offered at S.E.A. Group of Institutions through SEA College of Science, Commerce & Arts.',
      'Designed for the rapidly growing global travel, aviation, hospitality, and destination management industries, MTTM combines management theory with practical itinerary design, ticketing workflows, heritage conservation, and tourism marketing.',
    ],
    programmeHighlights: [
      'Official Master of Tourism & Travel Management (MTTM) 4-semester postgraduate curriculum',
      'Focus on Tour Operations, Airline & Cargo Management, Hospitality Marketing, and Sustainable Tourism',
      'Experiential destination study tours and mandatory travel-industry internships',
    ],
    specialisations: [
      { name: 'Master of Tourism & Travel Management (MTTM)', slug: 'master-of-tourism-travel-management-mttm', note: '2-Year Full-Time Postgraduate Degree' },
    ],
    academicFacilities: [
      'Tourism Geography, Itinerary Planning, and Travel Operations Studio',
      'Central Library hospitality and tourism reference collection',
    ],
    learningOpportunities: [
      'Field visits to UNESCO heritage sites, airports, luxury hospitality properties, and tourism boards',
      'Dissertation and summer internship with tour operators, airlines, and destination management companies',
    ],
    careerPaths: [
      'Tourism Destination & Tour Operations Manager',
      'Airline, Airport Ground Operations & Cargo Executive',
      'MICE (Meetings, Incentives, Conferences & Exhibitions) Planner',
      'Hospitality Sales, Cruise Line & State Tourism Officer',
    ],
    faqs: [
      {
        question: 'Is prior study in tourism required to join MTTM?',
        answer: 'No. Graduates from any bachelor’s degree stream (Arts, Commerce, Management, Science, or Engineering) who meet the minimum aggregate percentage are eligible.',
      },
    ],
    relatedRoutes: [
      { label: 'MBA (BU)', href: '/academics/pg/mba-bu' },
      { label: 'Undergraduate Degree Programmes', href: '/academics/ug/degree' },
      { label: 'SEA College of Science, Commerce & Arts', href: '/institutions/science-commerce-arts' },
    ],
    bannerImage: '/assets/campus-photos/dept-17.jpg',
    bannerAlt: 'Master of Tourism and Travel Management MTTM programme banner',
    metadata: {
      sourceUrl: 'https://seaedu.ac.in/page/mttm',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/bsc-clinical-nutrition': {
    route: '/academics/bsc-clinical-nutrition',
    slug: 'bsc-clinical-nutrition',
    groupLabel: 'Additional Academic Programmes',
    title: 'B.Sc Clinical Nutrition',
    officialSubtitle: 'Three-Year Undergraduate Degree in Clinical Nutrition, Dietetics & Food Science',
    offeringInstitution: 'SEA College of Science, Commerce & Arts',
    offeringInstitutionRoute: '/institutions/science-commerce-arts',
    verifiedAffiliation: 'Affiliated to Bengaluru North University | Recognised by Govt. of Karnataka',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Completion of 10+2 / II PUC from a recognised board (Science stream with Chemistry/Biology as per university norms).',
    introduction: [
      'The B.Sc Clinical Nutrition (Clinical Nutrition & Dietetics) programme at S.E.A. Group of Institutions trains students to apply nutritional science and therapeutic dietetics to human health, clinical recovery, and community wellness.',
      'Structured across six semesters at SEA College of Science, Commerce & Arts, the programme bridges human physiology, nutritional biochemistry, food microbiology, and clinical diet counselling.',
    ],
    programmeHighlights: [
      'Full-time 3-Year (6-Semester) undergraduate science degree affiliated with Bengaluru North University',
      'Core focus on Medical Nutrition Therapy, Human Physiology, Food Science, and Community Dietetics',
      'Hands-on laboratory training in therapeutic meal planning and biochemical food analysis',
    ],
    specialisations: [
      { name: 'B.Sc Clinical Nutrition & Dietetics', slug: 'bsc-clinical-nutrition-dietetics', note: '3-Year Undergraduate Science Programme' },
    ],
    academicFacilities: [
      'Dedicated Clinical Nutrition, Food Science, and Biochemistry Laboratories',
      'Shared health-science resources with SEA College of Nursing on campus',
    ],
    learningOpportunities: [
      'Hospital dietetics internships and patient nutritional assessment workshops',
      'Community nutrition awareness drives and maternal/child health camps',
    ],
    careerPaths: [
      'Clinical Dietitian in Multi-Speciality Hospitals & Healthcare Centres',
      'Preventive Wellness, Sports & Lifestyle Nutritionist',
      'Public Health Nutritionist & Community Health Coordinator',
      'Food Safety, Nutraceutical R&D & Clinical Research Associate',
    ],
    faqs: [
      {
        question: 'What further studies can B.Sc Clinical Nutrition graduates pursue?',
        answer: 'Graduates can pursue M.Sc in Clinical Nutrition & Dietetics, Food Science & Nutrition, Public Health (MPH), or the PG Diploma in Hospital Administration.',
      },
    ],
    relatedRoutes: [
      { label: 'Hospital Administration (PG Diploma)', href: '/academics/hospital-administration' },
      { label: 'Undergraduate Nursing', href: '/academics/ug/nursing' },
      { label: 'Undergraduate Degree Programmes', href: '/academics/ug/degree' },
    ],
    bannerImage: '/assets/official/nursing.jpg',
    bannerAlt: 'B.Sc Clinical Nutrition and Dietetics laboratory banner',
    metadata: {
      sourceUrl: 'https://seaedu.ac.in/page/bsc-clinical-nutrition',
      institutionScope: 'Degree College',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  '/academics/hospital-administration': {
    route: '/academics/hospital-administration',
    slug: 'hospital-administration',
    groupLabel: 'Additional Academic Programmes',
    title: 'Hospital Administration (PG Diploma)',
    officialSubtitle: 'Postgraduate Diploma in Hospital Administration & Healthcare Facility Management',
    offeringInstitution: 'SEA Group of Institutions (Management & Allied Health Studies)',
    offeringInstitutionRoute: '/institutions/management-studies',
    verifiedAffiliation: 'Official Programme Classification: Postgraduate (PG) Diploma in Hospital Administration',
    duration: '1 Year (Postgraduate Diploma)',
    eligibility: 'Bachelor’s degree in any discipline (Medical, Nursing, Allied Health, Life Sciences, Commerce, Management, or Arts) from a recognised university.',
    introduction: [
      'In accordance with official S.E.A. Group programme documentation, the Hospital Administration programme is offered as a specialised Postgraduate Diploma (PG Diploma in Hospital Administration).',
      'Designed to prepare competent administrators for modern multi-speciality hospitals, diagnostic networks, and healthcare institutions, the curriculum covers hospital planning, clinical and support service operations, healthcare laws, quality accreditation (NABH), and medical records management.',
    ],
    programmeHighlights: [
      'Official Postgraduate Diploma classification tailored for graduate entrants into healthcare management',
      'Comprehensive coverage of Hospital Operations, Healthcare Laws & Ethics, NABH Quality Standards, and Health Insurance/TPA workflows',
      'Practical administrative exposure and hospital department rotations',
    ],
    specialisations: [
      { name: 'PG Diploma in Hospital Administration', slug: 'pg-diploma-hospital-administration', note: 'Postgraduate Diploma Classification (Not an MBA or Bachelor’s Degree)' },
    ],
    academicFacilities: [
      'Healthcare Management Seminar Rooms & Case Study Library',
      'Interdisciplinary learning environment alongside Nursing and Management faculties',
    ],
    learningOpportunities: [
      'Hospital department observation studies covering OPD, IPD, Emergency, Pharmacy, and Medical Records',
      'Workshops on hospital quality audits, patient safety protocols, and healthcare IT systems (HIS)',
    ],
    careerPaths: [
      'Hospital Operations & Floor Administrator',
      'Patient Care Services & Front-Office Manager',
      'Hospital Quality & Accreditation (NABH) Coordinator',
      'Health Insurance, TPA & Medical Billing Coordinator',
    ],
    faqs: [
      {
        question: 'Is Hospital Administration at S.E.A. a PG Diploma or a degree?',
        answer: 'The official S.E.A. Group page (seaedu.ac.in/page/hospital-administration) classifies this programme as a Postgraduate (PG) Diploma in Hospital Administration.',
      },
      {
        question: 'Can B.Sc Nursing or B.Com graduates apply for this programme?',
        answer: 'Yes. Graduates from Nursing, Allied Health, Life Sciences, Commerce, Management, and Arts are eligible to apply.',
      },
    ],
    relatedRoutes: [
      { label: 'B.Sc Clinical Nutrition', href: '/academics/bsc-clinical-nutrition' },
      { label: 'Nursing Programmes', href: '/academics/ug/nursing' },
      { label: 'MBA (VTU)', href: '/academics/pg/mba-vtu' },
      { label: 'MBA (BU)', href: '/academics/pg/mba-bu' },
    ],
    bannerImage: '/assets/official/nursing.jpg',
    bannerAlt: 'PG Diploma in Hospital Administration banner',
    metadata: {
      sourceUrl: 'https://seaedu.ac.in/page/hospital-administration',
      institutionScope: 'Management Studies',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
};

export function getProgrammeBySlug(slug: string): ProgrammeItem | undefined {
  return PROGRAMMES.find((prog) => prog.slug === slug);
}

export function getProgrammesByInstitution(institutionId: string): ProgrammeItem[] {
  if (!institutionId) return PROGRAMMES;
  return PROGRAMMES.filter((prog) => prog.institutionId === institutionId);
}

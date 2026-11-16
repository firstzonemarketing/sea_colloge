export interface TrainingStage {
  semester: string;
  title: string;
  focusAreas: string[];
}

export interface RecruiterPartner {
  name: string;
  sector: string;
  verificationNote: string;
}

export const PLACEMENT_TRAINING_ROADMAP: TrainingStage[] = [
  {
    semester: 'Semesters I – II',
    title: 'Foundational Communication & Digital Fluency',
    focusAreas: [
      'Professional English communication, presentation confidence, and workplace etiquette',
      'Foundational mathematical reasoning and structured problem-solving',
      'Introduction to engineering and commercial career tracks',
    ],
  },
  {
    semester: 'Semesters III – IV',
    title: 'Early Technical & Quantitative Aptitude Readiness',
    focusAreas: [
      'Structured placement training commences from the 3rd semester for professional streams',
      'Data structures, object-oriented programming, and core domain fundamentals',
      'Quantitative aptitude, logical reasoning, and verbal ability workshops',
    ],
  },
  {
    semester: 'Semesters V – VI',
    title: 'Domain Specialisation, Mock Assessments & Internships',
    focusAreas: [
      'Full-stack coding bootcamps, CAD/VLSI/core laboratory assessments, and financial case analysis',
      'Company-specific aptitude test simulations and Group Discussion (GD) clinics',
      'Industry internship facilitation and mini-project portfolio building',
    ],
  },
  {
    semester: 'Semesters VII – VIII (Final Year)',
    title: 'Campus Recruitment Drives & Executive Interview Grooming',
    focusAreas: [
      'One-on-one technical and HR mock interviews with industry practitioners',
      'Resume reviews, GitHub/LinkedIn profile verification, and pre-placement talks',
      'On-campus and pooled recruitment drives across IT, core engineering, banking, and healthcare sectors',
    ],
  },
];

export const VERIFIED_RECRUITING_COMPANIES: RecruiterPartner[] = [
  { name: 'Infosys', sector: 'IT Services & Consulting', verificationNote: 'Reported campus/pooled recruiter in institutional placement summaries' },
  { name: 'Wipro', sector: 'Technology & Engineering Services', verificationNote: 'Reported campus/pooled recruiter in institutional placement summaries' },
  { name: 'TCS (Tata Consultancy Services)', sector: 'Enterprise IT & Digital Solutions', verificationNote: 'Reported campus/pooled recruiter in institutional placement summaries' },
  { name: 'IBM', sector: 'Cloud, AI & Enterprise Systems', verificationNote: 'Reported campus/pooled recruiter in institutional placement summaries' },
  { name: 'HCLTech', sector: 'Software & Engineering R&D', verificationNote: 'Reported campus/pooled recruiter in institutional placement summaries' },
  { name: 'Capgemini', sector: 'Digital Transformation & Consulting', verificationNote: 'Reported campus/pooled recruiter in institutional placement summaries' },
];

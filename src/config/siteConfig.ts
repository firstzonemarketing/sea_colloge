export interface EditorialMetadata {
  sourceUrl: string;
  institutionScope:
    | 'Group-Wide'
    | 'SEACET (Engineering)'
    | 'Degree College'
    | 'Nursing College'
    | 'Law College'
    | 'Management Studies'
    | 'PU & School'
    | 'Skill & Research';
  verificationStatus: 'Verified' | 'Design-Review / Pending Confirmation';
  lastVerifiedDate: string;
}

export const SITE_CONFIG = {
  groupName: 'S.E.A. Group of Institutions',
  trustName: 'South East Asian Education Trust (S.E.A.E.T.)',
  trustFoundedYear: 2000,
  flagshipCollegeName: 'S.E.A. College of Engineering & Technology',
  flagshipShortName: 'SEACET',
  flagshipFoundedYear: 2007,
  activeAcademicYear: '2026–2027',
  admissionsStatus: 'Admissions Open',
  admissionsTickerText: 'Admissions Open 2026–2027',
  heroVideoUrl: '/assets/sea-campus-tour.mp4',
  heroPosterUrl: '/assets/official/hero.jpg',
  heroPosterFallbackWebp: '/assets/campus-photos/sea-campus-aerial.jpg',
  hasAuthorizedCampusVideo: true,
  logoUrl: '/assets/sea-logo.png',
  location: {
    campusArea: 'Ekta Nagar, Basavanapura, Virgonagar P.O., K.R. Puram',
    engineeringAddress:
      'Ekta Nagar, Basavanapura, Virgonagar P.O., K.R. Puram, Bengaluru – 560049, Karnataka, India',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560049',
    country: 'India',
    googleMapsVerifyUrl:
      'https://www.google.com/maps/search/?api=1&query=SEA+Group+of+Institutions+KR+Puram+Bengaluru',
  },
  contact: {
    generalEmail: 'seaeduinfo@seaedu.ac.in',
    secondaryEmail: 'info@seaedu.ac.in',
    engineeringEmail: 'principal@seacet.edu.in',
    admissionsEmail: 'seaeduinfo@seaedu.ac.in',
    phones: ['+91 7353945999', '+91 80 2561 8623', '+91 80 2561 8624'],
    officialWebsites: {
      group: 'https://www.seaedu.ac.in/',
      engineering: 'https://www.seacet.edu.in/',
      degree: 'https://seadegree.ac.in/',
      nursing: 'https://seanursing.edu.in/',
      law: 'https://sealawcollege.edu.in/',
    },
  },
};

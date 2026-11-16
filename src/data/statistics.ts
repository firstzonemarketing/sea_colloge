import { EditorialMetadata } from '../config/siteConfig';

export interface InstitutionalStat {
  id: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  scopeClarification: string;
  verificationBadge: string;
  metadata: EditorialMetadata;
}

export const INSTITUTIONAL_STATISTICS: InstitutionalStat[] = [
  {
    id: 'trust-established',
    value: '2000',
    numericValue: 2000,
    suffix: '',
    label: 'S.E.A. Trust Established',
    scopeClarification: 'South East Asian Education Trust founded in 2000; S.E.A. College of Engineering & Technology (SEACET) established in 2007.',
    verificationBadge: 'Verified Trust Founding Year',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/page/overview',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Verified',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'campus-acreage',
    value: '50+',
    numericValue: 50,
    suffix: '+',
    label: 'Acres of Green Campus',
    scopeClarification: 'Design-review group campus figure (SEACET engineering overview cites a 45-acre campus footprint; pending group-wide survey confirmation).',
    verificationBadge: 'Pending Official Scope Audit',
    metadata: {
      sourceUrl: 'https://www.seacet.edu.in/about-us.html',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Design-Review / Pending Confirmation',
      lastVerifiedDate: '2026-11-16',
    },
  },
  {
    id: 'student-community',
    value: '15,000+',
    numericValue: 15000,
    suffix: '+',
    label: 'Students',
    scopeClarification: 'Design-review group figure across all 12 constituent institutions (pending confirmation whether total reflects active enrolment or cumulative student reach).',
    verificationBadge: 'Group-Wide Scope Pending Verification',
    metadata: {
      sourceUrl: 'https://www.seaedu.ac.in/',
      institutionScope: 'Group-Wide',
      verificationStatus: 'Design-Review / Pending Confirmation',
      lastVerifiedDate: '2026-11-16',
    },
  },
];

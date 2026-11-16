import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  HelpCircle,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { AdmissionEnquiryForm } from '../../components/Forms/AdmissionEnquiryForm';
import {
  ADMISSIONS_DOCUMENTS_CHECKLIST,
  ADMISSIONS_FAQS,
  VERIFIED_ELIGIBILITY_TABLE,
} from '../../data/admissions';
import { SITE_CONFIG } from '../../config/siteConfig';

const ADMISSIONS_SUBNAV = [
  { label: 'Admissions Overview', href: '/admissions' },
  { label: 'Apply Online', href: '/admissions/apply' },
  { label: 'Admission Procedure', href: '/admissions/procedure' },
  { label: 'Eligibility', href: '/admissions/eligibility' },
  { label: 'Fees & Financial Aid', href: '/admissions/fees-financial-aid' },
  { label: 'Foreign National Admissions', href: '/admissions/international' },
  { label: 'NRI Admissions', href: '/admissions/nri' },
  { label: 'Prospectus / Brochure', href: '/admissions/prospectus' },
  { label: 'Admission Enquiry', href: '/admissions/enquiry' },
];

export const AdmissionsSubNav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-surface border-b border-slate-200">
      <div className="container-page py-3 flex flex-wrap items-center gap-2">
        {ADMISSIONS_SUBNAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-1.5 rounded text-xs sm:text-sm font-bold transition-colors ${
                active
                  ? 'bg-navy text-white'
                  : 'bg-white text-ink border border-slate-300 hover:border-navy hover:text-navy'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const AdmissionsPage: React.FC = () => {
  const { pathname } = useLocation();
  const [institutionFilter, setInstitutionFilter] = useState('All');

  const metaByRoute: Record<string, { title: string; subtitle: string; desc: string }> = {
    '/admissions': {
      title: `Admissions Overview (${SITE_CONFIG.activeAcademicYear})`,
      subtitle:
        'Transparent, institution-specific admission pathways across Engineering, Management, Nursing, Law, Degree, Research, and Pre-University programmes in Bengaluru.',
      desc: 'Explore admissions, verified eligibility criteria, required documents, and enquiry support for S.E.A. Group of Institutions.',
    },
    '/admissions/apply': {
      title: `Apply Online (${SITE_CONFIG.activeAcademicYear})`,
      subtitle:
        'Start your application enquiry for S.E.A. College of Engineering & Technology and the 12 constituent institutions of the S.E.A. Group.',
      desc: 'Online admission enquiry and counselling registration for S.E.A. Group of Institutions, K.R. Puram, Bengaluru.',
    },
    '/admissions/procedure': {
      title: 'Step-by-Step Admission Procedure',
      subtitle:
        'Understand the government quota (KEA / KCET / COMEDK / PGCET) and institutional management admission steps.',
      desc: 'Step-by-step admission procedure for B.E., M.Tech, MBA, Degree, Law, Nursing, and PU programmes at S.E.A. Group.',
    },
    '/admissions/eligibility': {
      title: 'Programme & Institution Eligibility Criteria',
      subtitle:
        'Verified university and statutory eligibility requirements across VTU, Bengaluru North University, RGUHS, KSLU, and DPUE.',
      desc: 'Institution-specific and programme-specific eligibility criteria for S.E.A. Group of Institutions.',
    },
    '/admissions/fees-financial-aid': {
      title: 'Fees, Scholarships & Financial Aid Support',
      subtitle:
        'Transparent fee enquiry governance and assistance for State (SSP), National (NSP), and Educational Loan schemes.',
      desc: 'Fee enquiry desk and government scholarship guidance at S.E.A. Group of Institutions.',
    },
    '/admissions/international': {
      title: 'Foreign National & International Admissions',
      subtitle:
        'Dedicated international student desk assisting with AIU equivalence, university eligibility certificates, and FRRO residential support.',
      desc: 'International and foreign national student admissions at S.E.A. Group of Institutions, Bengaluru.',
    },
    '/admissions/nri': {
      title: 'NRI & Gulf/Overseas Indian Admissions',
      subtitle:
        'Streamlined admission guidance for Non-Resident Indian (NRI) and NRI-sponsored applicants across Engineering, Nursing, Management, and Degree programmes.',
      desc: 'NRI admissions pathway and document requirements at S.E.A. Group of Institutions.',
    },
    '/admissions/prospectus': {
      title: 'Institutional Prospectus & Information Brochures',
      subtitle:
        'Request or review verified academic overviews for SEACET, Nursing, Law, Degree, Management, and School institutions.',
      desc: 'Prospectus and brochure request page for S.E.A. Group of Institutions.',
    },
    '/admissions/enquiry': {
      title: 'Admission Enquiry & Counselling Desk',
      subtitle:
        'Connect directly with our admissions counsellors or validate your programme selection using our interactive Demo Enquiry Form.',
      desc: 'Submit a demo admission enquiry or contact the Central Admissions Office in K.R. Puram, Bengaluru.',
    },
  };

  const currentMeta = metaByRoute[pathname] || metaByRoute['/admissions'];

  useDocumentMeta({
    title: `${currentMeta.title} | S.E.A. Group of Institutions`,
    description: currentMeta.desc,
    canonicalPath: pathname,
  });

  const breadcrumbs =
    pathname === '/admissions'
      ? [{ label: 'Admissions' }]
      : [
          { label: 'Admissions', href: '/admissions' },
          { label: currentMeta.title },
        ];

  const uniqueInstitutions = [
    'All',
    ...Array.from(new Set(VERIFIED_ELIGIBILITY_TABLE.map((r) => r.institution))),
  ];

  const filteredEligibility = VERIFIED_ELIGIBILITY_TABLE.filter(
    (row) => institutionFilter === 'All' || row.institution === institutionFilter
  );

  return (
    <div>
      <PageBanner
        eyebrow={`${SITE_CONFIG.admissionsStatus} • ${SITE_CONFIG.activeAcademicYear}`}
        title={currentMeta.title}
        subtitle={currentMeta.subtitle}
        breadcrumbs={breadcrumbs}
        bannerImage="/assets/sea-engineering-quad.svg"
        bannerAlt="S.E.A. Group of Institutions Admissions Banner"
        badgeText={SITE_CONFIG.activeAcademicYear}
      />

      <AdmissionsSubNav />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page space-y-16">
          {/* Route-Specific Primary Highlight Block */}
          {pathname === '/admissions/international' && (
            <div className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>Global Student Desk • Bengaluru</span>
              </div>
              <h2 className="heading-h2 font-extrabold text-navy">
                Admission Guidelines for Foreign National Students
              </h2>
              <p className="text-sm sm:text-base text-ink leading-relaxed">
                S.E.A. Group of Institutions welcomes international students to its K.R. Puram campus in Bengaluru. Foreign national applicants are admitted in accordance with the international student norms of Visvesvaraya Technological University (VTU), Bengaluru North University, Rajiv Gandhi University of Health Sciences (RGUHS), and Karnataka State Law University (KSLU).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                <div className="bg-white p-5 rounded border border-slate-200">
                  <h3 className="text-sm font-extrabold text-navy">1. Equivalence &amp; Eligibility</h3>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Obtain an Equivalence Certificate from the Association of Indian Universities (AIU), New Delhi (where required) and an Eligibility Certificate from the respective affiliating university in Karnataka.
                  </p>
                </div>
                <div className="bg-white p-5 rounded border border-slate-200">
                  <h3 className="text-sm font-extrabold text-navy">2. Student Visa &amp; Transcripts</h3>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Submit attested copies of high school / bachelor’s transcripts, valid passport, and provisional admission letter to apply for an Indian Student Visa.
                  </p>
                </div>
                <div className="bg-white p-5 rounded border border-slate-200">
                  <h3 className="text-sm font-extrabold text-navy">3. FRRO &amp; Hostel Onboarding</h3>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Our International Student Cell assists arriving scholars with Foreigners Regional Registration Office (FRRO) formalities in Bengaluru and on-campus hostel accommodation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {pathname === '/admissions/nri' && (
            <div className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>NRI &amp; Overseas Indian Admissions</span>
              </div>
              <h2 className="heading-h2 font-extrabold text-navy">
                Admission Pathway for NRI &amp; NRI-Sponsored Candidates
              </h2>
              <p className="text-sm sm:text-base text-ink leading-relaxed">
                Non-Resident Indian (NRI) candidates and students completing Class 12 (CBSE / ICSE / IB / GCE A-Levels or equivalent) in the Gulf, Middle East, Southeast Asia, Europe, or North America can apply under the NRI / Institutional category in accordance with AICTE, VTU, RGUHS, and Government of Karnataka norms.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink">
                <li className="p-3.5 bg-white rounded border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Valid Passport &amp; NRI Status Certificate / Embassy Proof of Parent or Sponsor</span>
                </li>
                <li className="p-3.5 bg-white rounded border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Affiliating University Eligibility Certificate (for boards outside India)</span>
                </li>
              </ul>
            </div>
          )}

          {pathname === '/admissions/fees-financial-aid' && (
            <div className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Fee Governance &amp; Scholarship Support
              </span>
              <h2 className="heading-h2 font-extrabold text-navy">
                Tuition Fees, Government Scholarships &amp; Bank Loan Assistance
              </h2>
              <p className="text-sm sm:text-base text-ink leading-relaxed">
                In accordance with institutional transparency standards, S.E.A. Group of Institutions does not publish unverified flat fee numbers online, as statutory tuition fees vary by admission quota (KEA Government Quota, COMEDK Quota, PGCET Quota, and Institutional Management Quota) and specific university specialization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded border border-slate-200">
                  <h3 className="text-sm font-extrabold text-navy">Karnataka SSP &amp; NSP Scholarships</h3>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Dedicated scholarship nodal officers assist eligible SC, ST, OBC, Minority, and Merit students in applying through the Karnataka State Scholarship Portal (SSP) and National Scholarship Portal (NSP).
                  </p>
                </div>
                <div className="bg-white p-5 rounded border border-slate-200">
                  <h3 className="text-sm font-extrabold text-navy">Education Loan Documentation</h3>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Admitted students receive official Bonafide and Fee Structure letters required for Vidya Lakshmi and nationalised/private bank education loan processing.
                  </p>
                </div>
                <div className="bg-white p-5 rounded border border-slate-200">
                  <h3 className="text-sm font-extrabold text-navy">Official Fee Schedule Request</h3>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Submit your programme choice in the Enquiry Form below or call the Central Admissions Office (+91 80 2561 8623) for the current session fee breakdown.
                  </p>
                </div>
              </div>
            </div>
          )}

          {pathname === '/admissions/prospectus' && (
            <div className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Academic Information &amp; Brochures</span>
              </div>
              <h2 className="heading-h2 font-extrabold text-navy">
                Institutional Prospectus &amp; Programme Guides ({SITE_CONFIG.activeAcademicYear})
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">
                Explore interactive digital programme guides on this website or submit an enquiry below to request printed institutional brochures from the Central Admissions Office.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  to="/academics/ug/be"
                  className="p-4 bg-white rounded border border-slate-200 hover:border-navy transition-colors"
                >
                  <span className="text-xs font-bold text-crimson block">SEACET Engineering</span>
                  <strong className="text-sm text-navy block mt-1">B.E., M.Tech &amp; MBA (VTU) Guide &rarr;</strong>
                </Link>
                <Link
                  to="/academics/ug/nursing"
                  className="p-4 bg-white rounded border border-slate-200 hover:border-navy transition-colors"
                >
                  <span className="text-xs font-bold text-crimson block">Health Sciences</span>
                  <strong className="text-sm text-navy block mt-1">B.Sc, PB B.Sc, GNM &amp; M.Sc Nursing &rarr;</strong>
                </Link>
                <Link
                  to="/academics/ug/law"
                  className="p-4 bg-white rounded border border-slate-200 hover:border-navy transition-colors"
                >
                  <span className="text-xs font-bold text-crimson block">Legal Studies</span>
                  <strong className="text-sm text-navy block mt-1">3-Year LL.B &amp; 5-Year B.A. LL.B &rarr;</strong>
                </Link>
                <Link
                  to="/academics/ug/degree"
                  className="p-4 bg-white rounded border border-slate-200 hover:border-navy transition-colors"
                >
                  <span className="text-xs font-bold text-crimson block">Degree &amp; Specialised</span>
                  <strong className="text-sm text-navy block mt-1">Degree, MTTM, Nutrition &amp; Hospital Admin &rarr;</strong>
                </Link>
              </div>
            </div>
          )}

          {/* Step-by-Step Admission Procedure */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-crimson">
              How to Join S.E.A.
            </span>
            <h2 className="mt-1 heading-h2 font-extrabold text-navy">
              4-Stage Admission Procedure
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Programme & Eligibility Check',
                  desc: 'Select your constituent institution and verify qualifying marks and entrance pathway (KCET, COMEDK, PGCET, GATE, KMAT, or Merit).',
                },
                {
                  step: '02',
                  title: 'Enquiry & Academic Counselling',
                  desc: 'Connect with the Central Admissions Office in K.R. Puram or submit an online enquiry for programme counselling and fee details.',
                },
                {
                  step: '03',
                  title: 'Original Document Verification',
                  desc: 'Submit qualifying marks cards, transfer/migration certificates, and entrance rank sheets for university eligibility verification.',
                },
                {
                  step: '04',
                  title: 'Seat Confirmation & Onboarding',
                  desc: 'Complete statutory tuition fee payment, receive your provisional admission order, and register for hostel/transport if required.',
                },
              ].map((st) => (
                <div
                  key={st.step}
                  className="rounded-lg border border-slate-200 p-6 bg-surface/60 relative"
                >
                  <span className="text-3xl font-extrabold text-crimson/25 font-heading">
                    {st.step}
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-navy">{st.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Eligibility Table (Filterable by Institution) */}
          <div id="eligibility-matrix">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                  Statutory &amp; University Norms
                </span>
                <h2 className="mt-1 heading-h2 font-extrabold text-navy">
                  Institution-Specific &amp; Programme-Specific Eligibility
                </h2>
              </div>

              <div>
                <label htmlFor="eligibility-inst-filter" className="sr-only">
                  Filter eligibility by institution
                </label>
                <select
                  id="eligibility-inst-filter"
                  value={institutionFilter}
                  onChange={(e) => setInstitutionFilter(e.target.value)}
                  className="px-3.5 py-2 min-h-[42px] rounded border border-slate-300 text-xs sm:text-sm font-semibold text-navy bg-white"
                >
                  {uniqueInstitutions.map((inst) => (
                    <option key={inst} value={inst}>
                      {inst === 'All' ? 'All Constituent Institutions' : inst}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-2xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-4 font-bold">Institution</th>
                    <th className="p-4 font-bold">Programme Group</th>
                    <th className="p-4 font-bold">Affiliating Body</th>
                    <th className="p-4 font-bold">Verified Eligibility Criteria</th>
                    <th className="p-4 font-bold">Selection Pathway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {filteredEligibility.map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface/60">
                      <td className="p-4 font-bold text-navy">{row.institution}</td>
                      <td className="p-4 font-semibold text-primary">{row.programmeGroup}</td>
                      <td className="p-4 text-ink-muted">{row.affiliatingBody}</td>
                      <td className="p-4 text-ink leading-relaxed">{row.eligibilityCriteria}</td>
                      <td className="p-4 font-medium text-ink">{row.selectionPathway}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enquiry Form + Document Checklist + Contact Support */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <AdmissionEnquiryForm />
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Document Information Checklist */}
              <div className="bg-surface rounded-lg border border-slate-200 p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-2">
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  <span>Required Documents</span>
                </div>
                <h3 className="text-lg font-extrabold text-navy">
                  Documents Required for Admission Verification
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-ink">
                  {ADMISSIONS_DOCUMENTS_CHECKLIST.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admissions Contact Support Desk */}
              <div className="bg-navy text-white rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-white">
                    Central Admissions Support Desk
                  </h3>
                  <ShieldCheck className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Visit our K.R. Puram campus or call our admissions counsellors directly for verified fee structures, scholarship guidance, and hostel bookings.
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-white/90">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{SITE_CONFIG.location.engineeringAddress}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                    <a href="tel:+918025618623" className="hover:text-gold font-semibold">
                      {SITE_CONFIG.contact.phones.join(' / ')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Admissions FAQs */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-2">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span>Applicant Guidance</span>
            </div>
            <h2 className="heading-h3 font-extrabold text-navy">
              Admissions Frequently Asked Questions
            </h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADMISSIONS_FAQS.map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-slate-200 p-5 bg-surface/50">
                  <h3 className="text-sm sm:text-base font-bold text-navy">{faq.question}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

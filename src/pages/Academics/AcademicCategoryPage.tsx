import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  HelpCircle,
  Layers,
  ShieldCheck,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { ACADEMIC_PAGES } from '../../data/programmes';

export const AcademicCategoryPage: React.FC = () => {
  const { pathname } = useLocation();
  const pageConfig = ACADEMIC_PAGES[pathname];

  useDocumentMeta({
    title: pageConfig
      ? `${pageConfig.title} | S.E.A. Group Academics`
      : 'Academic Programme | S.E.A. Group of Institutions',
    description: pageConfig
      ? `${pageConfig.officialSubtitle}. Offered by ${pageConfig.offeringInstitution} (${pageConfig.verifiedAffiliation}).`
      : 'Explore verified academic programmes at S.E.A. Group of Institutions.',
    canonicalPath: pathname,
  });

  if (!pageConfig) {
    return <Navigate to="/academics" replace />;
  }

  return (
    <div>
      {/* 1. Relevant Photographic Banner & 2. Breadcrumb & 3. Heading */}
      <PageBanner
        eyebrow={pageConfig.groupLabel}
        title={pageConfig.title}
        subtitle={pageConfig.officialSubtitle}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: pageConfig.title },
        ]}
        bannerImage={pageConfig.bannerImage}
        bannerAlt={pageConfig.bannerAlt}
        badgeText={pageConfig.duration}
        actions={
          <>
            <Link
              to={`/admissions/enquiry?programme=${pageConfig.specialisations[0]?.slug || ''}`}
              className="btn-primary"
            >
              <span>Enquire About This Programme</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link to={pageConfig.offeringInstitutionRoute} className="btn-outline-light">
              <span>View Offering Institution</span>
            </Link>
          </>
        }
      />

      {/* Main Content Layout */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Primary Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* 4. Introduction */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                  Programme Overview
                </span>
                <h2 className="mt-1 heading-h2 font-extrabold text-navy">
                  Academic Introduction
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-ink leading-relaxed">
                  {pageConfig.introduction.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* 7. Programme Information & Specialisations */}
              <div className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  <Layers className="w-4 h-4 text-crimson" aria-hidden="true" />
                  <span>Curriculum &amp; Specialisations</span>
                </div>
                <h2 className="heading-h3 font-extrabold text-navy">
                  Programme Structure &amp; Verified Branches
                </h2>

                <ul className="mt-4 space-y-2.5">
                  {pageConfig.programmeHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-1" aria-hidden="true" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-3">
                    Offered Specialisations / Streams
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pageConfig.specialisations.map((spec) => (
                      <div
                        key={spec.name}
                        className="bg-white rounded border border-slate-200 p-4 flex flex-col justify-between"
                      >
                        <div>
                          <Link
                            to={`/programmes/${spec.slug}`}
                            className="text-sm font-extrabold text-navy hover:text-crimson transition-colors"
                          >
                            {spec.name}
                          </Link>
                          {spec.note && (
                            <p className="mt-1 text-xs text-ink-muted">{spec.note}</p>
                          )}
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <Link
                            to={`/programmes/${spec.slug}`}
                            className="font-bold text-primary hover:text-crimson"
                          >
                            Programme Details &rarr;
                          </Link>
                          <Link
                            to={`/admissions/enquiry?programme=${spec.slug}`}
                            className="font-semibold text-crimson hover:underline"
                          >
                            Enquire
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 8. Academic Facilities & 9. Learning Opportunities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg border border-slate-200 p-6 bg-white">
                  <h3 className="text-lg font-extrabold text-navy">
                    Academic Facilities
                  </h3>
                  <p className="mt-1 text-xs text-ink-muted">
                    Laboratories, libraries, and specialised learning studios supporting this programme:
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-ink">
                    {pageConfig.academicFacilities.map((fac, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-crimson font-bold">•</span>
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 p-6 bg-white">
                  <h3 className="text-lg font-extrabold text-navy">
                    Learning Opportunities
                  </h3>
                  <p className="mt-1 text-xs text-ink-muted">
                    Practical training, internships, and experiential milestones:
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-ink">
                    {pageConfig.learningOpportunities.map((opp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 10. Possible Career Paths */}
              <div className="rounded-lg bg-navy text-white p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-2">
                  <Briefcase className="w-4 h-4" aria-hidden="true" />
                  <span>Graduate Outcomes</span>
                </div>
                <h2 className="heading-h3 font-extrabold text-white">
                  Possible Career Paths &amp; Progression
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pageConfig.careerPaths.map((career, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded bg-white/10 border border-white/15 text-sm font-semibold text-white"
                    >
                      {career}
                    </div>
                  ))}
                </div>
              </div>

              {/* 11. FAQs */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-2">
                  <HelpCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="heading-h3 font-extrabold text-navy">
                  Programme FAQs
                </h2>
                <div className="mt-4 space-y-4">
                  {pageConfig.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-slate-200 p-5 bg-surface/50"
                    >
                      <h3 className="text-base font-bold text-navy">{faq.question}</h3>
                      <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: 5. Offering Institution, 6. Verified Affiliation, Eligibility, Fee Enquiry, 12. Admissions CTA, 13. Related Programmes */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Key Programme Fact Card */}
              <div className="bg-surface rounded-lg border border-slate-200 p-6 space-y-5">
                <h2 className="text-base font-extrabold text-navy border-b border-slate-200 pb-3">
                  Verified Programme Details
                </h2>

                {/* 5. Offering Institution */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                    Offering Institution
                  </span>
                  <Link
                    to={pageConfig.offeringInstitutionRoute}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-crimson transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-crimson shrink-0" aria-hidden="true" />
                    <span>{pageConfig.offeringInstitution}</span>
                  </Link>
                </div>

                {/* 6. Verified Affiliation Information */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                    Verified Affiliation &amp; Approvals
                  </span>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-ink flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{pageConfig.verifiedAffiliation}</span>
                  </p>
                </div>

                {/* Duration */}
                {pageConfig.duration && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                      Programme Duration
                    </span>
                    <p className="mt-1 text-sm font-semibold text-navy flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-crimson" aria-hidden="true" />
                      <span>{pageConfig.duration}</span>
                    </p>
                  </div>
                )}

                {/* Eligibility */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                    Verified Eligibility Criteria
                  </span>
                  <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                    {pageConfig.eligibility}
                  </p>
                </div>

                {/* Intake & Fee Governance Note */}
                <div className="p-3.5 rounded bg-white border border-slate-200 text-xs text-ink-muted">
                  <strong className="text-navy block mb-1">
                    Current Fee Structure &amp; Seat Intake:
                  </strong>
                  Session-specific tuition fees and government/management quota seat matrices are provided directly by the Admissions Office upon enquiry.
                </div>

                {/* 12. Admissions CTA */}
                <div className="pt-2 space-y-2.5">
                  <Link
                    to={`/admissions/enquiry?programme=${pageConfig.specialisations[0]?.slug || ''}`}
                    className="btn-primary w-full"
                  >
                    <span>Request Fee &amp; Admission Details</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link to="/admissions/apply" className="btn-outline-navy w-full">
                    <span>Admissions Procedure</span>
                  </Link>
                </div>
              </div>

              {/* 13. Related Programmes */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2.5 mb-3">
                  Related Programmes &amp; Links
                </h3>
                <ul className="space-y-2">
                  {pageConfig.relatedRoutes.map((rel) => (
                    <li key={rel.href}>
                      <Link
                        to={rel.href}
                        className="flex items-center justify-between py-2 text-sm font-semibold text-ink hover:text-crimson transition-colors"
                      >
                        <span>{rel.label}</span>
                        <ArrowRight className="w-4 h-4 text-crimson" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  HelpCircle,
  ShieldCheck,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { getProgrammeBySlug, PROGRAMMES } from '../../data/programmes';
import { getInstitutionBySlug } from '../../data/institutions';

export const ProgrammeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const programme = slug ? getProgrammeBySlug(slug) : undefined;

  useDocumentMeta({
    title: programme
      ? `${programme.name} | ${programme.offeringInstitution}`
      : 'Programme Details | S.E.A. Group of Institutions',
    description: programme
      ? `${programme.shortDescription} Offered at ${programme.offeringInstitution} (${programme.verifiedAffiliation}).`
      : 'Programme details at S.E.A. Group of Institutions.',
    canonicalPath: slug ? `/programmes/${slug}` : '/academics',
  });

  if (!programme) {
    return <Navigate to="/academics" replace />;
  }

  const institution = getInstitutionBySlug(programme.institutionId);
  const relatedProgrammes = PROGRAMMES.filter(
    (p) =>
      p.id !== programme.id &&
      (p.explorerCategory === programme.explorerCategory ||
        p.institutionId === programme.institutionId)
  ).slice(0, 4);

  return (
    <div>
      <PageBanner
        eyebrow={`${programme.explorerCategory} • ${programme.academicLevel}`}
        title={programme.name}
        subtitle={programme.shortDescription}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: programme.explorerCategory, href: programme.academicSectionRoute },
          { label: programme.shortCode },
        ]}
        bannerImage={programme.image}
        bannerAlt={programme.imageAlt}
        badgeText={programme.duration}
        actions={
          <>
            <Link
              to={`/admissions/enquiry?institution=${programme.institutionId}&programme=${programme.slug}`}
              className="btn-primary"
            >
              <span>Apply / Enquire for {programme.shortCode}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link to={programme.academicSectionRoute} className="btn-outline-light">
              <span>Academic Category Page</span>
            </Link>
          </>
        }
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-10">
              {/* Introduction */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                  Academic Curriculum
                </span>
                <h2 className="mt-1 heading-h2 font-extrabold text-navy">
                  About {programme.name}
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-ink leading-relaxed">
                  {programme.overview.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Streams if applicable */}
              {programme.specialisationsOrStreams &&
                programme.specialisationsOrStreams.length > 0 && (
                  <div className="bg-surface rounded-lg border border-slate-200 p-6">
                    <h3 className="text-base font-extrabold text-navy mb-3">
                      Available Streams &amp; Combinations
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                      {programme.specialisationsOrStreams.map((stream) => (
                        <li
                          key={stream}
                          className="bg-white rounded border border-slate-200 p-3 flex items-center gap-2 font-semibold text-navy"
                        >
                          <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" aria-hidden="true" />
                          <span>{stream}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Facilities & Learning Opportunities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-extrabold text-navy">
                    Academic Facilities
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-sm text-ink">
                    {programme.academicFacilities.map((fac, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-crimson font-bold">•</span>
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-extrabold text-navy">
                    Learning Opportunities
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-sm text-ink">
                    {programme.learningOpportunities.map((opp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Career Paths */}
              <div className="rounded-lg bg-navy text-white p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-2">
                  <Briefcase className="w-4 h-4" aria-hidden="true" />
                  <span>Career Outcomes</span>
                </div>
                <h2 className="heading-h3 font-extrabold text-white">
                  Possible Career Paths
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {programme.careerPaths.map((career) => (
                    <div
                      key={career}
                      className="p-3.5 rounded bg-white/10 border border-white/15 text-sm font-semibold text-white"
                    >
                      {career}
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {programme.faqs.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-2">
                    <HelpCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Programme FAQs</span>
                  </div>
                  <div className="space-y-4">
                    {programme.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-slate-200 p-5 bg-surface/50"
                      >
                        <h3 className="text-base font-bold text-navy">{faq.question}</h3>
                        <p className="mt-1.5 text-sm text-ink-muted">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-surface rounded-lg border border-slate-200 p-6 space-y-5">
                <h2 className="text-base font-extrabold text-navy border-b border-slate-200 pb-3">
                  Programme Fact Sheet
                </h2>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                    Offering Institution
                  </span>
                  {institution ? (
                    <Link
                      to={institution.route}
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-crimson"
                    >
                      <Building2 className="w-4 h-4 text-crimson shrink-0" aria-hidden="true" />
                      <span>{programme.offeringInstitution}</span>
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm font-bold text-navy">
                      {programme.offeringInstitution}
                    </p>
                  )}
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                    Verified Affiliation
                  </span>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-ink flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{programme.verifiedAffiliation}</span>
                  </p>
                </div>

                {programme.duration && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                      Duration
                    </span>
                    <p className="mt-1 text-sm font-semibold text-navy flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-crimson" aria-hidden="true" />
                      <span>{programme.duration}</span>
                    </p>
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                    Eligibility Summary
                  </span>
                  <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                    {programme.eligibilitySummary}
                  </p>
                </div>

                <div className="pt-2 space-y-2.5">
                  <Link
                    to={`/admissions/enquiry?institution=${programme.institutionId}&programme=${programme.slug}`}
                    className="btn-primary w-full"
                  >
                    <span>Enquire About Admission &amp; Fees</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Related Programmes */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2.5 mb-3">
                  Related Programmes
                </h3>
                <ul className="space-y-2.5">
                  {relatedProgrammes.map((rel) => (
                    <li key={rel.id}>
                      <Link
                        to={`/programmes/${rel.slug}`}
                        className="block p-2.5 rounded bg-surface hover:bg-navy hover:text-white transition-colors text-xs sm:text-sm font-bold text-navy"
                      >
                        {rel.name}
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

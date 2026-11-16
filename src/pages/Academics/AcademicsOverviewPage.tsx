import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { ProgrammeExplorer } from '../../components/ProgrammeCards/ProgrammeExplorer';
import { ACADEMIC_PAGES } from '../../data/programmes';

export const AcademicsOverviewPage: React.FC = () => {
  useDocumentMeta({
    title: 'Academics Overview | Undergraduate, Postgraduate & Research Programmes',
    description:
      'Explore all undergraduate (B.E., Degree, Law, Nursing), postgraduate (M.Tech, MBA VTU, MBA BU, M.Com, M.Sc, M.A., MTTM), PG Diploma in Hospital Administration, B.Sc Clinical Nutrition, Research, and Pre-University programmes at S.E.A. Group of Institutions.',
    canonicalPath: '/academics',
  });

  const allAcademicPages = Object.values(ACADEMIC_PAGES);
  const ugPages = allAcademicPages.filter((p) => p.groupLabel === 'Undergraduate Programmes');
  const pgPages = allAcademicPages.filter((p) => p.groupLabel === 'Postgraduate Programmes');
  const additionalPages = allAcademicPages.filter(
    (p) => p.groupLabel === 'Additional Academic Programmes'
  );

  return (
    <div>
      <PageBanner
        eyebrow="S.E.A. Academic Framework"
        title="Academics & Programme Directory"
        subtitle="Rigorous, university-affiliated curricula spanning Engineering & Technology, Management, Law, Nursing, Clinical Nutrition, Tourism (MTTM), Hospital Administration, Doctoral Research, and Pre-University Studies."
        breadcrumbs={[{ label: 'Academics' }]}
        bannerImage="/assets/sea-engineering-quad.svg"
        bannerAlt="S.E.A. Group of Institutions Academic Overview Banner"
        actions={
          <>
            <a href="#programme-explorer" className="btn-primary">
              <span>Search All 25 Programmes</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <Link to="/admissions/eligibility" className="btn-outline-light">
              <span>Verify Eligibility</span>
            </Link>
          </>
        }
      />

      {/* Academic Categories Matrix */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="container-page space-y-14">
          {/* 1. Undergraduate Programmes */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-5 h-5 text-crimson" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Undergraduate Studies
              </span>
            </div>
            <h2 className="heading-h2 font-extrabold text-navy">
              Undergraduate Programmes
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-ink-muted max-w-2xl">
              Foundational professional and degree programmes affiliated with VTU, Bengaluru North University, RGUHS, and KSLU.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ugPages.map((page) => (
                <article
                  key={page.route}
                  className="bg-surface rounded-lg border border-slate-200 p-6 flex flex-col justify-between hover:border-navy transition-colors"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-navy text-gold mb-3">
                      {page.duration || 'Undergraduate'}
                    </span>
                    <h3 className="text-lg font-extrabold text-navy">
                      <Link to={page.route} className="hover:text-crimson transition-colors">
                        {page.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                      {page.officialSubtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <Link
                      to={page.route}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-crimson hover:underline"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    <span className="text-[11px] font-semibold text-ink-muted">
                      {page.specialisations.length} Tracks
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 2. Postgraduate Programmes */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Layers className="w-5 h-5 text-crimson" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Postgraduate Studies
              </span>
            </div>
            <h2 className="heading-h2 font-extrabold text-navy">
              Postgraduate Programmes
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-ink-muted max-w-2xl">
              Advanced master’s programmes in Engineering, Management (with separate VTU and BU tracks), Commerce, Nursing, Humanities, and Computer Science.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pgPages.map((page) => (
                <article
                  key={page.route}
                  className="bg-surface rounded-lg border border-slate-200 p-6 flex flex-col justify-between hover:border-navy transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-primary text-white">
                        {page.duration || '2 Years'}
                      </span>
                      <span className="text-[11px] font-semibold text-ink-muted truncate">
                        {page.offeringInstitution}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-navy">
                      <Link to={page.route} className="hover:text-crimson transition-colors">
                        {page.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                      {page.officialSubtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/80">
                    <Link
                      to={page.route}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-crimson transition-colors"
                    >
                      <span>View Programme Details</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 3. Additional Academic Programmes */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <FlaskConical className="w-5 h-5 text-crimson" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Research, Pre-University &amp; Specialised Career Programmes
              </span>
            </div>
            <h2 className="heading-h2 font-extrabold text-navy">
              Additional Academic Programmes
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-ink-muted max-w-2xl">
              Doctoral research centres, Pre-University (Class XI–XII), Master of Tourism &amp; Travel Management (MTTM), B.Sc Clinical Nutrition, and the PG Diploma in Hospital Administration.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalPages.map((page) => (
                <article
                  key={page.route}
                  className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:border-navy transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-crimson" aria-hidden="true" />
                      <span className="text-xs font-bold text-primary">
                        {page.offeringInstitution}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-navy">
                      <Link to={page.route} className="hover:text-crimson transition-colors">
                        {page.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                      {page.officialSubtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={page.route}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-crimson hover:underline"
                    >
                      <span>Open Academic Page</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    <ShieldCheck className="w-4 h-4 text-navy/60" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Searchable Programme Explorer */}
      <ProgrammeExplorer />
    </div>
  );
};

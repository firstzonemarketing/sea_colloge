import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  FileCheck,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import {
  PLACEMENT_TRAINING_ROADMAP,
  VERIFIED_RECRUITING_COMPANIES,
} from '../../data/placements';

const PLACEMENTS_SUBNAV = [
  { label: 'Placements Overview', href: '/placements' },
  { label: 'Training & Career Readiness', href: '/placements/training' },
  { label: 'Recruiters', href: '/placements/recruiters' },
  { label: 'Achievements & Verification', href: '/placements/achievements' },
];

export const PlacementsSubNav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-surface border-b border-slate-200">
      <div className="container-page py-3 flex flex-wrap items-center gap-2">
        {PLACEMENTS_SUBNAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-1.5 rounded text-xs sm:text-sm font-bold transition-colors ${
                active
                  ? 'bg-navy text-white'
                  : 'bg-white text-ink border border-slate-300 hover:border-navy'
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

export const PlacementsPage: React.FC = () => {
  const { pathname } = useLocation();

  const metaMap: Record<string, { title: string; subtitle: string; desc: string }> = {
    '/placements': {
      title: 'Training & Placement Cell Overview',
      subtitle:
        'Bridging academic rigour and corporate employability through semester-wise skill training, industry internships, and campus recruitment support.',
      desc: 'Explore the Training and Placement Cell at S.E.A. College of Engineering & Technology and S.E.A. Group of Institutions, Bengaluru.',
    },
    '/placements/training': {
      title: 'Placement Training & Career Preparation',
      subtitle:
        'Structured career readiness modules starting from the 3rd semester covering quantitative aptitude, technical coding, group discussions, and executive interviews.',
      desc: 'Semester-wise placement training roadmap at S.E.A. College of Engineering & Technology.',
    },
    '/placements/recruiters': {
      title: 'Recruiting Organizations & Corporate Engagement',
      subtitle:
        'Industry interaction, technical pre-placement talks, and participating corporate recruiters across IT, Core Engineering, Management, and Healthcare.',
      desc: 'Verified recruiting organizations and corporate engagement at S.E.A. Group of Institutions.',
    },
    '/placements/achievements': {
      title: 'Student Career Milestones & Placement Verification Desk',
      subtitle:
        'Verified academic-to-career pathways and transparent department-wise placement report enquiry.',
      desc: 'Student career milestones and verified placement documentation at S.E.A. Group of Institutions.',
    },
  };

  const currentMeta = metaMap[pathname] || metaMap['/placements'];

  useDocumentMeta({
    title: `${currentMeta.title} | S.E.A. Group of Institutions`,
    description: currentMeta.desc,
    canonicalPath: pathname,
  });

  const breadcrumbs =
    pathname === '/placements'
      ? [{ label: 'Placements' }]
      : [
          { label: 'Placements', href: '/placements' },
          { label: currentMeta.title },
        ];

  return (
    <div>
      <PageBanner
        eyebrow="Career Development & Corporate Relations"
        title={currentMeta.title}
        subtitle={currentMeta.subtitle}
        breadcrumbs={breadcrumbs}
        bannerImage="/assets/sea-computing-lab.svg"
        bannerAlt="S.E.A. Group Placement and Career Training Cell"
        actions={
          <>
            <Link to="/admissions/enquiry" className="btn-primary">
              <span>Request Department Placement Report</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link to="/placements/training" className="btn-outline-light">
              <span>View Training Roadmap</span>
            </Link>
          </>
        }
      />

      <PlacementsSubNav />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page space-y-16">
          {/* Placement Introduction & Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Institutional Career Cell
              </span>
              <h2 className="heading-h2 font-extrabold text-navy">
                Preparing Graduates for Bengaluru’s Technology, Corporate &amp; Healthcare Ecosystems
              </h2>
              <p className="text-sm sm:text-base text-ink leading-relaxed">
                Located in K.R. Puram—adjacent to Whitefield, ITPL, Mahadevapura, and East Bengaluru’s major industrial corridors—the Training &amp; Placement Cell at S.E.A. College of Engineering &amp; Technology (SEACET) and sister institutions works continuously to align student capabilities with industry expectations.
              </p>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                Rather than waiting until the final semester, structured placement training begins in the third semester for engineering and professional students, combining technical laboratory proficiency with aptitude, communication, and internship immersion.
              </p>
            </div>

            <div className="lg:col-span-5 bg-surface rounded-lg border border-slate-200 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-3">
                <Briefcase className="w-4 h-4 text-crimson" aria-hidden="true" />
                <span>Core Placement Cell Functions</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-ink">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-navy">Early Aptitude &amp; Coding Bootcamps:</strong> Dedicated hours integrated into the academic timetable from the 3rd semester.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-navy">Mandatory Internships:</strong> VTU societal/industrial internships, hospital clinical postings (Nursing/Nutrition), and chamber internships (Law).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-navy">Industry Interaction:</strong> Technical workshops, alumni career panels, and corporate pre-placement talks.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Semester-Wise Training Roadmap */}
          <div id="training-roadmap">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-2">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Career Preparation Architecture</span>
            </div>
            <h2 className="heading-h2 font-extrabold text-navy">
              Semester-Wise Training &amp; Development Roadmap
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PLACEMENT_TRAINING_ROADMAP.map((stage) => (
                <div
                  key={stage.semester}
                  className="rounded-lg border border-slate-200 p-6 bg-surface/60 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-navy text-gold mb-3">
                      {stage.semester}
                    </span>
                    <h3 className="text-base font-extrabold text-navy">
                      {stage.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-xs text-ink-muted leading-relaxed">
                      {stage.focusAreas.map((fa, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-crimson font-bold">•</span>
                          <span>{fa}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiters Section */}
          <div id="recruiters-directory" className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-1.5">
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>Corporate Recruitment Network</span>
                </div>
                <h2 className="heading-h2 font-extrabold text-navy">
                  Participating &amp; Reported Recruiting Organizations
                </h2>
                <p className="mt-1.5 text-sm text-ink-muted max-w-2xl">
                  The following organizations are documented in institutional placement overviews as participating in campus or pooled recruitment drives for S.E.A. engineering, management, and degree graduates.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VERIFIED_RECRUITING_COMPANIES.map((rec) => (
                <div
                  key={rec.name}
                  className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {rec.sector}
                    </span>
                    <h3 className="mt-1 text-lg font-extrabold text-navy">
                      {rec.name}
                    </h3>
                  </div>
                  <p className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-ink-muted">
                    {rec.verificationNote}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Content Governance Section (Strict Compliance: No Fabricated Stats) */}
          <div
            id="achievements-verification"
            className="rounded-lg bg-navy text-white p-6 sm:p-10 space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-1.5">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span>Verified Placement &amp; Achievement Governance</span>
                </div>
                <h2 className="heading-h2 font-extrabold text-white">
                  Student Career Milestones &amp; Official Placement Records
                </h2>
              </div>
              <ShieldCheck className="w-8 h-8 text-gold shrink-0" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3 text-sm text-white/85 leading-relaxed">
                <p>
                  In accordance with S.E.A. Group’s institutional content governance policy, this portal does not display unverified placement percentages, unverified highest/average salary package claims, or unverified student testimonials.
                </p>
                <p>
                  Audited, batch-specific, and department-wise placement records (including NIRF/AICTE/VTU placement submissions and clinical/legal career outcomes) are maintained by the Training &amp; Placement Cell and shared directly with prospective students and parents during admission counselling.
                </p>
              </div>

              <div className="lg:col-span-4 bg-white/10 border border-white/20 rounded-lg p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <FileCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Official Placement Enquiry</span>
                </div>
                <p className="text-xs text-white/85">
                  Request branch-specific placement data or corporate recruiter collaboration details directly from the Placement Officer.
                </p>
                <Link to="/admissions/enquiry" className="btn-primary w-full">
                  <span>Enquire with Placement Cell</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

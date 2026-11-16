import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { VideoHero } from '../../components/Hero/VideoHero';
import { AdmissionsTicker } from '../../components/Hero/AdmissionsTicker';
import { InstitutionalStats } from '../../components/Statistics/InstitutionalStats';
import { ProgrammeExplorer } from '../../components/ProgrammeCards/ProgrammeExplorer';
import { INSTITUTIONS, INSTITUTION_CATEGORIES } from '../../data/institutions';
import { BLOG_AND_EVENT_ITEMS, isUpcomingDate } from '../../data/events';
import { VERIFIED_RECRUITING_COMPANIES } from '../../data/placements';
import { SITE_CONFIG } from '../../config/siteConfig';

export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'S.E.A. College of Engineering & Technology | S.E.A. Group of Institutions, Bengaluru',
    description:
      'Official digital platform of S.E.A. College of Engineering & Technology (SEACET) and the 12 institutions of S.E.A. Group of Institutions in K.R. Puram, Bengaluru.',
    canonicalPath: '/',
  });

  const featuredNewsAndEvents = BLOG_AND_EVENT_ITEMS.slice(0, 4);

  return (
    <div>
      {/* SECTION B: CINEMATIC VIDEO HERO */}
      <VideoHero />

      {/* SECTION C: ADMISSIONS ANNOUNCEMENT TICKER */}
      <AdmissionsTicker />

      {/* SECTION D: COLLEGE INTRODUCTION */}
      <section
        aria-labelledby="college-intro-heading"
        className="py-16 sm:py-20 lg:py-24 bg-white"
      >
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson">
                Part of S.E.A. Group of Institutions
              </p>

              <h1
                id="college-intro-heading"
                className="mt-2 heading-h1 font-extrabold text-navy tracking-tight"
              >
                S.E.A. College of Engineering &amp; Technology
              </h1>

              <p className="mt-5 text-base sm:text-lg text-ink leading-relaxed">
                Established in 2007 under the <strong className="font-semibold text-navy">South East Asian Education Trust (founded in 2000)</strong>, S.E.A. College of Engineering &amp; Technology (SEACET) is a premier co-educational engineering institution located at Ekta Nagar, K.R. Puram, Bengaluru.
              </p>

              <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                Affiliated to <strong className="text-ink">Visvesvaraya Technological University (VTU), Belagavi</strong>, approved by the <strong className="text-ink">All India Council for Technical Education (AICTE), New Delhi</strong>, recognized by the Government of Karnataka, and accredited by NAAC, SEACET integrates rigorous undergraduate B.E., postgraduate M.Tech and MBA, and doctoral research programmes within a vibrant multidisciplinary campus.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link to="/institutions/engineering-technology" className="btn-navy">
                  <span>Explore SEACET Profile</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link to="/academics/ug/be" className="btn-outline-navy">
                  <span>View B.E. Branches</span>
                </Link>
              </div>
            </div>

            {/* Right Editorial Verification Pillars */}
            <div className="lg:col-span-5 bg-surface rounded-lg border border-slate-200/90 p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-crimson">
                    Institutional Fact Sheet
                  </span>
                  <h2 className="text-lg font-extrabold text-navy mt-0.5">
                    Verified Academic Charter
                  </h2>
                </div>
                <ShieldCheck className="w-7 h-7 text-navy shrink-0" aria-hidden="true" />
              </div>

              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <strong className="text-navy block">VTU &amp; AICTE Approved</strong>
                    <span className="text-xs text-ink-muted">
                      9 Undergraduate B.E. branches, 2 M.Tech specialisations &amp; MBA (VTU)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <strong className="text-navy block">VTU-Recognised Research Centres</strong>
                    <span className="text-xs text-ink-muted">
                      Ph.D. &amp; M.Sc. (Engg.) by Research in CSE, ECE, Mechanical, Chemistry &amp; MBA
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <strong className="text-navy block">12 Constituent Group Institutions</strong>
                    <span className="text-xs text-ink-muted">
                      Engineering, Management, Nursing, Law, Degree, B.Ed, PU, ITI &amp; K–12 Schools
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-crimson shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <strong className="text-navy block">K.R. Puram, Bengaluru – 560049</strong>
                    <span className="text-xs text-ink-muted">
                      Integrated green campus in East Bengaluru’s technology corridor
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: CAMPUS PHOTOGRAPH */}
      <section aria-label="Campus Architectural Panorama" className="pb-16 sm:pb-20 bg-white">
        <div className="container-page space-y-6">
          {/* Primary Full-Width Aerial Campus Panorama Uploaded by User */}
          <figure className="rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-navy">
            <div className="aspect-16/9 sm:aspect-21/9 w-full overflow-hidden">
              <img
                src="/assets/campus-photos/sea-campus-aerial.jpg"
                alt="Aerial panoramic view of S.E.A. Group of Institutions and S.E.A. College of Engineering and Technology campus in K.R. Puram, Bengaluru"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <figcaption className="bg-navy text-white/90 px-5 py-3.5 text-xs sm:text-sm flex flex-wrap items-center justify-between gap-2 border-t border-white/10">
              <span>
                <strong className="text-gold">Aerial Panorama — S.E.A. Group of Institutions</strong> • Ekta Nagar, Basavanapura, K.R. Puram, Bengaluru – 560049
              </span>
              <span className="text-white/75 text-xs">
                Integrated Multidisciplinary Campus Enclave
              </span>
            </figcaption>
          </figure>

          {/* Supporting Campus Highlights Grid from Official Campus Footage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <figure className="rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-navy">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="/assets/campus-photos/dept-16.jpg"
                  alt="Aerial view of SEACET rotunda, landscaped gardens, and engineering block"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <figcaption className="bg-navy text-white/85 px-4 py-3 text-xs border-t border-white/10">
                <strong className="text-gold block">SEACET Central Rotunda &amp; Lawns</strong>
                <span>Landscaped academic quadrangle &amp; engineering wing</span>
              </figcaption>
            </figure>

            <figure className="rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-navy">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="/assets/campus-photos/dept-2.jpg"
                  alt="S.E.A. Group main academic building facade lined with palm trees"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <figcaption className="bg-navy text-white/85 px-4 py-3 text-xs border-t border-white/10">
                <strong className="text-gold block">Main Academic &amp; Degree Block</strong>
                <span>Tree-lined campus avenues in K.R. Puram</span>
              </figcaption>
            </figure>

            <figure className="rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-navy">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="/assets/campus-photos/dept-5.jpg"
                  alt="Official S.E.A. Group of Institutions constituent colleges facade board"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <figcaption className="bg-navy text-white/85 px-4 py-3 text-xs border-t border-white/10">
                <strong className="text-gold block">12 Constituent Institutions</strong>
                <span>Unified governance under South East Asian Education Trust</span>
              </figcaption>
            </figure>
          </div>

          {/* Continuous Side-Scrolling Campus & Facilities Photo Reel */}
          <div className="pt-2 overflow-hidden ticker-wrapper" aria-label="Campus Facilities Continuous Photo Reel">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Campus Life &amp; Laboratories in Motion
              </span>
              <Link to="/campus-life/gallery" className="text-xs font-bold text-navy hover:text-crimson">
                View Full Gallery &rarr;
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-surface p-3">
              <div className="ticker-track-slow gap-4">
                {[
                  { src: '/assets/official/campus.jpg', label: 'S.E.A.E.T. Main Entrance Arch' },
                  { src: '/assets/campus-photos/dept-10.jpg', label: 'Central Library & Reading Hall' },
                  { src: '/assets/campus-photos/dept-11.jpg', label: 'Electronics & Hardware Lab' },
                  { src: '/assets/campus-photos/dept-15.jpg', label: 'Mechanical & ITI Machine Shop' },
                  { src: '/assets/campus-photos/dept-17.jpg', label: 'Auditorium & Seminar Hall' },
                  { src: '/assets/campus-photos/dept-14.jpg', label: 'Indoor Basketball Stadium' },
                  { src: '/assets/campus-photos/dept-13.jpg', label: 'Outdoor Volleyball Courts' },
                  { src: '/assets/campus-photos/dept-19.jpg', label: 'On-Campus Fitness Gymnasium' },
                  { src: '/assets/campus-photos/dept-20.jpg', label: 'Annual Cultural Festival' },
                  { src: '/assets/campus-photos/dept-8.jpg', label: 'Botanical Campus Gardens' },
                  { src: '/assets/official/campus.jpg', label: 'S.E.A.E.T. Main Entrance Arch' },
                  { src: '/assets/campus-photos/dept-10.jpg', label: 'Central Library & Reading Hall' },
                  { src: '/assets/campus-photos/dept-11.jpg', label: 'Electronics & Hardware Lab' },
                  { src: '/assets/campus-photos/dept-15.jpg', label: 'Mechanical & ITI Machine Shop' },
                  { src: '/assets/campus-photos/dept-17.jpg', label: 'Auditorium & Seminar Hall' },
                  { src: '/assets/campus-photos/dept-14.jpg', label: 'Indoor Basketball Stadium' },
                  { src: '/assets/campus-photos/dept-13.jpg', label: 'Outdoor Volleyball Courts' },
                  { src: '/assets/campus-photos/dept-19.jpg', label: 'On-Campus Fitness Gymnasium' },
                  { src: '/assets/campus-photos/dept-20.jpg', label: 'Annual Cultural Festival' },
                  { src: '/assets/campus-photos/dept-8.jpg', label: 'Botanical Campus Gardens' },
                ].map((photo, idx) => (
                  <div
                    key={idx}
                    className="w-64 sm:w-72 shrink-0 rounded overflow-hidden bg-navy border border-slate-200 shadow-2xs"
                  >
                    <img
                      src={photo.src}
                      alt={photo.label}
                      loading="lazy"
                      className="w-full h-36 object-cover"
                    />
                    <div className="px-3 py-2 text-xs font-bold text-white truncate">
                      {photo.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: INSTITUTIONAL STATISTICS */}
      <InstitutionalStats />

      {/* SECTION G: PROGRAMME AND CAREER EXPLORER */}
      <ProgrammeExplorer />

      {/* SECTION H.1: INSTITUTION DIRECTORY PREVIEW (4 VISUAL CATEGORIES) */}
      <section
        aria-labelledby="institutions-preview-heading"
        className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200"
      >
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                One Multidisciplinary Ecosystem
              </span>
              <h2
                id="institutions-preview-heading"
                className="mt-1.5 heading-h2 font-extrabold text-navy"
              >
                12 Constituent Institutions Under S.E.A. Group
              </h2>
              <p className="mt-2 text-sm sm:text-base text-ink-muted max-w-2xl">
                Organised across Higher Education, Professional Education, School Education, and Research &amp; Skill Development on our K.R. Puram campus.
              </p>
            </div>

            <Link to="/institutions" className="btn-navy shrink-0">
              <span>Explore All 12 Institutions</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSTITUTION_CATEGORIES.map((category) => {
              const items = INSTITUTIONS.filter((i) => i.category === category);
              return (
                <div
                  key={category}
                  className="rounded-lg border border-slate-200 bg-surface/60 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
                      <h3 className="text-lg font-extrabold text-navy">{category}</h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-navy text-gold">
                        {items.length} {items.length === 1 ? 'Institution' : 'Institutions'}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {items.map((inst) => (
                        <li
                          key={inst.id}
                          className="bg-white rounded border border-slate-200/80 p-3.5 hover:border-navy transition-colors"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <img
                              src={inst.image}
                              alt={inst.imageAlt}
                              loading="lazy"
                              className="w-16 h-16 rounded object-cover object-top shrink-0 border border-slate-200 bg-navy"
                            />
                            <div className="flex-1 min-w-0">
                              <Link
                                to={inst.route}
                                className="text-sm sm:text-base font-bold text-navy hover:text-crimson transition-colors block"
                              >
                                {inst.name}
                              </Link>
                              <p className="mt-1 text-xs text-ink-muted line-clamp-2">
                                {inst.shortDescription}
                              </p>
                            </div>
                            <Link
                              to={inst.route}
                              aria-label={`Explore ${inst.name}`}
                              className="p-1.5 rounded bg-surface text-navy hover:bg-crimson hover:text-white transition-colors shrink-0"
                            >
                              <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/70">
                    <Link
                      to={`/institutions?category=${encodeURIComponent(category)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-crimson hover:underline"
                    >
                      <span>View {category} Directory</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION H.2: CAMPUS LIFE PREVIEW (EDITORIAL ASYMMETRIC SHOWCASE) */}
      <section
        aria-labelledby="campus-life-preview-heading"
        className="py-16 sm:py-20 lg:py-24 bg-navy text-white"
      >
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Holistic Student Experience
              </span>
              <h2
                id="campus-life-preview-heading"
                className="heading-h2 font-extrabold text-white"
              >
                Life on the K.R. Puram Multidisciplinary Campus
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                From advanced computing and clinical laboratories to central libraries, supervised residential hostels, and expansive outdoor athletics grounds, the S.E.A. campus is built to support academic rigour and vibrant community living.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  to="/campus-life/infrastructure"
                  className="p-3.5 rounded bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-colors"
                >
                  Campus Infrastructure &rarr;
                </Link>
                <Link
                  to="/campus-life/library"
                  className="p-3.5 rounded bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-colors"
                >
                  Central Libraries &rarr;
                </Link>
                <Link
                  to="/campus-life/hostels"
                  className="p-3.5 rounded bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-colors"
                >
                  Hostels &amp; Dining &rarr;
                </Link>
                <Link
                  to="/campus-life/sports"
                  className="p-3.5 rounded bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-colors"
                >
                  Sports &amp; Gymnasium &rarr;
                </Link>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <Link to="/campus-life" className="btn-primary">
                  <span>Explore Campus Life</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link to="/campus-life/gallery" className="btn-outline-light">
                  <span>Campus Gallery</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/15 rounded-lg overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src="/assets/campus-photos/campus-photo-6.jpg"
                    alt="Students and faculty in the S.E.A. Electronics and Engineering Laboratory"
                    loading="lazy"
                    className="w-full h-full object-cover scale-[1.16]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-white">Engineering &amp; Science Laboratories</h3>
                  <p className="mt-1 text-xs text-white/75">
                    Hands-on hardware, electronics, computing, and mechanical workshop training.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-lg overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src="/assets/campus-photos/campus-photo-7.jpg"
                    alt="Students playing volleyball on the S.E.A. campus sports courts"
                    loading="lazy"
                    className="w-full h-full object-cover scale-[1.16]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-white">Athletics &amp; Fitness Arena</h3>
                  <p className="mt-1 text-xs text-white/75">
                    Volleyball, cricket, football, athletics track, and on-campus fitness gymnasium.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-lg overflow-hidden sm:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                  <div className="sm:col-span-5 h-44 overflow-hidden">
                    <img
                      src="/assets/campus-photos/campus-photo-4.jpg"
                      alt="S.E.A. Group campus bus transport fleet and residential enclave"
                      loading="lazy"
                      className="w-full h-full object-cover scale-[1.16]"
                    />
                  </div>
                  <div className="sm:col-span-7 p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      Residential Living, Gym &amp; Transport
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      Supervised On-Campus Hostels, Multi-Gym &amp; Institutional Bus Fleet
                    </h3>
                    <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
                      Separate residential hostels for boys and girls with 24/7 security, fitness gymnasium, medical care support, and institutional buses across Bengaluru.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H.3 & H.4 & H.5: PLACEMENTS, RESEARCH & ACADEMIC EXCELLENCE */}
      <section
        aria-labelledby="placements-research-heading"
        className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-slate-200"
      >
        <div className="container-page space-y-16">
          {/* Placements & Career Development */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-2xs">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson">
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                <span>Placements &amp; Career Development</span>
              </div>
              <h2
                id="placements-research-heading"
                className="heading-h2 font-extrabold text-navy"
              >
                Structured Career Training Starting From the 3rd Semester
              </h2>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                The Training &amp; Placement Cell at S.E.A. College of Engineering &amp; Technology and sister institutions prepares students through progressive modules in quantitative aptitude, data structures and coding, group discussions, industry internships, and mock interviews.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/placements" className="btn-navy">
                  <span>Placements Overview</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link to="/placements/training" className="btn-outline-navy">
                  <span>Training Roadmap</span>
                </Link>
                <Link to="/placements/recruiters" className="btn-outline-navy">
                  <span>Participating Recruiters</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface rounded-lg p-5 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                Reported Recruiting Organizations
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {VERIFIED_RECRUITING_COMPANIES.map((company) => (
                  <div
                    key={company.name}
                    className="bg-white rounded border border-slate-200 p-3"
                  >
                    <p className="text-sm font-extrabold text-navy">{company.name}</p>
                    <p className="text-[11px] text-ink-muted mt-0.5">{company.sector}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-ink-muted">
                Branch-wise placement assistance and career counselling available via the Placement Desk.
              </p>
            </div>
          </div>

          {/* Research & Innovation + Verified Student Academic Forums */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Research & Innovation Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <FlaskConical className="w-4 h-4 text-crimson" aria-hidden="true" />
                  <span>Research &amp; Innovation</span>
                </div>
                <h3 className="mt-2 heading-h3 font-extrabold text-navy">
                  VTU-Recognised Doctoral Research Centres
                </h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                  SEACET and the SEA College of Research &amp; Development Center host Visvesvaraya Technological University (VTU) recognised research centres offering Ph.D. and M.Sc. (Engg.) by Research supervision across five core disciplines:
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-navy">
                  <li className="p-2.5 rounded bg-surface border border-slate-200">
                    • Computer Science &amp; Engineering
                  </li>
                  <li className="p-2.5 rounded bg-surface border border-slate-200">
                    • Electronics &amp; Communication
                  </li>
                  <li className="p-2.5 rounded bg-surface border border-slate-200">
                    • Mechanical Engineering
                  </li>
                  <li className="p-2.5 rounded bg-surface border border-slate-200">
                    • Engineering Chemistry &amp; MBA
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/academics/research-center"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-crimson hover:underline"
                >
                  <span>Explore Research Center &amp; Doctoral Pathways</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Student Development & Verified Academic Milestones */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Award className="w-4 h-4 text-crimson" aria-hidden="true" />
                  <span>Student Development &amp; Academic Forums</span>
                </div>
                <h3 className="mt-2 heading-h3 font-extrabold text-navy">
                  Experiential Learning, Moots, Clinical Postings &amp; University Sports
                </h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                  Students across the S.E.A. Group build verified real-world portfolios through university-affiliated academic and co-curricular platforms:
                </p>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-ink">
                  <li className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <strong className="text-navy">VTU &amp; University Project Exhibitions:</strong> Final-year engineering and computer science prototype demonstrations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <strong className="text-navy">Moot Court &amp; Clinical Rotations:</strong> BCI-mandated trial advocacy at SEA College of Law and RGUHS hospital postings at SEA College of Nursing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <strong className="text-navy">Inter-Collegiate Tournaments:</strong> Representation in VTU, Bengaluru North University, RGUHS, and KSLU sports meets.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/placements/achievements"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-crimson hover:underline"
                >
                  <span>View Student Achievements &amp; Verification Policy</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H.6: NEWS AND EVENTS */}
      <section
        aria-labelledby="news-events-heading"
        className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200"
      >
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Campus Bulletins &amp; Calendar
              </span>
              <h2 id="news-events-heading" className="mt-1.5 heading-h2 font-extrabold text-navy">
                News &amp; Events
              </h2>
              <p className="mt-1.5 text-sm text-ink-muted">
                Symposiums, workshops, cultural celebrations, and academic announcements (clearly marked sample/demo previews).
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/blog/events/upcoming" className="btn-outline-navy">
                Upcoming Events
              </Link>
              <Link to="/blog" className="btn-navy">
                <span>All News &amp; Events</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNewsAndEvents.map((item) => {
              const upcoming = isUpcomingDate(item.dateIso);
              const detailHref =
                item.type === 'event' ? `/blog/events/${item.slug}` : `/blog/${item.slug}`;

              return (
                <article
                  key={item.id}
                  className="bg-surface rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-navy/40 transition-colors"
                >
                  <div>
                    <div className="relative h-40 bg-navy">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-85"
                      />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-crimson text-white">
                          {item.demoBadgeLabel}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-navy/90 text-gold border border-gold/30">
                          {upcoming ? 'Upcoming' : 'Past / Archive'}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-ink-muted mb-2">
                        <Calendar className="w-3.5 h-3.5 text-crimson" aria-hidden="true" />
                        <time dateTime={item.dateIso}>{item.dateIso}</time>
                        <span>•</span>
                        <span className="font-medium text-primary">{item.category}</span>
                      </div>

                      <h3 className="text-base font-bold text-navy leading-snug">
                        <Link to={detailHref} className="hover:text-crimson transition-colors">
                          {item.title}
                        </Link>
                      </h3>

                      <p className="mt-2 text-xs text-ink-muted line-clamp-3 leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-white border-t border-slate-200/80">
                    <Link
                      to={detailHref}
                      className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-crimson transition-colors"
                    >
                      <span>Read Details</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION H.7: ADMISSIONS CTA */}
      <section
        aria-labelledby="home-admissions-cta-heading"
        className="py-16 sm:py-20 bg-gradient-to-r from-navy via-navy-light to-primary text-white"
      >
        <div className="container-page flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded bg-crimson text-white text-xs font-bold uppercase tracking-widest mb-3">
              {SITE_CONFIG.admissionsTickerText}
            </span>
            <h2
              id="home-admissions-cta-heading"
              className="heading-h2 font-extrabold text-white"
            >
              Begin Your Academic Journey at S.E.A. Group of Institutions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed">
              Connect with our Admissions Counselling Desk in K.R. Puram, Bengaluru to verify programme eligibility, entrance pathways (KCET, COMEDK, PGCET, GATE, KMAT), scholarship assistance, and campus tour schedules.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link to="/admissions/apply" className="btn-primary">
              <span>Apply Online</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link to="/admissions/enquiry" className="btn-outline-light">
              <span>Admission Enquiry Form</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

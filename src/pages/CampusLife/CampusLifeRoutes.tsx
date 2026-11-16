import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Info, Sparkles } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { CampusGallery } from '../../components/Gallery/CampusGallery';
import { CAMPUS_LIFE_PAGES } from '../../data/campus';

const CAMPUS_SUBNAV = [
  { label: 'Overview', href: '/campus-life' },
  { label: 'Campus Infrastructure', href: '/campus-life/infrastructure' },
  { label: 'Digital Infrastructure', href: '/campus-life/digital-infrastructure' },
  { label: 'Accommodation & Hostels', href: '/campus-life/hostels' },
  { label: 'Sports & Fitness', href: '/campus-life/sports' },
  { label: 'Library & Learning Resources', href: '/campus-life/library' },
  { label: 'Clubs & Cultural Activities', href: '/campus-life/clubs-culture' },
  { label: 'Student Support & Safety', href: '/campus-life/student-support' },
  { label: 'Campus Gallery', href: '/campus-life/gallery' },
];

export const CampusLifeSubNav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-surface border-b border-slate-200">
      <div className="container-page py-3 flex flex-wrap items-center gap-2">
        {CAMPUS_SUBNAV.map((item) => {
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

export const CampusLifeOverviewPage: React.FC = () => {
  useDocumentMeta({
    title: 'Campus Life Overview | Infrastructure, Hostels, Sports & Library',
    description:
      'Discover student life on the S.E.A. Group of Institutions campus in K.R. Puram, Bengaluru—featuring academic infrastructure, digital labs, central libraries, hostels, sports grounds, and cultural forums.',
    canonicalPath: '/campus-life',
  });

  const facilityPages = Object.values(CAMPUS_LIFE_PAGES);

  return (
    <div>
      <PageBanner
        eyebrow="K.R. Puram Multidisciplinary Campus"
        title="Campus Life & Student Experience"
        subtitle="A vibrant, green, and well-connected academic community in East Bengaluru equipped with modern laboratories, central libraries, residential hostels, and outdoor athletics grounds."
        breadcrumbs={[{ label: 'Campus Life' }]}
        bannerImage="/assets/sea-sports-arena.svg"
        bannerAlt="S.E.A. Group Campus Life and Athletics Overview"
        actions={
          <>
            <Link to="/campus-life/gallery" className="btn-primary">
              <span>Explore Campus Gallery</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link to="/admissions/enquiry" className="btn-outline-light">
              <span>Schedule a Campus Visit</span>
            </Link>
          </>
        }
      />

      <CampusLifeSubNav />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page space-y-16">
          {/* Editorial Intro */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-crimson">
              Built for Learning &amp; Community
            </span>
            <h2 className="mt-1.5 heading-h2 font-extrabold text-navy">
              Every Resource Required for Holistic Student Growth
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
              Situated at Ekta Nagar, Basavanapura, K.R. Puram, Bengaluru – 560049, our integrated campus brings together students from engineering, management, nursing, law, sciences, commerce, humanities, and pre-university streams in a safe, collaborative environment.
            </p>
          </div>

          {/* Grid of All 7 Facility Destinations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityPages.map((fac) => (
              <article
                key={fac.route}
                className="rounded-lg border border-slate-200 overflow-hidden bg-white shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 bg-navy">
                    <img
                      src={fac.bannerImage}
                      alt={fac.bannerAlt}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-bold bg-navy/90 text-gold border border-gold/30">
                      {fac.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-navy">
                      <Link to={fac.route} className="hover:text-crimson transition-colors">
                        {fac.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {fac.subtitle}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-surface border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to={fac.route}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy hover:text-crimson"
                  >
                    <span>Explore {fac.title}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Gallery Preview */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                  Visual Campus Archive
                </span>
                <h2 className="mt-1 heading-h2 font-extrabold text-navy">
                  Campus Gallery &amp; Architectural Plates
                </h2>
              </div>
              <Link to="/campus-life/gallery" className="btn-navy">
                <span>Open Full Gallery</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <CampusGallery />
          </div>
        </div>
      </section>
    </div>
  );
};

export const CampusLifeDetailPage: React.FC = () => {
  const { pathname } = useLocation();
  const page = CAMPUS_LIFE_PAGES[pathname];

  useDocumentMeta({
    title: page
      ? `${page.title} | Campus Life at S.E.A. Group`
      : 'Campus Life | S.E.A. Group of Institutions',
    description: page ? page.subtitle : 'Campus life at S.E.A. Group of Institutions.',
    canonicalPath: pathname,
  });

  if (!page) {
    return <Navigate to="/campus-life" replace />;
  }

  return (
    <div>
      <PageBanner
        eyebrow={`Campus Life • ${page.category}`}
        title={page.title}
        subtitle={page.subtitle}
        breadcrumbs={[
          { label: 'Campus Life', href: '/campus-life' },
          { label: page.title },
        ]}
        bannerImage={page.bannerImage}
        bannerAlt={page.bannerAlt}
      />

      <CampusLifeSubNav />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                  Facility Overview
                </span>
                <h2 className="mt-1 heading-h2 font-extrabold text-navy">
                  {page.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-ink leading-relaxed">
                  {page.introduction.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              <figure className="rounded-lg overflow-hidden border border-slate-200 bg-navy">
                <img
                  src={page.bannerImage}
                  alt={page.bannerAlt}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <figcaption className="px-5 py-3 text-xs text-white/85 border-t border-white/10">
                  {page.title} — K.R. Puram Campus, Bengaluru
                </figcaption>
              </figure>

              {page.galleryPhotos && page.galleryPhotos.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {page.galleryPhotos.map((gp, i) => (
                    <figure
                      key={i}
                      className="rounded-lg overflow-hidden border border-slate-200 bg-surface"
                    >
                      <img
                        src={gp.src}
                        alt={gp.caption}
                        loading="lazy"
                        className="w-full h-36 object-cover"
                      />
                      <figcaption className="p-2.5 text-xs font-semibold text-navy">
                        {gp.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              <div className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  <Sparkles className="w-4 h-4 text-crimson" aria-hidden="true" />
                  <span>Verified Highlights</span>
                </div>
                <h3 className="heading-h3 font-extrabold text-navy">
                  Key Amenities &amp; Infrastructure Features
                </h3>
                <ul className="mt-4 space-y-3">
                  {page.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-1" aria-hidden="true" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              {/* Practical Information */}
              <div className="bg-surface rounded-lg border border-slate-200 p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                  <Info className="w-4 h-4 text-crimson" aria-hidden="true" />
                  <h2 className="text-base font-extrabold text-navy">
                    Practical Information
                  </h2>
                </div>
                <div className="space-y-3">
                  {page.practicalInfo.map((info, i) => (
                    <div key={i} className="bg-white p-3.5 rounded border border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-crimson block">
                        {info.label}
                      </span>
                      <p className="mt-1 text-xs sm:text-sm font-medium text-ink">
                        {info.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admissions CTA */}
              <div className="bg-navy text-white rounded-lg p-6 space-y-4">
                <h3 className="text-base font-extrabold text-white">
                  Visit the K.R. Puram Campus
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Prospective students and parents can schedule a guided tour of our academic blocks, laboratories, central libraries, and hostels.
                </p>
                <Link to="/admissions/enquiry" className="btn-primary w-full">
                  <span>Request Campus Visit / Enquiry</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Related Pages */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2.5 mb-3">
                  Related Campus Life Pages
                </h3>
                <ul className="space-y-2">
                  {page.relatedRoutes.map((rel) => (
                    <li key={rel.href}>
                      <Link
                        to={rel.href}
                        className="flex items-center justify-between py-2 text-sm font-semibold text-ink hover:text-crimson"
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

export const CampusGalleryPage: React.FC = () => {
  useDocumentMeta({
    title: 'Campus Gallery | S.E.A. Group of Institutions, Bengaluru',
    description:
      'Browse the responsive, keyboard-accessible visual gallery of S.E.A. College of Engineering & Technology and the S.E.A. Group campus in K.R. Puram, Bengaluru.',
    canonicalPath: '/campus-life/gallery',
  });

  return (
    <div>
      <PageBanner
        eyebrow="Visual Campus Archive"
        title="Campus Gallery"
        subtitle="Explore architectural plates and visual highlights across our Engineering, Nursing, Law, Degree, Library, Hostel, and Sports facilities. Click any item to open the keyboard-accessible lightbox."
        breadcrumbs={[
          { label: 'Campus Life', href: '/campus-life' },
          { label: 'Campus Gallery' },
        ]}
        bannerImage="/assets/sea-campus-poster.svg"
        bannerAlt="S.E.A. Group Campus Gallery Banner"
      />

      <CampusLifeSubNav />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page">
          <CampusGallery />
        </div>
      </section>
    </div>
  );
};

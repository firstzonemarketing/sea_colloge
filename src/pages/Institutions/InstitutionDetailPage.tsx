import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { getInstitutionBySlug, INSTITUTIONS } from '../../data/institutions';
import { getProgrammesByInstitution } from '../../data/programmes';
import { SITE_CONFIG } from '../../config/siteConfig';

export const InstitutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const institution = slug ? getInstitutionBySlug(slug) : undefined;

  useDocumentMeta({
    title: institution
      ? `${institution.name} | S.E.A. Group of Institutions`
      : 'Institution Profile | S.E.A. Group of Institutions',
    description: institution
      ? `${institution.shortDescription} Located at K.R. Puram, Bengaluru.`
      : 'Constituent institution profile at S.E.A. Group of Institutions.',
    canonicalPath: institution ? institution.route : '/institutions',
  });

  if (!institution) {
    return <Navigate to="/institutions" replace />;
  }

  const matchedProgrammes = getProgrammesByInstitution(institution.id);
  const peerInstitutions = INSTITUTIONS.filter(
    (i) => i.id !== institution.id && i.category === institution.category
  );

  return (
    <div>
      {/* Institution-Specific Banner */}
      <PageBanner
        eyebrow={`${institution.category} • Constituent Institution`}
        title={institution.name}
        subtitle={institution.tagline}
        breadcrumbs={[
          { label: 'Institutions', href: '/institutions' },
          { label: institution.name },
        ]}
        bannerImage={institution.image}
        bannerAlt={institution.imageAlt}
        badgeText={institution.establishedYear ? `Est. ${institution.establishedYear}` : undefined}
        actions={
          <>
            <Link
              to={`/admissions/enquiry?institution=${institution.id}`}
              className="btn-primary"
            >
              <span>Admission Enquiry for {institution.shortName}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            {institution.officialWebsite && (
              <a
                href={institution.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                <span>Official Institution Website</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </>
        }
      />

      {/* Scope Clarification Banner: Distinguishing Group-Level vs Institution-Specific Info */}
      <div className="bg-surface border-b border-slate-200 py-3">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted">
          <span>
            <strong className="text-navy">Institution-Specific Profile:</strong> {institution.name} ({institution.location.campusZone})
          </span>
          <span>
            <strong className="text-navy">Managing Trust:</strong> {SITE_CONFIG.trustName} (Est. {SITE_CONFIG.trustFoundedYear})
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                  About the Institution
                </span>
                <h2 className="mt-1 heading-h2 font-extrabold text-navy">
                  {institution.name}
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-ink leading-relaxed">
                  {institution.introduction.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Relevant Campus Photograph / Plate */}
              <figure className="rounded-lg overflow-hidden border border-slate-200 bg-navy">
                <img
                  src={institution.image}
                  alt={institution.imageAlt}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <figcaption className="px-5 py-3 text-xs text-white/85 bg-navy border-t border-white/10">
                  {institution.imageCaption}
                </figcaption>
              </figure>

              {/* Verified Programmes or School Levels */}
              <div className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  <BookOpen className="w-4 h-4 text-crimson" aria-hidden="true" />
                  <span>Academic Portfolio</span>
                </div>
                <h2 className="heading-h3 font-extrabold text-navy">
                  Verified Programmes &amp; Academic Levels Offered
                </h2>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {institution.verifiedProgrammesOrLevels.map((progName) => (
                    <li
                      key={progName}
                      className="bg-white rounded border border-slate-200 p-3.5 flex items-start gap-2.5 text-sm font-semibold text-navy"
                    >
                      <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{progName}</span>
                    </li>
                  ))}
                </ul>

                {matchedProgrammes.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-3">
                      Direct Programme Detail Pages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {matchedProgrammes.map((mp) => (
                        <Link
                          key={mp.id}
                          to={`/programmes/${mp.slug}`}
                          className="px-3 py-1.5 rounded bg-white border border-slate-300 hover:border-navy text-xs font-bold text-navy hover:text-crimson transition-colors"
                        >
                          {mp.shortCode} &rarr;
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Facilities */}
              <div>
                <h2 className="heading-h3 font-extrabold text-navy">
                  Institution &amp; Campus Facilities
                </h2>
                <p className="mt-1 text-sm text-ink-muted">
                  Dedicated departmental facilities alongside shared S.E.A. Group campus amenities in K.R. Puram:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {institution.facilities.map((fac, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200 p-4 bg-white flex items-start gap-3"
                    >
                      <Building2 className="w-4 h-4 text-crimson shrink-0 mt-1" aria-hidden="true" />
                      <span className="text-sm text-ink">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 Cols): Affiliation, Contact, Related Programmes, Admission CTA */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Affiliation & Approvals Card */}
              <div className="bg-surface rounded-lg border border-slate-200 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h2 className="text-base font-extrabold text-navy">
                    Affiliations &amp; Approvals
                  </h2>
                  <ShieldCheck className="w-5 h-5 text-crimson" aria-hidden="true" />
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-ink">
                  {institution.affiliationsAndApprovals.map((aff, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{aff}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location & Contact Information */}
              <div className="bg-navy text-white rounded-lg p-6 space-y-4">
                <h2 className="text-base font-extrabold text-white border-b border-white/15 pb-3">
                  Location &amp; Contact
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-white/85">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-white block">{institution.location.campusZone}</strong>
                      <span>{institution.location.address}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                    <a href={`tel:${institution.location.phone}`} className="hover:text-gold">
                      {institution.location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                    <a href={`mailto:${institution.location.email}`} className="hover:text-gold">
                      {institution.location.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/15 space-y-2.5">
                  <Link
                    to={`/admissions/enquiry?institution=${institution.id}`}
                    className="btn-primary w-full"
                  >
                    <span>Apply / Enquire Now</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>

                  {institution.officialWebsite && (
                    <a
                      href={institution.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-light w-full"
                    >
                      <span>Official Institution Website</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {/* Related Academic Pages */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2.5 mb-3">
                  Related Academic Pages
                </h3>
                <ul className="space-y-2">
                  {institution.relatedAcademicRoutes.map((rel) => (
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

              {/* Peer Institutions in Same Category */}
              {peerInstitutions.length > 0 && (
                <div className="bg-surface rounded-lg border border-slate-200 p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-3">
                    Other {institution.category} Institutions
                  </h3>
                  <ul className="space-y-2">
                    {peerInstitutions.map((peer) => (
                      <li key={peer.id}>
                        <Link
                          to={peer.route}
                          className="block text-sm font-bold text-navy hover:text-crimson py-1"
                        >
                          {peer.name} &rarr;
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

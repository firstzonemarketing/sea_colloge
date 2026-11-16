import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import { AdmissionEnquiryForm } from '../../components/Forms/AdmissionEnquiryForm';
import { INSTITUTIONAL_MILESTONES, VERIFIED_LEADERSHIP } from '../../data/about';
import { SITE_CONFIG } from '../../config/siteConfig';

const ABOUT_SUBNAV = [
  { label: 'About Overview', href: '/about' },
  { label: 'The Trust (S.E.A.E.T.)', href: '/about/trust' },
  { label: 'Vision & Mission', href: '/about/vision-mission' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'Contact & Location', href: '/about/contact' },
];

export const AboutSubNav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-surface border-b border-slate-200">
      <div className="container-page py-3 flex flex-wrap items-center gap-2">
        {ABOUT_SUBNAV.map((item) => {
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

export const AboutPage: React.FC = () => {
  const { pathname } = useLocation();

  const metaByRoute: Record<string, { title: string; subtitle: string; desc: string }> = {
    '/about': {
      title: 'About S.E.A. Group of Institutions & SEACET',
      subtitle:
        'Founded under the South East Asian Education Trust in 2000—uniting 12 multidisciplinary institutions anchored by S.E.A. College of Engineering & Technology (established in 2007) in K.R. Puram, Bengaluru.',
      desc: 'Institutional profile, history, vision, leadership, and verified campus details of S.E.A. Group of Institutions, Bengaluru.',
    },
    '/about/trust': {
      title: 'South East Asian Education Trust (S.E.A.E.T.)',
      subtitle:
        'Founded in 2000 by Late Sri A. Krishnappa to democratise access to primary, secondary, technical, health science, legal, and postgraduate education.',
      desc: 'History and philanthropic mandate of the South East Asian Education Trust (S.E.A.E.T.) in Bengaluru.',
    },
    '/about/vision-mission': {
      title: 'Vision, Mission & Educational Philosophy',
      subtitle:
        'Blending modern scientific and technical competence with ethical citizenship, inclusivity, and lifelong inquiry.',
      desc: 'Vision, mission, and core educational values of S.E.A. Group of Institutions and SEACET.',
    },
    '/about/leadership': {
      title: 'Institutional Governance & Leadership',
      subtitle:
        'Guided by the Board of Trustees of the South East Asian Education Trust (S.E.A.E.T.) and academic heads across all 12 constituent institutions.',
      desc: 'Verified leadership and management of S.E.A. Group of Institutions, Bengaluru.',
    },
    '/about/contact': {
      title: 'Contact Information & Campus Location',
      subtitle:
        'Reach the Central Administrative & Admissions Office at Ekta Nagar, Basavanapura, K.R. Puram, Bengaluru – 560049.',
      desc: 'Verified campus address, phone numbers, email contacts, and enquiry desk for S.E.A. Group of Institutions.',
    },
  };

  const currentMeta = metaByRoute[pathname] || metaByRoute['/about'];

  useDocumentMeta({
    title: `${currentMeta.title} | S.E.A. Group of Institutions`,
    description: currentMeta.desc,
    canonicalPath: pathname,
  });

  const breadcrumbs =
    pathname === '/about'
      ? [{ label: 'About' }]
      : [
          { label: 'About', href: '/about' },
          { label: currentMeta.title },
        ];

  return (
    <div>
      <PageBanner
        eyebrow="Institutional Heritage & Governance"
        title={currentMeta.title}
        subtitle={currentMeta.subtitle}
        breadcrumbs={breadcrumbs}
        bannerImage="/assets/campus-photos/campus-photo-3.jpg"
        bannerAlt="S.E.A. Group of Institutions Main Building Directory Banner"
      />

      <AboutSubNav />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page space-y-16">
          {/* Founder Tribute Banner with Official Frame from Campus Video */}
          <div className="rounded-lg border border-slate-200 overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-12 items-center shadow-xs">
            <div className="lg:col-span-5 bg-white h-64 sm:h-72 overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
              <img
                src="/assets/campus-photos/campus-photo-1.jpg"
                alt="Late Shri A. Krishnappa, Founder Chairman of South East Asian Education Trust (S.E.A.E.T.) and Ex-Minister, Government of Karnataka"
                className="w-full h-full object-cover object-center scale-[1.15]"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-widest bg-crimson text-white">
                Founding Legacy • Est. 2000
              </span>
              <h2 className="heading-h2 font-extrabold text-navy">
                Late Shri A. Krishnappa
              </h2>
              <p className="text-xs sm:text-sm font-bold text-primary">
                Founder, South East Asian Education Trust (S.E.A.E.T.) • Ex-Minister, Govt. of Karnataka
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Guided by the conviction that &ldquo;Knowledge is Supreme — Progress Through Quality Education,&rdquo; Late Shri A. Krishnappa established the South East Asian Education Trust in 2000 in K.R. Puram, Bengaluru, building an integrated educational township serving learners from primary school to doctoral engineering research.
              </p>
            </div>
          </div>
          {/* Clear Distinction Between Trust, SEACET & Constituent Institutions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border border-slate-200 p-6 bg-surface/60">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Managing Trust • Est. 2000
              </span>
              <h2 className="mt-1.5 text-lg font-extrabold text-navy">
                South East Asian Education Trust (S.E.A.E.T.)
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Founded in the year 2000 by visionary philanthropist and former Karnataka Minister <strong className="text-navy">Late Sri A. Krishnappa</strong> to establish an integrated cradle-to-career educational campus in East Bengaluru.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-6 bg-surface/60">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Flagship Engineering College • Est. 2007
              </span>
              <h2 className="mt-1.5 text-lg font-extrabold text-navy">
                S.E.A. College of Engineering &amp; Technology (SEACET)
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Established in 2007 under S.E.A.E.T., affiliated with Visvesvaraya Technological University (VTU), Belagavi, approved by AICTE, New Delhi, and accredited by NAAC.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-6 bg-surface/60">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                Group Ecosystem • 12 Institutions
              </span>
              <h2 className="mt-1.5 text-lg font-extrabold text-navy">
                Multidisciplinary Constituent Colleges &amp; Schools
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Includes Engineering, Management, Research &amp; Development, Nursing (RGUHS), Law (KSLU/BCI), Science/Commerce/Arts (BNU), B.Ed, Evening College, ITI, Composite PU, and K–12 Schools.
              </p>
            </div>
          </div>

          {/* Vision, Mission & Educational Philosophy */}
          <div
            id="vision-mission"
            className="rounded-lg bg-navy text-white p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Institutional Charter</span>
              </div>
              <h2 className="heading-h2 font-extrabold text-white">
                Vision, Mission &amp; Educational Philosophy
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Our educational philosophy harmonises modern scientific, technical, and professional education with traditional cultural values, discipline, and social responsibility.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white/10 border border-white/15 rounded-lg p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gold block">
                  Our Vision
                </span>
                <h3 className="mt-1 text-base font-extrabold text-white">
                  Global Technical &amp; Academic Competence
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                  To emerge as a premier multidisciplinary centre of learning that empowers students from diverse backgrounds with knowledge, innovation capacity, and ethical leadership.
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-lg p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gold block">
                  Our Mission
                </span>
                <h3 className="mt-1 text-base font-extrabold text-white">
                  Value-Driven Holistic Development
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                  To deliver rigorous university curricula, modern laboratory and clinical training, industry collaboration, and inclusive community service across all 12 constituent institutions.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Leadership Directory */}
          <div id="leadership-directory">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson mb-2">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>South East Asian Education Trust</span>
            </div>
            <h2 className="heading-h2 font-extrabold text-navy">
              Verified Trust &amp; Institutional Leadership
            </h2>
            <p className="mt-1.5 text-sm text-ink-muted max-w-2xl">
              Leadership roles verified from official S.E.A. Group of Institutions publications:
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VERIFIED_LEADERSHIP.map((leader) => (
                <article
                  key={leader.name}
                  className="rounded-lg border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-navy text-gold mb-3">
                      {leader.designation}
                    </span>
                    <h3 className="text-lg font-extrabold text-navy">{leader.name}</h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">
                      {leader.scope}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {leader.bioSummary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-ink-muted">
                    <span>Verified Institutional Record</span>
                    <ShieldCheck className="w-4 h-4 text-crimson" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Chronological Milestones */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-crimson">
              Chronology
            </span>
            <h2 className="mt-1 heading-h2 font-extrabold text-navy">
              Institutional History &amp; Milestones
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
              {INSTITUTIONAL_MILESTONES.map((ms) => (
                <div
                  key={ms.year}
                  className="rounded-lg border border-slate-200 p-5 bg-surface/60"
                >
                  <span className="text-lg font-extrabold text-crimson font-heading">
                    {ms.year}
                  </span>
                  <h3 className="mt-1.5 text-sm font-bold text-navy">{ms.title}</h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Contact Information & Enquiry Form */}
          <div id="contact-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4 border-t border-slate-200">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                  Campus Address &amp; Helpdesk
                </span>
                <h2 className="mt-1 heading-h2 font-extrabold text-navy">
                  Contact S.E.A. Group of Institutions
                </h2>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  Our unified multidisciplinary campus is located in K.R. Puram, East Bengaluru, with direct access from Old Madras Road (NH-75), K.R. Puram Railway Station, and the Whitefield Metro line.
                </p>
              </div>

              <div className="bg-surface rounded-lg border border-slate-200 p-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="text-navy block">Verified Campus Address</strong>
                    <span className="text-ink-muted text-xs sm:text-sm">
                      {SITE_CONFIG.location.engineeringAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="text-navy block">Telephone Lines</strong>
                    <span className="text-ink-muted text-xs sm:text-sm">
                      {SITE_CONFIG.contact.phones.join(' / ')}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="text-navy block">Official Emails</strong>
                    <span className="text-ink-muted text-xs sm:text-sm block">
                      Group Desk: {SITE_CONFIG.contact.generalEmail}
                    </span>
                    <span className="text-ink-muted text-xs sm:text-sm block">
                      SEACET Principal: {SITE_CONFIG.contact.engineeringEmail}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-3">
                  <a
                    href={SITE_CONFIG.location.googleMapsVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-navy text-xs"
                  >
                    <span>Open Verified Campus Location in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-crimson" aria-hidden="true" />
                  <span>Official Institutional Web Portals</span>
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {Object.entries(SITE_CONFIG.contact.officialWebsites).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface border border-slate-200 text-xs font-semibold text-navy hover:text-crimson"
                    >
                      <span className="capitalize">{key} Portal</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Home, ShieldCheck } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageBanner } from '../components/Hero/PageBanner';

export const PrivacyPolicyPage: React.FC = () => {
  useDocumentMeta({
    title: 'Privacy Policy & Data Governance | S.E.A. Group of Institutions',
    description:
      'Privacy policy and applicant data handling standards for the S.E.A. Group of Institutions digital portal.',
    canonicalPath: '/privacy-policy',
  });

  return (
    <div>
      <PageBanner
        eyebrow="Legal & Data Governance"
        title="Privacy Policy"
        subtitle="How S.E.A. Group of Institutions handles visitor enquiries, cookies, and applicant privacy."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page max-w-3xl space-y-6 text-sm sm:text-base text-ink leading-relaxed">
          <div className="p-5 rounded-lg bg-surface border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-ink-muted">
              <strong className="text-navy">Prototype Enquiry Privacy Guarantee:</strong> The interactive Demo Enquiry Form on this portal validates user input in memory only and does not store personal applicant details in browser `localStorage` or transmit unencrypted personal data to third-party trackers.
            </p>
          </div>

          <h2 className="heading-h3 font-extrabold text-navy">
            1. Institutional Scope
          </h2>
          <p>
            This Privacy Policy applies to the official digital platform of S.E.A. Group of Institutions (managed by the South East Asian Education Trust, Ekta Nagar, Basavanapura, K.R. Puram, Bengaluru – 560049) and its 12 constituent institutions, including S.E.A. College of Engineering &amp; Technology (SEACET).
          </p>

          <h2 className="heading-h3 font-extrabold text-navy">
            2. Information Collected During Formal Admissions
          </h2>
          <p>
            When applicants communicate with the Central Admissions Office or submit formal admission enquiries, information such as full name, contact details, qualifying academic marks, and programme preferences is used solely for academic counselling, university eligibility verification, and statutory admission processing.
          </p>

          <h2 className="heading-h3 font-extrabold text-navy">
            3. Contact for Privacy Enquiries
          </h2>
          <p>
            For questions regarding institutional records or privacy policies, please contact the Central Administrative Office at <a href="mailto:info@seaedu.ac.in" className="text-crimson font-semibold hover:underline">info@seaedu.ac.in</a> or visit our <Link to="/about/contact" className="text-crimson font-semibold hover:underline">Contact Page</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
  useDocumentMeta({
    title: '404 — Page Not Found | S.E.A. Group of Institutions',
    description: 'The requested page could not be found on the S.E.A. Group of Institutions website.',
  });

  return (
    <section className="py-20 sm:py-28 bg-surface border-b border-slate-200">
      <div className="container-page max-w-2xl text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded bg-crimson text-white text-xs font-bold uppercase tracking-widest">
          Error 404
        </span>
        <h1 className="heading-h1 font-extrabold text-navy">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
          The page or programme route you requested could not be found. Use the links below to return to the S.E.A. College of Engineering &amp; Technology homepage or explore our academic and institutional directories.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-navy">
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/academics" className="btn-primary">
            <Compass className="w-4 h-4" aria-hidden="true" />
            <span>Explore Academics</span>
          </Link>
          <Link to="/institutions" className="btn-outline-navy">
            <span>All 12 Institutions</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

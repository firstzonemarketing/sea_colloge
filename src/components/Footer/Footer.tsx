import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-white/10" role="contentinfo">
      {/* Main 5-Column Footer Grid */}
      <div className="container-page py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: S.E.A. */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center bg-white px-3.5 py-2 rounded-md shadow-xs"
            >
              <img
                src="/assets/sea-logo.png"
                alt="S.E.A. Group of Institutions Official Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-white/80 leading-relaxed">
              Established in 2000 under the South East Asian Education Trust (S.E.A.E.T.), S.E.A. Group of Institutions unites 12 constituent institutions—anchored by S.E.A. College of Engineering &amp; Technology (SEACET)—on an integrated multidisciplinary campus in Bengaluru.
            </p>

            <div className="space-y-2 pt-2 text-xs text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>{SITE_CONFIG.location.engineeringAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <a href="tel:+918025618623" className="hover:text-gold transition-colors">
                  {SITE_CONFIG.contact.phones.join(' / ')}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <a href={`mailto:${SITE_CONFIG.contact.generalEmail}`} className="hover:text-gold transition-colors">
                  {SITE_CONFIG.contact.generalEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Academics */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              Academics
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/academics" className="hover:text-white transition-colors">
                  Academic Overview
                </Link>
              </li>
              <li>
                <Link to="/academics/ug/be" className="hover:text-white transition-colors">
                  UG — B.E. Engineering
                </Link>
              </li>
              <li>
                <Link to="/academics/ug/degree" className="hover:text-white transition-colors">
                  UG — Degree Programmes
                </Link>
              </li>
              <li>
                <Link to="/academics/ug/law" className="hover:text-white transition-colors">
                  UG — Law (LL.B / B.A. LL.B)
                </Link>
              </li>
              <li>
                <Link to="/academics/ug/nursing" className="hover:text-white transition-colors">
                  UG — Nursing
                </Link>
              </li>
              <li>
                <Link to="/academics/pg/mtech" className="hover:text-white transition-colors">
                  PG — M.Tech &amp; MBA
                </Link>
              </li>
              <li>
                <Link to="/academics/research-center" className="hover:text-white transition-colors">
                  Research Center (Ph.D.)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutions */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              Institutions
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/institutions/engineering-technology" className="hover:text-white transition-colors">
                  Engineering (SEACET)
                </Link>
              </li>
              <li>
                <Link to="/institutions/management-studies" className="hover:text-white transition-colors">
                  Management Studies
                </Link>
              </li>
              <li>
                <Link to="/institutions/nursing" className="hover:text-white transition-colors">
                  Nursing College
                </Link>
              </li>
              <li>
                <Link to="/institutions/law" className="hover:text-white transition-colors">
                  Law College
                </Link>
              </li>
              <li>
                <Link to="/institutions/science-commerce-arts" className="hover:text-white transition-colors">
                  Degree (Science, Commerce &amp; Arts)
                </Link>
              </li>
              <li>
                <Link to="/institutions" className="inline-flex items-center gap-1 text-gold hover:underline font-medium">
                  <span>All 12 Institutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              Admissions
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors">
                  Admissions Overview
                </Link>
              </li>
              <li>
                <Link to="/admissions/apply" className="hover:text-white transition-colors">
                  Apply Online
                </Link>
              </li>
              <li>
                <Link to="/admissions/procedure" className="hover:text-white transition-colors">
                  Admission Procedure
                </Link>
              </li>
              <li>
                <Link to="/admissions/eligibility" className="hover:text-white transition-colors">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link to="/admissions/fees-financial-aid" className="hover:text-white transition-colors">
                  Fees &amp; Scholarships
                </Link>
              </li>
              <li>
                <Link to="/admissions/enquiry" className="hover:text-white transition-colors">
                  Admission Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Explore */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/campus-life" className="hover:text-white transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-white transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About S.E.A. Group
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  News &amp; Events
                </Link>
              </li>
              <li>
                <Link to="/campus-life/gallery" className="hover:text-white transition-colors">
                  Campus Gallery
                </Link>
              </li>
              <li>
                <a
                  href="https://www.seacet.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/75 hover:text-white transition-colors"
                >
                  <span>SEACET Portal</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-navy-dark border-t border-white/10 py-5">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>
            &copy; {currentYear} {SITE_CONFIG.groupName} ({SITE_CONFIG.trustName}). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="https://www.seaedu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>seaedu.ac.in</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href="https://www.seacet.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>seacet.edu.in</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

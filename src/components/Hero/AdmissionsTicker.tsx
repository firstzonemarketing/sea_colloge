import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { INSTITUTIONS } from '../../data/institutions';

export const AdmissionsTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    `${SITE_CONFIG.admissionsTickerText} — S.E.A. College of Engineering & Technology (B.E. / M.Tech / MBA VTU)`,
    `${SITE_CONFIG.admissionsTickerText} — Undergraduate & Postgraduate Degree, MBA (BU), M.Com, M.Sc (CS) & MTTM`,
    `${SITE_CONFIG.admissionsTickerText} — SEA College of Nursing (B.Sc Nursing, Post Basic B.Sc, GNM & M.Sc Nursing)`,
    `${SITE_CONFIG.admissionsTickerText} — SEA College of Law (3-Year LL.B & 5-Year Integrated B.A. LL.B)`,
    `${SITE_CONFIG.admissionsTickerText} — B.Sc Clinical Nutrition & PG Diploma in Hospital Administration`,
  ];

  return (
    <section
      aria-label="Admissions Announcement Ticker"
      className="w-full overflow-hidden ticker-wrapper"
    >
      {/* Primary Red Admissions Announcement Continuous Side-Scroll Ticker */}
      <div className="bg-crimson text-white border-b border-white/15">
        <div className="max-w-[100vw] px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <div className="flex-1 overflow-hidden relative">
            <div className={`ticker-track items-center gap-8 ${isPaused ? 'is-paused' : ''}`}>
              {[...items, ...items].map((text, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-4 whitespace-nowrap text-xs sm:text-sm font-semibold"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
                  <span>{text}</span>
                  <Link
                    to="/admissions/apply"
                    className="inline-flex items-center gap-1 underline decoration-gold underline-offset-4 font-bold hover:text-gold transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="text-white/40 pl-2" aria-hidden="true">
                    •
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 pl-3 border-l border-white/25 bg-crimson z-10">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-pressed={isPaused}
              aria-label={
                isPaused
                  ? 'Resume admissions announcement ticker'
                  : 'Pause admissions announcement ticker'
              }
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[36px] rounded bg-white/15 hover:bg-white/25 text-xs font-semibold text-white transition-colors"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Continuous Side-Scrolling Constituent Institutions & Accreditations Strip */}
      <div className="bg-navy-dark text-white/90 border-b border-white/10 py-2 overflow-hidden">
        <div className={`ticker-track-slow items-center gap-6 ${isPaused ? 'is-paused' : ''}`}>
          {[...INSTITUTIONS, ...INSTITUTIONS].map((inst, idx) => (
            <Link
              key={`${inst.id}-${idx}`}
              to={inst.route}
              className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-medium text-white/80 hover:text-gold transition-colors px-2"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
              <span className="font-semibold text-white">{inst.name}</span>
              <span className="text-[11px] text-gold/90">({inst.category})</span>
              <span className="text-white/25 pl-3" aria-hidden="true">
                |
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

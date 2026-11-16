import React from 'react';
import { INSTITUTIONAL_STATISTICS } from '../../data/statistics';
import { Info } from 'lucide-react';

export const InstitutionalStats: React.FC = () => {
  return (
    <section
      aria-labelledby="institutional-stats-heading"
      className="bg-navy text-white py-14 sm:py-16 border-y border-white/10"
    >
      <div className="container-page">
        <div className="sr-only">
          <h2 id="institutional-stats-heading">Institutional Key Statistics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {INSTITUTIONAL_STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="py-6 md:py-2 md:px-8 first:pt-0 first:md:pl-0 last:pb-0 last:md:pr-0 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-gold mb-2">
                  {stat.verificationBadge}
                </span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg sm:text-xl font-bold text-white/95">
                  {stat.label}
                </div>
              </div>

              <p className="mt-3 text-xs text-white/75 leading-relaxed flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>{stat.scopeClarification}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

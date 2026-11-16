import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, Building2, Briefcase, RotateCcw } from 'lucide-react';
import {
  EXPLORER_CATEGORIES,
  ExplorerCategory,
  PROGRAMMES,
} from '../../data/programmes';

export const ProgrammeExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ExplorerCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProgrammes = useMemo(() => {
    return PROGRAMMES.filter((prog) => {
      const matchesCategory =
        selectedCategory === 'All' || prog.explorerCategory === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const searchableText = [
        prog.name,
        prog.shortCode,
        prog.explorerCategory,
        prog.academicLevel,
        prog.offeringInstitution,
        prog.shortDescription,
        ...prog.careerPaths,
      ]
        .join(' ')
        .toLowerCase();

      return matchesCategory && searchableText.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="programme-explorer"
      aria-labelledby="explorer-heading"
      className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-slate-200"
    >
      <div className="container-page">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-crimson">
              Programmes for Every Career
            </span>
            <h2 id="explorer-heading" className="mt-1.5 heading-h2 font-extrabold text-navy">
              Explore Diverse Careers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink-muted max-w-2xl">
              Discover 25 verified undergraduate, postgraduate, doctoral research, pre-university, and specialised career programmes across S.E.A. College of Engineering &amp; Technology and the S.E.A. Group.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-88">
            <label htmlFor="programme-search-input" className="sr-only">
              Search programmes by name, career path, or institution
            </label>
            <div className="relative">
              <Search
                className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="programme-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search e.g. Computer Science, VLSI, MTTM, Law..."
                className="w-full pl-10 pr-4 py-2.5 min-h-[44px] bg-white border border-slate-300 rounded text-base sm:text-sm text-ink placeholder:text-ink-muted focus:border-navy focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter programmes by discipline"
          className="flex flex-wrap items-center gap-2 mb-8 pb-2"
        >
          {EXPLORER_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 min-h-[40px] rounded text-xs sm:text-sm font-semibold transition-colors ${
                  isSelected
                    ? 'bg-navy text-white shadow-xs'
                    : 'bg-white text-ink border border-slate-300 hover:border-navy hover:text-navy'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Result Count Summary */}
        <div className="mb-6 flex items-center justify-between text-xs font-medium text-ink-muted">
          <span>
            Showing <strong className="text-navy">{filteredProgrammes.length}</strong>{' '}
            {filteredProgrammes.length === 1 ? 'programme' : 'programmes'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </span>
          {(selectedCategory !== 'All' || searchQuery.trim() !== '') && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1 text-crimson font-semibold hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset filters</span>
            </button>
          )}
        </div>

        {/* Programme Cards Grid or Empty State */}
        {filteredProgrammes.length === 0 ? (
          <div className="bg-white rounded-lg border border-slate-200 p-10 text-center max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-navy">
              No matching programmes found
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              No programmes matched &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try clearing your search filter or exploring all academic categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-5 btn-navy"
            >
              Show All Programmes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProgrammes.map((prog) => (
              <article
                key={prog.id}
                className="bg-white rounded-lg border border-slate-200/90 hover:border-navy/40 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative h-36 bg-navy overflow-hidden border-b border-slate-100">
                    <img
                      src={prog.image}
                      alt={prog.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-navy/90 text-gold border border-gold/30">
                        {prog.academicLevel}
                      </span>
                      {prog.duration && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-white/95 text-navy">
                          <Clock className="w-3 h-3 text-crimson" aria-hidden="true" />
                          <span>{prog.duration}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-1.5">
                      <Building2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span className="truncate">{prog.offeringInstitution}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-navy leading-snug break-words">
                      <Link
                        to={`/programmes/${prog.slug}`}
                        className="hover:text-crimson transition-colors"
                      >
                        {prog.name}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-3">
                      {prog.shortDescription}
                    </p>

                    {/* Career Paths Preview */}
                    {prog.careerPaths.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">
                          <Briefcase className="w-3 h-3 text-crimson" aria-hidden="true" />
                          <span>Career Pathways</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {prog.careerPaths.slice(0, 2).map((career) => (
                            <span
                              key={career}
                              className="inline-block px-2 py-0.5 bg-surface rounded text-[11px] font-medium text-ink"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-5 py-3.5 bg-surface/60 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <Link
                    to={`/programmes/${prog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy hover:text-crimson transition-colors"
                  >
                    <span>View Programme</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>

                  <Link
                    to={`/admissions/enquiry?institution=${prog.institutionId}&programme=${prog.slug}`}
                    className="text-xs font-semibold text-crimson hover:underline"
                  >
                    Enquire
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

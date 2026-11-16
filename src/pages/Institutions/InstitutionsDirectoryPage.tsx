import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import {
  INSTITUTIONS,
  INSTITUTION_CATEGORIES,
  InstitutionCategory,
} from '../../data/institutions';

export const InstitutionsDirectoryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') as InstitutionCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<'All' | InstitutionCategory>(
    initialCat && INSTITUTION_CATEGORIES.includes(initialCat) ? initialCat : 'All'
  );

  useDocumentMeta({
    title: '12 Constituent Institutions Directory | S.E.A. Group of Institutions',
    description:
      'Complete directory of all 12 constituent institutions of S.E.A. Group of Institutions in K.R. Puram, Bengaluru across Higher Education, Professional Education, School Education, and Research & Skill Development.',
    canonicalPath: '/institutions',
  });

  const handleSelectCategory = (cat: 'All' | InstitutionCategory) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const visibleCategories = useMemo(() => {
    if (selectedCategory === 'All') return INSTITUTION_CATEGORIES;
    return [selectedCategory];
  }, [selectedCategory]);

  return (
    <div>
      <PageBanner
        eyebrow="South East Asian Education Trust (Est. 2000)"
        title="12 Constituent Institutions Directory"
        subtitle="An integrated educational ecosystem in K.R. Puram, Bengaluru spanning Schooling, Pre-University, Undergraduate & Postgraduate Degrees, Engineering, Nursing, Law, Teacher Education, Vocational ITI, and Doctoral Research."
        breadcrumbs={[{ label: 'Institutions' }]}
        bannerImage="/assets/sea-engineering-quad.svg"
        bannerAlt="S.E.A. Group of Institutions K.R. Puram Campus Directory"
      />

      {/* Category Filter Navigation */}
      <section className="bg-surface border-b border-slate-200 sticky top-20 z-30">
        <div className="container-page py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label="Filter institutions by education category"
            className="flex flex-wrap items-center gap-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'All'}
              onClick={() => handleSelectCategory('All')}
              className={`px-3.5 py-2 rounded text-xs sm:text-sm font-bold transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-navy text-white'
                  : 'bg-white text-ink border border-slate-300 hover:border-navy'
              }`}
            >
              All 12 Institutions
            </button>
            {INSTITUTION_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => handleSelectCategory(cat)}
                className={`px-3.5 py-2 rounded text-xs sm:text-sm font-bold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-crimson text-white'
                    : 'bg-white text-ink border border-slate-300 hover:border-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-semibold text-ink-muted">
            Showing {selectedCategory === 'All' ? 12 : INSTITUTIONS.filter((i) => i.category === selectedCategory).length} Institutions
          </span>
        </div>
      </section>

      {/* Four Visual Category Sections with Distinct Editorial Layouts */}
      <div className="py-14 sm:py-20 bg-white space-y-20">
        {visibleCategories.map((category, catIdx) => {
          const groupInstitutions = INSTITUTIONS.filter((i) => i.category === category);

          return (
            <section
              key={category}
              aria-labelledby={`cat-heading-${catIdx}`}
              className="container-page"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 mb-8 border-b-2 border-navy/15">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-crimson">
                    Category 0{INSTITUTION_CATEGORIES.indexOf(category) + 1}
                  </span>
                  <h2
                    id={`cat-heading-${catIdx}`}
                    className="mt-1 heading-h2 font-extrabold text-navy"
                  >
                    {category}
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface text-xs font-bold text-navy border border-slate-200">
                  <Building2 className="w-3.5 h-3.5 text-crimson" aria-hidden="true" />
                  <span>{groupInstitutions.length} Constituent Institutions</span>
                </span>
              </div>

              {/* Distinct Layouts per Category to Avoid Generic Identical Cards */}
              {category === 'Professional Education' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {groupInstitutions.map((inst) => (
                    <article
                      key={inst.id}
                      className="rounded-lg border border-slate-200 overflow-hidden bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-52 bg-navy">
                          <img
                            src={inst.image}
                            alt={inst.imageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover opacity-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent" />
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded text-xs font-bold bg-crimson text-white">
                              {inst.category}
                            </span>
                            {inst.establishedYear && (
                              <span className="px-2.5 py-1 rounded text-xs font-bold bg-navy/90 text-gold border border-gold/30">
                                Est. {inst.establishedYear}
                              </span>
                            )}
                          </div>
                          <div className="absolute bottom-3 left-4 right-4">
                            <h3 className="text-xl font-extrabold text-white">
                              <Link to={inst.route} className="hover:text-gold transition-colors">
                                {inst.name}
                              </Link>
                            </h3>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <p className="text-xs font-bold text-primary">{inst.tagline}</p>
                          <p className="text-sm text-ink-muted leading-relaxed">
                            {inst.shortDescription}
                          </p>
                          <ul className="space-y-1.5 text-xs text-ink">
                            {inst.affiliationsAndApprovals.slice(0, 2).map((aff) => (
                              <li key={aff} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                                <span>{aff}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="px-6 py-4 bg-surface border-t border-slate-200 flex items-center justify-between">
                        <Link
                          to={inst.route}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-crimson transition-colors"
                        >
                          <span>Explore Institution</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                        {inst.officialWebsite && (
                          <a
                            href={inst.officialWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-ink-muted hover:text-navy"
                          >
                            <span>Official Portal</span>
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {groupInstitutions.map((inst) => (
                    <article
                      key={inst.id}
                      className="rounded-lg border border-slate-200 bg-surface/50 hover:bg-white hover:border-navy transition-all flex flex-col justify-between overflow-hidden"
                    >
                      <div>
                        <div className="relative h-40 bg-navy">
                          <img
                            src={inst.image}
                            alt={inst.imageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover opacity-85"
                          />
                          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-bold bg-navy/90 text-gold border border-gold/30">
                            {inst.category}
                          </span>
                        </div>

                        <div className="p-5">
                          <h3 className="text-lg font-extrabold text-navy leading-snug">
                            <Link to={inst.route} className="hover:text-crimson transition-colors">
                              {inst.name}
                            </Link>
                          </h3>
                          <p className="mt-1.5 text-xs font-semibold text-primary">
                            {inst.tagline}
                          </p>
                          <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                            {inst.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="px-5 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between">
                        <Link
                          to={inst.route}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-crimson hover:underline"
                        >
                          <span>Explore Institution</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                        <ShieldCheck className="w-4 h-4 text-navy/60" aria-hidden="true" />
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

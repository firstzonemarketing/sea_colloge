import React, { useMemo, useState } from 'react';
import { Link, useLocation, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  RotateCcw,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { PageBanner } from '../../components/Hero/PageBanner';
import {
  BLOG_AND_EVENT_ITEMS,
  getBlogOrEventBySlug,
  isUpcomingDate,
  POST_CATEGORIES,
  PostCategory,
} from '../../data/events';

const BLOG_SUBNAV = [
  { label: 'All Posts', href: '/blog' },
  { label: 'Campus News', href: '/blog/news' },
  { label: 'College Events', href: '/blog/events' },
  { label: 'Upcoming Events', href: '/blog/events/upcoming' },
  { label: 'Campus Gallery', href: '/campus-life/gallery' },
];

export const BlogSubNav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-surface border-b border-slate-200">
      <div className="container-page py-3 flex flex-wrap items-center gap-2">
        {BLOG_SUBNAV.map((item) => {
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

export const BlogListingPage: React.FC = () => {
  const { pathname } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<PostCategory>('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const routeMode = useMemo(() => {
    if (pathname === '/blog/events/upcoming') return 'upcoming';
    if (pathname === '/blog/events') return 'events';
    if (pathname === '/blog/news') return 'news';
    return 'all';
  }, [pathname]);

  const metaConfig = {
    all: {
      title: 'News & Events | All Campus Bulletins & Symposiums',
      subtitle:
        'Explore technical symposiums, cultural festivals, athletics meets, research workshops, student orientations, and campus bulletins (clearly marked Demo/Sample previews).',
    },
    news: {
      title: 'Campus News & Academic Bulletins',
      subtitle:
        'Institutional announcements, programme spotlights, and admission updates across the S.E.A. Group of Institutions.',
    },
    events: {
      title: 'College Events & Academic Calendar',
      subtitle:
        'Technical symposiums, annual cultural fests, inter-collegiate sports championships, research workshops, and alumni gatherings.',
    },
    upcoming: {
      title: 'Upcoming Campus Events',
      subtitle:
        'Scheduled academic symposiums, workshops, cultural celebrations, and athletics meets determined dynamically by event date.',
    },
  }[routeMode];

  useDocumentMeta({
    title: `${metaConfig.title} | S.E.A. Group of Institutions`,
    description: metaConfig.subtitle,
    canonicalPath: pathname,
  });

  const filteredPosts = useMemo(() => {
    return BLOG_AND_EVENT_ITEMS.filter((item) => {
      if (routeMode === 'news' && item.type !== 'news') return false;
      if (routeMode === 'events' && item.type !== 'event') return false;
      if (routeMode === 'upcoming') {
        if (item.type !== 'event' || !isUpcomingDate(item.dateIso)) return false;
      }
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      return true;
    });
  }, [routeMode, selectedCategory]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <div>
      <PageBanner
        eyebrow="News & Events"
        title={metaConfig.title}
        subtitle={metaConfig.subtitle}
        breadcrumbs={
          pathname === '/blog'
            ? [{ label: 'News & Events' }]
            : [
                { label: 'News & Events', href: '/blog' },
                { label: metaConfig.title },
              ]
        }
        bannerImage="/assets/sea-auditorium.svg"
        bannerAlt="S.E.A. Group News and Events Auditorium Banner"
        badgeText="Demo Content Preview"
      />

      <BlogSubNav />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page">
          {/* Editorial Demo Governance Notice */}
          <div className="mb-8 p-4 rounded-lg bg-surface border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-ink-muted">
            <ShieldAlert className="w-5 h-5 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-navy">Sample &amp; Demo Event Notice:</strong> All articles and events below carry an explicit <span className="font-semibold text-crimson">Demo Event</span> or <span className="font-semibold text-crimson">Sample News Article</span> badge (`isDemo: true`) to demonstrate calendar filtering, dynamic upcoming/past status calculation, and detail templates without fabricating historical guests or awards.
            </div>
          </div>

          {/* Category Filters */}
          <div
            role="tablist"
            aria-label="Filter posts by category"
            className="flex flex-wrap items-center gap-2 mb-8"
          >
            {POST_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-3.5 py-2 min-h-[40px] rounded text-xs sm:text-sm font-bold transition-colors ${
                    active
                      ? 'bg-navy text-white'
                      : 'bg-surface text-ink border border-slate-300 hover:border-navy'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Posts Grid or Empty State */}
          {displayedPosts.length === 0 ? (
            <div className="rounded-lg border border-slate-200 p-10 text-center max-w-lg mx-auto bg-surface/50">
              <h2 className="text-lg font-extrabold text-navy">
                No entries in this category
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                No {routeMode} items matched the category &ldquo;{selectedCategory}&rdquo;. Reset your category filter to view all scheduled items.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className="mt-4 btn-navy"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>Show All Categories</span>
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPosts.map((item) => {
                  const upcoming = isUpcomingDate(item.dateIso);
                  const detailHref =
                    item.type === 'event'
                      ? `/blog/events/${item.slug}`
                      : `/blog/${item.slug}`;

                  return (
                    <article
                      key={item.id}
                      className="rounded-lg border border-slate-200 overflow-hidden bg-white shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-44 bg-navy">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover opacity-90"
                          />
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-crimson text-white">
                              {item.demoBadgeLabel}
                            </span>
                            <span
                              className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                                upcoming
                                  ? 'bg-emerald-900/90 text-emerald-200 border border-emerald-400/30'
                                  : 'bg-navy/90 text-gold border border-gold/30'
                              }`}
                            >
                              {upcoming ? 'Upcoming' : 'Past / Archive'}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-2">
                            <span className="inline-flex items-center gap-1 font-semibold text-navy">
                              <Calendar className="w-3.5 h-3.5 text-crimson" aria-hidden="true" />
                              <time dateTime={item.dateIso}>{item.dateIso}</time>
                            </span>
                            <span>•</span>
                            <span className="font-bold text-primary">{item.category}</span>
                          </div>

                          <h2 className="text-lg font-extrabold text-navy leading-snug">
                            <Link
                              to={detailHref}
                              className="hover:text-crimson transition-colors"
                            >
                              {item.title}
                            </Link>
                          </h2>

                          <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                            {item.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 py-4 bg-surface border-t border-slate-200 flex items-center justify-between text-xs">
                        <span className="font-medium text-ink-muted truncate max-w-[180px]">
                          {item.offeringUnit}
                        </span>
                        <Link
                          to={detailHref}
                          className="inline-flex items-center gap-1 font-bold text-navy hover:text-crimson shrink-0"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Load More Pagination */}
              {visibleCount < filteredPosts.length && (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="btn-outline-navy"
                  >
                    Load More Entries ({filteredPosts.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getBlogOrEventBySlug(slug) : undefined;

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regSubmitted, setRegSubmitted] = useState(false);

  useDocumentMeta({
    title: item
      ? `${item.title} (${item.demoBadgeLabel}) | S.E.A. Group`
      : 'News & Events Detail | S.E.A. Group of Institutions',
    description: item ? item.shortDescription : 'Campus news and event details.',
    canonicalPath: item
      ? item.type === 'event'
        ? `/blog/events/${item.slug}`
        : `/blog/${item.slug}`
      : '/blog',
  });

  if (!item) {
    return <Navigate to="/blog" replace />;
  }

  const upcoming = isUpcomingDate(item.dateIso);

  const handleDemoRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim()) return;
    setRegSubmitted(true);
  };

  return (
    <div>
      <PageBanner
        eyebrow={`${item.category} • ${item.offeringUnit}`}
        title={item.title}
        subtitle={item.shortDescription}
        breadcrumbs={[
          { label: 'News & Events', href: '/blog' },
          {
            label: item.type === 'event' ? 'College Events' : 'Campus News',
            href: item.type === 'event' ? '/blog/events' : '/blog/news',
          },
          { label: item.title },
        ]}
        bannerImage={item.image}
        bannerAlt={item.imageAlt}
        badgeText={`${item.demoBadgeLabel} • ${upcoming ? 'Upcoming' : 'Past'}`}
      />

      <BlogSubNav />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              {/* Explicit Demo Badge Banner */}
              <div className="p-4 rounded-lg bg-crimson-light border border-crimson/25 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs sm:text-sm text-ink">
                  <strong className="text-crimson uppercase tracking-wider block">
                    {item.demoBadgeLabel} (isDemo: true)
                  </strong>
                  <span>
                    This page is a structured sample entry demonstrating event and article detail presentation for the S.E.A. Group portal.
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-ink leading-relaxed">
                {item.bodyParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Agenda or Highlights */}
              <div className="bg-surface rounded-lg border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  <Sparkles className="w-4 h-4 text-crimson" aria-hidden="true" />
                  <span>Schedule &amp; Key Highlights</span>
                </div>
                <h2 className="heading-h3 font-extrabold text-navy">
                  Programme Highlights
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-ink">
                  {item.agendaOrHighlights.map((ag, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{ag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar: Event Metadata & Demo Registration */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-surface rounded-lg border border-slate-200 p-6 space-y-4">
                <h2 className="text-base font-extrabold text-navy border-b border-slate-200 pb-3">
                  Event / Bulletin Metadata
                </h2>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-navy block">Date &amp; Status</strong>
                      <span className="text-ink-muted">
                        {item.dateIso} ({upcoming ? 'Upcoming Schedule' : 'Past Archive'})
                      </span>
                    </div>
                  </div>

                  {item.timeRange && (
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-navy block">Time</strong>
                        <span className="text-ink-muted">{item.timeRange}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-navy block">Campus Venue</strong>
                      <span className="text-ink-muted">{item.venue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Event Registration Form */}
              {item.registrationAvailable && (
                <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 shadow-2xs">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-crimson text-white">
                    Demo Event Registration
                  </span>
                  <h3 className="text-base font-extrabold text-navy">
                    Register Interest (Prototype)
                  </h3>

                  {regSubmitted ? (
                    <div
                      role="status"
                      className="p-3.5 rounded bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 font-semibold"
                    >
                      Demo completed — no registration has been submitted to an external server.
                    </div>
                  ) : (
                    <form onSubmit={handleDemoRegistration} className="space-y-3">
                      <div>
                        <label
                          htmlFor="event-reg-name"
                          className="block text-xs font-bold text-navy mb-1"
                        >
                          Student / Participant Name
                        </label>
                        <input
                          id="event-reg-name"
                          type="text"
                          required
                          value={regName}
                          onChange={(e) => setRegName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full px-3 py-2 min-h-[42px] text-base border border-slate-300 rounded"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="event-reg-email"
                          className="block text-xs font-bold text-navy mb-1"
                        >
                          Institutional / Personal Email
                        </label>
                        <input
                          id="event-reg-email"
                          type="email"
                          required
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-3 py-2 min-h-[42px] text-base border border-slate-300 rounded"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full text-xs">
                        Validate Demo Registration
                      </button>
                    </form>
                  )}
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

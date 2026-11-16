import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, ArrowRight, Phone, MapPin, FlaskConical, Building2 } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigation';
import { SITE_CONFIG } from '../../config/siteConfig';
import { MegaMenu } from '../MegaMenu/MegaMenu';
import { MobileDrawer } from '../MobileNavigation/MobileDrawer';

export const Header: React.FC = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  // Close menus on route change
  useEffect(() => {
    setActiveMenuId(null);
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Outside click and Escape key dismissal for desktop MegaMenu
  useEffect(() => {
    if (!activeMenuId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenuId(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenuId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenuId]);

  const handleMouseEnter = (id: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenuId(id);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveMenuId(null);
    }, 160);
  };

  const isNavItemActive = (href: string) => {
    if (href === '/blog') {
      return location.pathname.startsWith('/blog');
    }
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  const activeNavItem = MAIN_NAVIGATION.find((item) => item.id === activeMenuId);

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-crimson focus:text-white focus:font-bold focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Screen-Reader Route Announcer */}
      <div
        id="route-change-announcer"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      {/* Secondary Utility Top Bar */}
      <div className="hidden lg:block bg-navy text-white/85 text-xs border-b border-white/10">
        <div className="container-page py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-white/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>K.R. Puram, Bengaluru – 560049</span>
            </span>
            <span className="text-white/30" aria-hidden="true">|</span>
            <a
              href="tel:+918025618623"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.phones[0]}</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/academics/research-center"
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors font-medium"
            >
              <FlaskConical className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>Research Center</span>
            </Link>
            <Link
              to="/institutions"
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors font-medium"
            >
              <Building2 className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>12 Constituent Institutions</span>
            </Link>
            <Link
              to="/admissions/enquiry"
              className="hover:text-gold transition-colors font-medium"
            >
              Enquiry Desk
            </Link>
            <Link
              to="/about/contact"
              className="hover:text-gold transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        ref={headerRef}
        onMouseLeave={handleMouseLeave}
        className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
          isScrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-200/80'
        }`}
      >
        <div className="container-page h-20 flex items-center justify-between gap-4">
          {/* Left: Official S.E.A. Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group py-1"
            aria-label="S.E.A. Group of Institutions — S.E.A. College of Engineering and Technology Home"
          >
            <img
              src="/assets/sea-logo.png"
              alt="S.E.A. Group of Institutions Official Logo"
              className="h-11 sm:h-13 w-auto object-contain shrink-0"
            />
          </Link>

          {/* Centre: Desktop Primary Navigation in Exact Required Order */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-0.5"
          >
            {MAIN_NAVIGATION.map((item) => {
              const isOpen = activeMenuId === item.id;
              const isCurrentRoute = isNavItemActive(item.href);

              return (
                <div
                  key={item.id}
                  className="relative flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  {/* Separate Parent-Page Link */}
                  <Link
                    to={item.href}
                    className={`px-2.5 py-2 text-sm font-semibold rounded-l transition-colors ${
                      isCurrentRoute || isOpen
                        ? 'text-crimson bg-crimson/5'
                        : 'text-navy hover:text-crimson hover:bg-surface'
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Separate Dropdown Toggle Button for Keyboard & Click Accessibility */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`megamenu-${item.id}`}
                    aria-label={`${item.label} menu`}
                    onClick={() =>
                      setActiveMenuId((prev) => (prev === item.id ? null : item.id))
                    }
                    className={`px-1.5 py-2.5 rounded-r transition-colors ${
                      isCurrentRoute || isOpen
                        ? 'text-crimson bg-crimson/5'
                        : 'text-navy hover:text-crimson hover:bg-surface'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-crimson' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right: Prominent Apply Now CTA & Mobile Drawer Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/admissions/apply"
              className="hidden sm:inline-flex btn-primary"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <button
              ref={mobileTriggerRef}
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-expanded={isMobileOpen}
              aria-label="Open navigation menu"
              className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded border border-slate-300 text-navy hover:bg-surface"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop Full-Width Mega Menu Container (Below Header, Never Covering Logo) */}
        <div
          className="hidden xl:block"
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              window.clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
          }}
        >
          {activeNavItem && (
            <MegaMenu
              item={activeNavItem}
              onClose={() => setActiveMenuId(null)}
            />
          )}
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        triggerRef={mobileTriggerRef}
      />
    </>
  );
};

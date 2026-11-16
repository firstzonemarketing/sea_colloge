import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, ArrowRight, Phone, MapPin } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigation';
import { SITE_CONFIG } from '../../config/siteConfig';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  triggerRef,
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    academics: true,
  });
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        triggerRef.current?.focus();
      } else if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className="fixed inset-0 z-50 xl:hidden flex justify-end bg-navy/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          triggerRef.current?.focus();
        }
      }}
    >
      <div
        ref={drawerRef}
        className="w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl flex flex-col justify-between pb-[env(safe-area-inset-bottom)]"
      >
        <div>
          {/* Drawer Header */}
          <div className="sticky top-0 z-10 bg-white px-5 py-4 border-b border-slate-200 flex items-center justify-between">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center gap-2.5"
            >
              <img
                src="/assets/sea-logo.png"
                alt="S.E.A. Group of Institutions Official Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                onClose();
                triggerRef.current?.focus();
              }}
              aria-label="Close mobile navigation menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded border border-slate-200 text-navy hover:bg-surface"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Primary CTA inside Mobile Drawer */}
          <div className="p-4 bg-surface border-b border-slate-200 flex gap-2.5">
            <Link
              to="/admissions/apply"
              onClick={onClose}
              className="btn-primary flex-1 text-center"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/admissions/enquiry"
              onClick={onClose}
              className="btn-outline-navy flex-1 text-center"
            >
              Enquire
            </Link>
          </div>

          {/* Nested Accordion Navigation */}
          <nav aria-label="Mobile Primary Navigation" className="divide-y divide-slate-200">
            {MAIN_NAVIGATION.map((item) => {
              const isExpanded = !!expandedSections[item.id];
              return (
                <div key={item.id} className="bg-white">
                  <div className="flex items-center justify-between px-5 py-1">
                    {/* Independent parent-page link */}
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="py-3 text-base font-bold text-navy hover:text-crimson flex-1"
                    >
                      {item.label}
                    </Link>

                    {/* Separate Accordion Toggle Control */}
                    <button
                      type="button"
                      onClick={() => toggleSection(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`mobile-submenu-${item.id}`}
                      aria-label={`Toggle ${item.label} submenu`}
                      className="inline-flex items-center justify-center w-11 h-11 rounded text-navy hover:bg-surface"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-crimson' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div
                      id={`mobile-submenu-${item.id}`}
                      className="bg-surface px-5 py-4 space-y-4 border-t border-slate-200/70"
                    >
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-crimson mb-2">
                            {group.title}
                          </p>
                          <ul className="space-y-1 border-l-2 border-slate-200 pl-3">
                            {group.items.map((sub) => (
                              <li key={sub.href + sub.label}>
                                <Link
                                  to={sub.href}
                                  onClick={onClose}
                                  className="block py-2 text-sm font-medium text-ink hover:text-crimson"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer Contact Info */}
        <div className="p-5 bg-navy text-white text-xs space-y-2.5">
          <div className="flex items-start gap-2 text-white/85">
            <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>{SITE_CONFIG.location.campusArea}, Bengaluru – 560049</span>
          </div>
          <div className="flex items-center gap-2 text-white/85">
            <Phone className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
            <a href="tel:+918025618623" className="hover:underline">
              {SITE_CONFIG.contact.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

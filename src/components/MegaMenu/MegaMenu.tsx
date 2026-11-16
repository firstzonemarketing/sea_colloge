import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { MainNavItem } from '../../data/navigation';

interface MegaMenuProps {
  item: MainNavItem;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ item, onClose }) => {
  const columnCount = item.groups.length;
  const gridColsClass =
    columnCount >= 4
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      : columnCount === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2';

  return (
    <div
      id={`megamenu-${item.id}`}
      role="region"
      aria-label={`${item.label} submenu`}
      className="w-full bg-white border-t border-b border-slate-200 shadow-xl z-50"
    >
      <div className="container-page py-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Editorial Summary Column */}
          <div className="lg:col-span-3 bg-surface rounded-lg p-5 flex flex-col justify-between border border-slate-200/80">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-crimson">
                S.E.A. Group Portal
              </span>
              <h3 className="mt-1.5 text-lg font-extrabold text-navy">
                {item.label}
              </h3>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col gap-2">
              <Link
                to={item.ctaHref}
                onClick={onClose}
                className="inline-flex items-center justify-between text-xs font-bold text-navy hover:text-crimson transition-colors py-1"
              >
                <span>{item.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <Link
                to="/admissions/enquiry"
                onClick={onClose}
                className="inline-flex items-center justify-between text-xs font-semibold text-primary hover:text-crimson transition-colors py-1"
              >
                <span>Admission Enquiry Desk</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Navigation Groups */}
          <div className={`lg:col-span-9 grid ${gridColsClass} gap-6`}>
            {item.groups.map((group) => (
              <div key={group.title} className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-slate-200 pb-2">
                  {group.title}
                </h4>
                <ul className="space-y-1.5">
                  {group.items.map((subItem) => (
                    <li key={subItem.href + subItem.label}>
                      <Link
                        to={subItem.href}
                        onClick={onClose}
                        className="group block rounded p-2 -mx-2 hover:bg-surface transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-ink group-hover:text-crimson transition-colors">
                            {subItem.label}
                          </span>
                          {subItem.badge && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-crimson/10 text-crimson">
                              {subItem.badge}
                            </span>
                          )}
                        </div>
                        {subItem.description && (
                          <p className="mt-0.5 text-xs text-ink-muted line-clamp-2">
                            {subItem.description}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

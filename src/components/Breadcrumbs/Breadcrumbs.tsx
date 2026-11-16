import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'light' }) => {
  const isLight = variant === 'light';

  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
        <li>
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 font-medium transition-colors ${
              isLight ? 'text-white/80 hover:text-white' : 'text-ink-muted hover:text-navy'
            }`}
          >
            <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5">
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-white/50' : 'text-ink-muted/60'}`}
                aria-hidden="true"
              />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className={`font-medium transition-colors ${
                    isLight ? 'text-white/80 hover:text-white' : 'text-ink-muted hover:text-navy'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className={`font-semibold ${isLight ? 'text-gold' : 'text-navy'}`}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

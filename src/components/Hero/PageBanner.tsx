import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs';

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  bannerImage?: string;
  bannerAlt?: string;
  badgeText?: string;
  actions?: React.ReactNode;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  bannerImage = '/assets/campus-photos/sea-campus-aerial.jpg',
  bannerAlt = 'S.E.A. Group of Institutions campus architecture in Bengaluru',
  badgeText,
  actions,
}) => {
  return (
    <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
      {/* Background Campus Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImage}
          alt={bannerAlt}
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container-page py-10 sm:py-14 lg:py-16">
        <Breadcrumbs items={breadcrumbs} variant="light" />

        <div className="mt-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            {eyebrow && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                {eyebrow}
              </span>
            )}
            {badgeText && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-crimson text-white">
                {badgeText}
              </span>
            )}
          </div>

          <h1 className="heading-h1 font-extrabold text-white tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-white/85 leading-relaxed">
              {subtitle}
            </p>
          )}

          {actions && <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
};

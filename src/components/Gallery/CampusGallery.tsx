import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import {
  CAMPUS_GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryItem,
} from '../../data/campus';

export const CampusGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryItem['category']>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const lastOpenedIdRef = useRef<string | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return CAMPUS_GALLERY_ITEMS;
    return CAMPUS_GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number, itemId: string) => {
    lastOpenedIdRef.current = itemId;
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    const lastId = lastOpenedIdRef.current;
    if (lastId && triggerRefs.current[lastId]) {
      window.setTimeout(() => {
        triggerRefs.current[lastId]?.focus();
      }, 0);
    }
  };

  const showPrev = () => {
    if (activeIndex === null || filteredItems.length === 0) return;
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const showNext = () => {
    if (activeIndex === null || filteredItems.length === 0) return;
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % filteredItems.length
    );
  };

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, filteredItems.length]);

  const currentItem =
    activeIndex !== null && filteredItems[activeIndex]
      ? filteredItems[activeIndex]
      : null;

  return (
    <div>
      {/* Category Filters */}
      <div
        role="tablist"
        aria-label="Filter gallery by campus category"
        className="flex flex-wrap items-center gap-2 mb-8"
      >
        {GALLERY_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(null);
              }}
              className={`px-3.5 py-2 min-h-[40px] rounded text-xs sm:text-sm font-bold transition-colors ${
                isSelected
                  ? 'bg-navy text-white'
                  : 'bg-surface text-ink border border-slate-300 hover:border-navy'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <figure
            key={item.id}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="relative h-52 bg-navy group">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <button
                ref={(el) => {
                  triggerRefs.current[item.id] = el;
                }}
                type="button"
                onClick={() => openLightbox(idx, item.id)}
                aria-label={`Open ${item.title} in full-screen lightbox`}
                className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 focus-visible:bg-navy/60 transition-colors flex items-center justify-center"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-navy text-xs font-bold opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity shadow">
                  <Maximize2 className="w-3.5 h-3.5 text-crimson" aria-hidden="true" />
                  <span>View Plate</span>
                </span>
              </button>
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-bold bg-navy/90 text-gold border border-gold/30 pointer-events-none">
                {item.category}
              </span>
            </div>

            <figcaption className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-crimson">
                  {item.scopeNote}
                </span>
                <h3 className="mt-1 text-base font-extrabold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Keyboard-Accessible Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery Lightbox: ${currentItem.title}`}
          className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="bg-navy-dark border border-white/20 rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl text-white">
            {/* Lightbox Top Bar */}
            <div className="px-5 py-3.5 border-b border-white/15 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold block">
                  {currentItem.category} ({activeIndex! + 1} of {filteredItems.length})
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  {currentItem.title}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label="Close gallery lightbox"
                className="inline-flex items-center justify-center w-11 h-11 rounded bg-white/10 hover:bg-crimson text-white transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Lightbox Image Stage */}
            <div className="relative bg-navy flex items-center justify-center max-h-[65vh] overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="w-full max-h-[60vh] object-contain"
              />
            </div>

            {/* Caption & Next/Prev Controls */}
            <div className="p-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed">
                {currentItem.caption}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous gallery image"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[42px] rounded bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next gallery image"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[42px] rounded bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

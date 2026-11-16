import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const VideoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoAvailable, setVideoAvailable] = useState<boolean>(
    SITE_CONFIG.hasAuthorizedCampusVideo
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mq.matches);
      if (mq.matches) {
        setIsPlaying(false);
      }
    }
  }, []);

  const togglePlayback = () => {
    const vid = videoRef.current;
    if (vid && videoAvailable) {
      if (vid.paused) {
        vid.play().catch(() => setVideoAvailable(false));
        setIsPlaying(true);
      } else {
        vid.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <section
      aria-label="Campus Highlight Hero"
      className="relative w-full min-h-[52svh] sm:min-h-[60svh] lg:min-h-[80vh] bg-navy text-white flex items-end overflow-hidden"
    >
      {/* Background Video or Authentic Campus Architectural Fallback */}
      <div className="absolute inset-0 z-0">
        {videoAvailable && !prefersReducedMotion ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center"
            poster={SITE_CONFIG.heroPosterUrl}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoAvailable(false)}
          >
            <source src={SITE_CONFIG.heroVideoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={SITE_CONFIG.heroPosterUrl}
            alt="S.E.A. College of Engineering and Technology K.R. Puram Campus Architectural Elevation"
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Editorial Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/35"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-page w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-gold mb-5">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
            <span>
              {SITE_CONFIG.groupName} • Academic Session {SITE_CONFIG.activeAcademicYear}
            </span>
          </div>

          <p className="heading-hero font-extrabold text-white tracking-tight">
            Discover Your Potential. Shape Your Future.
          </p>

          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
            Anchored by <strong className="font-semibold text-white">S.E.A. College of Engineering &amp; Technology (SEACET)</strong> in K.R. Puram, Bengaluru—uniting 12 multidisciplinary institutions across Engineering, Management, Nursing, Law, Sciences, Humanities, and Schooling.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#programme-explorer" className="btn-primary">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Explore Programmes</span>
            </a>

            <Link to="/admissions" className="btn-outline-light">
              <span>Admissions {SITE_CONFIG.activeAcademicYear}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Campus Visual Status & Accessible Pause/Play Control */}
        <div className="mt-10 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-white/75">
          <div>
            <span>
              K.R. Puram Campus, Bengaluru – 560049 • VTU, AICTE, RGUHS, KSLU, BCI &amp; Bengaluru North University Affiliated Institutions
            </span>
          </div>

          <button
            type="button"
            onClick={togglePlayback}
            aria-pressed={!isPlaying}
            aria-label={isPlaying ? 'Pause hero visual motion' : 'Play hero visual motion'}
            className="inline-flex items-center gap-2 px-3 py-2 min-h-[40px] rounded bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                <span>Pause Visual</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                <span>Play Visual</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

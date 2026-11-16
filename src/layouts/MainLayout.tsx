import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ensureCampusFramesExtracted } from '../utils/extractVideoFrames';

export const MainLayout: React.FC = () => {
  const { pathname, hash } = useLocation();
  const [framesExtracted, setFramesExtracted] = useState(false);

  useEffect(() => {
    ensureCampusFramesExtracted().then((done) => {
      if (done) setFramesExtracted(true);
    });
  }, []);

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div
      className="min-h-screen flex flex-col bg-white text-ink"
      data-frames-extracted={framesExtracted ? 'true' : 'pending'}
    >
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

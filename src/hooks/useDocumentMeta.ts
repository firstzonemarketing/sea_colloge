import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaOptions {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function useDocumentMeta({ title, description, canonicalPath }: MetaOptions) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes('S.E.A.')
      ? title
      : `${title} | S.E.A. Group of Institutions, Bengaluru`;
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const path = canonicalPath ?? location.pathname;
      canonical.setAttribute('href', `https://www.seaedu.ac.in${path}`);
    }

    const announcer = document.getElementById('route-change-announcer');
    if (announcer) {
      announcer.textContent = `Navigated to ${fullTitle}`;
    }
  }, [title, description, canonicalPath, location.pathname]);
}

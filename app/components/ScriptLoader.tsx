'use client';

import { useEffect } from 'react';
import { getConsent } from '../lib/consent';

export default function ScriptLoader() {

  useEffect(() => {
    const consent = getConsent();
    if (!consent) return;

    // Google Analytics
    if (consent.analytics) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q9X3P2G93S';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-Q9X3P2G93S', {
        anonymize_ip: true
      });
    }

    // Marketing Pixels (placeholder)
    if (consent.marketing) {
      console.log("Marketing pixels would load here");
      // Later add Meta Pixel, TikTok Pixel, etc.
    }

  }, []);

  return null;
}
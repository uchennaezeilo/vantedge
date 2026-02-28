'use client';

import { useEffect } from 'react';
import { getConsent } from '../lib/consent';



export default function ScriptLoader() {

  useEffect(() => {
    const consent = getConsent();
    if (!consent) return;

    if (consent.analytics) {

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q9X3P2G93S';
      document.head.appendChild(script);

      // Safe initialization
      window.dataLayer = window.dataLayer || [];

      const gtag = (...args: any[]) => {
        window.dataLayer?.push(args);
      };

      gtag('js', new Date());
      gtag('config', 'G-Q9X3P2G93S', {
        anonymize_ip: true
      });
    }

  }, []);

  return null;
}
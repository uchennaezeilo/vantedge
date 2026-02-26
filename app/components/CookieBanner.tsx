'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'granted');
    setShowBanner(false);
    // Here you would typically initialize Google Analytics
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('consent', 'update', { ... });
    // }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={styles.banner}>
      <div style={styles.content}>
        <p style={styles.text}>
          We use cookies to analyze website traffic and optimize your website experience. 
          By accepting our use of cookies, your data will be aggregated with all other user data.
        </p>
      </div>
      <div style={styles.actions}>
        <button onClick={handleDecline} style={styles.declineButton}>
          Decline
        </button>
        <button onClick={handleAccept} style={styles.acceptButton}>
          Accept
        </button>
      </div>
    </div>
  );
}

const styles = {
  banner: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e5e7eb',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
    zIndex: 100,
    flexWrap: 'wrap' as const,
    gap: '1rem',
  },
  content: {
    maxWidth: '800px',
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#374151',
    lineHeight: '1.5',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
  },
  acceptButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 600,
  },
  declineButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    color: '#374151',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 600,
  },
};
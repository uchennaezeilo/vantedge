'use client';

import { useEffect, useState } from 'react';
import { getConsent, setConsent } from '../lib/consent';
import ConsentModal from './ConsentModal';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!getConsent()) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    setConsent({ analytics: true, marketing: true });
    setShowBanner(false);
    window.location.reload();
  };

  const rejectAll = () => {
    setConsent({ analytics: false, marketing: false });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50 text-sm">
        We use cookies for analytics and marketing to improve your experience.
        <div className="mt-2 space-x-3">
          <button onClick={acceptAll} className="underline">Accept All</button>
          <button onClick={rejectAll} className="underline">Reject All</button>
          <button onClick={() => setShowModal(true)} className="underline">
            Manage Preferences
          </button>
        </div>
      </div>

      {showModal && (
        <ConsentModal
          close={() => setShowModal(false)}
          save={(settings) => {
            setConsent(settings);
            setShowBanner(false);
            setShowModal(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
}
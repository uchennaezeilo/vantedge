'use client';

import { useState } from 'react';
import { ConsentSettings } from '../lib/consent';

export default function ConsentModal({
  close,
  save
}: {
  close: () => void;
  save: (settings: ConsentSettings) => void;
}) {

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 max-w-md w-full rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Manage Cookie Preferences</h2>

        <div className="mb-3">
          <label className="flex justify-between items-center">
            Analytics Cookies
            <input
              type="checkbox"
              checked={analytics}
              onChange={() => setAnalytics(!analytics)}
            />
          </label>
          <p className="text-xs text-gray-600">
            Used to understand how visitors use our site.
          </p>
        </div>

        <div className="mb-3">
          <label className="flex justify-between items-center">
            Marketing Cookies
            <input
              type="checkbox"
              checked={marketing}
              onChange={() => setMarketing(!marketing)}
            />
          </label>
          <p className="text-xs text-gray-600">
            Used for advertising and affiliate tracking.
          </p>
        </div>

        <div className="mt-4 space-x-3">
          <button onClick={() => save({ analytics, marketing })} className="underline">
            Save Preferences
          </button>
          <button onClick={close} className="underline">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
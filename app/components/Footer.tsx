'use client';

export default function Footer() {

  const resetConsent = () => {
    localStorage.removeItem("user_consent");
    window.location.reload();
  };

  return (
    <footer className="mt-16 p-6 border-t text-sm text-center space-y-2">
      <div>
        © {new Date().getFullYear()} Vantedge. All rights reserved.
      </div>

      <div className="space-x-4">
        <a href="/privacy-policy" className="underline">Privacy Policy</a>
        <a href="/terms" className="underline">Terms & Conditions</a>
        <a href="/cookie-policy" className="underline">Cookie Policy</a>
        <a href="/disclaimer" className="underline">Disclaimer</a>
        <a href="/affiliate-policy" className="underline">Affiliate Policy</a>
        <a href="/contact" className="underline">Contact Us</a>
        <button onClick={resetConsent} className="underline">
          Reset Cookie Preferences
        </button>
      </div>
    </footer>
  );
}
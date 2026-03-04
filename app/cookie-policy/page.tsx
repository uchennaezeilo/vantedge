import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Vantedge",
  description: "Cookie Policy for Vantedge",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Vantedge</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <p>Effective Date: [28 February, 2026]</p>
          <p>Last Updated: [4 March, 2026]</p>

          <h2>1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website.</p>

          <h2>2. Types of Cookies We Use</h2>
          <h3>Strictly Necessary Cookies</h3>
          <p>Required for website functionality.</p>

          <h3>Analytics Cookies</h3>
          <p>Used via Google Analytics to understand visitor behaviour.</p>

          <h3>Affiliate Tracking Cookies</h3>
          <p>Used by:</p>
          <ul>
            <li>Amazon Associates</li>
            <li>CJ Affiliate</li>
            <li>ClickBank</li>
          </ul>
          <p>These cookies track referrals and may remain active for a limited duration.</p>

          <h2>3. Consent</h2>
          <p>Non-essential cookies are only placed after you:</p>
          <ul>
            <li>Click “Accept” on our cookie banner</li>
            <li>Adjust preferences in the consent tool</li>
          </ul>
          <p>You may withdraw consent at any time.</p>

          <h2>4. Managing Cookies</h2>
          <p>You can:</p>
          <ul>
            <li>Adjust cookie settings via our consent tool</li>
            <li>Disable cookies in your browser</li>
          </ul>
          <p>Disabling some cookies may affect website functionality.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Cookie Policy, please contact us:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              By email: <a href="mailto:hello@vantedge.uk" className="text-blue-600 hover:underline">hello@vantedge.uk</a>
            </li>
            <li>
              By phone: <a href="tel:+447557023397" className="text-blue-600 hover:underline">+44 7557 023397</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
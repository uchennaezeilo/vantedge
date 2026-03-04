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
          <p className="mb-4">
          1. What Are Cookies?

Cookies are small text files stored on your device when you visit a website.

2. Types of Cookies We Use
Strictly Necessary Cookies

Required for website functionality.

Analytics Cookies

Used via Google Analytics to understand visitor behaviour.

Affiliate Tracking Cookies

Used by:

Amazon Associates

CJ Affiliate

ClickBank

These cookies track referrals and may remain active for a limited duration.

3. Consent

Non-essential cookies are only placed after you:

Click “Accept” on our cookie banner

Adjust preferences in the consent tool

You may withdraw consent at any time.

4. Managing Cookies

You can:

Adjust cookie settings via our consent tool

Disable cookies in your browser

Disabling some cookies may affect website functionality.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Cookie Policy, please contact us:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              By phone: <a href="tel:+447557023397" className="text-blue-600 hover:underline">+44 7557 023397</a>
            </li>
          </ul>
          
          <p className="text-sm text-zinc-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>
    </div>
  );
}
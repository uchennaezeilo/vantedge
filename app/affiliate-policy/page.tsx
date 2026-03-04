import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Policy | Vantedge",
  description: "Affiliate Policy for Vantedge",
};

export default function AffiliatePolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Vantedge</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Affiliate Policy</h1>
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <p>Effective Date: [28 February, 2026]</p>
          <p>Last Updated: [4 March, 2026]</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">Affiliate Disclosure</h2>
          <p>Vantedge participates in affiliate marketing programs. This means we may earn commissions when you click on our links and make purchases through the sites we link to. However, this comes at no additional cost to you.</p>

          <p>We are a part of several affiliate programs, including but not limited to:</p>
          <ul>
            <li>Amazon Associates</li>
            <li>CJ Affiliate</li>
            <li>ClickBank</li>
          </ul>

          <p>We may add or remove affiliate programs from time to time.</p>

          <p>Our participation in these programs does not influence the content, topics, or posts we publish. We are committed to providing honest and unbiased information. We only recommend products and services that we believe will provide value to our readers.</p>

          <p>Vantedge is a for-profit business, and these commissions help us to keep the site running and continue to produce high-quality content.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Affiliate Policy, please contact us:
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
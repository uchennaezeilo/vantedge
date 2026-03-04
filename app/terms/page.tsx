import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Vantedge",
  description: "Terms and Conditions for Vantedge",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Vantedge</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <p>Effective Date: [28 February, 2026]</p>
          <p>Last Updated: [4 March, 2026]</p>

          <h2>1. Acceptance</h2>
          <p>By accessing vantedge.uk, you agree to these Terms and Conditions.</p>
          <p>If you do not agree, you must discontinue use.</p>

          <h2>2. Business Information</h2>
          <p>Vantedge is operated by:</p>
          <ul>
            <li>Uchenna Ezeilo</li>
            <li>Sole Trader</li>
            <li>Email: hello@vantedge.uk</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>All content on this website is owned by Vantedge unless otherwise stated.</p>
          <p>You may not:</p>
          <ul>
            <li>Reproduce</li>
            <li>Distribute</li>
            <li>Republish</li>
            <li>Modify</li>
          </ul>
          <p>without written permission.</p>
          <p>© {new Date().getFullYear()} Vantedge. All rights reserved.</p>

          <h2>4. Informational Purposes Only</h2>
          <p>Content is provided for general educational purposes only.</p>
          <p>It does not constitute professional, medical, legal, or financial advice.</p>

          <h2>5. Health & Wellness Disclaimer</h2>
          <p>Any health, fitness, nutrition, or wellbeing content:</p>
          <ul>
            <li>Is for informational purposes only</li>
            <li>Is not medical advice</li>
            <li>Does not diagnose, treat, cure, or prevent any disease</li>
          </ul>
          <p>You must consult a qualified healthcare professional before making changes to:</p>
          <ul>
            <li>Diet</li>
            <li>Exercise</li>
            <li>Medication</li>
            <li>Treatment plans</li>
          </ul>

          <h2>6. Affiliate Disclosure</h2>
          <p>This website participates in affiliate marketing programs including:</p>
          <ul>
            <li>Amazon Associates</li>
            <li>CJ Affiliate</li>
            <li>ClickBank</li>
          </ul>
          <p>We may earn commissions on qualifying purchases at no additional cost to you.</p>
          <p>Affiliate links do not influence our editorial integrity.</p>

          <h2>7. No Guarantees</h2>
          <p>We make no warranties regarding:</p>
          <ul>
            <li>Accuracy</li>
            <li>Completeness</li>
            <li>Reliability</li>
            <li>Results</li>
          </ul>
          <p>Use of the website is at your own risk.</p>

          <h2>8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Vantedge shall not be liable for:</p>
          <ul>
            <li>Direct or indirect loss</li>
            <li>Consequential damages</li>
            <li>Loss of profits</li>
            <li>Health outcomes</li>
            <li>Reliance on content</li>
          </ul>

          <h2>9. External Links</h2>
          <p>We are not responsible for the content or practices of third-party websites.</p>

          <h2>10. Governing Law</h2>
          <p>These Terms are governed by the laws of England and Wales.</p>

          <h2>11. Changes</h2>
          <p>We reserve the right to update these Terms at any time.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Terms and Conditions, please contact us:
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
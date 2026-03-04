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
          <p className="mb-4">
           Terms and Conditions of Use
Effective Date: [28 February, 2026]
Last Updated: [4 March, 2026]

1. Acceptance

By accessing vantedge.uk, you agree to these Terms and Conditions.

If you do not agree, you must discontinue use.

2. Business Information

Vantedge is operated by:

Uchenna Ezeilo
Sole Trader
Email: hello@vantedge.uk

3. Intellectual Property

All content on this website is owned by Vantedge unless otherwise stated.

You may not:

Reproduce

Distribute

Republish

Modify

without written permission.

© [Year] Vantedge. All rights reserved.

4. Informational Purposes Only

Content is provided for general educational purposes only.

It does not constitute professional, medical, legal, or financial advice.

5. Health & Wellness Disclaimer

Any health, fitness, nutrition, or wellbeing content:

Is for informational purposes only

Is not medical advice

Does not diagnose, treat, cure, or prevent any disease

You must consult a qualified healthcare professional before making changes to:

Diet

Exercise

Medication

Treatment plans

6. Affiliate Disclosure

This website participates in affiliate marketing programs including:

Amazon Associates

CJ Affiliate

ClickBank

We may earn commissions on qualifying purchases at no additional cost to you.

Affiliate links do not influence our editorial integrity.

7. No Guarantees

We make no warranties regarding:

Accuracy

Completeness

Reliability

Results

Use of the website is at your own risk.

8. Limitation of Liability

To the fullest extent permitted by law, Vantedge shall not be liable for:

Direct or indirect loss

Consequential damages

Loss of profits

Health outcomes

Reliance on content

9. External Links

We are not responsible for the content or practices of third-party websites.

10. Governing Law

These Terms are governed by the laws of England and Wales.

11. Changes

We reserve the right to update these Terms at any time.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us:
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
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Vantedge",
  description: "Privacy Policy for Vantedge",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Vantedge</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <p className="mb-4">
           PRIVACY POLICY

Privacy Policy for Vantedge
Effective Date: [Insert Date]
Last Updated: [Insert Date]

1. Who We Are

Vantedge is a UK-based sole trader business operated by:

Uchenna Ezeilo
Trading as: Vantedge
Email: hello@vantedge.uk

For the purposes of UK data protection law, Vantedge is the Data Controller of your personal data.

This policy complies with:

UK General Data Protection Regulation (UK GDPR)

Data Protection Act 2018

Privacy and Electronic Communications Regulations (PECR)

2. Information We Collect
2.1 Information You Provide

We may collect:

Name

Email address

Information submitted via contact forms

Newsletter subscription details

2.2 Automatically Collected Information

When you visit our website, we may collect:

IP address

Browser type

Device information

Pages visited

Referring URLs

Interaction data

This is collected via cookies and analytics tools.

3. How We Use Your Data

We use your personal data to:

Send newsletters and updates (if you opt in)

Respond to enquiries

Improve website performance

Analyse user behaviour

Manage affiliate tracking

Comply with legal obligations

4. Legal Basis for Processing

Under UK GDPR, we rely on:

Consent – for newsletters and marketing emails

Legitimate Interest – for website analytics and improvements

Legal Obligation – where required by law

You may withdraw consent at any time.

5. Email Marketing (Mailchimp)

We use Mailchimp as our email marketing provider.
When you subscribe:

Your data is transferred to Mailchimp

Mailchimp processes data on our behalf

You can unsubscribe at any time via the link in every email

We do not send marketing emails without explicit opt-in consent.

6. Cookies & Tracking

We use cookies for:

Analytics (Google Analytics)

Affiliate tracking (Amazon, CJ Affiliate, ClickBank)

Essential website functionality

Non-essential cookies are only activated after you provide consent via our cookie banner.

For more details, see our Cookie Policy.

7. Affiliate Tracking

We participate in affiliate programs including:

Amazon Associates

CJ Affiliate

ClickBank

These platforms may use cookies to track purchases and attribute commissions.

We do not receive access to your financial data.

8. Data Sharing

We may share limited data with:

Mailchimp

Google Analytics

Affiliate platforms

Website hosting providers

We do not sell your personal data.

9. International Transfers

Some third-party services may process data outside the UK.
Where this occurs, safeguards such as Standard Contractual Clauses are used.

10. Data Retention

We retain personal data:

Until you unsubscribe (newsletter)

As required for legal compliance

As necessary for business operations

11. Your Rights

Under UK GDPR, you have the right to:

Access your personal data

Request correction

Request deletion

Restrict processing

Object to processing

Withdraw consent

Lodge a complaint with the Information Commissioner’s Office (ICO)

To exercise rights:
Email: hello@vantedge.uk

12. Security

We implement reasonable technical and organisational measures to protect your data. However, no online transmission is 100% secure.

13. Changes to This Policy

We may update this Privacy Policy periodically. Continued use of the site indicates acceptance of changes.
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
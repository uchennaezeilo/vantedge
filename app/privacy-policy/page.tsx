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
          <p>Effective Date: [28 February, 2026]</p>
          <p>Last Updated: [4 March, 2026]</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">1. Who We Are</h2>
          <p>Vantedge is a UK-based sole trader business operated by:</p>
          <ul>
            <li>Uchenna Ezeilo</li>
            <li>Trading as: Vantedge</li>
            <li>Email: hello@vantedge.uk</li>
          </ul>
          <p>For the purposes of UK data protection law, Vantedge is the Data Controller of your personal data.</p>
          <p>This policy complies with:</p>
          <ul>
            <li>UK General Data Protection Regulation (UK GDPR)</li>
            <li>Data Protection Act 2018</li>
            <li>Privacy and Electronic Communications Regulations (PECR)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">2. Information We Collect</h2>
          <h3 className="text-xl font-bold mt-6 mb-3 text-zinc-900 dark:text-zinc-100">2.1 Information You Provide</h3>
          <p>We may collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Information submitted via contact forms</li>
            <li>Newsletter subscription details</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-zinc-900 dark:text-zinc-100">2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may collect:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Referring URLs</li>
            <li>Interaction data</li>
          </ul>
          <p>This is collected via cookies and analytics tools.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">3. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Send newsletters and updates (if you opt in)</li>
            <li>Respond to enquiries</li>
            <li>Improve website performance</li>
            <li>Analyse user behaviour</li>
            <li>Manage affiliate tracking</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">4. Legal Basis for Processing</h2>
          <p>Under UK GDPR, we rely on:</p>

          <h4 className="text-lg font-semibold mt-4 mb-2 text-zinc-900 dark:text-zinc-100">Consent</h4>
          <p>For newsletters and marketing emails.</p>
          <h4 className="text-lg font-semibold mt-4 mb-2 text-zinc-900 dark:text-zinc-100">Legitimate Interest</h4>
          <p>For website analytics and improvements.</p>
          <h4 className="text-lg font-semibold mt-4 mb-2 text-zinc-900 dark:text-zinc-100">Legal Obligation</h4>
          <p>Where required by law.</p>

          <p>You may withdraw consent at any time.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">5. Email Marketing (Mailchimp)</h2>
          <p>We use Mailchimp as our email marketing provider. When you subscribe:</p>
          <ul>
            <li>Your data is transferred to Mailchimp</li>
            <li>Mailchimp processes data on our behalf</li>
            <li>You can unsubscribe at any time via the link in every email</li>
          </ul>
          <p>We do not send marketing emails without explicit opt-in consent.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">6. Cookies & Tracking</h2>
          <p>We use cookies for:</p>
          <ul>
            <li>Analytics (Google Analytics)</li>
            <li>Affiliate tracking (Amazon, CJ Affiliate, ClickBank)</li>
            <li>Essential website functionality</li>
          </ul>
          <p>Non-essential cookies are only activated after you provide consent via our cookie banner.</p>
          <p>For more details, see our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">7. Affiliate Tracking</h2>
          <p>We participate in affiliate programs including:</p>
          <ul>
            <li>Amazon Associates</li>
            <li>CJ Affiliate</li>
            <li>ClickBank</li>
          </ul>
          <p>These platforms may use cookies to track purchases and attribute commissions.</p>
          <p>We do not receive access to your financial data.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">8. Data Sharing</h2>
          <p>We may share limited data with:</p>
          <ul>
            <li>Mailchimp</li>
            <li>Google Analytics</li>
            <li>Affiliate platforms</li>
            <li>Website hosting providers</li>
          </ul>
          <p>We do not sell your personal data.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">9. International Transfers</h2>
          <p>Some third-party services may process data outside the UK. Where this occurs, safeguards such as Standard Contractual Clauses are used.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">10. Data Retention</h2>
          <p>We retain personal data:</p>
          <ul>
            <li>Until you unsubscribe (newsletter)</li>
            <li>As required for legal compliance</li>
            <li>As necessary for business operations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">11. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction</li>
            <li>Request deletion</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
            <li>Lodge a complaint with the Information Commissioner’s Office (ICO)</li>
          </ul>
          <p>To exercise these rights, please email us at: <a href="mailto:hello@vantedge.uk" className="text-blue-600 hover:underline">hello@vantedge.uk</a></p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">12. Security</h2>
          <p>We implement reasonable technical and organisational measures to protect your data. However, no online transmission is 100% secure.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">13. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Continued use of the site indicates acceptance of changes.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us:
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
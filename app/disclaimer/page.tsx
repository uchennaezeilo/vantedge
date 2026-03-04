import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | Vantedge",
  description: "Disclaimer for Vantedge",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Vantedge</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <p className="mb-4">
          General Disclaimer

The information on vantedge.uk is provided for general informational purposes only.

We do not provide:

Medical advice

Legal advice

Financial advice

Professional services

Always seek qualified professional advice before making decisions.

Use of this website is at your own risk.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Disclaimer, please contact us:
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
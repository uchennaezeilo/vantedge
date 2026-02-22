import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Vantedge",
  description: "Get in touch with Vantedge",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Vantedge</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Phone</span>
            <a href="tel:+447557023397" className="text-blue-600 hover:underline text-lg">
              +44 7557 023397
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
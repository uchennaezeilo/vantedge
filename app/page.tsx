import Link from "next/link";
import { ProductCard } from "./components/ProductCard";
import { PRODUCTS } from "./lib/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Navigation Placeholder */}
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Vantedge</div>
          <nav className="hidden sm:flex gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/articles" className="hover:text-black dark:hover:text-white">Articles</Link>
            <a href="#" className="hover:text-black dark:hover:text-white">Reviews</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Comparisons</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Deals</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-5xl py-20 px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Discover the Best Products for Your Life and Business
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            We hunt down, test, and compare the top-rated products across Amazon, ClickBank, and beyond. From trending lifestyle essentials to exclusive digital solutions, get the honest truth before you buy.
          </p>
          
          {/* Affiliate Disclosure */}
          <div className="text-xs text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 py-2 px-4 rounded-full inline-block">
            Transparency: We may earn a commission when you buy through our links.
          </div>
        </section>

        {/* Featured Grid */}
        <section className="w-full max-w-5xl px-6 py-10">
          <h2 className="text-2xl font-semibold mb-6">Explore Our Top Picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                href={product.href}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Vantedge. All rights reserved.
          </div>
          <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/privacy-policy" className="hover:text-black dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

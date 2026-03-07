import Link from "next/link";
import type { Metadata } from "next";
import { ALL_PRODUCTS } from "../lib/products-new";

export const metadata: Metadata = {
  title: "Products | Vantedge",
  description: "Browse our collection of expert-reviewed products across multiple categories. Find the perfect product with our honest recommendations.",
  openGraph: {
    title: "Products | Vantedge",
    description: "Browse our collection of expert-reviewed products across multiple categories.",
    type: "website",
  },
};

export default function ProductsPage() {
  // Get unique categories
  const categories = [...new Set(ALL_PRODUCTS.map((p) => p.category))];
  
  // Group products by category
  const productsByCategory = categories.reduce((acc, category) => {
    acc[category] = ALL_PRODUCTS.filter((p) => p.category === category);
    return acc;
  }, {} as Record<string, typeof ALL_PRODUCTS>);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Vantedge
          </Link>
          <nav className="hidden sm:flex gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/articles" className="hover:text-black dark:hover:text-white">
              Articles
            </Link>
            <Link href="/products" className="text-black dark:text-white font-semibold">
              Products
            </Link>
            <a href="#" className="hover:text-black dark:hover:text-white">
              Reviews
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              Deals
            </a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-5xl py-16 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Expert Product Reviews & Recommendations
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Discover carefully curated products across multiple categories. We test, review, and recommend only the best items to help you make informed purchasing decisions.
          </p>
          
          {/* Affiliate Disclosure */}
          <div className="text-xs text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 py-2 px-4 rounded-full inline-block">
            Transparency: We may earn a commission when you buy through our links.
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full bg-white dark:bg-zinc-900 border-t border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products/${category}`}
                  className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white hover:shadow-md transition-all text-center"
                >
                  <div className="text-3xl mb-2">
                    {category === "jewelry" && "💎"}
                    {category === "games" && "🎮"}
                  </div>
                  <h3 className="font-semibold capitalize group-hover:text-black dark:group-hover:text-white transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {productsByCategory[category]?.length || 0} products
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products by Category */}
        {categories.map((category) => (
          <section key={category} className="w-full max-w-5xl px-6 py-12 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold capitalize">{category} Products</h2>
              <Link
                href={`/products/${category}`}
                className="text-sm font-semibold text-black dark:text-white hover:underline"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsByCategory[category]?.slice(0, 3).map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.category}/${product.slug}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                      />
                    )}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
                        {product.excerpt}
                      </p>
                      {product.date && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-500">
                          {product.date}
                        </p>
                      )}
                      <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                        <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Read Review →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import { ALL_PRODUCTS, getProductsByCategory } from "../../lib/products-new";

export function generateStaticParams() {
  const categories = [...new Set(ALL_PRODUCTS.map((p) => p.category))];
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}): Promise<Metadata> {
  const { category } = await params;
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${capitalizedCategory} Products | Vantedge`,
    description: `Browse our collection of ${category} products with expert reviews and recommendations.`,
    openGraph: {
      title: `${capitalizedCategory} Products`,
      description: `Browse our collection of ${category} products with expert reviews and recommendations.`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category } = await params;
  const products = getProductsByCategory(category);
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <Navigation />

      <main className="flex flex-col items-center w-full">
        {/* Breadcrumb */}
        <section className="w-full max-w-5xl px-6 py-4 text-sm">
          <nav className="flex gap-2 text-zinc-600 dark:text-zinc-400">
            <Link href="/products" className="hover:text-black dark:hover:text-white">
              Products
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-zinc-100 capitalize">{category}</span>
          </nav>
        </section>

        {/* Category Header */}
        <section className="w-full max-w-5xl py-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {capitalizedCategory} Products
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Explore our handpicked collection of {category.toLowerCase()} with expert reviews and honest recommendations to help you find the perfect product.
          </p>
        </section>

        {/* Products Grid */}
        <section className="w-full max-w-5xl px-6 py-10">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-4">
                No products found in this category yet.
              </p>
              <Link href="/products" className="text-black dark:text-white font-semibold hover:underline">
                Browse all products →
              </Link>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

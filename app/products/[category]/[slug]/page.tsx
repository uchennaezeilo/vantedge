import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "../../../components/Navigation";
import { ALL_PRODUCTS, getProductContent } from "../../../lib/products-new";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = ALL_PRODUCTS.find(
    (p) => p.category.toLowerCase() === category.toLowerCase() && p.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      type: "article",
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}) {
  const { category, slug } = await params;
  const product = ALL_PRODUCTS.find(
    (p) => p.category.toLowerCase() === category.toLowerCase() && p.slug === slug
  );

  if (!product) {
    notFound();
  }

  const content = getProductContent(product.category, product.slug);

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
            <Link href={`/products/${category}`} className="hover:text-black dark:hover:text-white capitalize">
              {category}
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-zinc-100">{product.title}</span>
          </nav>
        </section>

        {/* Product Header */}
        <section className="w-full max-w-5xl py-12 px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            {product.image && (
              <div className="md:w-1/3 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-lg shadow-md object-cover aspect-square"
                />
              </div>
            )}

            {/* Product Info */}
            <div className={product.image ? "md:w-2/3" : "w-full"}>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300 capitalize">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                {product.title}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                {product.description}
              </p>
              {product.date && (
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-6">
                  Posted on {product.date}
                </p>
              )}
              
              {/* Affiliate Button */}
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                View on Amazon
              </a>

              {/* Disclosure */}
              <div className="mt-6 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Transparency:</strong> We may earn a commission when you purchase through our affiliate links, at no extra cost to you.
              </div>
            </div>
          </div>
        </section>

        {/* Product Content */}
        <section className="w-full max-w-5xl px-6 py-10 prose prose-zinc dark:prose-invert max-w-none">
          <div
            className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>

        {/* Related Products */}
        <section className="w-full max-w-5xl px-6 py-10 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold mb-6">More {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ALL_PRODUCTS.filter(
              (p) => p.category.toLowerCase() === product.category.toLowerCase() && p.slug !== product.slug
            ).map((relatedProduct) => (
              <Link
                key={relatedProduct.slug}
                href={`/products/${relatedProduct.category}/${relatedProduct.slug}`}
                className="group"
              >
                <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {relatedProduct.image && (
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                      {relatedProduct.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

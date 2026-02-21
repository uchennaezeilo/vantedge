import { getProduct } from "@/app/lib/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${product.title} Review | Vantedge`,
    description: product.description,
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Vantedge</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">{product.description}</p>
        
        <div className="prose dark:prose-invert mb-10 text-lg leading-relaxed">
          <p>{product.content}</p>
        </div>

        <div className="flex gap-4">
            <a 
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Check Price / Get Deal
            </a>
        </div>
      </main>
    </div>
  );
}
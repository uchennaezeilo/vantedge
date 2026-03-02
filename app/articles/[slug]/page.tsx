import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_ARTICLES } from "../../lib/articles";

export function generateStaticParams() {
  return ALL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ALL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Vantedge</Link>
          <nav className="hidden sm:flex gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/articles" className="text-black dark:text-white font-semibold">Articles</Link>
            <a href="#" className="hover:text-black dark:hover:text-white">Reviews</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Comparisons</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Deals</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 w-full">
        <div className="mb-8">
          <Link href="/articles" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-4 inline-block">
            &larr; Back to Articles
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{article.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            <span className="font-medium text-zinc-900 dark:text-zinc-300">{article.category}</span>
            <span>{article.date}</span>
          </div>

          <div className="text-xs text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 py-2 px-4 rounded-full inline-block mb-8">
            To help us provide you with free unbiased expert advice, we may earn a commission if you buy through links on our site.
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-lg text-zinc-600 dark:text-zinc-300">{article.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
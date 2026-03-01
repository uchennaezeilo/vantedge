import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ALL_ARTICLES } from "../../lib/articles";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const article = ALL_ARTICLES.find((article) => article.slug === slug);

  // If the article doesn't exist in our data, show a 404 page
  // For this demo, if the slug isn't found, we'll show a generic placeholder so links work.
  const displayArticle = article || {
    title: "Sample Article: " + slug.replace(/-/g, ' '),
    category: "General",
    date: "Today",
    content: `<p class="text-lg">This is a placeholder for the article <strong>${slug}</strong>. In a real application, you would fetch this content from your database.</p>`
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.png" alt="Vantedge Logo" width={32} height={32} />
            <span>Vantedge</span>
          </Link>
          <nav className="hidden sm:flex gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/articles" className="text-black dark:text-white font-semibold">Articles</Link>
            <a href="#" className="hover:text-black dark:hover:text-white">Reviews</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Comparisons</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Deals</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 w-full">
        <div className="mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
            <Link href="/articles" className="hover:underline">Articles</Link>
            <span>/</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-300">{displayArticle.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{displayArticle.title}</h1>
          <p className="text-zinc-500">{displayArticle.date}</p>
        </div>

        <article className="prose dark:prose-invert max-w-none">
         {/* We use dangerouslySetInnerHTML to render the HTML content string */}
          <div dangerouslySetInnerHTML={{ __html: displayArticle.content }} />
       </article>
      </main>
    </div>
  );
}

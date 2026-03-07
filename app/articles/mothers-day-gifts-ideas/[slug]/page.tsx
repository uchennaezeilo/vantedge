import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { ALL_ARTICLES } from "../../../lib/articles";
import RelatedArticles from "../../../components/RelatedArticles";

export function generateStaticParams() {
  return ALL_ARTICLES.map((article: any) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ALL_ARTICLES.find((a: any) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100">
      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="mb-8">
          <Link href="/articles" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-4 inline-block">
            &larr; Back to Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-2">
            {article.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded mb-6"
              />
            )}

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
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </div>

          {/* Sidebar with Related Articles */}
          <div className="lg:col-span-1">
            <RelatedArticles
              currentArticleId={article.id}
              currentCategory={article.category}
              allArticles={ALL_ARTICLES}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
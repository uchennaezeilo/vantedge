import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  image: string;
}

interface RelatedArticlesProps {
  currentArticleId: number;
  currentCategory: string;
  allArticles: Article[];
}

export default function RelatedArticles({
  currentArticleId,
  currentCategory,
  allArticles,
}: RelatedArticlesProps) {
  const relatedArticles = allArticles
    .filter(
      (article) =>
        article.id !== currentArticleId && article.category === currentCategory
    )
    .slice(0, 4);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <aside className="space-y-6">
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          Related Articles
        </h3>
        
        <div className="space-y-4">
          {relatedArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/mothers-day-gifts-ideas/${article.slug}`}
              className="block group"
            >
              <div className="flex gap-3">
                {article.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-16 h-16 object-cover rounded flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {article.category}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

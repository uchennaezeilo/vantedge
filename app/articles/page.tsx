import Link from "next/link";

const ARTICLES = [
  {
    id: 1,
    title: "The Future of AI in 2024",
    excerpt: "Explore the emerging trends and technologies shaping the artificial intelligence landscape this year.",
    category: "Technology",
    date: "October 15, 2023",
    slug: "future-of-ai-2024",
  },
  {
    id: 2,
    title: "Top 10 Productivity Tools for Remote Teams",
    excerpt: "Boost your team's efficiency with these essential software solutions designed for remote collaboration.",
    category: "Business",
    date: "November 2, 2023",
    slug: "top-10-productivity-tools",
  },
  {
    id: 3,
    title: "Understanding Quantum Computing",
    excerpt: "A beginner-friendly guide to the complex world of quantum mechanics and computing power.",
    category: "Science",
    date: "November 20, 2023",
    slug: "understanding-quantum-computing",
  },
  {
    id: 4,
    title: "Sustainable Tech: Green Gadgets",
    excerpt: "How eco-friendly technology is changing the way we consume electronics.",
    category: "Lifestyle",
    date: "December 5, 2023",
    slug: "sustainable-tech-green-gadgets",
  },
  {
    id: 5,
    title: "The Rise of Smart Homes",
    excerpt: "Automating your living space has never been easier with these new smart home devices.",
    category: "Technology",
    date: "December 12, 2023",
    slug: "rise-of-smart-homes",
  },
  {
    id: 6,
    title: "Digital Nomad Lifestyle Guide",
    excerpt: "Everything you need to know about working remotely while traveling the world.",
    category: "Travel",
    date: "January 8, 2024",
    slug: "digital-nomad-guide",
  },
];

export default function ArticlesPage() {
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

      <main className="max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Articles</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Latest news, guides, and insights from our team.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.slug}`}
              className="group block p-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 mb-3">
                <span className="font-medium text-zinc-900 dark:text-zinc-300">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

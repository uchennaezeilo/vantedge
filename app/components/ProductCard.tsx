
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export function ProductCard({ title, description, href, image }: ProductCardProps) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 bg-white dark:bg-zinc-900 hover:shadow-lg transition-shadow">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
      ) : (
        <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded mb-4 flex items-center justify-center text-zinc-400">
          Product Image
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        {description}
      </p>
      <Link href={href} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
        Read more &rarr;
      </Link>
    </div>
  );
}

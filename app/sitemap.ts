import { MetadataRoute } from 'next'
import { PRODUCTS } from './lib/products'
import { ALL_ARTICLES } from './lib/articles'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = PRODUCTS.map((product) => ({
    url: `https://vantedge.uk/reviews/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const articleUrls = ALL_ARTICLES.map((article) => ({
    url: `https://vantedge.uk/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://vantedge.uk', 
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...articleUrls,
    ...productUrls,
  ]
}

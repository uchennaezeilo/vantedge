import { MetadataRoute } from 'next'
import { PRODUCTS } from './lib/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = PRODUCTS.map((product) => ({
    url: `https://vantedge.com/reviews/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://vantedge.com', // Replace with your actual domain
     lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
   },
    ...productUrls,
  ]
}

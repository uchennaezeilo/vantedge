import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vantedge.com', // Replace with your actual domain
     lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
   },
    // You can add more static routes here, or fetch dynamic routes from a database
  ]
}

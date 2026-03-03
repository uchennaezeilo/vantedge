export interface Product {
  slug: string;
  title: string;
  description: string;
  href: string;
  affiliateLink: string;
  content: string;
  image?: string;
}

export const PRODUCTS: Product[] = [
 {
    slug: "articles/ai-revolution-preparing-for-tomorrow",
    title: "The AI Revolution: Preparing for Tomorrow Today",
    description: "The march of artificial intelligence (AI) is accelerating, reshaping work, learning and daily life. Governments and experts warn that AI will touch nearly every field.",
    href: "/articles/ai-revolution-preparing-for-tomorrow",
    affiliateLink: "https://example.com/buy/ai-revolution",
    content: "This is a detailed review of The AI Revolution: Preparing for Tomorrow Today. It has great features for understanding AI trends, preparing for job changes, and leveraging new tools. We found the content to be comprehensive and the insights valuable for anyone looking to stay ahead in the AI-driven world.",
    image: "/images/AI-Revolution.jpg",
  },
  {
    slug: "spring-weight-loss-guide",
    title: "Spring Health: Weight Loss and Fitness Guide",
    description: "Spring’s warmer days and longer light offer a perfect opportunity to kickstart healthier habits.",
    href: "/articles/spring-weight-loss-guide",
    affiliateLink: "https://amazon.com/dp/example",
    content: "Spring’s warmer days and longer light offer a perfect opportunity to kickstart healthier habits. Losing excess weight and getting fitter can yield major health benefits, including improved heart health, better sleep, and increased energy. This guide provides practical tips for weight loss, including diet recommendations, exercise routines, and lifestyle changes to help you achieve your health goals this spring.",
    image: "/images/Spring-fitness.jpg",
  },
  {
    slug: "hosting-service-y",
    title: "Hosting Service Y",
    description: "Speed tests and uptime monitoring results for this popular host.",
    href: "/reviews/hosting-service-y",
    affiliateLink: "https://hosting-y.com/ref/vantedge",
    content: "We monitored Hosting Service Y for 30 days. The uptime was 99.99% and the server response time averaged 200ms. Customer support responded to our ticket within 15 minutes.",
    image: "/images/Product-review.jpg",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
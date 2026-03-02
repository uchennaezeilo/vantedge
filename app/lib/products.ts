export interface Product {
  slug: string;
  title: string;
  description: string;
  href: string;
  affiliateLink: string;
  content: string;
}

export const PRODUCTS: Product[] = [
 {
    slug: "articles/ai-revolution-preparing-for-tomorrow",
    title: "The AI Revolution: Preparing for Tomorrow Today",
    description: "The march of artificial intelligence (AI) is accelerating, reshaping work, learning and daily life. Governments and experts warn that AI will touch nearly every field.",
    href: "/articles/ai-revolution-preparing-for-tomorrow",
    affiliateLink: "https://example.com/buy/ai-revolution",
    content: "This is a detailed review of The AI Revolution: Preparing for Tomorrow Today. It has great features for understanding AI trends, preparing for job changes, and leveraging new tools. We found the content to be comprehensive and the insights valuable for anyone looking to stay ahead in the AI-driven world.",
  },
  {
    slug: "gadget-pro-x",
    title: "Gadget Pro X",
    description: "A comprehensive look at the features that make this gadget stand out.",
    href: "/reviews/gadget-pro-x",
    affiliateLink: "https://amazon.com/dp/example",
    content: "Gadget Pro X is the latest innovation in tech. It features a 5000mAh battery, OLED display, and a rugged design. In our stress tests, it survived drops from 5 feet without a scratch.",
  },
  {
    slug: "hosting-service-y",
    title: "Hosting Service Y",
    description: "Speed tests and uptime monitoring results for this popular host.",
    href: "/reviews/hosting-service-y",
    affiliateLink: "https://hosting-y.com/ref/vantedge",
    content: "We monitored Hosting Service Y for 30 days. The uptime was 99.99% and the server response time averaged 200ms. Customer support responded to our ticket within 15 minutes.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
import { content as vintageGoldBraceletContent } from "./products/jewelry/vintage-gold-bracelet";
import { content as pearlNecklaceSetContent } from "./products/jewelry/pearl-necklace-set";
import { content as strategyBoardGameContent } from "./products/games/strategy-board-game";
import { content as puzzleCollectionContent } from "./products/games/puzzle-collection";

export interface Product {
  slug: string;
  category: string;
  title: string;
  description: string;
  excerpt: string;
  affiliateLink: string;
  image?: string;
  date?: string;
}

export const ALL_PRODUCTS: Product[] = [
  // Jewelry category
  {
    slug: "vintage-gold-bracelet",
    category: "jewelry",
    title: "Vintage Gold Bracelet: Timeless Elegance Review",
    description: "Discover why this vintage-inspired gold bracelet is a must-have jewelry piece for any collection.",
    excerpt: "A stunning vintage-inspired gold bracelet combining timeless design with modern comfort. Perfect for everyday wear or special occasions.",
    affiliateLink: "https://amazon.com/dp/example-jewelry-1",
    image: "/images/jewelry-1.jpg",
    date: "March 2024",
  },
  {
    slug: "pearl-necklace-set",
    category: "jewelry",
    title: "Pearl Necklace Set: Classic Beauty Review",
    description: "Find out why pearl necklaces remain a jewelry staple for formal events and everyday elegance.",
    excerpt: "A sophisticated pearl necklace set with matching earrings. Perfect for weddings, formal events, or timeless everyday elegance.",
    affiliateLink: "https://amazon.com/dp/example-jewelry-2",
    image: "/images/jewelry-2.jpg",
    date: "March 2024",
  },

  // Games category
  {
    slug: "strategy-board-game",
    category: "games",
    title: "Epic Strategy Board Game: Full Review",
    description: "A comprehensive review of one of the most engaging strategy board games for groups and families.",
    excerpt: "An award-winning strategy board game that provides hours of engaging gameplay for 2-6 players. Perfect for game nights and family gatherings.",
    affiliateLink: "https://amazon.com/dp/example-game-1",
    image: "/images/game-1.jpg",
    date: "February 2024",
  },
  {
    slug: "puzzle-collection",
    category: "games",
    title: "1000-Piece Puzzle Collection: Beauty & Challenge",
    description: "A detailed review of premium 1000-piece puzzles that provide both visual beauty and engaging challenges.",
    excerpt: "A sophisticated 1000-piece puzzle featuring breathtaking artwork. Perfect for puzzle enthusiasts and a great way to unwind.",
    affiliateLink: "https://amazon.com/dp/example-game-2",
    image: "/images/game-2.jpg",
    date: "February 2024",
  },
];

// Content mapping for dynamic imports
const CONTENT_MAP: Record<string, string> = {
  "jewelry/vintage-gold-bracelet": vintageGoldBraceletContent,
  "jewelry/pearl-necklace-set": pearlNecklaceSetContent,
  "games/strategy-board-game": strategyBoardGameContent,
  "games/puzzle-collection": puzzleCollectionContent,
};

export function getProductContent(category: string, slug: string): string {
  return CONTENT_MAP[`${category}/${slug}`] || "";
}

export function getAllProducts(): Product[] {
  return ALL_PRODUCTS;
}

export function getProductsByCategory(category: string): Product[] {
  return ALL_PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getProduct(category: string, slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.category.toLowerCase() === category.toLowerCase() && p.slug === slug);
}

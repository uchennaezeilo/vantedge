// Sorted imports for better readability and maintenance.
import { content as affordableMothersDayGiftsContent } from "./articles/mothers-day-gift-articles/affordable-mothers-day-gifts-under-50";
import { content as aiRevolutionContent } from "./articles/ai-revolution-preparing-for-tomorrow";
import { content as bestMothersDayGiftsForFitnessMumsContent } from "./articles/mothers-day-gift-articles/best-mothers-day-gifts-for-fitness-loving-mums";
import { content as bestMothersDayGiftsForGardeningMumsContent } from "./articles/mothers-day-gift-articles/best-mothers-day-gifts-for-gardening-mums";
import { content as bestMothersDayGiftsForGrandmaContent } from "./articles/mothers-day-gift-articles/best-mothers-day-gifts-for-grandma";
import { content as bestMothersDayGiftsForNewMumsContent } from "./articles/mothers-day-gift-articles/best-mothers-day-gifts-for-new-mums";
import { content as bestMothersDayGiftsForTechSavvyMumsContent } from "./articles/mothers-day-gift-articles/best-mothers-day-gifts-for-tech-savvy-mums";
import { content as bestMothersDayGiftsInTheUKContent } from "./articles/mothers-day-gift-articles/best-mothers-day-gifts-in-the-uk-2026";
import { content as digitalNomadContent } from "./articles/digital-nomad-guide";
import { content as futureOfAiContent } from "./articles/future-of-ai-2024";
import { content as greenGadgetsContent } from "./articles/sustainable-tech-green-gadgets";
import { content as lastMinuteMothersDayGiftsContent } from "./articles/mothers-day-gift-articles/last-minute-mothers-day-gifts-that-still-impress";
import { content as quantumComputingContent } from "./articles/understanding-quantum-computing";
import { content as smartHomesContent } from "./articles/rise-of-smart-homes";
import { content as springFitnessContent } from "./articles/spring-fitness-exercise-tips";
import { content as springWeightLossContent } from "./articles/spring-weight-loss-guide";
import { content as techGiftsForMumContent } from "./articles/mothers-day-gift-articles/tech-gifts-for-mum-on-mothers-day";
import { content as top10ProductivityContent } from "./articles/top-10-productivity-tools";
import { content as twentyFiveThoughtfulMothersDayGiftsContent } from "./articles/mothers-day-gift-articles/25-thoughtful-mothers-day-gifts-she-will-love";
import { content as uniqueMothersDayGiftIdeasContent } from "./articles/mothers-day-gift-articles/unique-mothers-day-gift-ideas";
import { content as wellnessGiftsForMumContent } from "./articles/mothers-day-gift-articles/wellness-gifts-for-mum-on-mothers-day";

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  content: string;
  image: string;
}

export const ALL_ARTICLES: Article[] = [
  {
    id: 1,
    title: "The Future of AI in 2024",
    excerpt: "Explore the emerging trends and technologies shaping the artificial intelligence landscape this year.",
    category: "Technology",
    date: "October 15, 2023",
    slug: "future-of-ai-2024",
    content: futureOfAiContent,
    image: "/images/AI-Revolution.jpg"
  },
  {
    id: 2,
    title: "Top 10 Productivity Tools for Remote Teams",
    excerpt: "Boost your team's efficiency with these essential software solutions designed for remote collaboration.",
    category: "Business",
    date: "November 2, 2023",
    slug: "top-10-productivity-tools",
    content: top10ProductivityContent,
    image: "/images/AI-Revolution.jpg"
  },
  {
    id: 3,
    title: "Understanding Quantum Computing",
    excerpt: "A beginner-friendly guide to the complex world of quantum mechanics and computing power.",
    category: "Science",
    date: "November 20, 2023",
    slug: "understanding-quantum-computing",
    content: quantumComputingContent,
    image: "/images/AI-Revolution.jpg"
  },
  {
    id: 4,
    title: "Sustainable Tech: Green Gadgets",
    excerpt: "How eco-friendly technology is changing the way we consume electronics.",
    category: "Lifestyle",
    date: "December 5, 2023",
    slug: "sustainable-tech-green-gadgets",
    content: greenGadgetsContent,
    image: "/images/AI-Revolution.jpg"
  },
  {
    id: 5,
    title: "The Rise of Smart Homes",
    excerpt: "Automating your living space has never been easier with these new smart home devices.",
    category: "Technology",
    date: "December 12, 2023",
    slug: "rise-of-smart-homes",
    content: smartHomesContent,
    image: "/images/AI-Revolution.jpg"
  },
  {
    id: 6,
    title: "Digital Nomad Lifestyle Guide",
    excerpt: "Everything you need to know about working remotely while traveling the world.",
    category: "Travel",
    date: "January 8, 2024",
    slug: "digital-nomad-guide",
    content: digitalNomadContent,
    image: "/images/AI-Revolution.jpg"
  },
  {
    id: 7,
    title: "Spring Health: Weight Loss and Fitness Guide",
    excerpt: "Spring’s warmer days and longer light offer a perfect opportunity to kickstart healthier habits. Losing excess weight and getting fitter can yield major health benefits",
    category: "Health",
    date: "March 1, 2026",
    slug: "spring-weight-loss-guide",
    content: springWeightLossContent,
    image: "/images/Spring-fitness.jpg"
  },
  {
    id: 8,
    title: "Spring Fitness: Exercise Tips & Gear",
    excerpt: "With weight loss on track, boosting overall fitness completes the picture. Regular exercise strengthens your heart, muscles and mood.",
    category: "Fitness",
    date: "March 8, 2026",
    slug: "spring-fitness-exercise-tips",
    content: springFitnessContent,
    image: "/images/Spring-fitness.jpg"
  },
  {
    id: 9,
    title: "The AI Revolution: Preparing for Tomorrow Today",
    excerpt: "The march of artificial intelligence (AI) is accelerating, reshaping work, learning and daily life. Governments and experts warn that AI will touch nearly every field.",
    category: "Technology",
    date: "Mar 2, 2026",
    slug: "ai-revolution-preparing-for-tomorrow",
    content: aiRevolutionContent,
    image: "/images/AI-Revolution.jpg"
  },
  {
    id: 10,
    title: "25 Thoughtful Mother’s Day Gifts She Will Love",
    excerpt: "... you know your mum best, so pick ones that match her style and passions.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "25-thoughtful-mothers-day-gifts-she-will-love",
    content: twentyFiveThoughtfulMothersDayGiftsContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 11,
    title: "Affordable Mother’s Day Gifts Under £50",
    excerpt: "An affordable present with personal meaning can be more touching than something pricey.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "affordable-mothers-day-gifts-under-50",
    content: affordableMothersDayGiftsContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 12,
    title: "Best Mother’s Day Gifts for Fitness-Loving Mums",
    excerpt: "You admire her dedication to staying strong and energetic – now show her that you support her goals and wellbeing",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "best-mothers-day-gifts-for-fitness-loving-mums",
    content: bestMothersDayGiftsForFitnessMumsContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 13,
    title: "Best Mother’s Day Gifts for Grandma",
    excerpt: "Grandmothers hold a special place in our hearts as pillars of wisdom, love, and family tradition.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "best-mothers-day-gifts-for-grandma",
    content: bestMothersDayGiftsForGrandmaContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 14,
    title: "Best Mother’s Day Gifts for Gardening Mums",
    excerpt: "For the green-thumbed mum in your life, these thoughtful gifts will inspire her passion for plants and nature.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "best-mothers-day-gifts-for-gardening-mums",
    content: bestMothersDayGiftsForGardeningMumsContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 15,
    title: "Best Mother’s Day Gifts for New Mums",
    excerpt: ".... this Mother’s Day she deserves love and support more than ever",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "best-mothers-day-gifts-for-new-mums",
    content: bestMothersDayGiftsForNewMumsContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 16,
    title: "Best Mother's Day Gifts for Tech-Savvy Mums",
    excerpt: "Modern mums often juggle careers, families, and social lives – and they rely on technology to do it all.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "best-mothers-day-gifts-for-tech-savvy-mums",
    content: bestMothersDayGiftsForTechSavvyMumsContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 17,
    title: "Best Mother’s Day Gifts in the UK 2026",
    excerpt: "What’s trending? Traditional gestures remain cherished: greeting cards, flowers and family meals top the wish-list",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "best-mothers-day-gifts-in-the-uk-2026",
    content: bestMothersDayGiftsInTheUKContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 18,
    title: "Last-Minute Mother’s Day Gifts that Still Impress",
    excerpt: "Looking for last-minute Mother’s Day gifts? Discover options that are sure to make her feel loved and appreciated.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "last-minute-mothers-day-gifts-that-still-impress",
    content: lastMinuteMothersDayGiftsContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 19,
    title: "Tech Gifts for Mum on Mother's Day",
    excerpt: "Looking for tech gifts for mum this Mother's Day? Discover gadgets and devices that tech-savvy mums will love.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "tech-gifts-for-mum-on-mothers-day",
    content: techGiftsForMumContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 20,
    title: "Unique Mother’s Day Gift Ideas",
    excerpt: "Looking for something different? These unique Mother’s Day gift ideas will make her feel truly special.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "unique-mothers-day-gift-ideas",
    content: uniqueMothersDayGiftIdeasContent,
    image: "/images/mothers-day.jpg"
  },
  {
    id: 21,
    title: "Wellness Gifts for Mum on Mother's Day",
    excerpt: "Looking for wellness gifts for mum this Mother's Day? Discover products that will help her relax and recharge.",
    category: "MothersDay",
    date: "March 6, 2026",
    slug: "wellness-gifts-for-mum-on-mothers-day",
    content: wellnessGiftsForMumContent,
    image: "/images/mothers-day.jpg"
  },


];
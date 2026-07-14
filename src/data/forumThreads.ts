export interface ForumThread {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  replies: number;
  views: number;
  content: string;
}

export const forumThreads: ForumThread[] = [
  {
    id: "1",
    title: "Best Insulation for Cold Climates",
    author: "VanLifeNewbie",
    date: "July 1, 2026",
    category: "Van Modifications",
    replies: 12,
    views: 245,
    content: `
      Hi everyone! I'm new to van life and planning to travel through Canada this winter. What's the best insulation for cold climates? I've heard good things about spray foam, but I'm open to suggestions. Thanks!
    `,
  },
  {
    id: "2",
    title: "Looking for Travel Buddies in Europe",
    author: "WanderlustVan",
    date: "July 5, 2026",
    category: "Travel",
    replies: 8,
    views: 189,
    content: `
      Hello! I'll be traveling through Europe in my van starting next month. Is anyone else planning a similar trip? It would be great to meet up and share the journey. Let me know if you're interested!
    `,
  },
  {
    id: "3",
    title: "Solar Panel Recommendations",
    author: "EcoVan",
    date: "July 8, 2026",
    category: "DIY Projects",
    replies: 15,
    views: 312,
    content: `
      I'm looking to install solar panels on my van. Does anyone have recommendations for brands or setups? I want something reliable but not too expensive. Thanks in advance!
    `,
  },
  {
    id: "4",
    title: "How to Find Free Camping Spots",
    author: "BudgetTraveler",
    date: "July 10, 2026",
    category: "Budget Travel",
    replies: 22,
    views: 456,
    content: `
      Does anyone have tips for finding free camping spots? I'm trying to save money on my road trip and would love some advice. Thanks!
    `,
  },
  {
    id: "5",
    title: "Van Life Safety Tips",
    author: "SafetyFirst",
    date: "July 12, 2026",
    category: "Safety",
    replies: 10,
    views: 203,
    content: `
      I'm new to van life and want to make sure I'm staying safe on the road. Does anyone have any safety tips they can share? Thanks!
    `,
  },
  {
    id: "6",
    title: "Best Routes in the Pacific Northwest",
    author: "NatureLover",
    date: "July 13, 2026",
    category: "Best Routes",
    replies: 7,
    views: 156,
    content: `
      I'll be traveling through the Pacific Northwest next month. Does anyone have recommendations for scenic routes? I'd love to see some of the best natural sights. Thanks!
    `,
  },
];

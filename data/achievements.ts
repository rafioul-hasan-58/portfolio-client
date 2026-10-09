import { AchievementItem } from "@/types";

// TODO: replace with my info
export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Regional Finalist – International Collegiate Programming Contest (ICPC)",
    award: "Rank 14th out of 180 teams",
    eventOrIssuer: "ICPC Asia Regional",
    year: "2023",
    link: "https://example.com/icpc-results",
    description: "Solved algorithmic challenges covering dynamic programming, graph theory, geometry, and number theory under strict 5-hour time constraints."
  },
  {
    id: "ach-2",
    title: "Champion – National Hackathon for Smart Solutions",
    award: "1st Place Winner",
    eventOrIssuer: "National Innovation Council",
    year: "2023",
    link: "https://example.com/hackathon-winner",
    description: "Developed an offline-first distributed emergency response system capable of peer-to-peer sync during network blackouts."
  },
  {
    id: "ach-3",
    title: "Dean's List Award for Academic Excellence",
    award: "Academic Honor",
    eventOrIssuer: "Faculty of Engineering",
    year: "2021 – 2024",
    description: "Awarded every consecutive academic semester for maintaining a GPA above 3.80."
  }
];

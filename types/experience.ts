export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string; // e.g. "July 2024 - Present"
  summary: string;
  bulletPoints?: string[];
  skills?: string[];
}

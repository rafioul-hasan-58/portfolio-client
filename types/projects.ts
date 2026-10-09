export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

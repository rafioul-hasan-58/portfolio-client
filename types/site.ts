export interface SeoMetadata {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  keywords?: string[];
}

export interface SiteConfig {
  name: string;
  handle?: string;
  title: string; // e.g. "Software Engineer"
  company?: string;
  bio: string[];
  avatar: string; // path to image e.g. "/images/avatar.svg"
  location: string;
  email: string;
  metadata: SeoMetadata;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  period: string;
  degree?: string;
  score?: string;
  websiteUrl: string;
  nodeCode?: string;
  type?: string;
  tagline?: string;
  description?: string;
  highlights?: string[];
}

export interface SkillItem {
  category: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  whatsappUrl?: string;
  linkedin: string; // Placeholder for link
  image: string;
  summary: string;
}

export interface LinkItem {
  platform: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  engine: string;
  image: string;
  summary: string;
  fullDescription: string;
  tags: string[];
  features: string[];
  playUrl: string;
  downloadUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Writing {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  link?: string;
}
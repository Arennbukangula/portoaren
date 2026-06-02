import { Project, Writing } from './types';

export const OWNER = {
  name: "Nama Kamu",
  role: "Your Role / Tagline",
  bio: "Deskripsi singkat tentang kamu.",
  email: "email@kamu.com",
  github: "https://github.com/Arennbukangula",
  linkedin: "https://linkedin.com/in/username",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Nama Proyek 1",
    description: "Deskripsi singkat proyek.",
    longDescription: "Deskripsi panjang yang menjelaskan proyek secara detail, tantangan, solusi, dan hasil yang dicapai.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "https://project-url.com",
    github: "https://github.com/username/project",
  },
  {
    id: 2,
    title: "Nama Proyek 2",
    description: "Deskripsi singkat proyek kedua.",
    longDescription: "Deskripsi panjang proyek kedua.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    technologies: ["Vue", "TailwindCSS", "Firebase"],
  },
];

export const writings: Writing[] = [
  {
    id: 1,
    title: "Judul Tulisan Pertama",
    excerpt: "Ringkasan singkat tulisan yang menarik pembaca untuk lanjut membaca.",
    content: "Konten lengkap tulisan pertama...",
    date: "2025-01-15",
    readTime: "5 min",
    link: "https://medium.com/@username/article-1",
  },
  {
    id: 2,
    title: "Judul Tulisan Kedua",
    excerpt: "Ringkasan singkat tulisan kedua.",
    content: "Konten lengkap tulisan kedua...",
    date: "2025-03-20",
    readTime: "8 min",
  },
];
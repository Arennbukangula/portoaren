# PLAN.md — Setup & Build Plan
**Project:** Personal Portfolio (Novelist Theme)  
**Total Batch:** 6 Batch  

---

## Prasyarat Sistem

Pastikan sudah terinstal sebelum mulai:

```bash
node --version   # minimal v18
npm --version    # minimal v9
git --version
```

Jika belum punya Node.js → download di https://nodejs.org (pilih LTS)

---

## BATCH 1 — Project Init & Konfigurasi Dasar
> **Tujuan:** Project bisa jalan di browser, Tailwind aktif, font sudah masuk  
> **Estimasi waktu:** 15–20 menit

### Langkah-langkah

**1.1 Buat project Vite + React + TypeScript**
```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install
```

**1.2 Install dependencies utama**
```bash
npm install framer-motion lucide-react
```

**1.3 Ganti seluruh isi `index.html`**  
Tambahkan Tailwind CDN, Google Fonts, dan Tailwind config custom:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[ Nama Kamu ] | Portfolio</title>

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">

  <!-- Tailwind Custom Config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            paper: '#0a0a0a',
            ink: '#f0f0f0',
            accent: '#404040',
            'ink-muted': '#888888',
          },
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'serif'],
            sans: ['"Inter"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          letterSpacing: {
            tightest: '-0.05em',
          },
        }
      }
    }
  </script>

  <style>
    body {
      background-color: #050505;
      color: #f0f0f0;
      overflow-x: hidden;
      touch-action: pan-y;
      cursor: none;
    }
    @media (pointer: coarse) {
      body { cursor: auto; }
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

**1.4 Hapus file bawaan yang tidak perlu**
```bash
rm src/App.css src/index.css
# Hapus juga isi src/assets/ jika tidak diperlukan
```

**1.5 Update `src/main.tsx`** — hapus import CSS bawaan:
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**1.6 Test awal — pastikan berjalan:**
```bash
npm run dev
# Buka http://localhost:5173
```

### ✅ Checklist Batch 1
- [✅] `npm run dev` berjalan tanpa error
- [✅] Background halaman hitam (`#050505`)
- [✅] Font Cormorant Garamond & Inter sudah ter-load (cek di DevTools → Network → Fonts)
- [✅] Tidak ada CSS error di console

---

## BATCH 2 — Types, Data & Language Context
> **Tujuan:** Fondasi data dan sistem multi-bahasa siap, sebelum buat UI apapun  
> **Estimasi waktu:** 20–30 menit

### Langkah-langkah

**2.1 Buat `src/types.ts`**
```typescript
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
```

**2.2 Buat `src/constants.ts`**  
Isi dengan data proyek dan tulisan kamu. Gunakan data dummy dulu:

```typescript
import { Project, Writing } from './types';

export const OWNER = {
  name: "Nama Kamu",
  role: "Your Role / Tagline",
  bio: "Deskripsi singkat tentang kamu.",
  email: "email@kamu.com",
  github: "https://github.com/username",
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
```

**2.3 Buat `src/LanguageContext.tsx`**
```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'id';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, id: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'id' : 'en');
  const t = (en: string, id: string) => lang === 'en' ? en : id;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
```

**2.4 Update `src/App.tsx`** sementara (placeholder):
```tsx
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="font-serif text-ink text-4xl p-8">
        Portfolio — Setup OK ✓
      </div>
    </LanguageProvider>
  );
}

export default App;
```

### ✅ Checklist Batch 2
- [ ] `types.ts` terbuat tanpa error TypeScript
- [ ] `constants.ts` terisi minimal 2 proyek & 2 tulisan
- [ ] `LanguageContext.tsx` terbuat
- [ ] Text "Portfolio — Setup OK ✓" tampil dengan font Cormorant Garamond di browser

---

## BATCH 3 — Komponen Section (Hero, About, Projects, Writings, Footer)
> **Tujuan:** Semua konten section selesai sebagai komponen mandiri  
> **Estimasi waktu:** 60–90 menit

Buat folder `src/components/` lalu buat setiap file berikut.

### Langkah-langkah

**3.1 Buat `src/components/Hero.tsx`**
```tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { OWNER } from '../constants';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="min-w-screen w-screen h-[100dvh] flex flex-col justify-between p-12 md:p-20 shrink-0 border-r border-accent">
      <div className="flex justify-between items-start">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs text-ink-muted tracking-widest uppercase"
        >
          {t('Portfolio', 'Portofolio')} — {new Date().getFullYear()}
        </motion.p>
      </div>

      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-7xl md:text-9xl font-light tracking-tightest leading-none text-ink mb-8"
        >
          {OWNER.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-sans text-ink-muted text-lg font-light max-w-md"
        >
          {OWNER.role}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-8"
      >
        <a href={OWNER.github} target="_blank" rel="noreferrer"
          className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">
          GitHub ↗
        </a>
        <a href={OWNER.linkedin} target="_blank" rel="noreferrer"
          className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">
          LinkedIn ↗
        </a>
        <a href={`mailto:${OWNER.email}`}
          className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">
          Email ↗
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
```

**3.2 Buat `src/components/About.tsx`**
```tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { OWNER } from '../constants';

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="min-w-screen w-screen h-[100dvh] flex flex-col justify-center p-12 md:p-20 shrink-0 border-r border-accent">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-xs text-ink-muted tracking-widest uppercase mb-12"
        >
          {t('About', 'Tentang')} — 02
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-7xl font-light tracking-tightest text-ink mb-10 leading-tight"
        >
          {t('Who I am.', 'Siapa saya.')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-ink-muted font-light leading-relaxed text-base md:text-lg"
        >
          {OWNER.bio}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
```

**3.3 Buat `src/components/Projects.tsx`**
```tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { projects } from '../constants';
import { Project } from '../types';

interface Props {
  onSelect: (project: Project) => void;
}

const Projects = ({ onSelect }: Props) => {
  const { t } = useLanguage();
  return (
    <section className="min-w-max h-[100dvh] flex flex-col justify-center px-12 md:px-20 shrink-0 border-r border-accent">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-mono text-xs text-ink-muted tracking-widest uppercase mb-12"
      >
        {t('Projects', 'Proyek')} — 03
      </motion.p>
      <div className="flex gap-8 items-start">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onSelect(project)}
            className="w-72 md:w-80 cursor-pointer group"
          >
            <div className="aspect-video bg-accent overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-ink transition-colors">
              {project.title}
            </h3>
            <p className="font-sans text-ink-muted text-sm font-light leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="font-mono text-xs text-ink-muted border border-accent px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
```

**3.4 Buat `src/components/Writings.tsx`**
```tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { writings } from '../constants';
import { Writing } from '../types';

interface Props {
  onSelect: (writing: Writing) => void;
}

const Writings = ({ onSelect }: Props) => {
  const { t } = useLanguage();
  return (
    <section className="min-w-screen w-screen h-[100dvh] flex flex-col justify-center p-12 md:p-20 shrink-0 border-r border-accent">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-mono text-xs text-ink-muted tracking-widest uppercase mb-12"
      >
        {t('Writings', 'Tulisan')} — 04
      </motion.p>
      <div className="flex flex-col gap-8 max-w-xl">
        {writings.map((writing, i) => (
          <motion.div
            key={writing.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onSelect(writing)}
            className="group cursor-pointer border-b border-accent pb-8"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-serif text-2xl text-ink font-light group-hover:text-ink-muted transition-colors">
                {writing.title}
              </h3>
              <span className="font-mono text-xs text-ink-muted ml-4 shrink-0">↗</span>
            </div>
            <p className="font-sans text-ink-muted text-sm font-light leading-relaxed mb-3">
              {writing.excerpt}
            </p>
            <div className="flex gap-4">
              <span className="font-mono text-xs text-ink-muted">{writing.date}</span>
              <span className="font-mono text-xs text-ink-muted">{writing.readTime} {t('read', 'baca')}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Writings;
```

**3.5 Buat `src/components/Footer.tsx`**
```tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { OWNER } from '../constants';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <section className="min-w-screen w-screen h-[100dvh] flex flex-col justify-between p-12 md:p-20 shrink-0">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-mono text-xs text-ink-muted tracking-widest uppercase"
      >
        {t('Contact', 'Kontak')} — 05
      </motion.p>

      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-6xl md:text-8xl font-light tracking-tightest text-ink mb-8 leading-none"
        >
          {t("Let's work\ntogether.", "Mari bekerja\nbersama.")}
        </motion.h2>
        <a
          href={`mailto:${OWNER.email}`}
          className="font-mono text-ink-muted hover:text-ink transition-colors text-sm cursor-pointer"
        >
          {OWNER.email} ↗
        </a>
      </div>

      <div className="flex justify-between items-end">
        <p className="font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {OWNER.name}
        </p>
        <div className="flex gap-6">
          <a href={OWNER.github} target="_blank" rel="noreferrer"
            className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">GitHub</a>
          <a href={OWNER.linkedin} target="_blank" rel="noreferrer"
            className="font-mono text-xs text-ink-muted hover:text-ink transition-colors cursor-pointer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
```

### ✅ Checklist Batch 3
- [ ] Semua 5 komponen section terbuat tanpa error TypeScript
- [ ] Data dari `constants.ts` tampil di komponen
- [ ] Hover state dan transisi warna bekerja

---

## BATCH 4 — Detail Overlay & Language Switch
> **Tujuan:** Interaksi klik item selesai, tombol ganti bahasa aktif  
> **Estimasi waktu:** 30–40 menit

**4.1 Buat `src/components/DetailOverlay.tsx`**
```tsx
import { motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project, Writing } from '../types';
import { useLanguage } from '../LanguageContext';

interface Props {
  item: Project | Writing;
  type: 'project' | 'writing' | null;
  onClose: () => void;
}

const isProject = (item: Project | Writing): item is Project => 'technologies' in item;

const DetailOverlay = ({ item, type, onClose }: Props) => {
  const { t } = useLanguage();
  const project = isProject(item) ? item : null;
  const writing = !isProject(item) ? item : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 overflow-y-auto"
    >
      <div className="max-w-3xl mx-auto p-12 md:p-20 min-h-screen flex flex-col">
        <div className="flex justify-between items-start mb-12">
          <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
            {type === 'project' ? t('Project Detail', 'Detail Proyek') : t('Writing', 'Tulisan')}
          </span>
          <button
            onClick={onClose}
            className="text-ink-muted hover:text-ink transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl font-light tracking-tightest text-ink mb-8 leading-tight"
        >
          {item.title}
        </motion.h1>

        {project && (
          <>
            {project.image && (
              <div className="aspect-video bg-accent overflow-hidden mb-8">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover grayscale" />
              </div>
            )}
            <p className="font-sans text-ink-muted font-light leading-relaxed mb-8">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map(tech => (
                <span key={tech} className="font-mono text-xs text-ink-muted border border-accent px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-ink hover:text-ink-muted transition-colors cursor-pointer">
                  <ExternalLink size={14} /> {t('Live Site', 'Lihat Live')}
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-ink hover:text-ink-muted transition-colors cursor-pointer">
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </>
        )}

        {writing && (
          <>
            <div className="flex gap-4 mb-8">
              <span className="font-mono text-xs text-ink-muted">{writing.date}</span>
              <span className="font-mono text-xs text-ink-muted">{writing.readTime} {t('read', 'baca')}</span>
            </div>
            <p className="font-sans text-ink-muted font-light leading-relaxed mb-8">
              {writing.content}
            </p>
            {writing.link && (
              <a href={writing.link} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-ink hover:text-ink-muted transition-colors cursor-pointer">
                <ExternalLink size={14} /> {t('Read Full Article', 'Baca Artikel Lengkap')}
              </a>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default DetailOverlay;
```

**4.2 Buat `src/components/LanguageSwitch.tsx`**
```tsx
import { useLanguage } from '../LanguageContext';

const LanguageSwitch = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="fixed top-8 right-8 z-50 font-mono text-xs text-ink-muted hover:text-ink transition-colors mix-blend-difference cursor-pointer"
    >
      {lang === 'en' ? 'ID' : 'EN'}
    </button>
  );
};

export default LanguageSwitch;
```

### ✅ Checklist Batch 4
- [ ] Klik proyek → overlay terbuka dengan animasi
- [ ] Tombol X menutup overlay
- [ ] Toggle bahasa EN/ID bekerja
- [ ] Copy text berubah saat ganti bahasa

---

## BATCH 5 — Horizontal Scroll Engine & Custom Cursor (App.tsx)
> **Tujuan:** Mekanisme utama selesai — scroll vertikal menggerakkan konten horizontal  
> **Estimasi waktu:** 30–40 menit

**5.1 Ganti seluruh `src/App.tsx` dengan implementasi lengkap:**

```tsx
import React, { useRef, useEffect, useState } from 'react';
import {
  motion, useScroll, useTransform, useSpring,
  useVelocity, AnimatePresence
} from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Writings from './components/Writings';
import Footer from './components/Footer';
import DetailOverlay from './components/DetailOverlay';
import { LanguageProvider, useLanguage } from './LanguageContext';
import LanguageSwitch from './components/LanguageSwitch';
import { Project, Writing } from './types';

// ── Custom Cursor ──────────────────────────────────────────────
const CustomCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHovering(
        !!(t.tagName === 'A' || t.tagName === 'BUTTON' ||
          t.closest('a') || t.closest('button') ||
          t.classList.contains('cursor-pointer'))
      );
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot kecil */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[300] mix-blend-difference hidden md:block"
        animate={{ x: mouse.x - 6, y: mouse.y - 6, scale: hovering ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Lingkaran besar */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[300] mix-blend-difference hidden md:block"
        animate={{
          x: mouse.x - 20,
          y: mouse.y - 20,
          scale: hovering ? 1.5 : 1,
          borderColor: hovering ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
          backgroundColor: hovering ? 'rgba(255,255,255,0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

// ── Main Scroll Content ────────────────────────────────────────
const ScrollContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const { t } = useLanguage();

  const [selectedItem, setSelectedItem] = useState<Project | Writing | null>(null);
  const [selectedType, setSelectedType] = useState<'project' | 'writing' | null>(null);

  // Hitung total lebar konten
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const calcWidth = () => {
      setScrollRange(el.scrollWidth - window.innerWidth);
    };
    calcWidth();

    const observer = new ResizeObserver(() => setTimeout(calcWidth, 300));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Spring pada scroll
  const smoothScrollY = useSpring(scrollY, { damping: 50, stiffness: 400, mass: 1 });

  // Efek skew saat scroll cepat
  const skewVelocity = useTransform(scrollVelocity, [-50, 50], [2, -2]);
  const skew = useSpring(skewVelocity, { stiffness: 400, damping: 30 });

  // Horizontal transform
  const transformX = useTransform(smoothScrollY, [0, scrollRange], [0, -scrollRange]);

  // Progress bar
  const progressWidth = useTransform(smoothScrollY, [0, scrollRange], ['0%', '100%']);

  return (
    <div
      style={{ height: `${scrollRange + window.innerHeight}px` }}
      className="bg-black relative"
    >
      <CustomCursor />
      <LanguageSwitch />

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <DetailOverlay
            item={selectedItem}
            type={selectedType}
            onClose={() => { setSelectedItem(null); setSelectedType(null); }}
          />
        )}
      </AnimatePresence>

      {/* Panel horizontal yang di-sticky */}
      <div className="fixed top-0 left-0 h-[100dvh] w-screen overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x: transformX, skewX: skew }}
          className="flex h-full w-max will-change-transform"
        >
          <Hero />
          <About />
          <Projects onSelect={(p) => { setSelectedItem(p); setSelectedType('project'); }} />
          <Writings onSelect={(w) => { setSelectedItem(w); setSelectedType('writing'); }} />
          <Footer />
        </motion.div>
      </div>

      {/* Progress bar bawah */}
      <motion.div
        className="fixed bottom-0 left-0 h-[2px] bg-white z-50 mix-blend-difference"
        style={{ width: progressWidth }}
      />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 mix-blend-difference text-white z-40 font-mono text-xs hidden md:block"
      >
        {t('SCROLL ↓ TO NAVIGATE →', 'GULIR ↓ UNTUK NAVIGASI →')}
      </motion.div>
    </div>
  );
};

// ── App Root ───────────────────────────────────────────────────
function App() {
  return (
    <LanguageProvider>
      <ScrollContent />
    </LanguageProvider>
  );
}

export default App;
```

### ✅ Checklist Batch 5
- [ ] Scroll vertikal menggerakkan konten ke kiri/kanan
- [ ] Konten sedikit miring saat scroll cepat, kembali normal saat berhenti
- [ ] Progress bar putih di bagian bawah bergerak seiring scroll
- [ ] Custom cursor muncul di desktop
- [ ] Cursor membesar saat hover link/button
- [ ] Scroll hint `SCROLL ↓` muncul setelah 2 detik

---

## BATCH 6 — Polish, Responsif & Deploy
> **Tujuan:** Halus di semua device, siap publish ke Vercel  
> **Estimasi waktu:** 30–45 menit

### Langkah-langkah

**6.1 Cek & perbaiki tampilan mobile**
- Buka DevTools → toggle device mode (iPhone/Android)
- Pastikan semua section terbaca di layar kecil
- Progress bar & scroll hint sudah pakai `hidden md:block` → aman

**6.2 Ganti semua data dummy di `constants.ts`**
- Ganti `OWNER` dengan data asli kamu
- Tambah proyek nyata dengan gambar yang benar
- Tambah tulisan/artikel asli

**6.3 Ganti title di `index.html`**
```html
<title>[ Nama Kamu ] | Portfolio</title>
```

**6.4 Build production & test lokal**
```bash
npm run build
npm run preview
# Buka http://localhost:4173
# Test scroll, overlay, toggle bahasa
```

**6.5 Deploy ke Vercel**

**Opsi A — via Vercel CLI:**
```bash
npm install -g vercel
vercel login
vercel
# Ikuti prompt, pilih framework: Vite
```

**Opsi B — via GitHub (recommended):**
1. Push repo ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```
2. Buka https://vercel.com → "Add New Project"
3. Import repo dari GitHub
4. Framework preset: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output dir: `dist`
7. Klik **Deploy**

**6.6 Custom domain (opsional)**
- Di dashboard Vercel → Settings → Domains
- Tambah domain kamu → ikuti instruksi DNS

### ✅ Checklist Batch 6
- [ ] Tampilan mobile tidak ada yang overflow/broken
- [ ] Semua data sudah diganti dengan konten asli
- [ ] `npm run build` berhasil tanpa error/warning
- [ ] `npm run preview` terlihat bagus
- [ ] Deploy ke Vercel berhasil
- [ ] URL live bisa diakses

---

## Ringkasan Semua Batch

| Batch | Fokus | Estimasi |
|-------|-------|----------|
| 1 | Project init, Tailwind, Fonts | 15–20 menit |
| 2 | Types, Data, Language Context | 20–30 menit |
| 3 | Semua komponen section (5 panel) | 60–90 menit |
| 4 | Detail Overlay + Language Switch | 30–40 menit |
| 5 | Horizontal scroll engine + cursor | 30–40 menit |
| 6 | Polish, responsif, deploy | 30–45 menit |
| **Total** | | **~3–4 jam** |

---

## Tips & Troubleshooting

**Font tidak muncul?**
→ Pastikan ada koneksi internet saat dev, Google Fonts butuh network.

**Scroll horizontal tidak mulus?**
→ Pastikan `height` container sudah `scrollRange + window.innerHeight`. Cek di console: `console.log(scrollRange)` harus > 0.

**TypeScript error di Framer Motion?**
→ Pastikan `framer-motion` terinstall: `npm ls framer-motion`

**Tailwind class tidak terapply?**
→ Tailwind via CDN hanya mengenali class yang ada di HTML/JS. Jika class dinamis tidak muncul, definisikan di `safelist` atau gunakan style inline sebagai fallback.

**Build gagal?**
→ Jalankan `npx tsc --noEmit` untuk lihat error TypeScript sebelum build.

# PRD — Personal Portfolio Website
**Versi:** 1.0  
**Tanggal:** Juni 2026

---

## 1. Ringkasan Proyek

Website portofolio pribadi dengan konsep **"Novelist Theme"** — desain minimalis, premium, berbasis tipografi, dengan navigasi horizontal scrolling yang unik. Tujuan utama: menampilkan karya, proyek, dan tulisan secara elegan dengan pengalaman browsing yang berbeda dari portofolio konvensional.

---

## 2. Analisis Referensi

### 2.1 Tech Stack

| Layer | Teknologi | Versi |
|-------|-----------|-------|
| UI Framework | React | 19.2.0 |
| Language | TypeScript | 5.8.2 |
| Build Tool | Vite | 6.2.0 |
| Animation | Framer Motion | 12.23.24 |
| Icon Library | Lucide React | 0.554.0 |
| CSS Utility | Tailwind CSS | via CDN (config inline) |
| Deployment | Vercel | — |

### 2.2 UI Library & Styling

- **Tidak menggunakan** UI component library (Material UI, Shadcn, dll)
- Styling murni menggunakan **Tailwind CSS** dengan konfigurasi custom
- Custom color tokens didefinisikan di `tailwind.config`:
  - `paper` → `#0a0a0a` (background gelap)
  - `ink` → `#f0f0f0` (teks terang)
  - `accent` → `#404040` (elemen sekunder)
  - `ink-muted` → `#888888` (teks redup)
- Background utama: `#050505` (hitam pekat)
- Skema warna: **monokromatik hitam-putih**, tidak ada warna accent mencolok

### 2.3 Tipografi

| Peran | Font | Weights |
|-------|------|---------|
| **Serif / Display** | Cormorant Garamond | 300, 400, 600, 700, 400 Italic |
| **Sans / Body** | Inter | 300, 400, 500 |
| **Monospace / Code** | JetBrains Mono | 400 |

Semua font diambil dari **Google Fonts**. Font rendering dioptimalkan dengan `-webkit-font-smoothing: antialiased`.

### 2.4 Design Philosophy

- **Novelist Theme** — terasa seperti membaca novel, tipografi adalah bintangnya
- **Horizontal Scrolling** — scroll vertikal user menggerakkan konten secara horizontal
- **Monochromatic** — palet hitam-putih, elegan dan timeless
- **Minimalist & Premium** — tidak ada elemen dekoratif berlebihan
- **Custom Cursor** — cursor dot kecil + lingkaran besar dengan `mix-blend-difference` (desktop only)
- **Physics-based Animation** — spring animation untuk transisi yang terasa natural

---

## 3. Arsitektur & Struktur Komponen

```
portfolio/
├── components/
│   ├── Hero.tsx          # Landing / pembuka
│   ├── About.tsx         # Tentang saya
│   ├── Projects.tsx      # Showcase proyek
│   ├── Writings.tsx      # Showcase tulisan/artikel
│   ├── Footer.tsx        # Footer + kontak
│   ├── DetailOverlay.tsx # Modal fullscreen detail item
│   └── LanguageSwitch.tsx# Toggle bahasa ID/EN
├── App.tsx               # Root: horizontal scroll logic, custom cursor
├── LanguageContext.tsx   # React Context multi-bahasa
├── constants.ts          # Data proyek & tulisan
├── types.ts              # TypeScript interfaces
├── index.tsx             # Entry point
├── index.html            # HTML template + font imports
└── vite.config.ts        # Build config
```

---

## 4. Fitur-Fitur yang Harus Diimplementasi

### 4.1 Core Features (Wajib)

#### F-01 · Horizontal Scrolling Engine
- Scroll vertikal user → transform `translateX` konten horizontal
- Gunakan `useScroll` + `useTransform` + `useSpring` dari Framer Motion
- `scrollRange` dihitung dari `element.scrollWidth - window.innerWidth`
- Container menggunakan `position: fixed` + `height: 100dvh`
- Progress bar di `bottom: 0` menunjukkan progress scroll

#### F-02 · Sections (Panel Horizontal)
Urutan panel kiri ke kanan:
1. **Hero** — nama, tagline, informasi utama
2. **About** — deskripsi diri, skills, background
3. **Projects** — grid/list karya dengan thumbnail
4. **Writings** — daftar artikel/tulisan
5. **Footer** — kontak, social links, copyright

#### F-03 · Detail Overlay
- Klik item di Projects/Writings → modal `AnimatePresence` fullscreen
- Menampilkan: gambar, judul, deskripsi panjang, teknologi, link live/github
- Tombol close dengan animasi keluar

#### F-04 · Custom Cursor (Desktop Only)
- Dot kecil `w-3 h-3` mengikuti mouse dengan spring cepat (`stiffness: 500`)
- Lingkaran besar `w-10 h-10 border` dengan spring lebih lambat (`stiffness: 250`)
- Keduanya menggunakan `mix-blend-difference` untuk efek inversi warna
- Saat hover elemen interaktif: dot menghilang, lingkaran membesar
- Dinonaktifkan otomatis di touch device (`pointer: coarse`)
- Default cursor di-hide dengan `cursor: none` pada `body`

#### F-05 · Multi-bahasa (ID/EN)
- React Context untuk state bahasa
- Toggle button di pojok kanan atas
- Semua copy text mendukung dua bahasa

#### F-06 · Skew Animation on Scroll
- Gunakan `useVelocity(scrollY)` → `useTransform` → `useSpring`
- Konten sedikit miring (`skewX`) saat scroll cepat → kembali normal saat berhenti

### 4.2 Nice-to-Have Features

#### F-07 · Scroll Hint Indicator
- Teks `SCROLL ↓ TO NAVIGATE →` di pojok kanan bawah (desktop)
- Muncul dengan `opacity: 0.5` setelah delay 2 detik

#### F-08 · Responsive Mobile
- Di mobile: horizontal scroll tetap berjalan, cursor custom dinonaktifkan
- Gunakan `100dvh` (bukan `100vh`) untuk akurasi viewport mobile
- `touch-action: pan-y` pada body

---

## 5. Design Tokens & Style Guide

### Warna
```
Background:  #050505  (hitam pekat, body)
Surface:     #0a0a0a  (card/panel)
Text:        #f0f0f0  (utama)
Text Muted:  #888888  (sekunder)
Accent:      #404040  (border, divider)
```

### Tipografi
```
Display/Heading:  Cormorant Garamond, serif
  - Ukuran besar, letter-spacing ketat (-0.05em)
  - Gunakan untuk judul section, nama, tagline

Body/UI:          Inter, sans-serif
  - Weight 300–500
  - Teks deskripsi, label, tombol

Code/Meta:        JetBrains Mono, monospace
  - Tanggal, nomor, metadata teknis
```

### Spacing & Layout
- Setiap panel/section: `min-width: 100vw`, `height: 100dvh`
- Padding konsisten menggunakan Tailwind spacing scale
- Layout flex row untuk container horizontal

### Animasi
```
Scroll spring:  damping: 50, stiffness: 400, mass: 1
Cursor dot:     stiffness: 500, damping: 28, mass: 0.5
Cursor ring:    stiffness: 250, damping: 20, mass: 0.8
Skew velocity:  [-50, 50] → [2deg, -2deg]
```

---

## 6. Data Model

### Project
```typescript
interface Project {
  id: number;
  title: string;
  description: string;        // short
  longDescription: string;    // for overlay
  image: string;              // URL
  technologies: string[];
  link?: string;
  github?: string;
}
```

### Writing
```typescript
interface Writing {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;               // ISO format
  readTime: string;           // e.g. "5 min"
  link?: string;
}
```

---

## 7. Dependencies

### Production
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "framer-motion": "^12.23.24",
  "lucide-react": "^0.554.0"
}
```

### Dev
```json
{
  "vite": "^6.2.0",
  "@vitejs/plugin-react": "^5.0.0",
  "typescript": "~5.8.2",
  "@types/node": "^22.14.0"
}
```

### CDN
- Tailwind CSS: `https://cdn.tailwindcss.com`
- Google Fonts: Cormorant Garamond, Inter, JetBrains Mono

---

## 8. Setup & Development

```bash
# Clone
git clone <repo-url>
cd portfolio

# Install
npm install

# Dev server (localhost:5173)
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

---

## 9. Deployment

- **Platform:** Vercel (recommended, zero-config untuk Vite)
- **Build command:** `npm run build`
- **Output dir:** `dist`
- Domain custom opsional

---

## 10. Checklist Implementasi

- [ ] Setup project: Vite + React + TypeScript
- [ ] Install dependencies: framer-motion, lucide-react
- [ ] Konfigurasi Tailwind CDN + custom tokens di `index.html`
- [ ] Import Google Fonts (Cormorant Garamond, Inter, JetBrains Mono)
- [ ] Buat `types.ts` (Project, Writing interfaces)
- [ ] Buat `constants.ts` dengan data dummy proyek & tulisan
- [ ] Buat `LanguageContext.tsx`
- [ ] Implementasi horizontal scroll engine di `App.tsx`
- [ ] Implementasi `CustomCursor` component
- [ ] Buat komponen `Hero`, `About`, `Projects`, `Writings`, `Footer`
- [ ] Buat `DetailOverlay` dengan AnimatePresence
- [ ] Buat `LanguageSwitch` button
- [ ] Tambahkan progress bar scroll
- [ ] Tambahkan skew velocity effect
- [ ] Testing responsive mobile
- [ ] Deploy ke Vercel

---


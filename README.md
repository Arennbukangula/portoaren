# Novelist Portfolio 🖋️

A minimalist, premium, typography-driven personal portfolio website with a unique horizontal scrolling experience. Designed to feel like reading a novel, where typography is the star.

## ✨ Features

- **Novelist Theme**: A minimalist and premium design language focusing on typography.
- **Horizontal Scrolling Engine**: Vertical scrolling intuitively moves the content horizontally using Framer Motion springs.
- **Dynamic Skew Effect**: Elements subtly skew based on your scroll velocity.
- **Custom Cursor**: Unique, inversion-based custom cursor using `mix-blend-difference` (desktop only).
- **Detail Overlay**: Seamless, animated full-screen overlays for viewing project details and articles.
- **Bilingual Support**: Built-in Context API for English and Indonesian localization.
- **Responsive**: Adapts gracefully to mobile devices with standard touch-panning.
- **Monochromatic Aesthetics**: Timeless black-and-white palette.

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Preview production build:**
   ```bash
   npm run build
   npm run preview
   ```

## 📂 Project Structure

```text
src/
├── components/
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About me section
│   ├── Projects.tsx      # Showcase projects
│   ├── Writings.tsx      # Showcase articles
│   ├── Footer.tsx        # Contact & Socials
│   ├── DetailOverlay.tsx # Fullscreen modal
│   └── LanguageSwitch.tsx# EN/ID toggle
├── App.tsx               # Main layout and scroll engine
├── LanguageContext.tsx   # Localization state
├── constants.ts          # Content data (projects, writings)
└── types.ts              # TypeScript interfaces
```

## 🎨 Design System

### Typography
- **Display / Heading**: Cormorant Garamond
- **Body**: Inter
- **Code**: JetBrains Mono

### Color Palette
- **Background**: `#050505`
- **Surface**: `#0a0a0a`
- **Text (Ink)**: `#f0f0f0`
- **Text Muted**: `#888888`
- **Accent**: `#404040`

## 📝 Customization

To customize the portfolio with your own data, edit the `src/constants.ts` file. You can replace the placeholder text, projects, and writings with your actual content.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

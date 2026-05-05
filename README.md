<div align="center">
  <h1>🏥 Doramed Health Kiosk Portal</h1>
  <h3>Enterprise Astro Architecture for AI-Powered Medical Kiosks</h3>
  <p>The official corporate and product showcase platform for Doramed's advanced Health Monitoring Kiosks. Built with <b>Astro 5</b>, <b>React 19</b>, and <b>Tailwind CSS</b> to deliver clinical-grade performance, SEO optimization, and a premium user experience.</p>
  
  <p>
    <img src="https://img.shields.io/badge/Framework-Astro_5-FF5D01.svg?logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/Library-React_19-61DAFB.svg?logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC.svg?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Architecture-Component--Based-8A2BE2.svg" alt="Architecture" />
  </p>
</div>

<br/>

## 📖 Overview
The **Doramed Health Kiosk Portal** (`kiosk.doramed.ir`) serves as the digital front door for Iran's pioneering AI-powered health monitoring stations. The platform is designed to educate B2B clients (hospitals, clinics) and end-users about the kiosk's capabilities, including ECG, blood pressure tracking, and AI-driven health reports.

The architecture strictly follows a **Component-Based Design Pattern**, utilizing Astro's partial hydration (Island Architecture) to mix static content with interactive React components seamlessly[cite: 22, 27, 28].

---

## 🔥 Key Technical Highlights

### ⚡ Astro Island Architecture
By leveraging Astro, the site ships zero JavaScript by default, achieving near-instant load times. Interactive UI components (like the `ReportPopup` and dynamic modals) are hydrated only when needed using Astro's highly optimized React integration (`@astrojs/react`)[cite: 22, 27].

### 🧩 Modular & Scalable Structure
The project is strictly broken down into highly reusable components[cite: 27, 28]:
- `KioskHero` & `HeroSection`: High-impact entry sections.
- `AIProcess`: Reusable component detailing the backend Machine Learning/RAG pipeline.
- `DoctorSection` & `TechTeam`: Dynamic components rendering team data and credentials from structured data arrays.

### 🎨 Advanced UI & Animations
- Implemented smooth scroll reveals (`.scroll-reveal`) using the native `IntersectionObserver` API for a buttery user experience without heavy third-party libraries[cite: 26].
- Custom `@keyframes` (fade-in, slide-up) and complex layout structures powered by Tailwind CSS v4[cite: 22, 26].
- Interactive Lightbox (`#cert-modal`) for viewing medical certifications (FDA, ISO, Knowledge-based) built with Vanilla JS for maximum performance[cite: 26].

### 🔍 Enterprise SEO & Performance
- Server-Side generated pages with precise metadata injection (Titles, Descriptions) per route (`index.astro`, `about.astro`, `kiosk.astro`)[cite: 26, 27, 28].
- Integrated `@astrojs/sitemap` for automated search engine indexing[cite: 22].
- Strict TypeScript configurations for robust code quality across React and Astro components[cite: 24].

---

## 📂 Project Structure

```text
/
├── public/                 # Static assets (fonts, global styles)
├── src/
│   ├── assets/             # Optimized images and medical certificates
│   ├── components/         # Reusable UI modules
│   │   ├── AIProcess.astro # AI data pipeline explanation
│   │   ├── KioskTimeLine.astro # Product evolution history
│   │   ├── ReportPopup.astro # Interactive medical report preview
│   │   └── about/          # Sub-components for the About page (Team, CEO, Stats)
│   ├── layouts/
│   │   └── Layout.astro    # Master layout wrapper with global SEO headers
│   └── pages/
│       ├── index.astro     # Main portal entry
│       ├── kiosk.astro     # Deep-dive product specifications page
│       ├── about.astro     # Corporate team and certificates
│       └── 404.astro       # Custom interactive error page
├── tailwind.config.js      # Custom theme colors (Doramed specific palette)
└── tsconfig.json           # Strict TypeScript/React-JSX rules

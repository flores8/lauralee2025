# Agent Reference Guide

This document provides technical context and implementation patterns for AI agents working on this codebase.

---

## Tech Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **React**: 19.1.0
- **Styling**: CSS (globals.css)
- **Hosting**: TBD
- **Assets**: AWS S3

---

## Image Handling

### Configuration

Images are hosted on AWS S3 and optimized using Next.js Image component.

**Next.js Config** (`next.config.mjs`):
```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.s3.*.amazonaws.com',
      },
    ],
  },
};
```

### Usage Pattern

Always use the Next.js `Image` component for external images:

```jsx
import Image from 'next/image'

<Image 
  src="https://bucket-name.s3.amazonaws.com/image.jpg" 
  width={400} 
  height={400} 
  alt="Description"
/>
```

**Benefits:**
- Automatic lazy loading
- WebP conversion
- Responsive image serving
- Better Core Web Vitals
- Prevents layout shift

**Requirements:**
- Width and height must be specified (or use `fill` prop for responsive containers)
- S3 images must be publicly accessible
- Always include meaningful `alt` text

---

## Design System

### Typography

- **Body Font**: Nunito (sans-serif)
- **Headline Font**: Noto Serif
- **Base Size**: 22px (20px on mobile)
- **Line Height**: 1.7

### Color Palette

- **Background**: `#FAF8F6` (warm off-white)
- **Text**: `#2D2A26` (deep warm black)
- **Links**: `#5D6B85` (muted blue-grey)
- **Link Hover**: `#445163` (darker blue-grey)
- **Accent**: `#D6CCC2` (warm taupe)
- **Border/Dividers**: `#E8E5E1` (soft warm grey)

### Layout Constraints

- **Max Width**: 650px (container), 580px (intro section), 800px (project detail)
- **Padding**: 2rem desktop, 1.5rem mobile
- **Responsive Breakpoint**: 768px

### Navigation

- **Position**: Fixed top-right
- **Style**: Minimal, subtle (0.7 opacity, hover to 1.0)
- **Placement**: Only on About and Portfolio pages (not on Home)

### Design Principles

- Ultra-minimal and editorial
- Inspired by quiet print design
- Subtle, imperceptible motion
- Interface disappears so the story can speak

---

## Project Structure

```
/app
  /(main)              - Route group with navigation (doesn't affect URLs)
    /about             - About page (with navigation)
    /portfolio         - Portfolio section
      page.js          - Portfolio overview/gallery
      portfolio-data.js - Project metadata (title, thesis, role)
      README.md        - Portfolio structure guide
      /[slug]          - Dynamic project detail pages
        page.js        - Project router (loads individual case studies)
        platform-console.js      - Platform console case study content
        onboarding-at-scale.js   - (Create when ready)
        permission-aware-systems.js - (Create when ready)
    layout.js          - Layout with Navigation component
  /components          - Shared React components
    Navigation.js      - Top navigation (About | Portfolio)
  globals.css          - Global styles
  layout.js            - Root layout (minimal, no nav)
  page.js              - Home page (minimal, no nav)
/public                - Static assets (SVGs only, images are on S3)
```

### Route Architecture

- **Home (`/`)**: Clean, minimal page with no navigation. Links to portfolio and about.
- **About (`/about`)**: Narrative page with top navigation.
- **Portfolio Overview (`/portfolio`)**: Gallery view of all portfolio projects with top navigation.
- **Project Details (`/portfolio/[slug]`)**: Individual project pages with prev/next navigation.

### Portfolio Data Structure

Portfolio projects are split into two parts:

**1. Metadata** (`/app/(main)/portfolio/portfolio-data.js`) - For portfolio landing page:

```javascript
{
  slug: 'platform-console',      // URL slug
  title: 'Project Title',        // Display title
  thesis: 'One-sentence thesis', // Shown on overview
  role: 'Staff Product Designer · CoreWeave', // Your role
}
```

**2. Case Study Content** - Individual component files in `/app/(main)/portfolio/[slug]/`:

- `platform-console.js` - Full case study with thousands of words and images
- `onboarding-at-scale.js` - (Create as needed)
- `permission-aware-systems.js` - (Create as needed)

Each case study file is a React component where you write the full narrative with images interspersed throughout using the Next.js Image component with S3 URLs.

---

## Development Commands

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

---

## Guidelines for Agents

1. **Maintain simplicity**: This site prioritizes clarity and minimalism over complexity
2. **Respect typography**: Font choices and sizing are intentional and should remain consistent
3. **Preserve color palette**: Stick to the defined warm, editorial color scheme
4. **Keep animations subtle**: Motion should feel imperceptible, never distracting
5. **Image optimization**: Always use Next.js Image component for photos/graphics
6. **Content-first**: Design decisions serve the narrative, not the other way around
7. **Navigation architecture**: Home page remains nav-free; all other pages use the (main) route group layout
8. **Portfolio updates**: 
   - Edit `/app/(main)/portfolio/portfolio-data.js` for metadata (landing page)
   - Edit individual case study files (e.g., `platform-console.js`) for full content
   - See `/app/(main)/portfolio/README.md` for detailed guide

---

## Notes

- Site philosophy: "The quiet center of everything I do"
- Part of a trilogy: lauraleeflores.com (narrative and portfolio), lauralee.design (redirecting to lauraleeflores.com), lauralee.space (playground)
- This site serves as the contextual core that gives meaning to the other properties

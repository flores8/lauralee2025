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

### Layout Constraints

- **Max Width**: 650px (container), 580px (intro section)
- **Padding**: 2rem desktop, 1.5rem mobile
- **Responsive Breakpoint**: 768px

### Design Principles

- Ultra-minimal and editorial
- Inspired by quiet print design
- Subtle, imperceptible motion
- Interface disappears so the story can speak

---

## Project Structure

```
/app
  /about         - Deeper narrative page
  /components    - Shared React components
  globals.css    - Global styles
  layout.js      - Root layout
  page.js        - Home page
/public          - Static assets (SVGs)
```

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

---

## Notes

- Site philosophy: "The quiet center of everything I do"
- Part of a trilogy: lauraleeflores.com (narrative), lauralee.design (portfolio), lauralee.space (playground)
- This site serves as the contextual core that gives meaning to the other properties

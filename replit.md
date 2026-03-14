# Cliber AI Homepage

## Overview
A single-page homepage for cliberai.com built with Next.js 16, TypeScript, and Tailwind CSS v4. Cliber AI is a parent brand for domain-specific AI products.

## Architecture
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 (CSS-based config via `@theme` in globals.css)
- **PostCSS**: Uses `@tailwindcss/postcss` plugin (v4 requirement)
- **Fonts**: Google Fonts — Inter (body), Georgia (headings), IBM Plex Sans Arabic
- **Port**: 5000 (required by Replit for webview)

## Key Files
- `src/app/page.tsx` — Main homepage with hero, feature cards, contact section, and footer
- `src/app/layout.tsx` — Root layout with metadata and font config
- `src/app/globals.css` — Tailwind imports, custom theme colors, animations
- `postcss.config.mjs` — PostCSS config with @tailwindcss/postcss
- `next.config.ts` — Next.js config with allowedDevOrigins
- `public/favicon.svg` — "C" logo favicon

## Color Palette
- Cream background: `#FAF8F5`
- Cream border: `#F0EDE9`
- Brand green: `#00A66B` (CTA, accents)
- Brand green dark: `#005430` (hover states)
- Brand orange: `#D97757` (logo, secondary accent)

## CTA
The primary call-to-action button links to: https://www.saudi-judge.cliberai.com

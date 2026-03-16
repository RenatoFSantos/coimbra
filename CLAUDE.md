# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured yet.

## Architecture

Next.js 16 app using the **App Router** (`/app` directory), React 19, TypeScript 5, and Tailwind CSS 4.

- `/app` — App Router pages and layouts. `layout.tsx` is the root layout; `page.tsx` is the home route (`/`).
- `/public` — Static assets served at the root URL.
- `@/*` path alias maps to the project root (e.g. `@/app/components/Foo`).

**Styling:** Tailwind CSS v4 via PostCSS (`@tailwindcss/postcss`). Global styles in `app/globals.css` using `@import "tailwindcss"`. Dark mode is handled via `prefers-color-scheme` CSS media query.

**Fonts:** Geist (sans and mono) loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).

**ESLint:** Flat config format (`eslint.config.mjs`) with `next/core-web-vitals` and TypeScript presets.

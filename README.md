# Personal Portfolio · Cyber Sakura

Modern, responsive portfolio for an Agentic AI Engineer & Fullstack Developer.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · Framer Motion · Lucide

**Aesthetic:** Cyber Sakura — hot pink + dark + cyber grid + falling sakura petals.

## Quick Start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Customize

All content lives in **`src/lib/data.ts`** — edit:

- `siteConfig` — name, role, bio, email, social links
- `skills` — categorized tech stack
- `projects` — your work (set `featured: true` for the top grid)
- `services` — what you offer
- `experience` — timeline entries
- `stats` — hero stat counters

Theme colors are in `src/app/globals.css` (`:root` variables — `--pink`, `--cyan`, etc.).

## Sections

- **Hero** — Animated intro, floating tech tags, stats
- **About** — Bio + highlight cards
- **Skills** — Categorized tech grid (Agentic AI / Frontend / Backend / DevOps)
- **Projects** — Featured cards + secondary grid
- **Services + Experience** — What you do + timeline
- **Contact** — Form (server action) + social links

## Replace Placeholder Photo

The "S" placeholder in About + Hero is a stylized initial. To use a real photo:

1. Drop `public/avatar.jpg`
2. Replace the placeholder block in `src/components/sections/about.tsx` and `hero.tsx` with `next/image`.

## Hook Up Contact Form

`src/app/actions.ts` currently logs the message. To send real emails, wire up:

- **Resend** / SendGrid (drop in API call), or
- POST to your **FastAPI** backend

## Build & Deploy

```bash
npm run build
npm start
```

Push to GitHub → import in Vercel → done.

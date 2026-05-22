# Puplar Landing Page

React + Vite + Tailwind v4 conversion of the Puplar landing page.

## Stack

- **React 19** with TypeScript
- **Vite 7**
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- **lucide-react** for icons (shadcn-compatible import style)
- Path alias: `@/` → `src/`

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── sections/          # Landing page sections
│   │   ├── HeroSplit.tsx
│   │   ├── HeroCentered.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FundSection.tsx
│   │   ├── CardShowcase.tsx
│   │   ├── TicketsBanner.tsx
│   │   ├── Testimonials.tsx
│   │   └── DownloadCta.tsx
│   ├── CardScreen.tsx     # App mockup screens
│   ├── FundScreen.tsx
│   ├── WalletScreen.tsx
│   ├── LandingHeader.tsx
│   ├── LandingFooter.tsx
│   ├── PhoneFrame.tsx
│   ├── PuplarMark.tsx
│   ├── StoreButton.tsx
│   └── VirtualCard.tsx
├── lib/
│   └── utils.ts           # cn() helper
├── App.tsx
├── main.tsx
└── index.css              # Tailwind v4 + @theme tokens
```

## Tailwind v4 Theme Tokens

Defined in `src/index.css` via `@theme {}`:

| Token               | Value     | Usage class         |
|---------------------|-----------|---------------------|
| `--color-puplar-700`| `#12555B` | `bg-puplar-700`     |
| `--color-puplar-900`| `#021D22` | `text-puplar-900`   |
| `--color-puplar-ink`| `#00343E` | `text-puplar-ink`   |
| `--color-puplar-cream`| `#F8F9EA`| `bg-puplar-cream`  |
| `--font-hero`       | Work Sans | `font-hero`         |
| `--font-display`    | DM Sans   | `font-display`      |
| `--font-mono`       | JetBrains Mono | `font-mono`    |

## Notes

- Fonts are loaded from Google Fonts in `index.html`
- Opacity modifiers work on all custom colors: `text-puplar-900/70`
- To switch hero variant, change `heroVariant` state in `App.tsx`

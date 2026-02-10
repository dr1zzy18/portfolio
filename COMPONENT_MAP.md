# Component Map + Tailwind Classes

> Single-page structure (App Router) for Daksh Ramesh Chawla portfolio.

## Layout
- **Root Layout** (`src/app/layout.tsx`)
  - `body`: `bg-background text-foreground antialiased`
  - Fonts: Inter (sans), Space Grotesk (display), IBM Plex Mono (mono)

## Page Sections (`src/app/page.tsx`)

### 1) Sticky Header
- Wrapper: `sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur`
- Container: `mx-auto max-w-6xl px-6 py-4 flex items-center justify-between`
- Nav: `hidden md:flex gap-6 text-sm font-medium text-muted`
- CTA Button: `rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent focus-visible:ring-2`

### 2) Hero / About
- Section: `border-b border-border/70`
- Layout: `grid md:grid-cols-2 gap-12 md:items-center`
- Eyebrow: `text-sm font-semibold uppercase tracking-[0.2em] text-accent`
- H1: `font-display text-4xl md:text-5xl font-semibold leading-tight`
- CTAs: 
  - Primary: `rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background`
  - Secondary: `rounded-full border border-border px-6 py-3 text-sm font-semibold`
- Right Card: `rounded-3xl border border-border bg-surface p-8 shadow-2xl`
- Highlight Cards: `rounded-2xl border border-border/70 bg-background/60 p-4`

### 3) Experience
- Section: `border-b border-border/70`
- Heading: `font-display text-3xl font-semibold`
- Card: `rounded-3xl border border-border bg-surface p-8`
- Bullet: `flex gap-3 text-sm text-muted` + `h-2 w-2 rounded-full bg-accent`

### 4) Projects
- Grid: `grid gap-6 md:grid-cols-2 lg:grid-cols-3`
- Card: `flex flex-col rounded-3xl border border-border bg-surface p-6`
- Tags: `rounded-full border border-border px-3 py-1 text-xs font-medium text-muted`
- Link: `text-sm font-semibold text-accent transition hover:text-accent/80`

### 5) Skills
- Grid: `grid gap-6 md:grid-cols-3`
- Group Card: `rounded-3xl border border-border bg-surface p-6`
- Skill Pills: `rounded-full border border-border px-3 py-1 text-xs font-medium text-muted`

### 6) Education
- Grid: `grid gap-6 md:grid-cols-2`
- Card: `rounded-3xl border border-border bg-surface p-6`

### 7) Contact CTA
- Wrapper: `rounded-3xl border border-border bg-surface p-10 md:p-12`
- Links: `text-foreground transition hover:text-accent`

### 8) Footer
- Wrapper: `border-t border-border/80`
- Layout: `flex flex-col md:flex-row md:items-center md:justify-between text-sm text-muted`
- Mono label: `font-mono text-xs`

---

## Tokens (globals.css)
- `--background` #0B0D12
- `--surface` #121724
- `--accent` #4F7CFF
- `--accent-2` #8B5CF6
- `--foreground` #EDEFF6
- `--muted` #98A2B3
- `--border` #1D2233

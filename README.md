# dreambase.dev

Marketing site for **Dreambase** — a studio that builds custom software for
ambitious companies: designed collaboratively, built high-fidelity by in-house
AI, and monitored around the clock for zero downtime.

Heavily influenced by the look-and-feel of [atompoint.com](https://atompoint.com):
a dark, premium, single-accent aesthetic with a live, mouse-reactive hero.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **three.js** via **@react-three/fiber** + **@react-three/drei** — the hero scene
- **framer-motion** — scroll reveals & micro-interactions
- **lucide-react** — icons

## Develop

```bash
yarn install
yarn dev        # http://localhost:4444
yarn build      # production build
yarn typecheck  # tsc --noEmit
```

## Structure

```
src/
  app/
    layout.tsx        # fonts (Geist + Space Grotesk), metadata, shell
    page.tsx          # section composition
    globals.css       # design tokens + utilities
  config/site.ts      # name, nav, contact, copy constants
  components/
    layout/           # Nav, Footer
    hero/
      Hero.tsx        # headline + CTA over the canvas
      HeroCanvas.tsx  # mouse-reactive WebGL scene
    sections/         # Intro, Approach, Services, Why, Work, CTA
    ui/Reveal.tsx     # scroll-into-view animation helpers
```

## The hero animation

`HeroCanvas.tsx` renders a noise-distorted icosahedron wrapped in a wireframe
shell, surrounded by a drifting particle field, all lit by colored point lights.
It reacts to the cursor in three ways:

1. **Orientation** — the core eases toward the pointer's position.
2. **Energy** — pointer *speed* swells the surface distortion, so the form
   ripples as you move the mouse.
3. **Parallax** — the particle field and camera lean opposite the cursor for depth.

Pointer state lives in a ref (no re-renders), the canvas is client-only
(`dynamic(..., { ssr: false })`), and all motion respects
`prefers-reduced-motion`.

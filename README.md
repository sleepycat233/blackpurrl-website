# BlackPurrl Website

Official landing page for [BlackPurrl](https://github.com/sleepycat233/blackpurrl-website) — your AI companion for the games you play.

## Quick start

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview the built site
```

## Project structure

```
src/
├── layouts/Base.astro        # HTML skeleton, meta, OG
├── pages/index.astro         # Assembles all sections in order
├── components/
│   ├── Hero.astro            # Value proposition + CTA
│   ├── Problem.astro         # Pain points
│   ├── Features.astro        # Core capabilities
│   ├── Principles.astro      # Manifesto: open source, model-agnostic, data ownership
│   ├── HowItWorks.astro      # Current data flow
│   ├── Vision.astro          # Future roadmap
│   ├── Platform.astro        # Platform support + positioning
│   └── Footer.astro          # GitHub · Discord · Docs
└── styles/global.css         # Tailwind + component utility classes
```

## Tech stack

- **Framework**: [Astro](https://astro.build) (static output)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Node**: 20 LTS
- **Package manager**: npm

## Deployment

The site is a fully static output (`dist/`). Recommended deploy platforms:

- **Cloudflare Pages** (preferred)
  - Build command: `npm run build`
  - Output directory: `dist`
  - Node version: 20
- **Vercel**
  - Build command: `npm run build`
  - Output directory: `dist`
  - Node version: 20

Push to `main` triggers automatic deployment.

## Editing content

All page sections are individual `.astro` files under `src/components/`. To edit:

1. Find the corresponding component file
2. Edit the HTML/Tailwind classes
3. Run `npm run build` to verify
4. Commit and push — deployment is automatic

## Environment

Set `ASTRO_TELEMETRY_DISABLED=1` in your shell or the project scripts to skip Astro telemetry prompts.

## License

MIT
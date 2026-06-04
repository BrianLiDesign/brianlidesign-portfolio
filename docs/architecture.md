# Architecture

This site is a Next.js App Router application exported as static HTML for GitHub Pages.

## Runtime Model

- `next.config.ts` uses `output: "export"` so `npm run build` emits the deployable site into `out/`.
- The site does not use API routes, server actions, middleware, or other server-only Next.js features.
- Static files live under `public/` and are referenced by root-relative URLs such as `/assets/documents/brian-li-resume.pdf`.

## Source Layout

- `src/app/` owns routes.
- `src/components/sections/` maps to the Figma page sections.
- `src/components/rebalance/` owns the interactive pressure demo.
- `src/components/visuals/` owns SVG and decorative technical motifs.
- `src/content/` owns editable copy and project/debug data.
- `src/lib/` owns route constants, metadata, and pure logic.
- `src/styles/` owns global styling and design tokens.

## Design Direction

The accepted visual baseline is a light systems lab notebook: large black type, thin technical borders, teal signal accents, restrained orange raw-data marks, and subtle Hawaii/community line motifs.

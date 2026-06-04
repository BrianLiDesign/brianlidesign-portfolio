# Brian Li · Systems Lab

A static-export Next.js portfolio for Brian Li, focused on hardware-software systems, robotics-adjacent engineering, and useful feedback for real people.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

Next.js exports the static site to `out/`.

## Deployment

GitHub Actions builds the site and deploys `out/` to GitHub Pages via `.github/workflows/deploy.yml`.

The site uses `output: "export"` and does not rely on server-only Next.js features.

## Structure

```txt
public/             Static assets served from the site root
src/app/            App Router pages
src/components/     Reusable UI, sections, visuals, and interactive modules
src/content/        Editable project, Debug Log, writing, and site copy
src/lib/            Routes, metadata, and pure logic
src/styles/         Global CSS and design tokens
docs/               Architecture, content, Figma, and roadmap notes
```

## Editing Content

- Homepage/nav/footer copy: `src/content/site.ts`
- Case studies: `src/content/projects.ts`
- Debug Log entries: `src/content/debug-log.ts`
- Writing entries: `src/content/writing.ts`
- Resume highlights: `src/content/resume-highlights.ts`

## Design Baseline

The current homepage follows the Figma prototype structure:

`Hero → Proof Chips → Signal Sketch → Signal Ribbon → ReBalance Demo → How I Work → Hawaii/Community Bridge → Case Studies → Debug Log → Footer`.

The design should stay light, technical, candid, and grounded in real engineering evidence.

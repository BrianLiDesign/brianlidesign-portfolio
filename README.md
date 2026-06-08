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

## Preflight

```bash
npm run preflight
```

Preflight runs typecheck, static export, asset budgets, and internal link checks. Images under `public/` must stay at or below 2 MB, and videos must stay at or below 50 MB. Run `npm run check:assets` for just the media budget and `npm run check:links` after a build to verify local links, static asset references, and same-page anchors.

## Deployment

GitHub Actions builds the site and deploys `out/` to GitHub Pages via `.github/workflows/deploy.yml`.

The site uses `output: "export"` and does not rely on server-only Next.js features.

### Hosting and observability

| Host | URL | Role |
|------|-----|------|
| GitHub Pages | https://brianlidesign.github.io | Canonical public site |
| Vercel | https://brianlidesign.vercel.app | Analytics ingestion + deployment mirror |

Both hosts serve the same static export. Vercel also auto-deploys from `main`.

**Web Analytics** (`@vercel/analytics`) and **Speed Insights** (`@vercel/speed-insights`) run client-side in [`src/app/layout.tsx`](src/app/layout.tsx). GitHub Pages builds cannot use Vercel's auto-injected `/_vercel/*` routes, so non-Vercel builds point at the linked Vercel project's observability endpoints via [`src/lib/vercel-observability.ts`](src/lib/vercel-observability.ts). That bridge is what lets mobile traffic on `brianlidesign.github.io` report vitals (including device type) to the Vercel dashboard.

Custom events (`resume_download`, `case_study_open`, `contact_click`, `nav_click`) live in [`src/lib/analytics-events.ts`](src/lib/analytics-events.ts).

If observability paths change after re-enabling analytics in the Vercel dashboard, refresh them with:

```bash
node scripts/extract-vercel-observability.mjs https://brianlidesign.vercel.app
```

Then update the defaults in `src/lib/vercel-observability.ts` or set:

- `NEXT_PUBLIC_VERCEL_OBSERVABILITY_ORIGIN`
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`
- `NEXT_PUBLIC_VERCEL_SPEED_INSIGHTS_ID`

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

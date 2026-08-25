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

Preflight runs linting, type checking, unit tests, static export, asset budgets,
internal link checks, and observability verification. Images under
`public/` must stay at or below 2 MB, and videos must stay at or below 50 MB.
Run `npm run lint` for authored source checks, `npm test` for unit tests,
`npm run check:assets` for just the media budget, `npm run check:links` after a
build to verify local links, static asset references, and same-page anchors,
and `npm run check:observability` to confirm Speed Insights and Web Analytics
scripts are present in `out/`.

## Deployment

GitHub Actions builds the site and deploys `out/` to GitHub Pages via `.github/workflows/deploy.yml`.

The site uses `output: "export"` and does not rely on server-only Next.js features.

### Hosting and observability

| Host | URL | Role |
|------|-----|------|
| Vercel | https://brianlidesign.vercel.app | Canonical public site and analytics host |
| GitHub Pages | https://brianlidesign.github.io/brianlidesign-portfolio/ | Redirect mirror under `BrianLiDesign/brianlidesign-portfolio` |

The legacy root site at https://brianlidesign.github.io/ and the project Pages
site redirect matching paths to Vercel. Vercel auto-deploys the canonical site
from `main`.

**Web Analytics** (`@vercel/analytics`) and **Speed Insights** (`@vercel/speed-insights`) run client-side in [`src/app/layout.tsx`](src/app/layout.tsx) using their native Vercel routes. GitHub Actions builds set `NEXT_PUBLIC_BASE_PATH=/brianlidesign-portfolio` so static assets resolve under the project Pages path; Vercel builds omit `basePath` and serve from the domain root. GitHub Pages redirects before analytics collection, keeping observability on the canonical Vercel deployment.

Custom events (`resume_download`, `case_study_open`, `contact_click`, `nav_click`) live in [`src/lib/analytics-events.ts`](src/lib/analytics-events.ts).

After `npm run build`, confirm the observability scripts are embedded in the export:

```bash
npm run check:observability
```

Speed Insights only sends vitals when the user leaves the page or switches tabs (`visibilitychange` / `pagehide`). To verify ingestion on production:

1. Open the live site with DevTools → Network and filter for `vitals`.
2. Interact with the page, then switch to another tab or close it.
3. Expect a POST to the deployment's `/_vercel/speed-insights/vitals` route.
4. RES in the Vercel dashboard may take minutes to hours after the first real visits.

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
- KERES case-study evidence and public-claim boundaries: `src/content/keres.ts`
- Debug Log entries: `src/content/debug-log.ts`
- Writing entries: `src/content/writing.ts`
- Resume highlights: `src/content/resume-highlights.ts`

## Design Baseline

The current homepage follows the Figma prototype structure:

`Hero → What I Build → Signal Ribbon → KERES Flagship → How I Work → Hawaii/Community Bridge → Case Studies → Debug Log → Footer`.

The design should stay light, technical, candid, and grounded in real engineering evidence.

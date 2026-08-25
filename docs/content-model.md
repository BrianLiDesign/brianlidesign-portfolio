# Content Model

Most site content should be edited in `src/content/`.

## Case Studies

Edit `src/content/projects.ts` for the index card model. Detailed shared case-study content lives in `src/content/case-studies.ts`; KERES uses the custom, privacy-bounded model in `src/content/keres.ts`.

Each project has:

- `slug`
- `label`
- `title`
- `href`
- `summary`
- `role`
- `evidence`
- `note`
- `tags`

The homepage flagship is KERES. ReBalance, Flip That Digit, Operation Surf, Spontus, and Vybe Tutor remain available through the case-study grid.

## Debug Log

Edit `src/content/debug-log.ts`.

Each entry has:

- `slug`
- `label`
- `title`
- `thesis`
- `stages`
- `notes`

Debug Log entries should show ownership, failure mode, corrective action, and what changed in the next pass.

## Writing

Edit `src/content/writing.ts`.

Writing entries are intentionally lightweight until the writing page is expanded into a full article system.

## Site Copy

Edit `src/content/site.ts` for navigation, hero copy, proof chips, Hawaii/community copy, and footer links.

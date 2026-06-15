# WhenIsDone — Marketing site

The marketing site for **WhenIsDone**, a project design system on top of GitHub
Projects v2 (the app itself lives at <https://github.whenisdone.com>). Built to be
the landing page for WhenIsDone and the home for future apps in the family.

It's a small static Vite + React + TypeScript site that **reuses the app's
design tokens** (GitHub-flavored palette, system fonts, 6px radius, dark header)
so the marketing and product experiences feel like one product.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # type-check + static bundle → dist/
npm run preview    # serve the built bundle locally
```

## Layout

```
index.html         # entry (title + meta description + favicon)
public/icon.png    # WhenIsDone logo (shared with the app)
src/
  main.tsx         # React mount
  App.tsx          # all sections: Header, Hero, Features, How it works,
                   # Engine, Products, CTA, Footer (content lives in the
                   # FEATURES / STEPS / PRODUCTS arrays at the top)
  styles.css       # design tokens copied from the app's spa/src/app/styles.css
```

## Editing content

The page is data-driven — to change copy, edit the `FEATURES`, `STEPS`, and
`PRODUCTS` arrays at the top of `src/App.tsx`. The link to the live app is the
`APP_URL` constant in the same file. Add a new product by appending to
`PRODUCTS` (set `live: true` and an `href` once it ships).

## Deploy

Static output is `dist/`. Deploy the same way as the app (DontPanicHost static
bundle) — point the tenant's build at `npm run build` with output `dist`.

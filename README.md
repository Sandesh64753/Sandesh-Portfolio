# Sandesh Vairagar — Portfolio

An editorial portfolio following the **Atlas of Becoming** direction. Built with Next.js App Router, JavaScript, SCSS, Framer Motion and Lucide React.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production build with `npm run build` and run it with `npm start`.

## Structure

- `app/layout.js` — root layout, page metadata, Open Graph configuration and Person/ProfilePage JSON-LD.
- `app/page.js` — server-rendered portfolio content and case studies.
- `app/globals.scss` — SCSS entry point.
- `styles/` — variables, mixins, layout, section styles, responsive rules and reduced-motion styles.
- `components/site-header.jsx` — accessible responsive navigation.
- `components/reveal.jsx` — reduced-motion-aware section reveals.
- `public/assets/` — Next Image source assets copied from the supplied originals.
- `public/llms.txt`, `public/robots.txt` — machine-readable profile and crawler policy.
- `CREATIVE-DIRECTION.md` — full creative and visual direction.

## Design and performance choices

Space Grotesk, Instrument Serif and IBM Plex Mono establish the editorial hierarchy. Warm paper, midnight ink, ocean teal and terracotta carry the atlas motif. The page uses server-rendered sections, Next Image optimization and Framer Motion only for subtle reveals and navigation feedback. Native browser scrolling is retained; Lenis was left out because smooth-scroll replacement adds little value to this page and can affect mobile/keyboard behavior.

Fonts use Google Fonts with local fallbacks. For strict offline or privacy requirements, self-host licensed WOFF2 files. The supplied photos and project screenshots are preserved in `assets/`; optimized derivatives are copied to `public/assets/` for Next Image.

## Before public deployment

Set `NEXT_PUBLIC_SITE_URL` to the confirmed production origin. It enables absolute Open Graph image URLs and should also be used to provide the canonical URL and sitemap. A production browser/Lighthouse audit is still required; the site has not been deployed and no field performance scores are claimed.

Some academic and project metrics are intentionally omitted while source details are unresolved. See `CREATIVE-DIRECTION.md` for the verification notes.

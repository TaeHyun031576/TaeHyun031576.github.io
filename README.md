# Taehyun Kim / 金太贤 — Personal Portfolio

A bilingual English–Simplified Chinese portfolio for Taehyun Kim, built with Astro, Tailwind CSS, Markdown content collections, and the Dante Astro theme.

## Local development

Requires Node.js 20 or later.

```bash
npm ci
npm run dev
```

Create a production build with:

```bash
npm run build
```

The generated static site is written to `dist/`.

## Editing the site

- Site identity, navigation, profile links, and home-page hero: `src/data/site-config.ts`
- News: `src/data/news.json`
- About and contact pages: `src/content/pages/`
- Blog posts: `src/content/blog/`
- Projects: `src/content/projects/`
- Papers, datasets, and patents: their matching folders under `src/content/`
- Profile and hero placeholders: `public/avatar-placeholder.svg` and `public/hero-placeholder.svg`

Markdown files work like individual wiki documents. Copy an existing entry, change its frontmatter and body, and give it a unique filename to add a new item.

## GitHub Pages deployment

The included `.github/workflows/deploy.yml` builds and publishes the site whenever the `main` branch changes.

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. For the user site URL to remain `https://taehyun031576.github.io`, the repository should be named `TaeHyun031576.github.io`.

## Content status

The original owner's biography, accounts, publications, datasets, patents, news, travel writing, calendar, and personal photographs have been removed. Publications intentionally show bilingual “not published yet” messages until Taehyun adds verified entries.

## Theme and licence

The design is derived from [Dante Astro Theme](https://github.com/JustGoodUI/dante-astro-theme) and remains licensed under GPL-3.0. See `LICENSE`.

# Harsh Kamat — Portfolio

A modern, premium, recruiter-focused personal portfolio for a Computer Science Engineering student specializing in **Data Analytics, Data Science, Machine Learning and AI**.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.

## ✨ Features

- Dark theme with subtle gradients, glassmorphism and smooth Framer Motion animations
- Fully responsive (mobile / tablet / desktop) and fast (static, font-optimized)
- Sections: Hero, Animated Stats, About, Skills, Certifications, Projects, Experience timeline, Achievements, Resume, Contact, Footer
- Project filtering by category, scroll progress bar, back-to-top, loading animation, smooth-scroll nav with active highlighting
- Validated contact form (mailto by default, or plug in a real endpoint)
- SEO ready: metadata, Open Graph + Twitter cards, JSON-LD, dynamic favicon, `sitemap.xml`, `robots.txt`

## 🗂 Update content WITHOUT touching UI code

Everything — your name, links, skills, certifications, projects, experience, achievements — lives in **one file**:

```
src/config/site.ts
```

Edit that file and the whole site updates. No component code needs to change.

### Things to replace before launch
1. **Social links** — `socials` array in `src/config/site.ts` (GitHub + LinkedIn URLs are placeholders).
2. **Resume** — drop your PDF at `public/resume.pdf` (a placeholder is included).
3. **OG image** — replace `public/og-image.png` (1200×630) for nicer link previews.
4. **Production URL** — set `site.url` in `src/config/site.ts` after deploying.
5. **Contact form** — optionally set `contact.formEndpoint` (e.g. a Formspree URL) to receive submissions; otherwise the form opens the visitor's email client.

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## 🏗 Build & deploy

```bash
npm run build
npm run start
```

Deploy to **Vercel** in one click: push to GitHub, import the repo at vercel.com, done. No env vars required.

## 📁 Structure

```
src/
├─ app/            # layout, page, SEO (sitemap, robots, favicon), globals
├─ components/     # one component per section + UI primitives
├─ config/site.ts  # ← ALL your content lives here
└─ lib/            # tiny helpers (icons, classnames)
```

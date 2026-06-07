# Rahib Portfolio

A modern personal portfolio for Rahib Chowdhury, positioned as an AI-native web developer who turns AI-generated prototypes into production-grade Next.js apps.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Vercel deployment target

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Personal Details

Edit `lib/site.ts` to update the full name, canonical URL, public email, social links, stats, skills, services, and project links.

Set the production canonical domain before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel project environment variables.
4. Deploy with the default Next.js settings.

Vercel will automatically run `npm run build` and serve the App Router routes, including `sitemap.xml`, `robots.txt`, and the generated Open Graph image.

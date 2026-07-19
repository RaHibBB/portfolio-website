import {
  Bot,
  BrainCircuit,
  Code2,
  Github,
  LayoutTemplate,
  Linkedin,
  Rocket,
  Send,
  Sparkles,
  Target,
  Twitter,
  Workflow,
  Zap
} from "lucide-react";

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rahib.dev",
  name: "Rahib Portfolio",
  description:
    "Rahib Chowdhury is an AI-native web developer shipping production-grade Next.js apps from AI-assisted prototypes.",
  person: {
    name: "Rahib Chowdhury",
    displayName: "Rahib",
    title: "AI-Native Web Developer",
    role: "Web Developer at Greatness Digital",
    tagline: "Vibe coding, shipped to production.",
    email: "mdrahibchy@gmail.com",
    location: "Dhaka, Bangladesh"
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ],
  stats: [
    { value: 30, suffix: "+", label: "websites and apps shipped" },
    { value: 5, suffix: "", label: "AI providers unified in one workflow" },
    { value: 100, suffix: "%", label: "production-first implementation" }
  ],
  primarySkills: [
    "Claude Code",
    "OpenAI Codex",
    "v0",
    "AI-assisted development",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Vercel",
    "Supabase"
  ],
  secondarySkills: ["WordPress", "Elementor", "Divi", "Breakdance"],
  techMarquee: [
    "Claude Code",
    "OpenAI Codex",
    "v0",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "GSAP",
    "Lenis",
    "Vercel",
    "Supabase",
    "WordPress",
    "Elementor",
    "MCP",
    "GitHub"
  ],
  projects: [
    {
      title: "Put-It-In-Storage",
      category: "Client site",
      description:
        "Live client site for a Washington self-storage facility: a v0 prototype hardened into production Next.js on Vercel, with a brand refresh and ongoing pricing and feature updates for a real local business.",
      stack: ["Next.js", "v0", "Claude Code", "Vercel"],
      href: "https://putitinstoragewa.com",
      linkLabel: "View site",
      image: "/images/projects/put-it-in-storage.png",
      terminal: null
    },
    {
      title: "Turf Pro Outdoor Service",
      category: "Performance",
      description:
        "Performance rescue for a lawn-care company's WordPress site: hosting-level cache audit, a full image recompression pipeline, and seconds of render-blocking CSS eliminated without breaking Elementor.",
      stack: ["WordPress", "Elementor", "Core Web Vitals", "Performance"],
      href: "https://turfproservice.com",
      linkLabel: "View site",
      image: "/images/projects/turf-pro.png",
      terminal: null
    },
    {
      title: "Great Deals Made Easy",
      category: "Client site",
      description:
        "A UK consumer-savings publication shipped as a fast Next.js site — reviews, money-saving guides, and referral offers served from a clean, maintainable App Router codebase.",
      stack: ["Next.js", "Vercel", "SEO", "Content site"],
      href: "https://greatdealsmadeeasy.com",
      linkLabel: "View site",
      image: "/images/projects/great-deals.png",
      terminal: null
    },
    {
      title: "Tortoise Construction",
      category: "Ads landing pages",
      description:
        "Conversion-focused Google Ads landing pages for a licensed Oregon remodeler — distraction-free Elementor canvas layouts with clear CTAs, edited programmatically through a WordPress MCP workflow.",
      stack: ["Google Ads", "Landing pages", "Elementor", "MCP automation"],
      href: "https://tortoiseconstructionllc.com",
      linkLabel: "View site",
      image: "/images/projects/tortoise.png",
      terminal: null
    },
    {
      title: "Golden Placement Services",
      category: "Design-to-production",
      description:
        "Senior-placement agency homepage redesigned through a v0 to Claude Code pipeline and delivered onto the client's production WordPress stack with compliance-focused content.",
      stack: ["v0", "Claude Code", "WordPress", "Design-to-production"],
      href: "https://goldenplacements.com",
      linkLabel: "View site",
      image: "/images/projects/golden-placement.png",
      terminal: null
    },
    {
      title: "Custom Claude Skill",
      category: "AI tooling",
      description:
        "A reusable Git workflow automation skill that generates branch names, commit messages, and PR drafts so agent-assisted shipping stays consistent.",
      stack: ["Claude Skills", "Git", "Automation", "DX"],
      href: "https://github.com/RaHibBB",
      linkLabel: "See GitHub",
      image: null,
      terminal: [
        "$ claude /git-workflow",
        "✔ branch  feat/checkout-flow",
        "✔ commit  feat: add checkout flow",
        "✔ PR draft ready for review"
      ]
    },
    {
      title: "FreeLLMAPI",
      category: "Open source",
      description:
        "A self-hosted multi-model LLM proxy that unifies five AI providers behind one VS Code coding assistant interface for faster experimentation.",
      stack: ["LLM proxy", "API design", "VS Code", "Self-hosted"],
      href: "https://github.com/RaHibBB",
      linkLabel: "See GitHub",
      image: null,
      terminal: [
        "$ curl localhost:8787/v1/chat",
        "→ routing   claude-opus-4-8",
        "→ fallback  4 more providers",
        "✔ 200 · one API, five models"
      ]
    },
    {
      title: "AI Portfolio System",
      category: "This site",
      description:
        "This portfolio experience: GSAP-heavy storytelling, custom metadata, structured data, a mailto contact flow, and production-ready App Router architecture.",
      stack: ["Next.js", "GSAP", "Lenis", "Tailwind", "SEO"],
      href: "#contact",
      linkLabel: "Discuss a build",
      image: "/images/projects/portfolio.png",
      terminal: null
    }
  ],
  services: [
    {
      icon: Sparkles,
      title: "AI-assisted web development",
      description:
        "Move from prompts and prototypes to maintainable interfaces with clean component structure, real content, and deployment-ready code."
    },
    {
      icon: Code2,
      title: "Next.js production builds",
      description:
        "Build fast App Router sites with TypeScript, metadata, integrations, form flows, and responsive UI that feels polished on every screen."
    },
    {
      icon: Workflow,
      title: "v0 prototype to production",
      description:
        "Turn v0 concepts into real systems: refactored components, data wiring, accessibility, performance tuning, and Vercel delivery."
    },
    {
      icon: Zap,
      title: "Performance & Core Web Vitals",
      description:
        "Speed rescues for Next.js and WordPress: caching audits, image pipelines, render-blocking CSS elimination, and scores that hold up on real hosting."
    },
    {
      icon: LayoutTemplate,
      title: "WordPress & page-builder builds",
      description:
        "Client-editable sites in Elementor, Divi 5, and Breakdance — built clean, pushed via the REST API, and structured so owners can update content without breaking the design."
    },
    {
      icon: Target,
      title: "Ads landing pages",
      description:
        "Distraction-free, conversion-first landing pages for Google Ads campaigns: fast loads, clear CTAs, tracking-ready, and matched to ad intent."
    }
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/RaHibBB",
      icon: Github
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rahibbb",
      icon: Linkedin
    },
    {
      label: "X / Twitter",
      href: "https://x.com/RahibChowdhury1",
      icon: Twitter
    },
    {
      label: "Email",
      href: "mailto:mdrahibchy@gmail.com",
      icon: Send
    }
  ],
  workflow: [
    { icon: BrainCircuit, label: "Prototype with v0" },
    { icon: Bot, label: "Refine with agents" },
    { icon: Rocket, label: "Ship on Vercel" }
  ]
} as const;

export type Project = (typeof site.projects)[number];

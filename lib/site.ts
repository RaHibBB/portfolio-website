import {
  Bot,
  BrainCircuit,
  Code2,
  Github,
  Linkedin,
  Rocket,
  Send,
  Sparkles,
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
  secondarySkills: ["WordPress", "Elementor", "Breakdance"],
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
    "GitHub",
    "Forms",
    "Integrations"
  ],
  projects: [
    {
      title: "Golden Placement Services",
      description:
        "A production Next.js/Vercel site shaped through a v0 to Claude Code to GitHub to Vercel pipeline, with forms, integrations, and compliance-focused content.",
      stack: ["Next.js", "Vercel", "v0", "Claude Code", "Forms"],
      href: "https://goldenplacements.com",
      linkLabel: "View site"
    },
    {
      title: "1st Choice Advisory",
      description:
        "An advisory services website shipped with an AI-assisted build process, refined into a performant production presence on a modern deployment workflow.",
      stack: ["Next.js", "Vercel", "AI-assisted build", "SEO"],
      href: "https://choiceadvisory.com/",
      linkLabel: "View site"
    },
    {
      title: "Custom Claude Skill",
      description:
        "A reusable Git workflow automation skill that generates branch names, commit messages, and PR drafts so agent-assisted shipping stays consistent.",
      stack: ["Claude Skills", "Git", "Automation", "DX"],
      href: "https://github.com/RaHibBB",
      linkLabel: "See GitHub"
    },
    {
      title: "FreeLLMAPI",
      description:
        "A self-hosted multi-model LLM proxy that unifies five AI providers behind one VS Code coding assistant interface for faster experimentation.",
      stack: ["LLM proxy", "API design", "VS Code", "Self-hosted"],
      href: "https://github.com/RaHibBB",
      linkLabel: "See GitHub"
    },
    {
      title: "AI Portfolio System",
      description:
        "This portfolio experience: GSAP-heavy storytelling, custom metadata, structured data, a mailto contact flow, and production-ready App Router architecture.",
      stack: ["Next.js", "GSAP", "Lenis", "Tailwind", "SEO"],
      href: "#contact",
      linkLabel: "Discuss a build"
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
      title: "Performance optimization",
      description:
        "Tune Core Web Vitals, reduce layout shift, optimize images, and keep animation-heavy experiences smooth and respectful of user settings."
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

import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-shell flex flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.person.name}. Built with Next.js,
          GSAP, Lenis, and Tailwind CSS.
        </p>
        <p>{site.person.tagline}</p>
      </div>
    </footer>
  );
}

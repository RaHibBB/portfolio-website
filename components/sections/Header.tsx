import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Magnetic } from "@/components/ui/Magnetic";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/64 backdrop-blur-xl">
      <a
        href="#main-content"
        className="focus-ring sr-only left-4 top-4 z-[60] rounded-lg bg-accent px-4 py-2 text-sm font-bold text-black focus:not-sr-only focus:fixed"
      >
        Skip to content
      </a>
      <nav
        className="container-shell flex h-16 items-center justify-between gap-4"
        aria-label="Primary navigation"
      >
        <a href="#hero" className="focus-ring flex items-center gap-3 rounded-lg">
          <span className="grid size-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent shadow-glow">
            R
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {site.person.displayName}
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg text-sm font-medium text-white/64 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Magnetic className="inline-flex">
          <a
            href="#contact"
            className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.055] px-4 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent"
          >
            Get in touch
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </Magnetic>
      </nav>
    </header>
  );
}


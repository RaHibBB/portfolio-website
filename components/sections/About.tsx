import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="js-section container-shell py-24 md:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="AI speed, production discipline."
          intro="I bridge the momentum of AI-assisted coding with the care needed to ship real apps, not just impressive prototypes."
        />

        <div className="js-reveal grid gap-6 text-base leading-8 text-white/72 md:text-lg">
          <p>
            I use Claude Code, OpenAI Codex, and v0 as serious development
            tools: fast ideation, fast refactors, fast UI exploration. The
            difference is what happens after the prototype appears.
          </p>
          <p>
            I turn those generated starts into maintainable Next.js apps with
            clean data flow, accessible components, deployment pipelines,
            integrations, forms, SEO, and performance work. Today, I do this as
            a Web Developer at Greatness Digital, focused on shipping polished
            client websites and production systems.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-3 md:grid-cols-3">
        {site.workflow.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="glass-line js-reveal flex min-h-20 items-center gap-3 rounded-lg px-4"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/12 text-accent">
                <Icon aria-hidden="true" size={19} />
              </span>
              <span className="text-sm font-semibold text-white/78">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-line js-reveal rounded-lg p-6"
          >
            <div
              className="js-counter font-display text-5xl font-semibold text-white"
              data-count={stat.value}
              data-suffix={stat.suffix}
            >
              0{stat.suffix}
            </div>
            <p className="mt-3 text-sm leading-6 text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="js-section border-y border-white/10 py-24 md:py-32"
    >
      <div className="container-shell">
        <SectionHeading
          id="services-heading"
          eyebrow="What I do"
          title="The useful middle between AI demo and real deployment."
          intro="I help teams move quickly without leaving the important production work until the end."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {site.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="glass-line js-reveal rounded-lg p-6 md:p-8"
              >
                <div className="grid size-12 place-items-center rounded-lg bg-accent/12 text-accent">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-normal text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/64">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="js-section container-shell py-24 md:py-32"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Have an AI-shaped prototype that needs to become real?"
            intro="Send the details and I will reply from the same public email listed here."
          />

          <div className="js-reveal mt-10 grid gap-3">
            <Magnetic className="inline-flex w-fit">
              <a
                href={`mailto:${site.person.email}`}
                className="focus-ring inline-flex min-h-12 items-center gap-3 rounded-lg border border-white/12 bg-white/[0.055] px-5 font-semibold text-white transition hover:border-accent/60 hover:text-accent"
              >
                <Mail aria-hidden="true" size={18} />
                {site.person.email}
              </a>
            </Magnetic>
          </div>

          <div className="js-reveal mt-8 flex flex-wrap gap-3">
            {site.socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-4 text-sm font-semibold text-white/66 transition hover:border-accent/60 hover:text-accent"
                >
                  <Icon aria-hidden="true" size={17} />
                  {social.label}
                  {social.href.startsWith("http") ? (
                    <ArrowUpRight aria-hidden="true" size={14} />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        <ContactForm email={site.person.email} />
      </div>
    </section>
  );
}

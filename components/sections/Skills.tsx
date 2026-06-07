import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="js-section border-y border-white/10 py-24 md:py-32"
    >
      <div className="container-shell">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="Built around the AI-native production stack."
          intro="The focus is modern app delivery with AI agents in the loop. Traditional site builders are part of the toolkit, but they do not define the positioning."
        />

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {site.primarySkills.map((skill, index) => (
            <div
              key={skill}
              className="glass-line js-reveal group rounded-lg p-5 transition duration-300 hover:border-accent/50 hover:bg-accent/[0.07]"
            >
              <span className="text-xs font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-normal text-white">
                {skill}
              </h3>
            </div>
          ))}
        </div>

        <div className="js-reveal mt-10 rounded-lg border border-white/10 bg-white/[0.025] p-5">
          <p className="text-sm font-semibold uppercase text-white/48">
            Also experienced in
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {site.secondarySkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/58"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Marquee />
      </div>
    </section>
  );
}

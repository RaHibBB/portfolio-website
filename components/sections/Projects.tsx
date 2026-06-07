import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type Project, site } from "@/lib/site";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isExternal = project.href.startsWith("http");

  return (
    <Magnetic className="h-full md:w-[min(72vw,520px)]" strength={0.08}>
      <article className="project-card glass-line flex h-full min-h-[440px] flex-col justify-between rounded-lg p-6 transition duration-300 hover:border-accent/54 hover:bg-white/[0.07] md:p-8">
        <div>
          <div className="flex items-center justify-between gap-6">
            <span className="font-display text-5xl font-semibold text-white/18">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold uppercase text-accent">
              Case study
            </span>
          </div>
          <h3 className="mt-10 font-display text-3xl font-semibold leading-tight tracking-normal text-white md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-white/66">
            {project.description}
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/62"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-accent transition hover:text-white"
            aria-label={`${project.linkLabel}: ${project.title}`}
          >
            {project.linkLabel}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </article>
    </Magnetic>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="js-section js-project-pin overflow-hidden py-24 md:min-h-screen md:py-28"
    >
      <div className="container-shell">
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Prototypes turned into production surfaces."
          intro="A selected set of client sites, workflow tools, and AI infrastructure experiments that show the way I like to ship."
        />
      </div>

      <div className="container-shell mt-12">
        <div className="js-project-track grid gap-5 md:flex md:w-max md:gap-6 md:pr-[24vw]">
          {site.projects.map((project, index) => (
            <div key={project.title} className="js-reveal h-full">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

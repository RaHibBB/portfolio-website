import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type Project, site } from "@/lib/site";

function CardVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="project-visual relative aspect-[16/10] overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width={1280}
          height={800}
          className="project-shot h-full w-full object-cover object-top"
          sizes="(min-width: 768px) 520px, 90vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"
        />
      </div>
    );
  }

  return (
    <div className="project-visual relative flex aspect-[16/10] flex-col justify-center border-b border-white/10 bg-[#04090a] px-7">
      <div className="absolute left-5 top-5 flex gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-white/14" />
        <span className="size-2.5 rounded-full bg-white/14" />
        <span className="size-2.5 rounded-full bg-accent/60" />
      </div>
      <pre className="overflow-hidden font-mono text-[13px] leading-7 text-white/72 md:text-sm">
        {project.terminal?.map((line, i) => (
          <span
            key={line}
            className={i === 0 ? "block text-accent" : "block"}
          >
            {line}
          </span>
        ))}
      </pre>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(33,246,212,0.09),transparent_55%)]"
      />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isExternal = project.href.startsWith("http");

  return (
    <Magnetic className="h-full md:w-[min(72vw,520px)]" strength={0.08}>
      <article className="project-card glass-line group flex h-full flex-col overflow-hidden rounded-lg transition duration-300 hover:border-accent/54 hover:bg-white/[0.07]">
        <CardVisual project={project} />

        <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
          <div>
            <div className="flex items-center justify-between gap-6">
              <span className="font-display text-4xl font-semibold text-white/18">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold uppercase text-accent">
                {project.category}
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-normal text-white md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-white/66">
              {project.description}
            </p>
          </div>

          <div className="mt-8">
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
              className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-accent transition hover:text-white"
              aria-label={`${project.linkLabel}: ${project.title}`}
            >
              {project.linkLabel}
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
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

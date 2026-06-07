import Image from "next/image";
import { ArrowDownRight, ArrowRight, Mail } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { site } from "@/lib/site";

const headline = `${site.person.name}. ${site.person.title}.`;
const words = headline.split(" ");

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[80svh] overflow-hidden pb-8 pt-20 md:min-h-[80svh] md:pb-6 md:pt-24"
    >
      <div className="js-hero-visual absolute inset-0 -z-10">
        <Image
          src="/images/ai-native-workflow.png"
          alt="Abstract dark AI development workflow with glass panels and cyan deployment traces"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.96)_0%,rgba(5,6,7,0.78)_42%,rgba(5,6,7,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.2)_0%,rgba(5,6,7,0.86)_100%)]" />
      </div>

      <div className="container-shell flex min-h-[calc(80svh-5rem)] flex-col justify-end md:min-h-[calc(80svh-6rem)]">
        <div className="max-w-5xl">
          <p className="eyebrow js-hero-fade">{site.person.role}</p>

          <h1
            id="hero-title"
            aria-label={headline}
            className="mt-5 max-w-5xl font-display text-[clamp(2.55rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-normal text-white"
          >
            {words.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span className="hero-word-wrap mr-[0.18em]" aria-hidden="true">
                  <span className="js-hero-word hero-word">{word}</span>
                </span>
                {index < words.length - 1 ? " " : null}
              </span>
            ))}
          </h1>

          <div className="js-hero-fade mt-6 max-w-3xl">
            <p className="font-display text-2xl leading-tight text-accent md:text-3xl">
              {site.person.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
              I build production websites and apps using AI-assisted
              development. Claude Code, OpenAI Codex, and v0 help me move fast;
              production engineering keeps the work real, integrated, and
              performant.
            </p>
          </div>

          <div className="js-hero-fade mt-6 flex flex-col gap-3 sm:flex-row">
            <Magnetic className="inline-flex">
              <a
                href="#projects"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-bold text-black transition hover:bg-white"
              >
                View Work
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Magnetic>
            <Magnetic className="inline-flex">
              <a
                href="#contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/14 bg-white/[0.06] px-6 text-sm font-bold text-white transition hover:border-accent/70 hover:text-accent"
              >
                Get in touch
                <Mail aria-hidden="true" size={18} />
              </a>
            </Magnetic>
          </div>
        </div>

        <a
          href="#about"
          className="focus-ring js-hero-fade absolute bottom-6 right-6 hidden size-12 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-white/70 transition hover:border-accent/60 hover:text-accent md:grid"
          aria-label="Scroll to about section"
        >
          <ArrowDownRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

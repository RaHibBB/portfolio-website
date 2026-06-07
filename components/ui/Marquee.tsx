import { site } from "@/lib/site";

export function Marquee() {
  const items = [...site.techMarquee, ...site.techMarquee];

  return (
    <div
      className="js-reveal marquee-mask mt-14 overflow-hidden border-y border-white/10 py-4"
      aria-label="AI-native development stack"
    >
      <div className="marquee-track flex w-max animate-marquee items-center gap-3 hover:[animation-play-state:paused]">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex h-11 items-center rounded-full border border-white/10 bg-white/[0.045] px-5 text-sm font-semibold text-white/78"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}


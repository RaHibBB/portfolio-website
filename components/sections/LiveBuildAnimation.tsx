"use client";

import { useEffect, useRef } from "react";
import { Activity, Braces, GitBranch, RadioTower, Rocket } from "lucide-react";
import gsap from "gsap";

const nodes = [
  { left: "58%", top: "18%", size: "size-2" },
  { left: "76%", top: "22%", size: "size-3" },
  { left: "90%", top: "34%", size: "size-2" },
  { left: "68%", top: "50%", size: "size-2.5" },
  { left: "84%", top: "62%", size: "size-2" },
  { left: "62%", top: "74%", size: "size-3" },
  { left: "95%", top: "76%", size: "size-2" }
];

const lines = [
  { left: "59%", top: "19%", width: 210, rotate: 12 },
  { left: "76%", top: "24%", width: 170, rotate: 35 },
  { left: "68%", top: "51%", width: 190, rotate: 14 },
  { left: "64%", top: "74%", width: 260, rotate: -18 },
  { left: "86%", top: "63%", width: 120, rotate: 34 }
];

const events = [
  { icon: Braces, label: "v0 prototype parsed", value: "tsx" },
  { icon: GitBranch, label: "codex patch staged", value: "main" },
  { icon: Activity, label: "forms + seo wired", value: "ok" },
  { icon: Rocket, label: "vercel deploy ready", value: "green" }
];

export function LiveBuildAnimation() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!root || reduceMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to(".js-live-node", {
        y: -16,
        scale: 1.28,
        opacity: 1,
        duration: 2.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.22,
          from: "random"
        }
      });

      gsap.to(".js-live-line", {
        scaleX: 1,
        opacity: 0.7,
        duration: 1.45,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18
      });

      gsap.to(".js-live-orbit", {
        rotate: 360,
        duration: 18,
        ease: "none",
        repeat: -1
      });

      gsap.to(".js-live-scan", {
        xPercent: 150,
        duration: 2.8,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 0.15
      });

      gsap.to(".js-live-row", {
        opacity: 0.45,
        duration: 0.9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.24
      });

      gsap.to(".js-live-caret", {
        opacity: 0.12,
        duration: 0.55,
        ease: "steps(1)",
        repeat: -1,
        yoyo: true
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-80">
        {lines.map((line, index) => (
          <div
            key={`${line.left}-${line.top}`}
            className="absolute hidden md:block"
            style={{
              left: line.left,
              top: line.top,
              width: line.width,
              transform: `rotate(${line.rotate}deg)`
            }}
          >
            <span className="js-live-line block h-px origin-left scale-x-[0.18] bg-gradient-to-r from-accent/70 via-accent/30 to-transparent opacity-20" />
          </div>
        ))}

        {nodes.map((node, index) => (
          <span
            key={`${node.left}-${node.top}`}
            className={`js-live-node absolute hidden ${node.size} rounded-full bg-accent opacity-45 shadow-[0_0_28px_rgba(33,246,212,0.7)] md:block`}
            style={{
              left: node.left,
              top: node.top,
              animationDelay: `${index * 160}ms`
            }}
          />
        ))}
      </div>

      <div className="glass-line absolute right-[max(2rem,calc((100vw-1180px)/2))] top-[27rem] hidden w-[330px] rounded-lg p-4 opacity-90 xl:block">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/30 p-4">
          <span className="js-live-scan absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-accent/18 to-transparent blur-sm" />
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-accent">
              <RadioTower size={15} />
              Live build
            </span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-[0.65rem] font-bold uppercase text-accent">
              shipping
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            {events.map((event) => {
              const Icon = event.icon;

              return (
                <div
                  key={event.label}
                  className="js-live-row flex items-center justify-between gap-3 rounded-lg border border-white/8 bg-white/[0.035] px-3 py-2 text-xs"
                >
                  <span className="inline-flex items-center gap-2 text-white/74">
                    <Icon size={14} className="text-accent" />
                    {event.label}
                  </span>
                  <span className="font-bold text-accent">{event.value}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-lg bg-ink/70 px-3 py-2 font-mono text-[0.72rem] text-white/58">
            <span className="text-accent">rah@portfolio</span>
            <span>npm run deploy</span>
            <span className="js-live-caret h-4 w-1 bg-accent" />
          </div>
        </div>
      </div>

      <div className="js-live-orbit absolute right-[10%] top-[18%] hidden size-72 rounded-full border border-accent/10 md:block">
        <span className="absolute left-1/2 top-0 size-2 rounded-full bg-accent shadow-[0_0_24px_rgba(33,246,212,0.7)]" />
      </div>
    </div>
  );
}

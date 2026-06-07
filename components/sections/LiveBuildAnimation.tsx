"use client";

import { useEffect, useRef } from "react";
import {
  Activity,
  Code2,
  GitBranch,
  RadioTower,
  Rocket,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import gsap from "gsap";

const nodes = [
  { left: "58%", top: "16%", size: "size-2" },
  { left: "74%", top: "19%", size: "size-3" },
  { left: "91%", top: "31%", size: "size-2" },
  { left: "69%", top: "45%", size: "size-2.5" },
  { left: "86%", top: "57%", size: "size-2" },
  { left: "62%", top: "70%", size: "size-3" },
  { left: "95%", top: "74%", size: "size-2" }
];

const lines = [
  { left: "59%", top: "17%", width: 250, rotate: 12 },
  { left: "74%", top: "21%", width: 190, rotate: 35 },
  { left: "68%", top: "46%", width: 250, rotate: 12 },
  { left: "64%", top: "71%", width: 300, rotate: -18 },
  { left: "86%", top: "58%", width: 140, rotate: 34 }
];

const flow = [
  {
    icon: Sparkles,
    step: "01",
    title: "Prototype",
    value: "v0"
  },
  {
    icon: Code2,
    step: "02",
    title: "Engineer",
    value: "Codex"
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    value: "Vercel"
  }
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
        opacity: 0.75,
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
        xPercent: 160,
        duration: 2.7,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 0.1
      });

      gsap.to(".js-flow-packet", {
        x: 260,
        duration: 3.4,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 0.25
      });

      gsap.to(".js-flow-bar", {
        scaleX: 1,
        duration: 2.2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.16
      });

      gsap.to(".js-flow-row", {
        y: -3,
        opacity: 0.72,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.28
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
      <div className="absolute inset-0 opacity-85">
        {lines.map((line) => (
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

      <div className="glass-line absolute right-[max(2rem,calc((100vw-1180px)/2))] top-[27.75rem] hidden w-[360px] rounded-lg p-3 opacity-95 xl:block">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/32 p-3">
          <span className="js-live-scan absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-accent/18 to-transparent blur-sm" />

          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-accent">
                <RadioTower size={15} />
                Shipping system
              </span>
              <p className="mt-2 max-w-52 font-display text-xl font-semibold leading-none text-white">
                AI prototype to live site.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-[0.65rem] font-bold uppercase text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              live
            </span>
          </div>

          <div className="relative mt-4">
            <div className="absolute left-4 right-4 top-2 h-px bg-white/10" />
            <span className="js-flow-packet absolute left-4 top-[0.26rem] z-10 size-2 rounded-full bg-accent shadow-[0_0_22px_rgba(33,246,212,0.9)]" />
            <div className="grid grid-cols-4 gap-1.5 text-[0.58rem] font-bold uppercase text-white/42">
              <span>Idea</span>
              <span>Build</span>
              <span>Wire</span>
              <span>Ship</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {flow.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="js-flow-row rounded-lg border border-white/10 bg-white/[0.035] px-2 py-3 text-center opacity-95"
                >
                  <span className="mx-auto grid size-8 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                      <Icon size={14} />
                  </span>
                  <h3 className="mt-2 text-[0.68rem] font-bold uppercase text-white">
                    {item.title}
                  </h3>
                  <span className="mt-1 block font-mono text-[0.6rem] font-bold text-accent">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex items-center justify-between gap-2 rounded-lg border border-white/8 bg-ink/70 px-3 py-2 text-[0.64rem] font-bold uppercase text-white/48">
            <span className="inline-flex items-center gap-1.5">
              <GitBranch size={12} className="text-accent" />
              Git
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Activity size={12} className="text-accent" />
              Forms
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-accent" />
              SEO
            </span>
          </div>
        </div>
      </div>

      <div className="js-live-orbit absolute right-[8%] top-[12%] hidden size-80 rounded-full border border-accent/10 md:block">
        <span className="absolute left-1/2 top-0 size-2 rounded-full bg-accent shadow-[0_0_24px_rgba(33,246,212,0.7)]" />
      </div>
      <div className="js-live-orbit absolute right-[18%] top-[33%] hidden size-36 rounded-full border border-accent/10 md:block">
        <span className="absolute bottom-0 left-1/2 size-1.5 rounded-full bg-accent/80 shadow-[0_0_18px_rgba(33,246,212,0.7)]" />
      </div>
    </div>
  );
}

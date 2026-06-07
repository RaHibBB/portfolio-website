"use client";

import { useEffect, useRef } from "react";
import {
  Activity,
  Braces,
  CheckCircle2,
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

const pipeline = [
  { icon: Sparkles, label: "Prompt", value: "idea" },
  { icon: Braces, label: "Prototype", value: "v0" },
  { icon: Code2, label: "Refine", value: "Codex" },
  { icon: Rocket, label: "Ship", value: "Vercel" }
];

const metrics = [
  { label: "Prototype", value: "fast" },
  { label: "Build", value: "typed" },
  { label: "Deploy", value: "live" }
];

const checks = [
  { icon: GitBranch, label: "PR" },
  { icon: Activity, label: "Forms" },
  { icon: ShieldCheck, label: "SEO" }
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

      gsap.to(".js-live-check", {
        opacity: 0.5,
        duration: 0.9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.24
      });

      gsap.to(".js-live-packet", {
        xPercent: 305,
        duration: 3.2,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 0.35
      });

      gsap.to(".js-live-progress", {
        scaleX: 1,
        duration: 2.4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18
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

      <div className="glass-line absolute right-[max(2rem,calc((100vw-1180px)/2))] top-[28rem] hidden w-[372px] rounded-lg p-3 opacity-95 xl:block">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/32 p-3">
          <span className="js-live-scan absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-accent/18 to-transparent blur-sm" />

          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-accent">
              <RadioTower size={15} />
              AI production pipeline
            </span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-[0.65rem] font-bold uppercase text-accent">
              live
            </span>
          </div>

          <div className="relative mt-4">
            <div className="absolute left-6 right-6 top-4 h-px bg-white/12" />
            <span className="js-live-packet absolute left-4 top-[0.84rem] z-10 size-2 rounded-full bg-accent shadow-[0_0_22px_rgba(33,246,212,0.9)]" />
            <div className="relative grid grid-cols-4 gap-1.5">
              {pipeline.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.label}
                    className="rounded-lg border border-white/10 bg-white/[0.035] px-1.5 py-1.5 text-center"
                  >
                    <span className="mx-auto grid size-6 place-items-center rounded-md border border-accent/20 bg-accent/10 text-accent">
                      <Icon size={13} />
                    </span>
                    <span className="mt-1 block text-[0.54rem] font-bold uppercase text-white/72">
                      {step.label}
                    </span>
                    <span className="mt-0.5 block text-[0.54rem] font-bold text-accent">
                      {step.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1.5"
              >
                <span className="text-[0.56rem] font-bold uppercase text-white/42">
                  {metric.label}
                </span>
                <span className="mt-0.5 flex items-center gap-1 text-[0.7rem] font-bold text-white/80">
                  <CheckCircle2 size={12} className="text-accent" />
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2">
            {checks.map((check) => {
              const Icon = check.icon;

              return (
                <div
                  key={check.label}
                  className="js-live-check flex min-h-8 flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.035] text-[0.68rem] font-bold uppercase text-white/62"
                >
                  <Icon size={13} className="text-accent" />
                  {check.label}
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex items-center gap-2">
            <span className="font-mono text-[0.62rem] text-accent">92%</span>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/8">
              <span className="js-live-progress block h-full origin-left scale-x-[0.35] rounded-full bg-accent" />
            </div>
            <span className="font-mono text-[0.62rem] text-white/42">prod</span>
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

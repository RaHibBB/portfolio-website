"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimationProvider() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      document.documentElement.classList.add("motion-reduced");
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    document.documentElement.classList.add("motion-safe");

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    let media: gsap.MatchMedia | undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".js-hero-word",
        { yPercent: 115, opacity: 0, rotateX: 28 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.045
        }
      );

      gsap.fromTo(
        ".js-hero-fade",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.34
        }
      );

      gsap.fromTo(
        ".js-hero-visual",
        { scale: 1.08, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out"
        }
      );

      gsap.utils.toArray<HTMLElement>(".js-section").forEach((section) => {
        const revealItems = section.querySelectorAll<HTMLElement>(".js-reveal");

        gsap.fromTo(
          revealItems.length ? revealItems : [section],
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".js-heading-mask").forEach((heading) => {
        const inner = heading.querySelector<HTMLElement>("span");

        if (!inner) {
          return;
        }

        gsap.fromTo(
          inner,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.95,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 86%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".js-counter").forEach((counter) => {
        const target = Number(counter.dataset.count ?? 0);
        const suffix = counter.dataset.suffix ?? "";
        const value = { current: 0 };

        gsap.to(value, {
          current: target,
          duration: 1.8,
          ease: "power3.out",
          snap: { current: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 88%",
            once: true
          },
          onUpdate: () => {
            counter.textContent = `${Math.round(value.current)}${suffix}`;
          }
        });
      });

      media = gsap.matchMedia();
      media.add("(min-width: 768px)", () => {
        const section = document.querySelector<HTMLElement>(".js-project-pin");
        const track = document.querySelector<HTMLElement>(".js-project-track");

        if (!section || !track) {
          return undefined;
        }

        const getDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + 96);

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance() + window.innerHeight * 0.45}`,
            scrub: 0.9,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        return () => tween.kill();
      });
    });

    return () => {
      media?.revert();
      context.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
      document.documentElement.classList.remove("motion-safe");
    };
  }, []);

  return null;
}

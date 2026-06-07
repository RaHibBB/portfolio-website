"use client";

import { type ReactNode, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className,
  strength = 0.26
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const canAnimate = () =>
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      className={clsx("magnetic-target", className)}
      onPointerMove={(event) => {
        if (!ref.current || !canAnimate()) {
          return;
        }

        const rect = ref.current.getBoundingClientRect();
        const relX = event.clientX - rect.left - rect.width / 2;
        const relY = event.clientY - rect.top - rect.height / 2;

        gsap.to(ref.current, {
          x: relX * strength,
          y: relY * strength,
          duration: 0.35,
          ease: "power3.out",
          overwrite: true
        });
      }}
      onPointerLeave={() => {
        if (!ref.current || !canAnimate()) {
          return;
        }

        gsap.to(ref.current, {
          x: 0,
          y: 0,
          duration: 0.55,
          ease: "elastic.out(1, 0.42)",
          overwrite: true
        });
      }}
    >
      {children}
    </div>
  );
}


"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/** No-JS-safe progressive scroll reveal. */
export function Reveal({ children, className = "", delay = 0 }: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      if (typeof el.animate === "function") {
        el.animate(
          [{ opacity: 0.4, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 650, delay: Math.max(0, delay) * 1000, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" }
        );
      }
      observer.disconnect();
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div className={className} ref={ref}>{children}</div>;
}

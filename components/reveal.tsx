"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease: [number,number,number,number] = [0.22,1,0.36,1];

/**
 * Only the scroll reveal wrapper is hydrated.
 * Editorial page content itself remains a Server Component.
 */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -36px 0px" }}
      transition={{ duration: 0.62, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

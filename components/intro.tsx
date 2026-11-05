import type { CSSProperties, ReactNode } from "react";

type IntroStyle = CSSProperties & { "--intro-delay": string };

/** CSS-only entrance with no client hydration cost. */
export function Intro({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const style: IntroStyle = { "--intro-delay": `${Math.max(0, delay)}s` };
  return <div className={`intro-on-load ${className}`.trim()} style={style}>{children}</div>;
}

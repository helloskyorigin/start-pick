import Link from "next/link";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className={inverted ? "brand brand-inverted" : "brand"} aria-label="StartPick home">
      <span className="brand-mark" aria-hidden="true">
        <span className="mark-line mark-line-one" />
        <span className="mark-line mark-line-two" />
        <span className="mark-dot" />
      </span>
      <span className="brand-name">startpick<span className="brand-period">.</span></span>
    </Link>
  );
}


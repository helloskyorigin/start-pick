import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <div className="not-found-content">
        <span className="not-found-index">STARTPICK / 404</span>
        <h1>This path ends here<span className="blue-period">.</span></h1>
        <p>The page you were looking for doesn&apos;t exist. The next good decision is to head back to the beginning.</p>
        <Link className="start-link start-link-dark not-found-cta" href="/">Back to StartPick <ArrowUpRight size={18} aria-hidden="true"/></Link>
      </div>
    </main>
  );
}

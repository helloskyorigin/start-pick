"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass, Lightbulb, CheckCircle2 } from "lucide-react";

type Mode = "direction" | "discover" | null;

export default function StartPage() {
  const [selected, setSelected] = useState<Mode>(null);
  return (
    <main className="start-page">
      <div className="start-header shell">
        <Link href="/" className="back-link"><ArrowLeft size={16}/> Back to StartPick</Link>
        <span className="start-step">STEP 01 / CHOOSE A PATH</span>
      </div>
      <div className="start-body">
        <div className="start-mini-eyebrow">LET&apos;S BEGIN</div>
        <h1>Where are you<br />starting from?</h1>
        <p>Choose how you&apos;d like to approach your next startup decision.</p>
        <div className="start-options">
          <button type="button" onClick={() => setSelected("direction")} className={selected === "direction" ? "start-option selected" : "start-option"} aria-pressed={selected === "direction"}>
            <span className="start-option-icon"><Lightbulb size={23}/></span>
            <span className="start-option-copy"><strong>I have a direction</strong><span>Evaluate a startup idea you&apos;re considering.</span></span>
            <span className="start-option-arrow">{selected === "direction" ? <CheckCircle2 size={21}/> : <ArrowRight size={21}/>}</span>
          </button>
          <button type="button" onClick={() => setSelected("discover")} className={selected === "discover" ? "start-option selected" : "start-option"} aria-pressed={selected === "discover"}>
            <span className="start-option-icon"><Compass size={23}/></span>
            <span className="start-option-copy"><strong>Discover for me</strong><span>Find opportunities worth investigating.</span></span>
            <span className="start-option-arrow">{selected === "discover" ? <CheckCircle2 size={21}/> : <ArrowRight size={21}/>}</span>
          </button>
        </div>
        {selected && (
          <div className="start-next" role="status">
            <span>PATH SELECTED</span>
            <strong>{selected === "direction" ? "Evaluate a direction" : "Discover opportunities"}</strong>
            <p>The research intake is the next part of the build. This screen lets you preview the intended entry flow; it does not submit data yet.</p>
          </div>
        )}
        <div className="start-bottom-note">No account required to begin.</div>
      </div>
    </main>
  );
}

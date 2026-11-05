"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, CircleDot,
  Compass, Crosshair, FileSearch, Layers3, MoveUpRight, Search,
  ShieldCheck, Sparkles, Target, TrendingUp
} from "lucide-react";
import type { ReactNode } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Logo({ inverted = false }: { inverted?: boolean }) {
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

function StartLink({ theme = "dark", className = "" }: { theme?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/start" className={["start-link", theme === "light" ? "start-link-light" : "start-link-dark", className].join(" ")}>
      <span>Start</span>
      <ArrowUpRight size={18} strokeWidth={1.9} aria-hidden="true" />
    </Link>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -36px 0px" }}
      transition={{ duration: 0.68, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <div className={dark ? "eyebrow eyebrow-on-dark" : "eyebrow"}><span className="eyebrow-dash" />{children}</div>;
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Logo />
        <div className="header-right">
          <span className="header-descriptor">Decisions, backed by evidence.</span>
          <StartLink className="header-cta" />
        </div>
      </div>
    </header>
  );
}

function SignalDots() {
  return (
    <span className="signal-dots" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></span>
  );
}

function ResearchStage() {
  return (
    <div className="research-stage">
      <div className="stage-hairline" aria-hidden="true" />
      <div className="stage-topbar">
        <div className="stage-topbrand"><span className="stage-topbrand-square" /> STARTPICK <span className="stage-slash">/</span> FIELD NOTES</div>
        <div className="stage-topmeta"><span className="stage-topmeta-dot" /> ILLUSTRATIVE RESEARCH VIEW <span className="topbar-index">/ 001</span></div>
      </div>
      <div className="stage-main">
        <div className="stage-document">
          <div className="document-topline">
            <span>OPPORTUNITY REVIEW</span><span className="tiny-plus">+</span>
          </div>
          <p className="document-number">01 <span>/ RESEARCH BRIEF</span></p>
          <h3>AI customer support<br />for small SaaS teams<span className="blue-period">.</span></h3>
          <p className="document-deck">A starting hypothesis, examined through customer needs, competitive alternatives, and open questions.</p>
          <div className="document-divider" />
          <div className="document-label-row"><span>RESEARCH AREAS</span><span>03 SIGNALS</span></div>
          <div className="document-row"><span className="row-number">01</span><span className="row-main">Customer pain and urgency</span><span className="row-state">INVESTIGATE</span><ChevronRight size={16} /></div>
          <div className="document-row"><span className="row-number">02</span><span className="row-main">Existing alternatives</span><span className="row-state">COMPARE</span><ChevronRight size={16} /></div>
          <div className="document-row"><span className="row-number">03</span><span className="row-main">Unanswered assumptions</span><span className="row-state">VALIDATE</span><ChevronRight size={16} /></div>
          <div className="document-bottom">
            <span><CircleDot size={13} /> SOURCE-LED THINKING</span>
            <span>NOT JUST ANOTHER IDEA LIST</span>
          </div>
        </div>
        <div className="stage-sidebar">
          <div className="sidebar-top">
            <div className="sidebar-eyebrow">DECISION SNAPSHOT <MoveUpRight size={16}/></div>
            <div className="verdict-circle"><span className="verdict-pulse" /><span>TEST</span></div>
            <h4>Find the narrow edge before you build.</h4>
            <p>Identify which customer segment to test — and what would make the idea worth pursuing.</p>
          </div>
          <div className="sidebar-bottom">
            <div className="sidebar-bottom-heading"><span>EVIDENCE PATH</span><span>01—03</span></div>
            <div className="pathway">
              <span className="path-node path-node-one" /><span className="path-line" /><span className="path-node path-node-two" /><span className="path-line" /><span className="path-node path-node-three" />
            </div>
            <div className="pathway-labels"><span>Explore</span><span>Compare</span><span>Decide</span></div>
          </div>
        </div>
      </div>
      <div className="stage-footer">
        <span>START WITH A QUESTION. LEAVE WITH A DIRECTION.</span>
        <span>PREVIEW ONLY — NOT A REAL RESEARCH FINDING</span>
      </div>
    </div>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  const appear = (delay: number) => ({
    initial: reduced ? false as const : { opacity: 0, y: 24 },
    animate: reduced ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease }
  });
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-content shell">
        <motion.div className="hero-kicker" {...appear(0.04)}>
          <span className="hero-kicker-symbol"><Crosshair size={12} strokeWidth={2.5}/></span>
          RESEARCH BEFORE YOU BUILD
          <span className="hero-kicker-index">/ STARTPICK 001</span>
        </motion.div>
        <motion.h1 id="hero-title" {...appear(0.15)}>Know what&apos;s<br /><span className="headline-last">worth <span className="headline-underlined">building<svg className="headline-stroke" viewBox="0 0 370 18" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12 C103 3, 228 3, 368 11" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/></svg></span>.</span></motion.h1>
        <motion.p className="hero-description" {...appear(0.3)}>
          Study the market before you commit to the build. Understand potential buyers, investigate competing solutions, and decide what to test next.
        </motion.p>
        <motion.div className="hero-action" {...appear(0.42)}>
          <StartLink className="hero-button" />
          <span className="hero-note">Research flow preview <span className="note-separator">·</span> No account required</span>
        </motion.div>
        <motion.div className="hero-showcase" {...appear(0.52)}>
          <div className="hero-showcase-label"><span><span className="live-square" /> INSIDE A STARTPICK DECISION</span><span>SCROLL TO EXPLORE <ArrowRight size={13}/></span></div>
          <ResearchStage />
        </motion.div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section problem-section" id="why-startpick" aria-labelledby="problem-title">
      <div className="shell">
        <Reveal><Eyebrow>THE REAL PROBLEM</Eyebrow></Reveal>
        <div className="problem-intro">
          <Reveal><h2 id="problem-title">Months of building.<br /><span>One question unanswered.</span></h2></Reveal>
          <Reveal delay={0.1}><p>The hardest part isn&apos;t always building the product. It&apos;s knowing whether the problem, buyer, and market are worth your time in the first place.</p></Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="belief-compare">
            <div className="compare-half compare-before">
              <div className="compare-heading"><span className="compare-symbol">×</span> THE DEFAULT WAY</div>
              <h3>Start with assumptions.</h3>
              <div className="compare-line"><span>“I think people need this.”</span><span className="compare-index">01</span></div>
              <div className="compare-line"><span>“The market seems big.”</span><span className="compare-index">02</span></div>
              <div className="compare-line"><span>“I&apos;ll figure out customers later.”</span><span className="compare-index">03</span></div>
            </div>
            <div className="compare-half compare-after">
              <div className="compare-heading"><span className="compare-symbol compare-check"><Check size={15}/></span> A BETTER WAY</div>
              <h3>Start with evidence.</h3>
              <div className="compare-line"><span>Who has this problem, and why now?</span><span className="compare-index">01</span></div>
              <div className="compare-line"><span>What do customers use today?</span><span className="compare-index">02</span></div>
              <div className="compare-line"><span>What should I validate first?</span><span className="compare-index">03</span></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PillarIcon({ type }: { type: "market" | "competition" | "decision" }) {
  return (
    <div className="pillar-icon" aria-hidden="true">
      {type === "market" && <TrendingUp size={23} strokeWidth={1.6}/>}
      {type === "competition" && <Layers3 size={23} strokeWidth={1.6}/>}
      {type === "decision" && <Target size={23} strokeWidth={1.6}/>}
    </div>
  );
}

function Capabilities() {
  return (
    <section className="section capabilities-section" id="research" aria-labelledby="capabilities-title">
      <div className="shell">
        <Reveal><Eyebrow>WHAT STARTPICK EXAMINES</Eyebrow></Reveal>
        <Reveal><div className="section-heading-row"><h2 id="capabilities-title">Research that helps<br />you decide<span className="blue-period">.</span></h2><p>Three lenses. One clearer direction. Each research brief is designed to replace vague optimism with useful questions and evidence.</p></div></Reveal>
        <div className="pillar-grid">
          <Reveal className="pillar-wrap" delay={0.05}>
            <article className="pillar-card">
              <div className="pillar-card-top"><PillarIcon type="market"/><span className="pillar-count">01 / 03</span></div>
              <div className="pillar-art pillar-art-market" aria-hidden="true">
                <div className="market-track"><span /><span /><span /><span /><span /><span /><span /></div>
                <div className="market-overlay"><span className="market-target-dot" /><span className="market-track-label">MARKET SIGNAL</span></div>
                <span className="art-caption">DEMAND &amp; BUYER SIGNALS</span>
              </div>
              <div className="pillar-copy"><h3>Market signals</h3><p>Look for evidence of real customer problems, urgency, and willingness to explore a solution.</p></div>
            </article>
          </Reveal>
          <Reveal className="pillar-wrap" delay={0.13}>
            <article className="pillar-card">
              <div className="pillar-card-top"><PillarIcon type="competition"/><span className="pillar-count">02 / 03</span></div>
              <div className="pillar-art pillar-art-competitors" aria-hidden="true">
                <div className="competitor-line"><span className="comp-icon comp-icon-one"/><span className="comp-lines"><i/><i/></span><span className="comp-chip">ALTERNATIVE</span></div>
                <div className="competitor-line"><span className="comp-icon comp-icon-two"/><span className="comp-lines"><i/><i/></span><span className="comp-chip">POSITIONING</span></div>
                <div className="competitor-line"><span className="comp-icon comp-icon-three"/><span className="comp-lines"><i/><i/></span><span className="comp-chip comp-chip-blue">GAP TO TEST</span></div>
                <span className="art-caption">COMPETITIVE LANDSCAPE</span>
              </div>
              <div className="pillar-copy"><h3>Competitive landscape</h3><p>Understand the existing alternatives, how they position themselves, and where gaps may exist.</p></div>
            </article>
          </Reveal>
          <Reveal className="pillar-wrap" delay={0.21}>
            <article className="pillar-card">
              <div className="pillar-card-top"><PillarIcon type="decision"/><span className="pillar-count">03 / 03</span></div>
              <div className="pillar-art pillar-art-decision" aria-hidden="true">
                <div className="decision-receipt"><span className="receipt-label">DECISION FRAMEWORK</span><div className="receipt-result"><span className="receipt-status"><span/> TEST</span><ArrowUpRight size={19}/></div><div className="receipt-bars"><i/><i/><i/></div></div>
                <span className="art-caption">NEXT-BEST ACTION</span>
              </div>
              <div className="pillar-copy"><h3>A clear recommendation</h3><p>See what to test, which assumptions matter, and when it may be smarter to pivot or pass.</p></div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { number: "01", title: "Choose your direction", description: "Bring a startup concept you have in mind, or explore opportunities matched to your interests.", icon: Compass },
  { number: "02", title: "Examine the evidence", description: "Review market context, competing solutions, buyer signals, and the biggest unknowns.", icon: FileSearch },
  { number: "03", title: "Move with a plan", description: "Get a reasoned recommendation and a practical seven-day validation path.", icon: Crosshair }
];

function HowItWorks() {
  return (
    <section className="section process-section" id="how-it-works" aria-labelledby="process-title">
      <div className="shell">
        <Reveal><Eyebrow>BUILT FOR FORWARD MOTION</Eyebrow></Reveal>
        <Reveal><h2 id="process-title">From uncertainty<br />to a next step<span className="blue-period">.</span></h2></Reveal>
        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.08 * index}>
              <div className="process-card">
                <div className="process-card-head"><span>{step.number} / PROCESS</span><step.icon size={23} strokeWidth={1.5} aria-hidden="true"/></div>
                <div className="process-card-line" aria-hidden="true"><span/></div>
                <h3>{step.title}</h3><p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sample() {
  return (
    <section className="sample-section" id="sample" aria-labelledby="sample-title">
      <div className="sample-shell shell">
        <div className="sample-copy">
          <Reveal><Eyebrow dark>THE OUTPUT</Eyebrow></Reveal>
          <Reveal><h2 id="sample-title">Not another<br />list of ideas.<br /><span>A decision brief.</span></h2></Reveal>
          <Reveal delay={0.08}><p>Designed for the moment every founder faces: deciding what deserves the next week, month, or year of work.</p></Reveal>
          <Reveal delay={0.16}>
            <div className="sample-benefits">
              <div><ShieldCheck size={19}/><span>Evidence and source references</span></div>
              <div><Search size={19}/><span>Competitive landscape and risks</span></div>
              <div><Target size={19}/><span>Seven-day validation blueprint</span></div>
            </div>
          </Reveal>
          <Reveal delay={0.2}><span className="sample-note"><span className="sample-note-dot" />Example shown is illustrative, not live research.</span></Reveal>
        </div>
        <Reveal className="sample-visual" delay={0.18}>
          <div className="sample-paper">
            <div className="paper-head"><span><span className="paper-logo-mark">S<span>.</span></span> STARTPICK RESEARCH</span><span>DECISION NOTE / 001</span></div>
            <div className="paper-titleline">RESEARCH SUMMARY <span>01 / 04</span></div>
            <h3>AI support for<br />small SaaS teams.</h3>
            <p className="paper-sub">A hypothetical example of the structure and clarity of a StartPick decision report.</p>
            <div className="paper-finding"><span>PRELIMINARY DIRECTION</span><strong><span className="finding-dot"/> TEST A NARROW SEGMENT</strong></div>
            <div className="paper-heading">KEY QUESTIONS</div>
            <div className="paper-row"><span>01</span><p>Which teams experience the pain most frequently?</p><ArrowUpRight size={15}/></div>
            <div className="paper-row"><span>02</span><p>What tools and workarounds do they already use?</p><ArrowUpRight size={15}/></div>
            <div className="paper-row"><span>03</span><p>What evidence would justify a first MVP?</p><ArrowUpRight size={15}/></div>
            <div className="paper-bottom"><span>RESEARCH → JUDGMENT → ACTION</span><SignalDots/></div>
          </div>
          <div className="sample-float sample-float-top"><span className="float-icon"><Crosshair size={16}/></span><div><span>DECISION FIRST</span><strong>Know what to test.</strong></div></div>
          <div className="sample-float sample-float-bottom"><span className="float-blue-dot"/><span>SOURCE-AWARE THINKING</span><ArrowUpRight size={16}/></div>
        </Reveal>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <div className="shell closing-inner">
        <Reveal><div className="closing-star"><Sparkles size={19}/></div></Reveal>
        <Reveal><Eyebrow>YOUR NEXT MOVE STARTS HERE</Eyebrow></Reveal>
        <Reveal><h2 id="closing-title">Great companies start<br />with better questions<span className="blue-period">.</span></h2></Reveal>
        <Reveal delay={0.08}><p>Make the next decision with more than a hunch.</p></Reveal>
        <Reveal delay={0.16}><StartLink className="closing-button" /><span className="closing-footnote">Research preview now · Full report planned at $29, one-time</span></Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const policies = [
    { href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" },
    { href: "/refunds", label: "Refunds" }, { href: "/disclaimer", label: "Disclaimer" },
    { href: "/cookies", label: "Cookies" }, { href: "/accessibility", label: "Accessibility" },
    { href: "/contact", label: "Contact" }
  ];
  return (
    <footer className="footer">
      <div className="shell footer-upper">
        <div className="footer-identity">
          <Logo />
          <p>Clarity before commitment.<br />Evidence before execution.</p>
        </div>
        <nav className="footer-policy-links" aria-label="Legal information and contact">
          <div className="footer-links-label">INFORMATION</div>
          <div className="footer-link-grid">
            {policies.map(policy => <Link href={policy.href} key={policy.href}>{policy.label}</Link>)}
          </div>
        </nav>
      </div>
      <div className="shell footer-lower">
        <span>© {new Date().getFullYear()} StartPick.</span>
        <span>Independent thinking. Informed decisions.</span>
        <span>Pre-launch product preview.</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <Capabilities />
        <HowItWorks />
        <Sample />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

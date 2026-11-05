import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { legalDocuments, legalLinks, type LegalSlug } from "@/lib/legal-content";
import { Logo } from "@/components/logo";

export function LegalPage({ slug }: { slug: LegalSlug }) {
  const doc = legalDocuments[slug];
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim();
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="shell legal-header-content">
          <Logo />
          <Link href="/" className="legal-back"><ArrowLeft size={16} aria-hidden="true" /> Back to site</Link>
        </div>
      </header>
      <main className="legal-main shell" id="main-content">
        <div className="legal-heading">
          <span className="legal-eyebrow"><span className="legal-eyebrow-dot" /> STARTPICK / {doc.eyebrow}</span>
          <h1>{doc.title}<span className="blue-period">.</span></h1>
          <p>{doc.summary}</p>
          <div className="legal-updated"><span>LAST UPDATED</span><time dateTime="2026-11-05">05 NOVEMBER 2026</time><span className="legal-current-status">PRE-LAUNCH VERSION</span></div>
        </div>
        <div className="legal-grid">
          <aside className="legal-index" aria-label="Page sections">
            <p>ON THIS PAGE</p>
            <nav aria-label={doc.title + " table of contents"}>
              {doc.sections.map((section, index) => (
                <a key={section.heading} href={`#section-${index + 1}`}><span>{String(index + 1).padStart(2,"0")}</span>{section.heading}</a>
              ))}
            </nav>
          </aside>
          <article className="legal-article">
            {doc.sections.map((section,index) => (
              <section className="legal-content-section" id={`section-${index + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph,i) => <p key={i}>{paragraph}</p>)}
              </section>
            ))}
            <div className="legal-contact-note">
              <span className="legal-contact-icon">{supportEmail ? <Mail size={20} aria-hidden="true"/> : <ShieldCheck size={20} aria-hidden="true"/>}</span>
              <div>
                <h2>Questions or requests?</h2>
                {supportEmail ? (
                  <><p>Contact the StartPick team through its published support address.</p><a className="legal-email" href={`mailto:${supportEmail}`}>{supportEmail}<ArrowUpRight size={15} aria-hidden="true"/></a></>
                ) : (
                  <p>A public support address has not yet been configured. One must be provided and monitored before accepting research submissions or payments.</p>
                )}
              </div>
            </div>
          </article>
        </div>
      </main>
      <footer className="legal-footer">
        <div className="shell legal-footer-content">
          <span>© {new Date().getFullYear()} StartPick. Research before you build.</span>
          <nav aria-label="Other information pages">
            {legalLinks.filter(link=>link.href!==`/${slug}`).map(link=><Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
        </div>
      </footer>
    </div>
  );
}

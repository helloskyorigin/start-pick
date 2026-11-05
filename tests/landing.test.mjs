import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const landing = read("app/page.tsx");
const layout = read("app/layout.tsx");
const css = read("app/globals.css");

test("landing is informational only with a working Start destination", () => {
  assert.doesNotMatch(landing, /<(?:input|form|textarea|select)\b/i);
  assert.ok(landing.includes('href="/start"'));
  assert.ok(existsSync(join(root, "app", "start", "page.tsx")));
});

test("navigation and accessibility essentials exist", () => {
  assert.match(layout, /Skip to main content/);
  assert.match(landing, /id="main-content"/);
  assert.match(landing, /aria-label="Start with StartPick"/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /min-height:44px/);
});

test("sample research has explicit disclosure", () => {
  assert.match(landing, /ILLUSTRATIVE — NO LIVE FINDINGS/);
  assert.match(landing, /Example shown is illustrative/);
  assert.match(landing, /PREVIEW ONLY — NOT A REAL RESEARCH FINDING/);
});

test("all seven legal routes are present and linked from footer", () => {
  for (const route of ["privacy", "terms", "refunds", "disclaimer", "cookies", "contact", "accessibility"]) {
    assert.ok(existsSync(join(root, "app", route, "page.tsx")), route + " missing");
    assert.ok(landing.includes('href: "/' + route + '"'), route + " footer link missing");
  }
  assert.match(read("components/legal-page.tsx"), /LAST UPDATED/);
});

test("no fabricated support email or active checkout promise", () => {
  const legal = read("components/legal-page.tsx");
  assert.match(legal, /NEXT_PUBLIC_SUPPORT_EMAIL/);
  assert.match(legal, /has not yet been configured/);
  assert.ok(landing.includes("planned at $29"));
});

test("pre-launch robots indexing must be explicitly enabled", () => {
  assert.match(layout, /NEXT_PUBLIC_SITE_LIVE/);
  assert.match(read(".env.example"), /NEXT_PUBLIC_SITE_LIVE=false/);
});

test("marketing page stays server-rendered; animation wrapper stays isolated", () => {
  assert.doesNotMatch(landing, /["']use client["']/);
  assert.ok(landing.includes('from "@/components/reveal"'));
  assert.match(read("components/reveal.tsx"), /"use client"/);
  assert.match(read("components/reveal.tsx"), /IntersectionObserver/);
  assert.ok(!("motion" in JSON.parse(read("package.json")).dependencies));
  assert.match(read("components/intro.tsx"), /intro-on-load/);
});

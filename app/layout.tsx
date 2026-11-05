import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StartPick — Know What's Worth Building",
  description: "Research startup opportunities with market evidence, competitor intelligence, and an actionable path to a better founder decision.",
  applicationName: "StartPick",
  icons: { icon: "/favicon.svg" },
  keywords: ["startup research", "startup validation", "competitor analysis", "founder decision", "market research"],
  robots: { index: process.env.NEXT_PUBLIC_SITE_LIVE === "true", follow: process.env.NEXT_PUBLIC_SITE_LIVE === "true" },
  openGraph: {
    title: "StartPick — Know What's Worth Building",
    description: "Make your next startup decision with evidence, not assumptions.",
    type: "website",
    siteName: "StartPick",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f8f9fb" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><a href="#main-content" className="skip-link">Skip to main content</a>{children}</body>
    </html>
  );
}

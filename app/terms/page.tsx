import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use | StartPick",
  description: "What the StartPick website provides today, permitted use, and the boundaries of future research recommendations.",
};

export default function Page() {
  return <LegalPage slug="terms" />;
}

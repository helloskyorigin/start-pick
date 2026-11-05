import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Research Disclaimer | StartPick",
  description: "How to interpret StartPick's illustrative research preview, future AI analysis, and startup decision recommendations.",
};

export default function Page() {
  return <LegalPage slug="disclaimer" />;
}

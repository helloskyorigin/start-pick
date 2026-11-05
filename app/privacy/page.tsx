import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | StartPick",
  description: "How StartPick handles information in the current pre-launch build, and what must change before live research or payments.",
};

export default function Page() {
  return <LegalPage slug="privacy" />;
}

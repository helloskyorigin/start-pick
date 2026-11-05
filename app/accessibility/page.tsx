import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Accessibility | StartPick",
  description: "The accessibility principles and known pre-launch limitations of the StartPick website.",
};

export default function Page() {
  return <LegalPage slug="accessibility" />;
}

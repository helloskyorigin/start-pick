import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy | StartPick",
  description: "What cookies and tracking technologies are—and are not—part of the present StartPick frontend.",
};

export default function Page() {
  return <LegalPage slug="cookies" />;
}

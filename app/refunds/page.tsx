import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy | StartPick",
  description: "A transparent statement of the current no-checkout status and how purchase issues will be treated when sales begin.",
};

export default function Page() {
  return <LegalPage slug="refunds" />;
}

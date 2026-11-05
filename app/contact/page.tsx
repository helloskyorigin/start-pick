import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Contact | StartPick",
  description: "How to reach StartPick about support, privacy requests, accessibility and future purchases.",
};

export default function Page() {
  return <LegalPage slug="contact" />;
}

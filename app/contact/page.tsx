import type { Metadata } from "next"

import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to BYD B for consultations, quotes, and support. Call, email, or visit our office in Maddington to start your building project.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

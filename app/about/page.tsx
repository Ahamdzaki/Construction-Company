export const metadata = {
  title: "BYD:about",
  description: "Learn more about BYD B PTY LTD, our history, and our commitment to quality construction.",
}

import Navigation from "@/components/navigation"
import AboutSections from "@/components/about-sections"

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutSections />
    </main>
  )
}

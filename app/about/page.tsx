import dynamic from "next/dynamic"
const Footer = dynamic(() => import("@/components/footer"), { ssr: true, loading: () => null })
export const metadata = {
  title: "About",
  description: "Learn more about BYD B PTY LTD, our history, and our commitment to quality construction.",
}

const AboutSections = dynamic(() => import("@/components/about-sections"), { ssr: true, loading: () => null })

export default function AboutPage() {
  return (
    <>
      <AboutSections />
      <Footer />
    </>
  )
}

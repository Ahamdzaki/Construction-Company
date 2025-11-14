import dynamic from "next/dynamic"
const Footer = dynamic(() => import("@/components/footer"), { ssr: true, loading: () => null })
const TestimonialsForm = dynamic(() => import("./TestimonialsForm"), { ssr: true, loading: () => null })

export const metadata = {
  title: "Testimonials",
  description: "Explore our testimonials of completed and ongoing projects by BYD B PTY LTD.",
}

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsForm /> {/* client logic goes here */}
      <Footer />
    </>
  )
}

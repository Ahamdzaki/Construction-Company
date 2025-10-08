import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TestimonialsForm from "./TestimonialsForm" // new client component

export const metadata = {
  title: "BYD: Testimonials",
  description: "Explore our testimonials of completed and ongoing projects by BYD B PTY LTD.",
}

export default function TestimonialsPage() {
  return (
    <main>
      <Navigation />
      <TestimonialsForm /> {/* client logic goes here */}
      <Footer />
    </main>
  )
}

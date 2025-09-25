export const metadata = {
  title: "BYD:services",
  description: "Discover the range of construction and design services offered by BYD B PTY LTD.",
};
import Navigation from "@/components/navigation"
import { Home, Wrench, Palette } from "lucide-react"
import Footer from "@/components/footer"
import ServicesSections from "@/components/services-sections"
const services = [
  {
    iconName: "Home",
    title: "New Home Construction",
    description:
      "Complete home building services from foundation to finish, backed by 13 years of experience and full licensing.",
    features: ["Custom floor plans", "Premium materials", "Energy-efficient designs", "Fixed-price contracts"],
  },
  {
    iconName: "Wrench",
    title: "Home Renovations",
    description:
      "Transform your existing home with our comprehensive renovation services, from kitchen makeovers to full home extensions.",
    features: [
      "Kitchen & bathroom renovations",
      "Home extensions",
      "Structural modifications",
      "Heritage restorations",
    ],
  },
  {
    iconName: "Palette",
    title: "Custom Designs",
    description:
      "Work with our experienced team to create a truly unique home that reflects your lifestyle and preferences.",
    features: [
      "Architectural design",
      "Interior design consultation",
      "Planning permit assistance",
      "Material selection guidance",
    ],
  },
]

const steps = [
  {
    step: "01",
    title: "Consultation",
    description: "Initial meeting to discuss your vision, budget, and timeline",
  },
  {
    step: "02",
    title: "Design",
    description: "Create detailed plans and specifications for your project",
  },
  { step: "03", title: "Construction", description: "Professional building with regular progress updates" },
  { step: "04", title: "Handover", description: "Final inspection and keys to your completed home" },
]

export default function ServicesPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With 13 years of experience, we offer comprehensive building services to bring your vision to life. From
              new home construction to renovations and custom designs, we deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      <ServicesSections services={services} steps={steps} />
      <Footer />
    </main>
  )
}

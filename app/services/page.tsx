export const metadata = {
  title: "BYD:services",
  description: "Discover the range of construction and design services offered by BYD B PTY LTD.",
};
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Wrench, Palette } from "lucide-react"
import Footer from "@/components/footer"
const services = [
  {
    icon: Home,
    title: "New Home Construction",
    description:
      "Complete home building services from foundation to finish, backed by 13 years of experience and full licensing.",
    features: ["Custom floor plans", "Premium materials", "Energy-efficient designs", "Fixed-price contracts"],
  },
  {
    icon: Wrench,
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
    icon: Palette,
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Building Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process refined over 13 years to ensure your project is completed on time, within
              budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

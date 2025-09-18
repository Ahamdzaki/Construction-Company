import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Build Your Dream Home</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 13 years, we've been building exceptional homes across Australia, combining traditional
              craftsmanship with modern innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Company Overview</h2>
              <p className="text-muted-foreground mb-4 text-justify">
                BYD B PTY LTD was established/registered on 10/JUL/2024, but brings 13 years of experience in the
                construction industry. We specialize in building high-quality residential houses and have built a
                reputation for quality, reliability, and innovation.
              </p>
              <p className="text-muted-foreground mb-4 text-justify">
                Our company holds ACN: 678 883 488, ABN: 66678883488, and is fully licensed with Builder License:
                BP106072. We are registered with the Building Commission and maintain comprehensive insurance coverage
                for all our projects.
              </p>
              <p className="text-muted-foreground text-justify tracking-[0.99px]">
                This is to certify that BYD B PTY LTD Australian Company Number 
              </p>
              <p className="text-muted-foreground text-justify">
                678 883 488 is a proprietary company.
                The company is limited by shares.
                The company is registered under the Corporations Act 2001 and is taken to be registered in Western Australia and the date of commencement of registration is the fifth day of July, 2024
              </p>
            </div>
            <div className="relative">
              <Image
                src="/construction-team-working-on-building-site-with-mo.png"
                alt="Build Your Dream Home construction team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission & Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every home we build meets the highest standards of craftsmanship and
                  durability, backed by our 13 years of experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Trust & Transparency</h3>
                <p className="text-muted-foreground">
                  Open communication and honest pricing ensure our clients are informed and confident throughout the
                  building process. We maintain full licensing and insurance for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation & Excellence</h3>
                <p className="text-muted-foreground">
                  We combine traditional building techniques with modern technology and sustainable practices to deliver
                  homes that are both beautiful and environmentally responsible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

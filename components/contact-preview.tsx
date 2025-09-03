import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your dream building project? Contact BYD B PTY LTD today and let's discuss how our 13 years
            of experience can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" type="email" />
                  </div>
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                  </Link>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+61410664649" className="text-muted-foreground hover:text-accent transition-colors">
                      0410 664 649
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a
                      href="mailto:buildyourdreamhome2@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      buildyourdreamhome2@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">8 Brian Street, Mount Nasura WA 6112</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-muted-foreground">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

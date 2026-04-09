"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"

const formSchema = z.object({
  name: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(8, "Phone number is required"),
  projectType: z.string().min(1, "Please select a project type"),
  suburb: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().min(20, "Message must be at least 20 characters"),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", phone: "", projectType: "", suburb: "", budget: "", message: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setStatus("loading")
      const res = await fetch("/api/reviews/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, date: new Date().toISOString() }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Submission failed")
      }
      setStatus("success")
      form.reset()
    } catch (err: any) {
      setStatus("error")
      setErrorMsg(err?.message || "Something went wrong. Please try again.")
    }
  }

  const contactCards = [
    {
      icon: MapPin,
      label: "Office Address",
      value: "22 Olga Road, Maddington WA 6109",
      href: undefined,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0410 664 649",
      href: "tel:+61410664649",
    },
    {
      icon: Mail,
      label: "Email",
      value: "bpanahi@bydb.com.au",
      href: "mailto:bpanahi@bydb.com.au",
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Monday–Friday, 7:00 AM–5:00 PM",
      href: undefined,
    },
  ]

  const socials = [
    { href: "https://www.facebook.com/profile.php?id=61582903377561", Icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/bydbau/", Icon: Instagram, label: "Instagram" },
    { href: "https://wa.me/61410664649", Icon: MessageCircle, label: "WhatsApp" },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-neutral-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-amber-400 mb-3">Free Consultation</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in touch</h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
            Ready to start your project? Send us a message and we&apos;ll be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* LEFT: Form (60%) */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">Send an enquiry</h2>

              {status === "success" && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <AlertDescription className="text-green-800">
                    Thank you! Your message has been sent. We&apos;ll get back to you within one business day.
                  </AlertDescription>
                </Alert>
              )}
              {status === "error" && (
                <Alert className="mb-6 bg-red-50 border-red-200">
                  <AlertDescription className="text-red-800">{errorMsg}</AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl><Input placeholder="John Smith" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone *</FormLabel>
                        <FormControl><Input type="tel" placeholder="04XX XXX XXX" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="projectType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="New Home">New Home</SelectItem>
                            <SelectItem value="Renovation">Renovation</SelectItem>
                            <SelectItem value="Extension">Extension</SelectItem>
                            <SelectItem value="Commercial">Commercial</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="suburb" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Suburb / Location</FormLabel>
                        <FormControl><Input placeholder="Maddington, WA" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="budget" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Under $300k">Under $300k</SelectItem>
                            <SelectItem value="$300–500k">$300–500k</SelectItem>
                            <SelectItem value="$500–700k">$500–700k</SelectItem>
                            <SelectItem value="$700k+">$700k+</SelectItem>
                            <SelectItem value="Not sure">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell us about your project — size, style, timeline, any special requirements…"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold px-8 py-3 w-full sm:w-auto"
                  >
                    {status === "loading" ? "Sending…" : "Send Enquiry"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* RIGHT: Contact info (40%) */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">Contact information</h2>

              {contactCards.map((card) => {
                const Inner = (
                  <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-0.5">{card.label}</p>
                      <p className="text-sm font-medium text-neutral-900">{card.value}</p>
                    </div>
                  </div>
                )
                return card.href ? (
                  <a key={card.label} href={card.href} className="block hover:opacity-80 transition-opacity">
                    {Inner}
                  </a>
                ) : (
                  <div key={card.label}>{Inner}</div>
                )
              })}

              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-neutral-100 h-44">
                <iframe
                  title="BYD B Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.0!2d115.97!3d-32.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s22+Olga+Road+Maddington+WA+6109!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Socials */}
              <div className="flex gap-3 pt-1">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-amber-500 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-neutral-700 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

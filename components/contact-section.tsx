"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import type { ElementType } from "react"
import { contact, socials, sections } from "@/lib/data/content"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

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

const contactCards = [
  { icon: MapPin, label: "Office Address", value: contact.address, href: undefined },
  { icon: Phone,  label: "Phone",          value: contact.phone,   href: contact.phoneHref },
  { icon: Mail,   label: "Email",          value: contact.email,   href: contact.emailHref },
  { icon: Clock,  label: "Office Hours",   value: contact.hours,   href: undefined },
]

const socialIcons: Record<string, ElementType> = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  WhatsApp: FaWhatsapp,
}

const socialColorClass: Record<string, string> = {
  Facebook: "text-[#1877F2]",
  Instagram: "text-[#E1306C]",
  WhatsApp: "text-[#25D366]",
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", projectType: "", suburb: "", budget: "", message: "" },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setStatus("loading")
      const res = await fetch("/api/contact", {
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
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">Contact <span className="text-[#00A5E0]">Us</span></h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto">
            {sections.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* LEFT: Form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Send an enquiry</h2>

            {status === "success" && (
              <Alert className="mb-6 bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  Thank you! Your message has been sent. We'll get back to you within one business day.
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
                      <Textarea rows={5} placeholder="Tell us about your project — size, style, timeline, any special requirements…" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            </Form>
          </div>

          {/* RIGHT: Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Contact information</h2>

            {contactCards.map((card) => {
              const Inner = (
                <div className="flex items-start gap-3 p-4 bg-neutral-50 border border-neutral-100">
                  <div className="w-8 h-8 bg-[#e6f7fd] flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-4 h-4 text-[#00A5E0]" />
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

            {/* Socials */}
            <div className="flex gap-3 pt-1">
              {socials.map(({ href, label }) => {
                const Icon = socialIcons[label]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
                  >
                    <Icon className={`w-4 h-4 ${socialColorClass[label]}`} />
                  </a>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

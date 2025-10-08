"use client"

import * as React from "react"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FaStar } from "react-icons/fa"

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email"),
  title: z.string().trim().min(1, "Review title is required"),
  rating: z.coerce.number().int().min(1, "Select a rating").max(5),
  review: z.string().trim().min(1, "Review is required"),
  human: z.boolean().refine((v) => v === true, { message: "Please confirm you are human" }),
  website: z.string().optional().refine((v) => (v ?? "").length === 0, { message: "Invalid" }),
})

type ReviewFormValues = {
  name: string
  email: string
  title: string
  rating: number | undefined
  review: string
  human: boolean
  website?: string
  date?: string
}

export default function Testimonials() {
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hoveredStar, setHoveredStar] = useState<number>(0)

  // submissionMessage: null | { type: 'success' | 'error', text: string }
  const [submissionMessage, setSubmissionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      rating: undefined,
      review: "",
      human: false,
      website: "",
    },
  })

  const onSubmit = async (values: ReviewFormValues) => {
    try {
      setLoading(true)
      const payload = { ...values, date: new Date().toISOString() }

      const res = await fetch("/api/reviews/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to submit review")
      }

      // success: show inline message card, reset form, hide form
      setSubmissionMessage({
        type: "success",
        text: "Thanks — we received your review. It will post later.",
      })

      form.reset({
        name: "",
        email: "",
        title: "",
        rating: undefined,
        review: "",
        human: false,
        website: "",
      })
      setShowForm(false)
    } catch (err: any) {
      setSubmissionMessage({
        type: "error",
        text: err?.message || "Submission failed. Please try again.",
      })
    } finally {
      setLoading(false)
      setHoveredStar(0)
    }
  }

  const testimonialsData = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      location: "Brisbane, QLD",
      text: "BYD B PTY LTD exceeded our expectations in every way. From the initial consultation to the final walkthrough, their attention to detail and commitment to quality was outstanding. Our dream home became a reality!",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      location: "Sydney, NSW",
      text: "The team at BYD B PTY LTD made the building process seamless and stress-free. Their communication was excellent, and they delivered on time and within budget. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma & James Wilson",
      location: "Melbourne, VIC",
      text: "We couldn't be happier with our new home. The craftsmanship is exceptional, and the team was professional throughout the entire process. Thank you for making our vision come to life!",
      rating: 5,
    },
    {
      id: 4,
      name: "Robert & Lisa Martinez",
      location: "Perth, WA",
      text: "Outstanding service from start to finish. The quality of workmanship is second to none, and they really listened to our needs. Our custom home is everything we dreamed of and more.",
      rating: 5,
    },
    {
      id: 5,
      name: "Andrew & Sophie Taylor",
      location: "Adelaide, SA",
      text: "Professional, reliable, and incredibly skilled. BYD B PTY LTD delivered our project on schedule with exceptional attention to detail. We love our new home!",
      rating: 5,
    },
    {
      id: 6,
      name: "Mark & Jennifer Brown",
      location: "Gold Coast, QLD",
      text: "From design to completion, BYD B PTY LTD provided excellent service. Their team was knowledgeable, friendly, and always available to answer our questions. Fantastic experience!",
      rating: 5,
    },
  ]

  return (
    <main>
      
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center p-4 mt-10">What Our Clients Say About Us</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center p-4">Don't just take our word for it. Here's what our satisfied homeowners have to say about their experience with BYD B PTY LTD</p>

      <div className="container mx-auto max-w-4xl p-6 py-10">
        {/* Inline submission message (shown above form / testimonials) */}
        {submissionMessage && (
          <div className={`mb-6 p-4 rounded-lg shadow ${submissionMessage.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className={`font-medium ${submissionMessage.type === "success" ? "text-green-800" : "text-red-800"}`}>
                  {submissionMessage.type === "success" ? "Thank you!" : "Submission failed"}
                </div>
                <div className="text-sm mt-1 text-muted-foreground">{submissionMessage.text}</div>
              </div>
              <button
                aria-label="Dismiss message"
                onClick={() => setSubmissionMessage(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {!showForm ? (
          <div className="flex justify-center mb-6">
            <Button
              onClick={() => {
                setShowForm(true)
                setSubmissionMessage(null) // clear any prior messages when opening form
              }}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-95"
            >
              Create your own review
            </Button>
          </div>
        ) : (
          <div className="bg-white border rounded-lg p-4 shadow-md mb-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <input type="text" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" {...form.register("website")} />

                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" required {...field} className="text-sm py-1 px-2"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" required {...field} className="text-sm py-1 px-2"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Perth, WA" required {...field} className="text-sm py-1 px-2"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="rating" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Rating</FormLabel>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map(star => {
                        const filled = (hoveredStar || field.value || 0) >= star
                        return (
                          <FaStar key={star} size={18}
                            className={`cursor-pointer transition-colors ${filled ? "text-yellow-400" : "text-gray-300"} hover:text-yellow-500`}
                            onClick={() => field.onChange(star)}
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(0)}
                          />
                        )
                      })}
                    </div>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="review" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Review</FormLabel>
                    <FormControl>
                      <Textarea rows={4} placeholder="Write your review" required {...field} className="text-sm whitespace-pre-line"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="human" render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormControl><Checkbox className="border-gray-800" checked={!!field.value} onCheckedChange={(v)=>field.onChange(Boolean(v))} /></FormControl>
                      <FormLabel className="text-sm m-0">Confirm you are human</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="flex items-center gap-3">
                  <Button type="submit" disabled={loading} className={`text-white ${loading ? "bg-green-700" : "bg-green-500 hover:bg-green-600"} text-sm px-4 py-1`}>
                    {loading ? "Submitting..." : "Submit"}
                  </Button>

                  <Button type="button" variant="destructive" disabled={loading} onClick={() => { form.reset(); setShowForm(false); setHoveredStar(0); }} className="bg-red-400 hover:bg-red-600 text-white text-sm px-4 py-1">
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {/* Render testimonials under the form */}
        <div className="mt-8 space-y-4">
          {testimonialsData.map((t) => (
            <div key={t.id} className="bg-white border rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
                <div className="flex space-x-1">
                  {Array.from({length:5}).map((_,i) => <FaStar key={i} size={14} className={i < t.rating ? "text-yellow-400" : "text-gray-300"} />)}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-700 whitespace-pre-line">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
      
    </main>
  )
}

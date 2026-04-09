"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { FaStar } from "react-icons/fa"

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email"),
  title: z.string().trim().min(1, "Location is required"),
  rating: z.coerce.number().int().min(1, "Select a rating").max(5),
  review: z.string().trim().min(1, "Review is required"),
  human: z.boolean().refine((v) => v === true, { message: "Please confirm you are human" }),
  website: z.string().optional().refine((v) => (v ?? "").length === 0, { message: "Invalid" }),
})

type FormValues = z.infer<typeof formSchema> & { date?: string }

export default function ReviewButton() {
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", title: "", rating: undefined as any, review: "", human: false, website: "" },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true)
      const res = await fetch("/api/reviews/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, date: new Date().toISOString() }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Submission failed")
      }
      setMessage({ type: "success", text: "Thanks — we received your review. It will post shortly." })
      form.reset()
      setShowForm(false)
    } catch (err: any) {
      setMessage({ type: "error", text: err?.message || "Submission failed. Please try again." })
    } finally {
      setLoading(false)
      setHoveredStar(0)
    }
  }

  return (
    <div>
      {message && (
        <div className={`mb-4 p-4 rounded-lg text-sm ${message.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
          {message.text}
          <button onClick={() => setMessage(null)} className="ml-3 underline text-xs">Dismiss</button>
        </div>
      )}

      {!showForm ? (
        <Button
          onClick={() => { setShowForm(true); setMessage(null) }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-95"
        >
          Leave a review
        </Button>
      ) : (
        <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm text-left max-w-lg mx-auto">
          <h3 className="text-base font-semibold text-neutral-900 mb-4">Write a review</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <input type="text" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" {...form.register("website")} />

              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Name</FormLabel>
                  <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Email</FormLabel>
                  <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="title" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Location</FormLabel>
                  <FormControl><Input placeholder="Perth, WA" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="rating" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Rating</FormLabel>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const filled = (hoveredStar || field.value || 0) >= star
                      return (
                        <FaStar key={star} size={20} className={`cursor-pointer transition-colors ${filled ? "text-amber-400" : "text-neutral-300"}`}
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
                  <FormControl><Textarea rows={4} placeholder="Write your review…" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="human" render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormControl><Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(Boolean(v))} /></FormControl>
                    <FormLabel className="text-sm m-0">I confirm I am human</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="flex gap-3 pt-1">
                <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 text-white text-sm">
                  {loading ? "Submitting…" : "Submit"}
                </Button>
                <Button type="button" variant="outline" disabled={loading} onClick={() => { form.reset(); setShowForm(false); setHoveredStar(0) }} className="text-sm">
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  )
}

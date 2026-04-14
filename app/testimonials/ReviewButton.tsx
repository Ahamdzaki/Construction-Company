"use client"

import { useState } from "react"
import { toast } from "sonner"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
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

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", title: "", rating: 0, review: "", human: false, website: "" },
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
      toast.success("Thanks — we received your review. It will post shortly.")
      form.reset()
      setShowForm(false)
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Submission failed. Please try again.")
    } finally {
      setLoading(false)
      setHoveredStar(0)
    }
  }

  return (
    <div>
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="inline-block px-7 py-3 border border-[#00A5E0] text-[#00A5E0] text-sm font-medium tracking-wide hover:bg-[#00A5E0] hover:text-white transition-colors duration-200 whitespace-nowrap"
        >
          Leave a review
        </button>
      ) : (
        <div className="bg-white border border-neutral-200 p-8 shadow-sm text-left w-full">
          <h3 className="text-base font-semibold text-neutral-900 mb-6">Write a review</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <input type="text" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" {...form.register("website")} />

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              </div>

              {/* Row 2: Location + Rating */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const filled = (hoveredStar || field.value || 0) >= star
                        return (
                          <FaStar key={star} size={22} className={`cursor-pointer transition-colors ${filled ? "text-amber-400" : "text-neutral-300"}`}
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
              </div>

              {/* Row 3: Review full width */}
              <FormField control={form.control} name="review" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Review</FormLabel>
                  <FormControl><Textarea rows={5} placeholder="Write your review…" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Row 4: Human + buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                <FormField control={form.control} name="human" render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormControl><Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(Boolean(v))} /></FormControl>
                      <FormLabel className="text-sm m-0">I confirm I am human</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="flex gap-3">
                  <button type="submit" disabled={loading}
                    className="px-7 py-3 bg-[#00A5E0] text-white text-sm font-medium tracking-wide hover:bg-[#0090c4] transition-colors duration-200 disabled:opacity-50">
                    {loading ? "Submitting…" : "Submit"}
                  </button>
                  <button type="button" disabled={loading}
                    onClick={() => { form.reset(); setShowForm(false); setHoveredStar(0) }}
                    className="px-7 py-3 border border-neutral-300 text-neutral-600 text-sm font-medium tracking-wide hover:border-neutral-400 transition-colors duration-200 disabled:opacity-50">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  )
}

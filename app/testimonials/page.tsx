import type { Metadata } from "next"
import { Star } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"
import Footer from "@/components/footer"
import CtaBanner from "@/components/ui/cta-banner"
import ReviewButton from "./ReviewButton"

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: "Read what our clients say about BYD B PTY LTD — licensed home builders in Western Australia with 13+ years experience.",
}

export default function TestimonialsPage() {
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
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-amber-400 mb-3">Reviews</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">What our clients say</h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what our satisfied homeowners have to say.
          </p>
        </div>
      </section>

      {/* Testimonial grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="absolute top-4 left-5 text-6xl leading-none text-neutral-100 font-serif select-none">
                  &ldquo;
                </span>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-neutral-700 italic leading-relaxed mb-5 relative z-10">
                  {t.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.location}</p>
                  </div>
                  {t.date && (
                    <span className="text-xs text-neutral-400">{t.date}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Leave a review */}
          <div className="text-center mt-12">
            <p className="text-sm text-neutral-500 mb-4">Had a great experience? We&apos;d love to hear from you.</p>
            <ReviewButton />
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

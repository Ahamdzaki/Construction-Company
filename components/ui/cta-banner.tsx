import Link from "next/link"
import { Phone } from "lucide-react"
import { ctaBanner } from "@/lib/data/content"

export default function CtaBanner() {
  return (
    <section className="bg-white border-t border-neutral-200 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-3">
          {ctaBanner.eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
          {ctaBanner.heading}
        </h2>
        <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto mb-10">
          {ctaBanner.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaBanner.secondaryCta.href}
            className="flex items-center gap-2 px-7 py-3 border border-neutral-300 text-neutral-700 text-sm font-medium uppercase tracking-[0.1em] hover:border-[#00A5E0] hover:text-[#00A5E0] transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            {ctaBanner.secondaryCta.label}
          </a>
          <Link
            href={ctaBanner.primaryCta.href}
            className="px-7 py-3 bg-amber-500 hover:bg-amber-600 text-neutral-900 text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200"
          >
            {ctaBanner.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}

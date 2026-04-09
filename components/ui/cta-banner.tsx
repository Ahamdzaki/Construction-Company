import Link from "next/link"
import { Phone } from "lucide-react"

export default function CtaBanner() {
  return (
    <section className="bg-[#005f82] py-16 relative overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-3">
          Free Consultation
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to build your dream home?
        </h2>
        <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-8">
          Contact us today for a free consultation and quote. Licensed builder BC106152 — serving Western Australia for 13+ years.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+61410664649"
            className="flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now: 0410 664 649
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 rounded-lg font-semibold transition-colors text-sm"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

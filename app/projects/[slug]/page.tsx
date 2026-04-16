import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Car, Maximize, ChevronRight } from "lucide-react"
import { projects, getProjectBySlug, getRelatedProjects } from "@/lib/data/projects"
import Footer from "@/components/footer"
import CtaBanner from "@/components/ui/cta-banner"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = getRelatedProjects(project)

  return (
    <>
      {/* Hero image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-neutral-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#00A5E0] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/gallery" className="hover:text-[#00A5E0] transition-colors">Gallery</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-neutral-900">{project.title}</span>
          </nav>

          <div className="flex flex-wrap items-start gap-3 mb-3">
            <span className="text-xs uppercase tracking-wider font-medium text-amber-500 bg-amber-50 px-2 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-sm font-semibold text-[#00A5E0]">{project.price}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{project.title}</h1>

          {/* Specs */}
          {(project.bedrooms || project.bathrooms || project.carSpaces || project.size) && (
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-neutral-600">
              {project.bedrooms && (
                <div className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-[#00A5E0]" />
                  {project.bedrooms} Bedrooms
                </div>
              )}
              {project.bathrooms && (
                <div className="flex items-center gap-1.5">
                  <Bath className="w-4 h-4 text-[#00A5E0]" />
                  {project.bathrooms} Bathrooms
                </div>
              )}
              {project.carSpaces && (
                <div className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#00A5E0]" />
                  {project.carSpaces} Car spaces
                </div>
              )}
              {project.size && (
                <div className="flex items-center gap-1.5">
                  <Maximize className="w-4 h-4 text-[#00A5E0]" />
                  {project.size}
                </div>
              )}
            </div>
          )}

          <p className="text-base text-neutral-600 leading-relaxed mb-8">{project.description}</p>

          {/* Gallery grid */}
          {project.gallery.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-200">
                  <Image
                    src={img}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 rounded-lg font-semibold text-sm text-center transition-colors"
            >
              Enquire about this project
            </Link>
            <Link
              href="/gallery"
              className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg text-sm font-medium text-center hover:bg-neutral-50 transition-colors"
            >
              ← Back to gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-12 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group block rounded-xl overflow-hidden border border-neutral-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3] bg-neutral-200">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-amber-500 font-medium uppercase tracking-wider">{p.category}</p>
                    <p className="text-sm font-semibold text-neutral-900 mt-0.5">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
      <Footer />
    </>
  )
}

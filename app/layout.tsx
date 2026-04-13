import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Navigation from "@/components/navigation"
import FixedContactButton from "@/components/fixed-contact-button"
import { company, contact } from "@/lib/data/content"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bydb.com.au"),
  title: {
    default: "BYD B — Custom Home Builders in Perth, WA",
    template: "%s | BYD B — Home Builders Perth",
  },
  description:
    "Licensed home builders in Western Australia with 13+ years experience. New homes, renovations, and custom designs. Builder Licence BC106152. Serving Perth and surrounds.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://bydb.com.au",
    siteName: "BYD B PTY LTD",
    images: [{ url: "/logos.png", width: 1200, height: 630, alt: "BYD B — Custom Home Builders Perth" }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  image: `${company.domain}${company.logo}`,
  url: company.domain,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "22 Olga Road",
    addressLocality: "Maddington",
    addressRegion: "WA",
    postalCode: "6109",
    addressCountry: "AU",
  },
  openingHours: "Mo-Fr 07:00-17:00",
  priceRange: "$$-$$$$",
  areaServed: company.state,
  description:
    `Licensed home builders in ${company.state} with ${company.yearsExperience} years experience. New homes, renovations, and custom designs. Builder Licence ${company.license}.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="theme-color" content="#1e3a8a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable}`}>
        <Navigation />
        <Suspense fallback={null}>
          <main className="pt-[84px]">{children}</main>
        </Suspense>
        <FixedContactButton />
        <Analytics />
      </body>
    </html>
  )
}

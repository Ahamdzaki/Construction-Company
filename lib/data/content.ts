// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL CONTENT FILE
// All site-wide text, images, headings, and data live here.
// Import what you need in any page or component.
// ─────────────────────────────────────────────────────────────────────────────

// ── Company ──────────────────────────────────────────────────────────────────
export const company = {
  name: "BYD B PTY LTD",
  tagline:
    "Building exceptional homes across Western Australia with 13+ years of experience and unmatched craftsmanship.",
  logo: "/logos.png",
  license: "BC106152",
  abn: "66 678 883 488",
  acn: "678 883 488",
  state: "Western Australia",
  domain: "https://bydb.com.au",
  yearsExperience: "13+",
  homesBuilt: "100+",
  rating: "5.0★",
}

// ── Contact ───────────────────────────────────────────────────────────────────
export const contact = {
  address: "22 Olga Road, Maddington WA 6109",
  phone: "0410 664 649",
  phoneHref: "tel:+61410664649",
  email: "bpanahi@bydb.com.au",
  emailHref: "mailto:bpanahi@bydb.com.au",
  hours: "Monday–Friday, 7:00 AM–5:00 PM",
  hoursShort: "Mon–Fri, 7:00 AM – 5:00 PM",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.0!2d115.97!3d-32.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s22+Olga+Road+Maddington+WA+6109!5e0!3m2!1sen!2sau!4v1",
}

// ── Social Links ──────────────────────────────────────────────────────────────
export const socials = [
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61582903377561" },
  { label: "Instagram", href: "https://www.instagram.com/bydbau/" },
  { label: "WhatsApp",  href: "https://wa.me/61410664649" },
]

// ── Navigation ────────────────────────────────────────────────────────────────
export const navItems = [
  { href: "/",              label: "Home" },
  { href: "/about",         label: "About" },
  { href: "/services",      label: "Services" },
  { href: "/gallery",       label: "Gallery" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact",      label: "Contact" },
]

export const footerLinks = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About Us" },
  { href: "/services",     label: "Services" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact",      label: "Contact" },
]

// ── Hero Section ──────────────────────────────────────────────────────────────
export const hero = {
  headline: "Building Dreams Into Reality",
  subtitle:
    "From custom new builds to complete renovations, we bring your vision to life with quality craftsmanship you can trust.",
  primaryCta:   { label: "Get a Free Quote",  href: "/#contact" },
  secondaryCta: { label: "View Our Projects", href: "/gallery" },
  images: [
    { src: "/new images/pexels-break-media-186685971-14650436.jpg", alt: "BYD B construction project" },
    { src: "/new images/pexels-macourt-media-1519726-33440163.jpg", alt: "BYD B construction project" },
    { src: "/new images/pexels-davidpickup-36875521.jpg",           alt: "BYD B construction project" },
  ],
}

// ── Stats ─────────────────────────────────────────────────────────────────────
export const stats = [
  { value: "13+",      label: "Years Experience" },
  { value: "100+",     label: "Homes Built" },
  { value: "BC106152", label: "Licensed Builder" },
  { value: "5.0★",     label: "Client Rating", color: "#f59e0b" },
]

// ── Services ──────────────────────────────────────────────────────────────────
// iconName maps to lucide-react icons used in ServicesSections and ServicesPreview
export const services = [
  {
    iconName: "Home",
    title: "New Home Construction",
    shortDescription:
      "Custom-built homes designed to your specifications with quality materials and expert craftsmanship.",
    description:
      "Complete home building services from foundation to finish, backed by 13 years of experience and full licensing. We specialise in single and double storey homes across Western Australia.",
    features: [
      "Custom floor plans",
      "Premium materials",
      "Energy-efficient designs",
      "Fixed-price contracts",
    ],
    href: "/services",
  },
  {
    iconName: "Wrench",
    title: "Home Renovations",
    shortDescription:
      "Transform your existing space with our comprehensive renovation services, from kitchens to full home makeovers.",
    description:
      "Transform your existing home with our comprehensive renovation services, from kitchen makeovers to full home extensions. We respect your home as if it were our own.",
    features: [
      "Kitchen & bathroom renovations",
      "Home extensions",
      "Structural modifications",
      "Heritage restorations",
    ],
    href: "/services",
  },
  {
    iconName: "Palette",
    title: "Custom Designs",
    shortDescription:
      "Work with our architects and designers to create a unique home that reflects your lifestyle and preferences.",
    description:
      "Work with our experienced team to create a truly unique home that reflects your lifestyle and preferences. From architectural design through to material selection, we guide every step.",
    features: [
      "Architectural design",
      "Interior design consultation",
      "Planning permit assistance",
      "Material selection guidance",
    ],
    href: "/services",
  },
  {
    iconName: "Building2",
    title: "Commercial Projects",
    shortDescription:
      "Professional construction services for commercial properties, offices, and retail spaces.",
    description:
      "Professional construction services for commercial properties, offices, and retail spaces. We deliver high-quality builds that meet commercial standards and business requirements.",
    features: [
      "Office fit-outs & refurbishments",
      "Retail & hospitality spaces",
      "Warehouse & industrial builds",
      "Commercial compliance & approvals",
    ],
    href: "/services",
  },
]

// ── Process Steps ─────────────────────────────────────────────────────────────
export const processSteps = [
  { step: "01", title: "Consultation", description: "Initial meeting to discuss your vision, budget, and timeline." },
  { step: "02", title: "Design",       description: "Detailed plans and specifications tailored to your needs." },
  { step: "03", title: "Construction", description: "Professional building with regular progress updates." },
  { step: "04", title: "Handover",     description: "Final inspection, walkthrough, and keys to your new home." },
]

// ── About Page ────────────────────────────────────────────────────────────────
export const about = {
  overview: {
    image:    "/construction-team-working-on-building-site-with-mo.png",
    imageAlt: "BYD B construction team",
    paragraph1:
      "BYD B PTY LTD brings over 13 years of experience in the construction industry. We specialise in building high-quality residential homes — single and double storey — and have built a reputation for quality, reliability, and innovation across Western Australia.",
    paragraph2:
      "Our company is fully registered, licenced, and insured. Every project we take on is backed by our builder's licence BC106152 and comprehensive warranty coverage. We believe great homes start with great relationships — which is why we work closely with every client from first consultation to final handover.",
  },
  credentials: [
    { label: "ABN",              value: "66 678 883 488" },
    { label: "ACN",              value: "678 883 488" },
    { label: "Builder's Licence", value: "BC106152" },
    { label: "Registered in",    value: "Western Australia" },
  ],
  // iconName maps to lucide-react: Award | Shield | Zap
  values: [
    {
      iconName:    "Award",
      heading:     "Quality First",
      title:       "Built to last",
      description:
        "Every home we build is backed by our BC106152 builder's licence and a comprehensive structural warranty. We use premium materials from trusted Australian suppliers and conduct rigorous quality checks at every stage.",
    },
    {
      iconName:    "Shield",
      heading:     "Trust & Transparency",
      title:       "No surprises",
      description:
        "We offer fixed-price contracts so you know exactly what you're paying from day one. Our clients receive regular progress updates with photos, and our team is always a phone call away.",
    },
    {
      iconName:    "Zap",
      heading:     "Innovation & Excellence",
      title:       "Modern living, built smart",
      description:
        "We incorporate energy-efficient designs, smart home readiness, and sustainable building practices into every project — delivering homes that are as efficient as they are beautiful.",
    },
  ],
}

// ── Section Headings ──────────────────────────────────────────────────────────
export const sections = {
  services: {
    eyebrow:     "What We Do",
    heading:     "Our Services",
    description: "Comprehensive building services to bring your vision to life.",
  },
  gallery: {
    eyebrow:     "Our Work",
    heading:     "Featured Projects",
    description: "Explore our portfolio of completed homes across Western Australia.",
    cta:         { label: "Explore our portfolio", href: "/gallery" },
  },
  contact: {
    eyebrow:     "Get In Touch",
    heading:     "Contact Us",
    description: "Ready to start your project? Send us a message and we'll be in touch within one business day.",
  },
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
export const ctaBanner = {
  eyebrow:     "Free Consultation",
  heading:     "Ready to build your dream home?",
  description:
    "Contact us today for a free consultation and quote. Licensed builder BC106152 — serving Western Australia for 13+ years.",
  primaryCta:   { label: "Request a Quote",        href: "/#contact" },
  secondaryCta: { label: "Call Now: 0410 664 649", href: "tel:+61410664649" },
}

// ── Locations Mosaic (Instagram-style grid) ───────────────────────────────────
export const mosaicImages = [
  { src: "/new images/beautiful-suburban-home-with-green-lawn-blue-sky.jpg",            alt: "BYD B suburban home with green lawn" },
  { src: "/new images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg", alt: "BYD B charming home with garden" },
  { src: "/new images/esther-zheng-Y5NaxSbLPDA-unsplash.jpg",                           alt: "BYD B home exterior" },
  { src: "/new images/bhuwan-bansal-MXFs1CztRIc-unsplash.jpg",                         alt: "BYD B residential project" },
  { src: "/new images/nerissa-j-2Hk2biJ7_vc-unsplash.jpg",                             alt: "BYD B construction project" },
  { src: "/new images/wes-fischer-g39p1kDjvSY-unsplash.jpg",                            alt: "BYD B modern home" },
]

// ── Footer Services List ──────────────────────────────────────────────────────
export const footerServices = [
  "Custom Home Building",
  "Home Renovations",
  "Kitchen & Bathroom",
  "Extensions & Additions",
  "Custom Design",
]

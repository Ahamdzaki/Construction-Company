export interface Testimonial {
  id: number
  name: string
  location: string
  text: string
  rating: number
  date?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "Perth, WA",
    text: "BYD B PTY LTD exceeded our expectations in every way. From the initial consultation to the final walkthrough, their attention to detail and commitment to quality was outstanding. Our dream home became a reality!",
    rating: 5,
    date: "2024-11",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Perth, WA",
    text: "The team at BYD B PTY LTD made the building process seamless and stress-free. Their communication was excellent, and they delivered on time and within budget. Highly recommended!",
    rating: 5,
    date: "2024-10",
  },
  {
    id: 3,
    name: "Emma & James Wilson",
    location: "Maddington, WA",
    text: "We couldn't be happier with our new home. The craftsmanship is exceptional, and the team was professional throughout the entire process. Thank you for making our vision come to life!",
    rating: 5,
    date: "2024-09",
  },
  {
    id: 4,
    name: "Robert & Lisa Martinez",
    location: "Perth, WA",
    text: "Outstanding service from start to finish. The quality of workmanship is second to none, and they really listened to our needs. Our custom home is everything we dreamed of and more.",
    rating: 5,
    date: "2024-08",
  },
  {
    id: 5,
    name: "Andrew & Sophie Taylor",
    location: "Maddington, WA",
    text: "Professional, reliable, and incredibly skilled. BYD B PTY LTD delivered our project on schedule with exceptional attention to detail. We love our new home!",
    rating: 5,
    date: "2024-07",
  },
  {
    id: 6,
    name: "Mark & Jennifer Brown",
    location: "Perth, WA",
    text: "From design to completion, BYD B PTY LTD provided excellent service. Their team was knowledgeable, friendly, and always available to answer our questions. Fantastic experience!",
    rating: 5,
    date: "2024-06",
  },
]

"use client"

import { motion } from "framer-motion"
// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" as const } },
}

type AnimatedItemProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};
function AnimatedItem({ children, className = "", ...props }: AnimatedItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

import { Phone, Mail, MapPin } from "lucide-react"
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactInfo() {
  const handleCall = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = "tel:+61410664649"
    } else {
      navigator.clipboard.writeText("0410 664 649")
      alert("Phone number copied to clipboard: 0410 664 649")
    }
  }

  return (
    <motion.section
      className="py-16 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedItem className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your dream home project? Contact us today for a consultation.
          </p>
        </AnimatedItem>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedItem className="text-center">
            <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <a href="tel:+61410664649" className="text-gray-600 hover:text-black font-medium transition-colors block" style={{wordBreak:'break-all'}}>0410 664 649</a>
          </AnimatedItem>

          <AnimatedItem className="text-center">
            <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Email Us</h3>
            <a
              href="mailto:buildyourdreamhome2@gmail.com"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors block"
              style={{wordBreak:'break-all'}}>
              buildyourdreamhome2@gmail.com
            </a>
          </AnimatedItem>

          <AnimatedItem className="text-center">
            <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              8 Brian Street
              <br />
              Mount Nasura WA 6112
            </p>
          </AnimatedItem>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-5">
          <AnimatedItem className="text-center">
            <a
              href="https://www.facebook.com/profile.php?id=61580685163994"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            >
              <FaFacebookF className="h-8 w-8 text-white" />
            </a>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
          </AnimatedItem>
          {/* Instagram */}
          <AnimatedItem className="text-center">
            <a
              href="https://www.instagram.com/buildyourdreambuilding/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram className="h-8 w-8 text-white" />
            </a>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
          </AnimatedItem>
          {/* WhatsApp */}
          <AnimatedItem className="text-center">
            <a
              href="https://wa.me/61410664649"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            >
              <FaWhatsapp className="h-8 w-8 text-white" />
            </a>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
          </AnimatedItem>
        </div>
      </div>
    </motion.section>
  );
}

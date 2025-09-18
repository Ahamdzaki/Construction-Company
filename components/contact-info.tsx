"use client"

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your dream home project? Contact us today for a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <a href="tel:+61410664649" className="text-blue-600 hover:text-blue-700 font-medium transition-colors block" style={{wordBreak:'break-all'}}>0410 664 649</a>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <a
              href="mailto:buildyourdreamhome2@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors block"
              style={{wordBreak:'break-all'}}>
              buildyourdreamhome2@gmail.com
            </a>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              8 Brian Street
              <br />
              Mount Nasura WA 6112
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-5">
          <div className="text-center">
            <a
              href="https://www.facebook.com/profile.php?id=61580685163994"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
              <FaFacebookF className="h-8 w-8 text-white" />
            </a>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
          </div>
          {/* Instagram */}
          <div className="text-center">
            <a
              href="https://www.instagram.com/buildyourdreambuilding/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FaInstagram className="h-8 w-8 text-white" />
            </a>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
          </div>

          {/* WhatsApp */}
          <div className="text-center">
            <a
             href="https://wa.me/61410664649"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FaWhatsapp className="h-8 w-8 text-white" />
            </a>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
          </div>
         
        </div>
      </div>
    </section>
  )
}

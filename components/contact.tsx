"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: ["company@gmail.com", "infoweb@gmail.com"],
      color: "#FF9700",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+84 0977425031", "+998 765 775 34"],
      color: "#FF4581",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["State/province/area:", "Georgia 198"],
      color: "#00C4F4",
    },
  ]

  return (
    <section id="contact" className="contact-area py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 bg-[#00C4F4]/10 border border-[#00C4F4]/20 rounded-full text-sm font-bold uppercase text-white tracking-wider mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-[#00C4F4] rounded-full mr-3"></div>
            Contact
            <div className="w-2 h-2 bg-[#00C4F4] rounded-full ml-3"></div>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight">
            <span className="text-[#00C4F4] bg-gradient-to-r from-[#00C4F4] to-[#0099CC] bg-clip-text text-transparent">
              Contact
            </span>{" "}
            ICO Crypto
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group text-center p-6 sm:p-8 bg-[#0B1D33]/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="relative mx-auto mb-6 sm:mb-8">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full border-2 border-white/10 mx-auto relative z-10 group-hover:border-opacity-30 transition-all duration-300"
                  style={{ borderColor: `${info.color}30` }}
                >
                  <div
                    className="absolute inset-2 rounded-full border-2 transition-all duration-300"
                    style={{ borderColor: info.color }}
                  ></div>
                  <info.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 z-10 transition-colors duration-300"
                    style={{ color: info.color }}
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-3 sm:mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm sm:text-base text-white/80 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-[#0B1D33]/30 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12"
            style={{
              backgroundImage: `url(/assets/img/bg/contact_bg.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Form Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0B1D33]/80 backdrop-blur-sm border border-white/20 focus:border-[#00C4F4] rounded-xl text-white placeholder:text-white/60 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C4F4]/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0B1D33]/80 backdrop-blur-sm border border-white/20 focus:border-[#00C4F4] rounded-xl text-white placeholder:text-white/60 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C4F4]/30"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0B1D33]/80 backdrop-blur-sm border border-white/20 focus:border-[#00C4F4] rounded-xl text-white placeholder:text-white/60 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C4F4]/30 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#00C4F4] to-[#0099CC] hover:from-[#0099CC] hover:to-[#00C4F4] disabled:from-gray-600 disabled:to-gray-700 text-white font-bold text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#00C4F4]/25 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#00C4F4]/50 focus:ring-offset-2 focus:ring-offset-[#030B15]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

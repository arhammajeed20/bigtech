"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Youtube, Twitter, Facebook, WebcamIcon as Skype, Send } from "lucide-react"
import { logos } from "@/app/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    useful: ["Contact us", "How it Works", "Create", "Explore", "Terms & Services"],
    community: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"],
    legal: ["Terms and conditions", "Privacy policy", "Login / Signup"],
  }

  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Skype, href: "#", label: "Skype" },
  ]

  return (
    <footer className="footer-area relative z-[1] bg-gradient-to-t from-[#0B1D33] to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scroll to Top */}
        <div className="relative py-8 sm:py-12">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#030B15] border border-[#1F262F] hover:border-[#00C4F4] rounded-full text-white hover:text-[#00C4F4] mx-auto transition-all duration-300 hover:transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#00C4F4]/50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-[#1F262F] -z-10"></div>
        </div>

        {/* Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={logos.footer || "/placeholder.svg"}
                  alt="Bigtech Logo"
                  width={150}
                  height={50}
                  className="w-[100px] h-[40px] sm:w-[120px] sm:h-[50px]"
                />
              </Link>
              <p className="text-sm sm:text-base text-[#A4B4C3] leading-relaxed mb-6 sm:mb-8 max-w-sm">
                A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci
                tationulla
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border-2 border-[#719ED6]/30 text-white hover:bg-[#00C4F4] hover:border-[#00C4F4] transition-all duration-300 hover:transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider mb-6 sm:mb-8">Useful Links</h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.useful.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-sm sm:text-base text-[#A4B4C3] hover:text-white transition-colors duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-px before:bg-white before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider mb-6 sm:mb-8">Community</h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.community.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-sm sm:text-base text-[#A4B4C3] hover:text-white transition-colors duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-px before:bg-white before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider mb-6 sm:mb-8">
                Subscribe Newsletter
              </h4>
              <p className="text-sm sm:text-base text-[#A4B4C3] leading-relaxed mb-6 sm:mb-8">
                Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
              </p>

              {/* Newsletter Form */}
              <form className="relative">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Info@gmail.com"
                    required
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-[#00C4F4] rounded-xl text-white placeholder:text-white/60 pr-14 pl-4 sm:pl-6 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C4F4]/30"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#00C4F4] hover:bg-[#0099CC] rounded-lg flex items-center justify-center text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C4F4]/50"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base text-white">Copyright &copy; 2023. All Rights Reserved Bigtech</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-sm text-[#A4B4C3] hover:text-white transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { logos } from "@/app/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  const navItems = [
    { name: "Home", href: "#header", hasSubmenu: true },
    { name: "About us", href: "#about" },
    { name: "Sales", href: "#sales" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Blog", href: "#blog", hasSubmenu: true },
    { name: "Contact us", href: "#contact" },
  ]

  const languages = ["IND", "BNG", "TUR", "CIN"]

  return (
    <>
      <header id="header" className="relative z-50">
        <div id="header-fixed-height" className={isSticky ? "block h-[70px] md:h-[85px] lg:h-[105px]" : "hidden"}></div>
        <div
          className={`menu-area border-b border-white/10 transition-all duration-300 ${
            isSticky
              ? "fixed top-0 left-0 w-full z-[99] bg-[#030B15]/95 backdrop-blur-md shadow-lg animate-fadeInDown"
              : "relative bg-[#030B15]"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[70px] md:h-[85px] lg:h-[105px]">
              {/* Logo */}
              <div className="logo flex-shrink-0">
                <Link href="/" className="block">
                  <Image
                    src={logos.main || "/placeholder.svg"}
                    alt="Bigtech Logo"
                    width={120}
                    height={0}
                    className="w-[80px] h-[33px] sm:w-[100px] sm:h-[40px] lg:w-[120px] lg:h-[50px]"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
                <ul className="flex items-center space-x-8 xl:space-x-12">
                  {navItems.map((item, index) => (
                    <li key={index} className={`relative group ${item.hasSubmenu ? "dropdown" : ""}`}>
                      <Link
                        href={item.href}
                        className="flex items-center text-sm xl:text-base font-semibold uppercase text-white py-4 leading-none tracking-wide hover:text-[#00C4F4] transition-colors duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[3px] before:bg-[#00C4F4] before:origin-right before:scale-x-0 before:transition-transform before:duration-400 hover:before:origin-left hover:before:scale-x-100"
                      >
                        {item.name}
                        {item.hasSubmenu && <ChevronDown className="ml-1 w-3 h-3" />}
                      </Link>
                      {item.hasSubmenu && (
                        <ul className="absolute left-0 top-full min-w-[200px] xl:min-w-[230px] border border-white/7 bg-[#0B1D33]/95 backdrop-blur-md transform scale-y-0 origin-top transition-all duration-300 shadow-lg py-4 invisible opacity-0 z-50 group-hover:visible group-hover:opacity-100 group-hover:scale-y-100">
                          <li>
                            <Link
                              href="#"
                              className="block py-2 px-6 text-sm font-medium text-white uppercase transition-all duration-300 hover:text-[#00C4F4] hover:bg-white/5"
                            >
                              Home One
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="block py-2 px-6 text-sm font-medium text-white uppercase transition-all duration-300 hover:text-[#00C4F4] hover:bg-white/5"
                            >
                              Home Two
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    className="flex items-center text-white text-sm lg:text-base font-medium tracking-wide hover:text-[#00C4F4] transition-colors"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    ENG
                    <ChevronDown className="ml-1 w-3 h-3" />
                  </button>
                  {isLangOpen && (
                    <ul className="absolute right-0 top-full mt-2 bg-[#0B1D33]/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg min-w-[80px] py-2 z-50">
                      {languages.map((lang) => (
                        <li key={lang}>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-white uppercase tracking-wide hover:text-[#00C4F4] hover:bg-white/5 transition-colors"
                            onClick={() => setIsLangOpen(false)}
                          >
                            {lang}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Buy Button */}
                <Link
                  href="#"
                  className="btn bg-gradient-to-r from-[#00C4F4] to-[#0099CC] hover:from-[#0099CC] hover:to-[#00C4F4] text-white font-bold text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-4 rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#00C4F4]/25 transform hover:scale-105"
                >
                  Buy Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:text-[#00C4F4] transition-colors"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[98] transition-all duration-300 lg:hidden ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed right-0 top-0 w-[280px] sm:w-[320px] h-full bg-[#0B1D33] z-[99] transform transition-transform duration-300 lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src={logos.mobile || "/placeholder.svg"}
                  alt="Bigtech Logo"
                  width={120}
                  height={40}
                  className="w-[100px] h-[33px]"
                />
              </Link>
              <button
                className="p-2 text-[#00C4F4] hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 overflow-y-auto py-6">
              <ul className="space-y-2 px-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <div className="space-y-2">
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3 text-white font-semibold uppercase text-sm tracking-wide hover:text-[#00C4F4] transition-colors"
                        onClick={() => !item.hasSubmenu && setIsMenuOpen(false)}
                      >
                        {item.name}
                        {item.hasSubmenu && (
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveSubmenu(activeSubmenu === index ? null : index)
                            }}
                            className="p-1"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${activeSubmenu === index ? "rotate-180" : ""}`}
                            />
                          </button>
                        )}
                      </Link>
                      {item.hasSubmenu && (
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeSubmenu === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <ul className="pl-4 space-y-2 border-l border-white/10">
                            <li>
                              <Link
                                href="#"
                                className="block py-2 text-sm text-white/80 hover:text-[#00C4F4] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Home One
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block py-2 text-sm text-white/80 hover:text-[#00C4F4] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Home Two
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-white/10 space-y-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  className="flex items-center justify-between w-full py-2 text-white font-medium"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  Language: ENG
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
                </button>
                {isLangOpen && (
                  <div className="mt-2 space-y-1">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        className="block w-full text-left py-2 px-3 text-sm text-white/80 hover:text-[#00C4F4] hover:bg-white/5 rounded transition-colors"
                        onClick={() => {
                          setIsLangOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Buy Button */}
              <Link
                href="#"
                className="block w-full bg-gradient-to-r from-[#00C4F4] to-[#0099CC] text-white font-bold text-center py-3 rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy Now
              </Link>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 pt-4">
                {["facebook-f", "twitter", "instagram", "linkedin-in", "youtube"].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-[#00C4F4] border border-white/20 rounded hover:border-[#00C4F4] transition-colors"
                  >
                    <span className={`fab fa-${social} text-xs`}></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

import Image from "next/image"
import Link from "next/link"
import { about } from "@/app/image"

export default function About() {
  return (
    <section id="about" className="about-area py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Images */}
          <div className="order-2 lg:order-1 mx-10">
            <div className="relative max-w-md m x-auto lg:max-w-none lg:ml-auto lg:mr-0">
              {/* Main Image */}
              <div className="relative z-10">
                <Image
                  src={about.main || "/placeholder.svg"}
                  alt="About main image"
                  width={350}
                  height={400}
                  className="w-full h-auto max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] mx-auto lg:mx-0 rounded-lg shadow-2xl"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 350px"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute -left-4 sm:-left-8 lg:-left-12 top-8 sm:top-12 lg:top-16 z-0">
                <Image
                  src={about.secondary || "/placeholder.svg"}
                  alt="About secondary image"
                  width={80}
                  height={100}
                  className="w-[60px] sm:w-[60px] lg:w-[80px] h-auto opacity-80 rounded-lg"
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl mx-auto lg:max-w-none text-center lg:text-left">
              {/* Section Title */}
              <div className="mb-6 sm:mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-[#00C4F4]/10 border border-[#00C4F4]/20 rounded-full text-sm font-bold uppercase text-white tracking-wider mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-[#00C4F4] rounded-full mr-3"></div>
                  Who we are
                  <div className="w-2 h-2 bg-[#00C4F4] rounded-full ml-3"></div>
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight mb-0">
                  The World's{" "}
                  <span className="text-[#00C4F4] bg-gradient-to-r from-[#00C4F4] to-[#0099CC] bg-clip-text text-transparent">
                    1st ICO
                  </span>{" "}
                  Platform That Offers Rewards
                </h2>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#A4B4C3] leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-lg mx-auto lg:max-w-none">
                The World's 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to
                purchase and sell their tokens
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#00C4F4] to-[#0099CC] hover:from-[#0099CC] hover:to-[#00C4F4] text-white font-bold text-sm sm:text-base px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#00C4F4]/25 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00C4F4]/50 focus:ring-offset-2 focus:ring-offset-[#030B15]"
                >
                  Purchase Tokens
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

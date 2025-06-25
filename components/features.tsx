"use client"
import Image from "next/image"
import Link from "next/link"
import { features } from "@/app/image"

export default function Features() {
  const featureData = [
    {
      icon: features.mobile,
      title: "Mobile payment make easy",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      icon: features.transaction,
      title: "Lifetime free transaction",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      icon: features.identity,
      title: "Protect the identity",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      icon: features.security,
      title: "Security & control over money",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      icon: features.lifetime,
      title: "Lifetime free transaction",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      icon: features.protect,
      title: "Protect the identity",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      icon: features.control,
      title: "Security & control over money",
      description: "Add new, trending and rare artwork to your collection.",
    },
  ]

  return (
    <section className="choose-area pb-16 sm:pb-20 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 bg-[#00C4F4]/10 border border-[#00C4F4]/20 rounded-full text-sm font-bold uppercase text-white tracking-wider mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-[#00C4F4] rounded-full mr-3"></div>
            why Choose us
            <div className="w-2 h-2 bg-[#00C4F4] rounded-full ml-3"></div>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight">
            Why choose our bigtech{" "}
            <span className="text-[#00C4F4] bg-gradient-to-r from-[#00C4F4] to-[#0099CC] bg-clip-text text-transparent">
              Token
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#030B15] border border-[#121A23] hover:border-[#00C4F4]/30 rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#00C4F4]/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white/5 group-hover:bg-[#00C4F4]/10 border-2 border-white/10 group-hover:border-[#00C4F4]/30 rounded-full mb-6 sm:mb-8 transition-all duration-300 mx-auto sm:mx-0">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-tight mb-4 sm:mb-6 group-hover:text-[#00C4F4] transition-colors duration-300">
                  <Link href="#" className="hover:text-[#00C4F4] transition-colors">
                    {feature.title}
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#A4B4C3] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-gradient-to-r from-[#00C4F4] to-[#0099CC] rounded-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

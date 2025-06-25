"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { hero } from "@/app/image"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="banner-area relative z-[1] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${hero.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030B15] via-[rgba(3,11,21,0.42)] to-transparent z-[-1]"></div>

      {/* Animated Shapes */}
      <div className="banner-shape-wrap absolute inset-0 z-[-1] hidden md:block">
        <Image
          src={hero.shapes.shape1 || "/placeholder.svg"}
          alt=""
          width={120}
          height={120}
          className="absolute left-[-2%] top-[25%] lg:left-[-3%] lg:top-[28%] lg:w-[200px] lg:h-[200px] animate-pulse-slow opacity-60"
        />
        <Image
          src={hero.shapes.shape2 || "/placeholder.svg"}
          alt=""
          width={100}
          height={100}
          className="absolute right-[5%] top-[15%] lg:right-[8%] lg:top-[20%] lg:w-[150px] lg:h-[150px] opacity-40"
        />
        <Image
          src={hero.shapes.shape3 || "/placeholder.svg"}
          alt=""
          width={120}
          height={120}
          className="absolute right-[-1%] bottom-[10%] lg:right-[-2%] lg:bottom-[14%] lg:w-[180px] lg:h-[180px] animate-bounce-slow opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-6 sm:mb-8">
              <Image
                src={hero.fireIcon || "/placeholder.svg"}
                alt="Fire icon"
                width={40}
                height={40}
                className="mx-auto w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px]"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight mb-6 sm:mb-8 lg:mb-12 px-4">
              Join Future of Algorithmic{" "}
              <span className="text-[#00C4F4] bg-gradient-to-r from-[#00C4F4] to-[#0099CC] bg-clip-text text-transparent">
                Crypto
              </span>{" "}
              Trading Strategies
            </h1>
          </div>

          {/* Progress Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
            {/* Progress Labels */}
            <div className="flex justify-between items-center mb-4 sm:mb-6 px-4 sm:px-8 lg:px-12">
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-semibold uppercase text-[#00C4F4] mb-2">Pre Sell</span>
                <div className="w-1 h-3 sm:h-4 bg-[#00C4F4] mx-auto rounded"></div>
              </div>
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-semibold uppercase text-[#FF9700] mb-2">Soft Cap</span>
                <div className="w-1 h-3 sm:h-4 bg-[#FF9700] mx-auto rounded"></div>
              </div>
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-semibold uppercase text-[#12D176] mb-2">Bonus</span>
                <div className="w-1 h-3 sm:h-4 bg-[#12D176] mx-auto rounded"></div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-white/20 rounded-full mb-4 sm:mb-6 mx-4 sm:mx-8 lg:mx-12">
              <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-[#00C4F4] to-[#0099CC] rounded-full">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#00C4F4] rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Progress Info */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base font-semibold px-4 sm:px-8 lg:px-12 space-y-2 sm:space-y-0">
              <span className="text-white">65% target raised</span>
              <span className="text-white/80 text-xs sm:text-sm">1 ETH = $1000 = 3177.38 CIC</span>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 lg:mb-12 tracking-tight">
              ICO Will Start In..
            </h2>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mx-auto px-4">
              {[
                { value: timeLeft.days, label: "days", color: "#00C4F4" },
                { value: timeLeft.hours, label: "hours", color: "#FF9700" },
                { value: timeLeft.minutes, label: "minutes", color: "#FF1D45" },
                { value: timeLeft.seconds, label: "seconds", color: "#12D176" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0B1D33]/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 font-['Poppins'] tracking-wider"
                    style={{ color: item.color }}
                  >
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-[#A4B4C3] uppercase font-medium tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

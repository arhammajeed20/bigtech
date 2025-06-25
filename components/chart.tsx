"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Chart() {
  const [activeTab, setActiveTab] = useState("funding")
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="sales"
      className="bg-cover bg-center py-20 md:py-[130px]"
      style={{
        backgroundImage: 'url("/assets/img/bg/area_bg.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: `center ${offsetY * 0.5}px`,
        backgroundSize: "cover",
        minHeight: "500px",
        width: "100%",
      }}
    >
      <div className="container mx-auto px-4">
  <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
    {/* Text Section (Goes above on mobile, below on desktop) */}
    <div className="w-full lg:w-1/2">
      <div className="w-full md:w-[90%] lg:w-[80%] animate-fadeInLeft mx-auto">
        {/* Tabs */}
        <ul className="flex justify-center mb-12 border-b-0 gap-6">
          {["funding", "token"].map((tab) => (
            <li key={tab}>
              <button
                className={`relative uppercase text-[15px] font-bold pb-1 text-white transition-all duration-300 ${
                  activeTab === tab
                    ? "before:opacity-100 before:w-full"
                    : "before:opacity-0 before:w-0"
                } before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[3px] before:bg-[#00C4F4]`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "funding" ? "Funding Allocation" : "Token Allocation"}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div>
          {activeTab === "funding" && (
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[55px] font-semibold mb-6 leading-tight">
                1 CNL = 0.0863 BTC
              </h2>
              <p className="text-[#A4B4C3] mb-8">
                The World's 1st ICO Platform That Offers Rewards and helps investors easily purchase and sell
                their tokens.
              </p>
              <Link
                href="#"
                className="inline-block text-white bg-[#00C4F4] border-2 border-transparent py-3 px-6 rounded-full text-[15px] font-bold tracking-wide uppercase shadow-lg hover:bg-[#00b4e0] transition"
              >
                Buy Now
              </Link>
            </div>
          )}
          {activeTab === "token" && (
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[55px] font-semibold mb-6 leading-tight">
                2 CNL = 0.0967 BTC
              </h2>
              <p className="text-[#A4B4C3] mb-8">
                The World's 1st ICO Platform That Offers Rewards and helps investors easily purchase and sell
                their tokens.
              </p>
              <Link
                href="#"
                className="inline-block text-white bg-[#00C4F4] border-2 border-transparent py-3 px-6 rounded-full text-[15px] font-bold tracking-wide uppercase shadow-lg hover:bg-[#00b4e0] transition"
              >
                Buy Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Chart Box (Goes below on mobile, above on desktop) */}
    <div className="w-full lg:w-1/2">
      <div className="bg-[#0B1D33] rounded-2xl p-6 md:p-12 text-center animate-fadeInRight">
        <Image
          src="/assets/img/images/chart.png"
          alt="Chart"
          width={300}
          height={300}
          className="mb-12 mx-auto"
        />
        <ul className="flex flex-wrap">
          {[
            { label: "Contingency: 70%", color: "#005F73" },
            { label: "Business Development: 10%", color: "#F72585" },
            { label: "Investor: 30%", color: "#5DD400" },
            { label: "Poland", color: "#FF9700" },
            { label: "Legal & Regulation:10%", color: "#00C4F4" },
            { label: "Czech Republic", color: "#007FF4" },
          ].map((item, idx) => (
            <li
              key={idx}
              className="w-1/2 text-left text-sm text-white font-medium relative pl-8 mb-2"
            >
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

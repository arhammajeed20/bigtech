"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { throttle } from "lodash"
import { useInView } from "react-intersection-observer"

interface RoadmapItemProps {
  item: any
  index: number
  activeItem: number
  setHoveredItem: (index: number | null) => void
  hoveredItem: number | null
}

const roadmapItems = [
  {
    date: "Q4 2021",
    title: "Concept",
    description: "Foundation & Vision",
    items: ["EVM support for parthians", "SubQuery Academy", "Proof of indexing"],
    color: "#00C4F4",
    gradient: "from-[#00C4F4] to-[#0099CC]",
    icon: "💡",
    phase: "Ideation",
  },
  {
    date: "Q4 2021",
    title: "Research",
    description: "Deep Dive Analysis",
    items: ["SubQuery Builders/Grants Program", "SQT Network contract internal MVP", "Coordinator and client SDK"],
    color: "#FF4581",
    gradient: "from-[#FF4581] to-[#E63946]",
    icon: "🔬",
    phase: "Research",
  },
  {
    date: "Q4 2021",
    title: "App Beta Test",
    description: "Initial Testing Phase",
    items: ["Public testnet launch", "SubQuery Network Explorer and dApp", "Point-in-time indexing"],
    color: "#FF9700",
    gradient: "from-[#FF9700] to-[#FF8500]",
    icon: "🧪",
    phase: "Testing",
  },
  {
    date: "Q4 2021",
    title: "Token Test",
    description: "Tokenomics Validation",
    items: ["SQT token generation event", "Public incentivize testnet launch", "Data traffic insights and reporting"],
    color: "#5DD400",
    gradient: "from-[#5DD400] to-[#4CAF50]",
    icon: "🪙",
    phase: "Token",
  },
  {
    date: "Q4 2021",
    title: "Alpha Test",
    description: "Pre-Launch Preparation",
    items: [
      "Launch of the SubQuery Foundation",
      "Finalise research for other Layer-1 chains",
      "Liquidity mining program",
    ],
    color: "#007FF4",
    gradient: "from-[#007FF4] to-[#0066CC]",
    icon: "🚀",
    phase: "Alpha",
  },
  {
    date: "Q4 2021",
    title: "Benefits",
    description: "Value Realization",
    items: ["Mainnet launch", "Centralized exchange launch", "Public incentivize testnet"],
    color: "#FF9700",
    gradient: "from-[#FF9700] to-[#FF6B35]",
    icon: "💎",
    phase: "Benefits",
  },
  {
    date: "Q4 2021",
    title: "Operational",
    description: "Full Production",
    items: ["SubQuery launches its own parthian", "SubQuery Foundation"],
    color: "#FF4581",
    gradient: "from-[#FF4581] to-[#FF6B9D]",
    icon: "⚙️",
    phase: "Live",
  },
]

const TimelineItem = ({ item, index, activeItem, setHoveredItem, hoveredItem }: RoadmapItemProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const isActive = index === activeItem
  const isHovered = hoveredItem === index
  const isHighlighted = isActive || isHovered

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform h-full flex ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${isHighlighted ? "scale-105 z-50" : "scale-100 z-10"}`}
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(null)}
      role="button"
      tabIndex={0}
      aria-label={`Roadmap item: ${item.title}`}
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 sm:p-5 lg:p-6 xl:p-7 2xl:p-8 shadow-md flex flex-col h-full w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:min-h-[380px] 2xl:min-h-[400px]">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 bg-gradient-to-r ${item.gradient} text-white flex-shrink-0`}
        >
          <span className="text-sm sm:text-base lg:text-lg">{item.icon}</span>
          <span className="truncate">{item.phase}</span>
        </div>

        <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-400 mb-2 flex-shrink-0">{item.date}</div>

        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight flex-shrink-0">
          {item.title}
        </h3>

        <p
          className="text-sm sm:text-base lg:text-lg font-medium mb-4 sm:mb-5 leading-relaxed flex-shrink-0"
          style={{ color: item.color }}
        >
          {item.description}
        </p>

        <div className="flex-grow">
          <ul className="space-y-2 sm:space-y-3 list-disc pl-4 sm:pl-5 text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            {item.items.map((listItem: string, itemIndex: number) => (
              <li key={itemIndex} className="break-words">
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Roadmap() {
  const [activeItem, setActiveItem] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % roadmapItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = useCallback(
    throttle((e: React.MouseEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect()
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }, 100),
    [],
  )

  return (
    <section
      id="roadmap"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 196, 244, 0.03) 0%, transparent 50%), linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 25%, #0f1419 50%, #1e2332 75%, #0a0f1c 100%)`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Bigtech Strategy & Project{" "}
            <span className="bg-gradient-to-r from-[#00C4F4] to-[#FF4581] bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Journey through our innovative phases of development and growth
          </p>
        </div>

        {/* Responsive timeline with better breakpoints */}
        <div className="hidden sm:block">
          {/* Extra large screens: 4 columns with better spacing */}
          <div className="hidden 2xl:grid grid-cols-4 gap-8 items-start mb-8">
            {roadmapItems.slice(0, 4).map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </div>
          <div className="hidden 2xl:grid grid-cols-3 gap-8 items-start justify-center">
            {roadmapItems.slice(4).map((item, index) => (
              <TimelineItem
                key={index + 4}
                item={item}
                index={index + 4}
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </div>

          {/* Large screens: 3 columns with better spacing */}
          <div className="hidden xl:grid 2xl:hidden grid-cols-3 gap-6 items-start mb-6">
            {roadmapItems.slice(0, 3).map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </div>
          <div className="hidden xl:grid 2xl:hidden grid-cols-3 gap-6 items-start mb-6">
            {roadmapItems.slice(3, 6).map((item, index) => (
              <TimelineItem
                key={index + 3}
                item={item}
                index={index + 3}
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </div>
          <div className="hidden xl:flex 2xl:hidden justify-center">
            <div className="w-full max-w-sm">
              <TimelineItem
                key={6}
                item={roadmapItems[6]}
                index={6}
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            </div>
          </div>

          {/* Medium-large screens: 2 columns */}
          <div className="hidden lg:grid xl:hidden grid-cols-2 gap-6 items-start">
            {roadmapItems.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </div>

          {/* Medium screens: 2 columns */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 items-start">
            {roadmapItems.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </div>

          {/* Small screens: 1 column */}
          <div className="grid sm:hidden grid-cols-1 gap-4">
            {roadmapItems.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="flex flex-col gap-6 sm:hidden">
          {roadmapItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              activeItem={activeItem}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-10 md:mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10 shadow-lg flex gap-2">
            {roadmapItems.map((item, index) => (
              <button
                key={index}
                aria-label={`Go to ${item.title}`}
                onClick={() => setActiveItem(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeItem ? "scale-125 shadow-md" : "opacity-60 hover:opacity-80"}`}
                style={{ backgroundColor: item.color }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Partners from "@/components/partners"
import Features from "@/components/features"
import Chart from "@/components/chart"
import Roadmap from "@/components/roadmap"
import Documents from "@/components/documents"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="min-h-screen bg-[#030B15] text-white  mx-auto">
      <Header />
      <main >
        <Hero />
        <About />
        <Partners />
        <Features />
        <Chart />
        <div>
          <Roadmap />
          <Documents />
        </div>
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

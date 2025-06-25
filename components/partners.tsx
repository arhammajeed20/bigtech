import Image from "next/image"
import { partners } from "@/app/image"

export default function Partners() {
  return (
    <section className="partner-area pb-16 sm:pb-20 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-[#00C4F4]/10 border border-[#00C4F4]/20 rounded-full text-sm font-bold uppercase text-white tracking-wider">
            <div className="w-2 h-2 bg-[#00C4F4] rounded-full mr-3"></div>
            Our top partner
            <div className="w-2 h-2 bg-[#00C4F4] rounded-full ml-3"></div>
          </span>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5 rounded-lg overflow-hidden">
          {partners.map((partnerImage, index) => (
            <div
              key={index}
              className="group bg-[#030B15] hover:bg-[#0B1D33] transition-all duration-300 flex items-center justify-center h-20 sm:h-24 lg:h-28 cursor-pointer"
            >
              <Image
                src={partnerImage || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                width={100}
                height={50}
                className="w-16 sm:w-20 lg:w-36  h-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

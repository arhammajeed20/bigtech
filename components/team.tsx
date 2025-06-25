import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Team() {
  const teamMembers = [
    { name: "Cameron Williamson", role: "Founder & CO", image: "/assets/img/team/team_img01.png" },
    { name: "Eleanor Pena", role: "Head of Design", image: "/assets/img/team/team_img02.png" },
    { name: "Bessie Cooper", role: "Vp People", image: "/assets/img/team/team_img03.png" },
    { name: "Darlene Robertson", role: "Product Manager", image: "/assets/img/team/team_img04.png" },
    { name: "Jacob Jones", role: "Marketer", image: "/assets/img/team/team_img05.png" },
    { name: "Courtney Henry", role: "Founder", image: "/assets/img/team/team_img06.png" },
    { name: "Ronald Richards", role: "Account Manager", image: "/assets/img/team/team_img07.png" },
    { name: "Theresa Webb", role: "Founder & CO", image: "/assets/img/team/team_img08.png" },
  ]

  const socialIcons = [Youtube, Twitter, Facebook, Instagram]

  return (
    <section className="py-[130px] relative z-[1] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[#0B1D33] before:to-transparent before:-z-[1]">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 bg-[#00C4F4]/10 border border-[#00C4F4]/20 rounded-full text-sm font-bold uppercase text-white tracking-wider mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-[#00C4F4] rounded-full mr-3"></div>
            OUR TEAM
            <div className="w-2 h-2 bg-[#00C4F4] rounded-full ml-3"></div>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight">
          The Leadership
          
            <span className="text-[#00C4F4] bg-gradient-to-r from-[#00C4F4] to-[#0099CC] bg-clip-text text-transparent">
            Team
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-28 gap-x-10">

          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative rounded-full p-[15px] mb-[30px] inline-block before:content-[''] before:left-0 before:top-0 before:w-[226px] before:h-[226px] before:bg-transparent before:border-2 before:border-dashed before:border-[#00C4F4] before:rounded-full before:absolute before:transition-opacity before:duration-300 before:animate-spin before:opacity-0 group-hover:before:opacity-100">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={196}
                  height={196}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 196px"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-full grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
              <div>
                <h3 className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-medium mb-2">{member.name}</h3>
                <p className="text-[#A4B4C3] mb-3 text-sm">{member.role}</p>
                <ul className="flex items-center justify-center gap-3">
                  {socialIcons.map((Icon, iconIndex) => (
                    <li key={iconIndex}>
                      <Link href="#" className="text-white hover:text-[#00C4F4] transition-colors">
                        <Icon size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"

export default function Documents() {
  return (
    <section className="document-area pt-[60px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
          {/* Image Column */}
          <div className="lg:w-7/12 w-full">
            <div className="document-img text-center animate-fadeInUp">
              <Image
                src="/assets/img/images/document_img.png"
                alt="Document"
                width={500}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-5/12 w-full">
            <div className="document-content mt-[50px] lg:mt-0 animate-fadeInRight">
              <div className="section-title mb-[35px]">
                <span className="sub-title uppercase text-white text-sm font-bold relative tracking-[0.09em] inline-block px-[15px] mb-[25px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[10px] before:h-[10px] before:bg-[#00C4F4] before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-[#00C4F4] after:rounded-full">
                  Whitepaper
                </span>
                <h2 className="title text-[32px] md:text-[36px] lg:text-[42px] mb-0 tracking-[-0.01em] font-semibold">
                  Read Bigtech <span className="text-[#00C4F4]">Documents</span>
                </h2>
              </div>
              <ul className="document-list mb-[40px]">
                {["White Paper", "Privaci & Policy", "Terms Of Coin Sale", "One Pager"].map((text, i) => (
                  <li
                    key={i}
                    className="text-lg text-white relative mb-[15px] pl-[15px] last:mb-0 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full"
                  >
                    {text}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="btn bg-[#040E18] rounded-[70px] border-2 border-transparent text-white cursor-pointer inline-block text-[15px] font-bold tracking-[0.5px] leading-none py-[25px] px-[50px] text-center uppercase whitespace-nowrap shadow-lg relative before:content-[''] before:absolute before:inset-0 before:-m-[2px] before:bg-gradient-to-r before:from-[#00C4F4] before:via-[#040C15] before:to-[#00C4F4] before:rounded-[70px] before:transition-all before:duration-400 before:-z-[1] hover:border-[#00C4F4] hover:text-[#00C4F4]"
              >
                Download Doc
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

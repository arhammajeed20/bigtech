export default function Preloader() {
  return (
    <div id="preloader" className="fixed inset-0 flex items-center justify-center bg-[#030B15] z-[999]">
      <div className="spinner mx-auto w-[50px] h-10 text-center text-[10px]">
        <div className="rect1 bg-[#00c2f2] h-full w-[6px] inline-block animate-stretch-delay"></div>
        <div className="rect2 bg-[#00c2f2] h-full w-[6px] inline-block animate-stretch-delay [animation-delay:-1.1s]"></div>
        <div className="rect3 bg-[#00c2f2] h-full w-[6px] inline-block animate-stretch-delay [animation-delay:-1.0s]"></div>
        <div className="rect4 bg-[#00c2f2] h-full w-[6px] inline-block animate-stretch-delay [animation-delay:-0.9s]"></div>
        <div className="rect5 bg-[#00c2f2] h-full w-[6px] inline-block animate-stretch-delay [animation-delay:-0.8s]"></div>
      </div>
    </div>
  )
}

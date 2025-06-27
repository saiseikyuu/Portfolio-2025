import LogoAnimation from "@/components/LogoAnimation";

export default function Home() {
  return (
    <>
      <div className="bg-[#f4e9e1] min-h-screen text-black lg:p-8 p-3 flex flex-col gap-5 cursor-crosshair ">
        {/* Name */}
        <div className="border relative border-black flex flex-col rounded-3xl p-3 lg:px-8 lg:py-16 w-full   ">
          <div className="flex justify-between ">
            <p className="text-[14px] lg:text-4xl ">Ranniell Banzon</p>
            <div className="text-[14px] leading-tight lg:text-4xl">
              <p>Software Engineer</p>
              <p>Blockchain Developer</p>
            </div>
          </div>

          <LogoAnimation />
        </div>

        {/* Hello */}
        <div className="bg-[#ff3d00] rounded-3xl flex items-center justify-between  text-white text-[10px] p-3 w-full ">
          <p className="">You are now entering Hello section</p>
          <p className="text-black font-extrabold">01 / 01</p>
        </div>
        <div className="bg-[#ff3d00] rounded-3xl  w-full flex flex-col justify-between px-3 py-6   lg:px-8 lg:py-24 text-white h-[500px] lg:h-[1000px]">
          <p className="text-3xl lg:text-[150px]     ">01</p>
          <p className=" text-6xl lg:text-[250px] animate-bounce  ">Hello</p>
        </div>

        <div className="border border-black flex flex-col gap-5 rounded-3xl p-3 lg:p-8 w-full">
          <div className=" flex flex-col gap-2 font-semibold ">
            <p className="text-center text-6xl lg:text-[250px] lg:border-b">
              I Love
            </p>
            <div className="flex lg:border-b lg:border-black justify-between items-center ">
              <p className="hidden lg:flex lg:text-3xl flex-1/4 lg:font-semibold  max-w-[500px]">
                I make ideas come to life. Building million dollar worth of
                product from scratch.
              </p>
              <p className="text-[#ff3d00] text-6xl lg:text-[250px]   ">
                To Build{" "}
              </p>
            </div>

            <p className="text-[#ff3d00] text-6xl lg:text-[250px] lg:border-b lg:border-black">
              Cool Stuff{" "}
            </p>
          </div>
          <p className="text-[18px] text-left indent-[25%] border-y py-5 border-black lg:border-none lg:hidden">
            I make ideas come to life. Building million dollar worth of product
            from scratch.
          </p>
          <div className="text-[#ff3d00] flex justify-between text-[10px] ">
            <p>Hello</p>
            <p className="text-black font-extrabold ">01 / 01</p>
          </div>
        </div>

        {/* Work */}

        <div className="bg-black rounded-3xl flex items-center justify-between  text-white text-[10px] p-3 w-full">
          <p className="">You are now entering Work section</p>
          <p className="text-white font-extrabold">02 / 02</p>
        </div>
        <div className="bg-black rounded-3xl w-full flex flex-col justify-between px-3 py-6 lg:px-8 lg:py-24    text-white h-[500px] lg:h-[1000px]  ">
          <p className="text-3xl lg:text-[150px]">02</p>
          <p className=" text-6xl lg:text-[250px] animate-bounce">Work</p>
        </div>
        <div className="bg-black rounded-3xl w-full flex items-center justify-between px-3 py-6  lg:py-20 lg:px-8 text-white ">
          <div>
            <p className="text-[18px] font-medium lg:text-[32px]  ">
              Logiscool Philippines
            </p>
            <p className="text-[#83807c] text-[12px] lg:text-[20px]">Trainer</p>
          </div>
          <p className=" text-2xl lg:text-6xl ">Work</p>
        </div>
        <div className="bg-black rounded-3xl w-full flex items-center justify-between px-3 py-6 lg:py-20  lg:px-8  text-white ">
          <div>
            <p className="font-medium text-[18px] lg:text-[32px]">Accenture</p>
            <p className="text-[#83807c] text-[12px] lg:text-[20px]">Intern</p>
          </div>
          <p className=" text-2xl lg:text-6xl">Work</p>
        </div>
        <div className="bg-black rounded-3xl w-full flex items-center justify-between px-3 py-6  lg:py-20 lg:px-8  text-white ">
          <div>
            <p className="font-medium text-[18px] lg:text-[32px]">
              Project Selyo
            </p>
            <p className="text-[#83807c] text-[12px] lg:text-[20px]">
              Co-Founder | Fullstack & Web3 Dev
            </p>
          </div>
          <p className=" text-2xl lg:text-6xl">Work</p>
        </div>
        <div className="bg-black rounded-3xl w-full flex items-center justify-between px-3 py-6  lg:py-20  lg:px-8 text-white ">
          <div>
            <p className="font-medium text-[18px] lg:text-[32px]">Omoi</p>
            <p className="text-[#83807c] text-[12px] lg:text-[20px]">
              Founder | Fullstack & Web3 Dev
            </p>
          </div>
          <p className=" text-2xl lg:text-6xl">Work</p>
        </div>
        <div className="bg-black rounded-3xl w-full flex items-center justify-between px-3 py-6 lg:py-20  lg:px-8  text-white ">
          <div>
            <p className="font-medium text-[18px] lg:text-[32px]">
              SunGlobe Enterprises
            </p>
            <p className="text-[#83807c] text-[12px] lg:text-[20px]">
              Fullstack Software Engineer
            </p>
          </div>
          <p className=" text-2xl lg:text-6xl">Work</p>
        </div>

        {/* Contact */}
        <div className="bg-[#ff0] rounded-3xl flex items-center justify-between   text-black text-[10px] p-3 w-full">
          <p className="">You are now entering Contact section</p>
          <p className="text-black font-extrabold">01 / 01</p>
        </div>
        <div className="bg-[#ff0] rounded-3xl w-full flex flex-col justify-between px-3 py-6 lg:px-8 lg:py-24 text-black h-[500px] lg:h-[1000px]">
          <p className="text-3xl lg:text-[150px]">01</p>
          <p className=" text-6xl lg:text-[250px] animate-bounce">Contact</p>
        </div>

        <div className="border border-black flex flex-col gap-3 lg:p-8  rounded-3xl p-3 w-full">
          <div className=" flex flex-col gap-2 font-medium ">
            <p className=" text-6xl border-b lg:text-[250px] ">Let's</p>
            <p className=" text-6xl border-b lg:text-[250px]">Talk </p>
            <p className=" text-6xl lg:text-[250px]">Business.</p>
          </div>

          <div className=" flex justify-between text-[10px] ">
            <p>Hello</p>
            <p className="text-black font-extrabold ">01 / 01</p>
          </div>
        </div>
      </div>
    </>
  );
}

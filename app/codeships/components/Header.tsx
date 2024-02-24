import Image from "next/image"

import first from "./1.png"
import second from "./2.svg"
import third from "./3.png"
import bot from "./bot.png"
import js from "./js.png"
import c from "./c.png"
import bottom from "./bottom.png"
import localfont from "next/font/local"




const semi = localfont(
  {
    src: [
      {
      path:"../../../OTF/GeneralSans-Semibold.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)


const regular = localfont(
  {
    src: [
      {
      path:"../../../OTF/GeneralSans-Regular.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)


export const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full h-0 top-[250px] relative">
        <Image src={js} alt="" />
      </div>

      <div className="h-0">
        <div className="w-full flex items-center justify-between ">
          <div className=" relative">
            <Image src={first} alt=" " className="lg:w-[223px] xl:w-[400px] h-[100px]" />
          </div>
          <div className="flex gap-[100px] 2xl:pr-[128px]">
            <Image src={second} alt="" />
            <Image src={third} alt="" />
          </div>
        </div>
        <div className="h-0">
          <div className="w-full pr-[100px] flex justify-end  2xl:pr-[228px] relative">
            <Image src={c} alt="" />
          </div>
        </div>
      </div>


      <div className="pt-[200px] items-center justify-center flex flex-col space-y-12 w-full">


        <div className="text-[2.25rem] text-center">
          <h1 className={` ${semi.className}  `}>
            Unlock your potential,
          </h1>
          <h2 className={` ${semi.className}  `}>
            <span className='text-[#8980F5]'>#ProveYourSkills</span> with Codeships
          </h2>
        </div>

        <div className={`text-[1.5rem] text-center border-2 border-[##D7D7D780] w-[650px] h-[220px] py-14 ${regular.className}`}>
          Codeships are here to revolutionize the way <br />
          coding skills are showcased and dream  internships <br />
          are secured
        </div>


      </div>
      <div className="flex justify-end text-[24px] leading-[32.4px] 2xl:pr-[128px] items-end w-full pt-8">
        <Image src={bot} alt="" className="" />
      </div>
      <Image src={bottom} alt="" className="w-screen" />
    </header>
  )
}

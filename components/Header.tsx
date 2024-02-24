import Image from "next/image"
import reactangleTop from "@/public/Header/Rectangle 80.svg";
import smallreactangleTop from "@/public/Header/Rectangle 71.png";
import left from "@/public/Header/Rectangle 74.png"
import npm from "@/public/Header/Group 54.png"
import java from "@/public/Header/Group 55.png"
import rotate from "@/public/Header/Group 37.svg"
import green from "@/public/Header/Vector.svg"
import ex from "@/public/ex.png"


import localfont from "next/font/local"
import newLocal from "next/font/local"



const semibold = localfont(
  {
    src: [
      {
      path:"../OTF/GeneralSans-Semibold.otf"
      }
    ],
    variable:"--font-semiboldSans"
  }
)


const medium = newLocal(
    {
      src: [
        {
        path:"../OTF/GeneralSans-Medium.otf"
        }
      ],
      variable:"--font-MediumSans"
    }
  )
  



const Header = () => {
    return (
        <header className="overflow-x-hidden ">
            <div className="h-0 absolute left-[400px] -z-10 2xl:left-[550px] top-0">
                <Image src={smallreactangleTop} alt="" />
            </div>
            <div className="h-0 absolute  -z-10 2xl:left-[250px] top-0 ">
                <Image src={smallreactangleTop} alt="" className=" " />
            </div>
            <div className="h-0 absolute -z-10 left-[120px] 2xl:left-[130px] top-0">
                <Image src={left} alt="" />
            </div>
            <div className="h-0 absolute -z-10 2xl:left-[850px] lg:left-[725px] top-0">
                <Image src={reactangleTop} alt=""  />
            </div>
            <div className="h-0  lg:top-[51px] 2xl:left-[130px] 2xl:top-[51px] relative ">
                <Image src={java} alt="" />
            </div>
            <div className="h-0 right-0 top-[120px] absolute justify-end ">
                <Image src={npm} alt="" className="h-[100px] w-[200px] object-left object-cover 2xl:hidden"  />
                <Image src={npm} alt="" className="2xl:block hidden" />
            </div>
            <div className="h-0 right-[200px] lg:right-[200px] 2xl:right-[334px]  top-[220px] absolute justify-end">
                <Image src={ex} alt="ex"/>
            </div>
            <div className="h-0 top-52 2xl:top-52 relative left-[270px] 2xl:left-[350px] ">
                <Image src={rotate} alt="" />
            </div>
            <div className="h-0 top-[390px] 2xl:top-[390px] relative 2xl:left-[460px] left-[350px] ">
                <Image src={green} alt="" />
            </div>
            <div className="flex items-center  justify-center min-h-[900px] max-h-[900px] w-full">
                <div className="text-center px-56 2xl:px-80 space-y-6" >
                    <h1 className={`text-[3rem] ${semibold.variable} font-semibold-sans `} style={{fontWeight:"400"}}>
                        Reimagining the way students
                        <br />
                        get dream internship opportunities
                    </h1>

                    <p className={`text-[1.5rem] ${medium.variable} leading-[2.35rem] font-medium-sans pt-6 text-[#7A7A7A]`}>
                        Ever felt your skills didn’t get the spotlight they deserved? Let your skills <br />
                        speak through virtual internship challenges to showcase your work and  <br />
                        stand out with proof-of-skills
                    </p>

                    <button className="h-[50px] rounded-[10px] w-[158px] mt-4 bg-[#6941c6]">
                        Get Started
                    </button>

                </div>
            </div>

        </header>
    )
}

export default Header
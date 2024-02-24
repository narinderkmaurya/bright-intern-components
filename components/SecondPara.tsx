import React from 'react'
import Image from 'next/image'
import green from "@/public/green.png"


import localfont from "next/font/local"




const regular = localfont(
  {
    src: [
      {
      path:"../OTF/GeneralSans-Semibold.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)

const medium = localfont(
    {
      src: [
        {
        path:"../OTF/GeneralSans-Medium.otf"
        }
      ],
      variable:"--font-regularGeneral"
    }
  )
  
  


const SecondPara = () => {
    return (
        <div className='py-32 text-black text-center space-y-6'>

            <h3 className={` ${regular.className} text-[2.5rem]`}>
                A new way to land dream internships in tech
            </h3>
            <div className="h-0 relative left-[600px] bottom-6">
                <Image src={green} alt="green" />
            </div>
            <p className={` ${medium.className} text-[1.25rem] text-[#544D49] leading-[1.7rem]`}>
                At BrightIntern, we're on a mission to empower students to realize their full coding <br />
                potential and seize the best internship opportunities available. Through our innovative <br />
                platform, students can harness the power of Codeships to showcase their skills, stand <br />
                out to top employers, and secure referrals to their dream companies.
            </p>
        </div>
    )
}

export default SecondPara
import React from 'react'
import Marquee from 'react-fast-marquee'

import Google from "@/public/Header/Group 47.png"
import Image from 'next/image'


import newLocal from "next/font/local"





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
  

const MarqueeAnimation = () => {
    return (
        <div className='bg-[#0c0c0c] h-[350px] w-full flex items-center lg:pl-16 2xl:pl-32 gap-20 mb-[7.5rem]'>
            <div className="w-2/5">
                <p className={`${medium.variable} font-medium-sans  text-[28px] pr-[5.5rem] leading-[2.35rem] 2xl:text-[24px] 2xl:pr-24`}  style={{fontWeight:"500"}} >
                    Win referrals to your dream 
                    companies by showcasing 
                    your skills through Codeships
                </p>
            </div>
            <div className="w-3/5 space-y-6 ">
                <Marquee className='' gradient={true} gradientWidth={120} gradientColor='#0c0c0c' >
                    <div className="flex">
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                    </div>
                </Marquee>
                <Marquee className='' direction='right' gradient={true} gradientWidth={120} gradientColor='#0c0c0c'>
                    <div className="flex">
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                        <Image src={Google} alt='' className='mx-[60px]' />
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default MarqueeAnimation
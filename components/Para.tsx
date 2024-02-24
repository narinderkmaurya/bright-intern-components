import React from 'react'
import localfont from "next/font/local"




const regular = localfont(
  {
    src: [
      {
      path:"../OTF/GeneralSans-Medium.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)

const Para = () => {
    return (
        <div className={`pt-32 text-center text-black text-[1.5rem] ${regular.className}  `} style={{fontWeight:"500" ,lineHeight:"32.4px"}} >
            <p>
                In today&apos;s competitive tech landscape, it&apos;s not enough to simply list <br />
                your skills or mention some capstone projects on a resume. <br />
                Traditional resumes often fail to adequately convey your coding <br />
                abilities. Many students struggle to gain practical experience in the <br />
                tech industry, making it difficult to stand out to potential employers.
            </p>
        </div>
    )
}

export default Para
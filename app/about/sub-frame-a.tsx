import type { NextPage } from "next";
import react from "@/public/Group 44.png"
import Image from "next/image";
const SubFrameA: NextPage = () => {
  return (
    <section className="w-[1150px] flex flex-col items-end justify-start py-0 pr-0 pl-5 box-border max-w-full text-left text-17xl text-white ">
      <div className="w-[546px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <button className="cursor-pointer [border:none] pt-[22px] px-[19px] pb-[23px] bg-gainsboro-500 flex flex-row items-center justify-center z-[1]">
          <div className="h-[100px] w-[100px] relative bg-gainsboro-500 hidden" />
          <Image
            className="h-[55px] w-[61.7px] relative z-[2]"
            alt=""
            src={react}
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq975:flex-wrap mq975:justify-center  ">
        <div className="w-[510px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[500px] max-w-full mq700:min-w-full ">
          <h2 className="m-0  h-[232px] relative  tracking-[-0.01em] font-semibold  inline-block z-[1] mq450:text-3xl mq950:text-10xl ">
            <p className=" 2xl:-ml-[200px] 2xl:[margin-block-start:0] [margin-block-end:12px]">
              Empowering the next
            </p>
            <p className=" 2xl:-ml-[200px] 2xl:[margin-block-start:0] [margin-block-end:12px]">
              generation of student coders
            </p>
            <p className=" 2xl:-ml-[200px] 2xl:[margin-block-start:0] [margin-block-end:12px]">{`to reach new heights through `}</p>
            <p className=" 2xl:-ml-[200px] m-0">
              <span>{`innovative `}</span>
              <span className="text-[#8980f5]">Codeships</span>
              <span className="text-white">{` `}</span>
            </p>
          </h2>
        </div>
        <div className="w-[423px] flex flex-row items-start justify-start gap-[0px_100px] min-w-[423px] max-w-full mq700:min-w-full mq450:flex-wrap mq450:gap-[0px_100px] mq975:flex-1">
          <div
            className="[border:none] [outline:none] bg-[#2e2e2e] h-[100px] w-[100px] relative min-w-[100px] z-[1] mq450:flex-1"
          />
          <div className="h-[100px] flex-1 relative  box-border min-w-[145px] z-[1] border-t-[1px] border-solid border-lightgray-200 border-b-[1px] border-l-[1px]" />
        </div>
      </div>
    </section>
  );
};

export default SubFrameA;

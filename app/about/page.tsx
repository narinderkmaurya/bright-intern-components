import type { NextPage } from "next";
import SubFrameA from "./sub-frame-a";
import NewFrameC from "./sub-frame-c";
import Columns from "./columns";

const AboutPage: NextPage = () => {
  return (
    <div className="">
      <div className="w-full relative flex flex-col items-end justify-start gap-[74px_0px] tracking-[normal] mq700:gap-[74px_0px] mq450:gap-[74px_0px]">
        <div className="self-stretch h-[730px] relative bg-gray-100 hidden" />
        <SubFrameA />
        <NewFrameC />
      </div>
      <Columns/>
    </div>
  );
};

export default AboutPage;
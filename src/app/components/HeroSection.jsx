import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            {"Hello, I'm Ujeong"}
            {/* 작은따옴표로 에러 발생해서 {""} 사이에 문자열 입력 */}
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            As a passionate Full-Stack Developer, I blend deep technical
            expertise with a keen eye for design to create impactful web
            solutions.
          </p>
          <div>
            <button className="px-6 py-2.5 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Hire Me</button>
            <button className="px-6 py-2.5 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-2">Download CV</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[400px] h-[300px] lg:w-[400px] lg:h-[300px] relative">
            <Image
              src="/images/mac_xia.png"
              alt="Mac Xia"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={250}
              className="blur-edge"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

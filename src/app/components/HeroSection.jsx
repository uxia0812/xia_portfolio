"use client"

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {"Hello, I'm"}
              {""}
              {/* 작은따옴표로 에러 발생해서 {""} 사이에 문자열 입력 */}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ujeong Jang",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As a passionate Full-Stack Developer, I blend deep technical
            expertise with a keen eye for design to create impactful web
            solutions.
          </p>
          <div>
            <button className="px-6 py-2.5 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-2">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
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

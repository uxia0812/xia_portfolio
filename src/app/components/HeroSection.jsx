import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            {"Hello, I'm Ujeong"}
            {/* 작은따옴표로 에러 발생해서 {""} 사이에 문자열 입력 */}
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            As a passionate Full-Stack Developer, I blend deep technical
            expertise with a keen eye for design to create impactful web
            solutions.
          </p>
        </div>
        <div className="col-span-5"></div>
      </div>
    </section>
  );
};

export default HeroSection;

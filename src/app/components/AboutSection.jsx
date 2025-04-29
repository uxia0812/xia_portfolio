"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-3">
        <li>Java (Spring)</li>
        <li>Python</li>
        <li>TypeScript (Next.js)</li>
        <li>React (JavaScript)</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-3">
        <li>{"1Z Lab's Dev Camp"}</li>
        <li>Multi-It Java Camp</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-3">
        <li>{"Developer Intern at 1Z Lab's"}</li>
        <li>{"Developer Intern at Solomon AI"}</li>
        <li>Designer Intern at SJAD</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white mb-11">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image 
          src="/images/programming.png"
          width={400}
          height={300}
          alt="Programming"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-7">About Me</h2>
          <p className="text-base lg:text-md">
            {"육상선수 출신, 10만 인플루언서, 바디프로필 모델과 개발자 겸직,"}<br />
            {"경영학 전공에 현재는 PM, 모든 걸 LLM으로 자동화하는 데 진심인 사람입니다."}<br /><br />
            {"‘기획은 시야와 감이고, 개발은 근육이다.’ 저는 둘 다 가능합니다."}<br />
            {"대기업 캠페인을 기획하고 운영한 경험도, 자동화 툴로 한 달을 절약한 경험도,"}<br />
            {"크롤링으로 경쟁사 데이터를 수집해 서비스 전략을 설계한 경험도 있습니다."}<br /><br />
            {"인공지능에게는 일을 시키고, 사람에게는 이유를 설계합니다."}<br />
            {"보다 효율적으로 일하고 살기 위해 제 두뇌는 항시 풀가동 중입니다."}<br />
            {"그리고 이를 말로, 문서로, UX로, 숫자로, 코드로 설명할 줄 압니다."}<br /><br />
            {"운동은 루틴, 실험은 습관, 실패는 근육통."}<br />
            {"PM이라는 직무는 저에게 '플레이어 겸 설계자'입니다."}<br />
            {"오늘도 저는 새로운 인사이트를 찾고, 효율을 높이는 시스템을 만듭니다."}<br /><br />
            {"‘잠을 자는 시간에도 알고리즘이 일한다.’"}<br />
            {"유한한 시간을 기술로 확장하는 것, 그것이 제가 믿고 실천하는 철학입니다."}
          </p>
          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div> 
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 이미지 카테고리 (순서대로 표시됨)
  const skillCategories = [
    {
      id: "communication",
      imgSrc: "/images/communication.png", 
      alt: "커뮤니케이션&협업",
      delay: 100
    },
    {
      id: "uxui",
      imgSrc: "/images/uxui.png",
      alt: "UXUI 기획",
      delay: 400
    },
    {
      id: "documentation",
      imgSrc: "/images/pm_tool.png",
      alt: "기획 및 문서 작성",
      delay: 700
    },
    {
      id: "development",
      imgSrc: "/images/dev_data.png",
      alt: "개발 & 데이터분석 & 자동화",
      delay: 1000
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="relative ml-11 pl-11 mr-11 pr-11 mb-11 pb-11">
      {/* PM 배경 이미지 */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/4 pointer-events-none z-0">
        <Image
          src="/images/PM.png"
          alt="PM Background"
          width={330}
          height={170}
          className="w-[330px] h-auto object-contain"
          style={{ maxWidth: '330px' }}
        />
      </div>
      
      {/* Dev 배경 이미지 */}
      <div className="absolute bottom-20 right-0 pointer-events-none z-0">
        <Image
          src="/images/Dev.png"
          alt="Dev Background"
          width={400}
          height={200}
          className="w-[400px] h-auto object-contain"
          style={{ maxWidth: '400px' }}
        />
      </div>

      <h2 className="text-4xl font-bold text-white mb-8 relative z-10">
        Skill Set
      </h2>

      <div className="relative z-10 space-y-5">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-32 opacity-0"
            }`}
            style={{ transitionDelay: `${category.delay}ms` }}
          >
            <div className="flex justify-start">
              <img 
                src={category.imgSrc}
                alt={category.alt}
                className="h-[130px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

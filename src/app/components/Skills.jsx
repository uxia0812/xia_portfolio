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
    <section 
      ref={sectionRef} 
      id="skills" 
      className="relative w-full px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0 pb-16 sm:pb-12"
    >
      {/* PM 배경 이미지 */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 sm:-translate-x-1/4 opacity-80 pointer-events-none z-0 sm:top-1/5 transition-all duration-300">
        <Image
          src="/images/PM.png"
          alt="PM Background"
          width={330}
          height={170}
          className="h-[180px] w-auto object-contain transition-all duration-300"
        />
      </div>
      
      {/* Dev 배경 이미지 */}
      <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-0 opacity-80 pointer-events-none z-0 transition-all duration-300">
        <Image
          src="/images/Dev.png"
          alt="Dev Background"
          width={350}
          height={150}
          className="h-[170px] w-auto object-contain transition-all duration-300"
        />
      </div>

      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 relative z-0 transition-all duration-300">
        Skill Set
      </h2>

      <div className="relative z-0 space-y-3 sm:space-y-4 md:space-y-5 transition-all duration-300">
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
            <div className="flex justify-start items-start">
              <img 
                src={category.imgSrc}
                alt={category.alt}
                className="h-[90px] sm:h-[110px] md:h-[130px] lg:h-[150px] w-auto"
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

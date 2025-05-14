"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/Skills.css";

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
    <section ref={sectionRef} id="skills" className="skills-section">
      <div className="pm-background">
        <Image
          src="/images/PM.png"
          alt="PM Background"
          width={330}
          height={170}
          className="h-[180px] w-auto object-contain"
        />
      </div>
      
      <div className="dev-background">
        <Image
          src="/images/Dev.png"
          alt="Dev Background"
          width={350}
          height={150}
          className="h-[170px] w-auto object-contain"
        />
      </div>

      <h2 className="skills-title">Skill Set</h2>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className={`skill-item ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${category.delay}ms` }}
          >
            <div className="flex justify-start items-start">
              <img 
                src={category.imgSrc}
                alt={category.alt}
                className="skill-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

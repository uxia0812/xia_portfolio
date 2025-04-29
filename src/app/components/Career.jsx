"use client"

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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

  return (
    <section id="career" className="relative ml-11 pl-11 mr-11 pr-11 mt-11 mb-11 pb-11">
      <div className="relative ml-11 pl-11 mr-11 pr-11">
        <h2 className="text-right text-4xl font-bold text-white mt-11 -mb-7">
          Career
        </h2>
        
        <div ref={sectionRef} className="relative mt-16 flex items-center">
          {/* 연도 이미지 - 좌측에서 우측으로 이동하며 나타남 */}
          <motion.div 
            className="mr-11"
            style={{ width: '70px', height: '417px' }}
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image 
                src="/images/year.png"
                alt="Years"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </motion.div>

          {/* 원형 이미지들 - 고정된 위치 */}
          <div className="relative ml-10 -mr-11" style={{ width: '50px', height: '410px' }}>  {/* 높이 450px로 조정, 비율 유지 */}
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image 
                src="/images/circle.png"
                alt="Circles"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          {/* 설명 이미지 - 우측에서 좌측으로 이동하며 나타남 */}
          <motion.div 
            className="mt-9 -ml-11"
            style={{ width: '750px', height: '450px' }}
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image 
                src="/images/description.png"
                alt="Descriptions"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </motion.div>
        </div>
       </div>
    </section>
  );
};

export default Career;

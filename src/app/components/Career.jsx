"use client"

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import "../styles/Career.css"

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

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="career" className="career-section">
      <div className="career-container">
        <h2 className="career-title">
          Career
        </h2>
        
        <div ref={sectionRef} className="career-content">
          <div className="career-timeline-container">
            <motion.div 
              className="year-image"
              initial={{ x: -50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="year-image-container">
                <Image 
                  src="/images/year.png"
                  alt="Years"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </motion.div>

            <motion.div 
              className="circle-image"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="circle-image-container">
                <Image 
                  src="/images/circle.png"
                  alt="Circles"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </motion.div>

            <motion.div 
              className="description-image"
              initial={{ x: 50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="description-image-container">
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
       </div>
    </section>
  );
};

export default Career;

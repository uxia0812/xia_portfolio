"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My Portfolio Website with Next.js",
    image: "/images/projects/portfolio_page.png",
    tag: ["All", "Dev Project"],
    gitUrl: "https://github.com/uxia99/xia_portfolio.git",
    previewUrl: "https://xia-portfolio-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Prettying Hospital Info Website",
    description: "SEO-optimized website",
    image: "/images/projects/prettying_web.png",
    tag: ["All", "PM Project", "Dev Project"],
    gitUrl: "https://github.com/uxia0812/web_hospital_info",
    previewUrl: "https://prettyingweb.vercel.app/",
  },
  {
    id: 3,
    title: "Prettying App",
    description: "Global Aesthetic Information Platform",
    image: "/images/projects/prettying.png",
    tag: ["All", "PM Project"],
    gitUrl: "https://pm-portfolio-liart.vercel.app/",
    previewUrl: "https://www.prettying.me/",
  },
  {
    id: 4,
    title: "EasyMedi Landing Page",
    description: "Landing page introducing the service to agents",
    image: "/images/projects/LandingPage.png",
    tag: ["All", "PM Project", "Dev Project"],
    gitUrl: "https://pm-portfolio-liart.vercel.app/",
    previewUrl: "https://www.easymedi.net/start",
  },
  {
    id: 5,
    title: "EasyMedi Agent Management Page",
    description: "Agent back-office planned and developed: onboarding, lead/consultation pipeline, hospital linking, multilingual ops, and settlement dashboard.",
    image: "/images/projects/AgentPage.png",
    tag: ["All", "PM Project", "Dev Project"],
    gitUrl: "https://pm-portfolio-liart.vercel.app/",
    previewUrl: "https://www.easymedi.net/agent/login",
  },
  {
    id: 6,
    title: "Hospital Info Page",
    description: "Admin dashboard for managing partner clinics",
    image: "/images/projects/hospital_info.png",
    tag: ["All", "PM Project", "Dev Project"],
    gitUrl: "https://github.com/uxia0812/hospital_list.git",
    previewUrl: "https://hospital-list.vercel.app/",
  },
  {
    id: 7,
    title: "Data Processing",
    description: "Data Processing with Python for AI",
    image: "/images/projects/solomon_ai.png",
    tag: ["All", "Dev Project"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 8,
    title: "MBTI Bot",
    description: "A simple web-based counseling bot that provides personalized advice based on MBTI types.n",
    image: "/images/projects/mbti-bot.png",
    tag: ["All", "Dev Project"],
    gitUrl: "https://github.com/uxia99/survey-app.git",
    previewUrl: "https://mbti-bot.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-7">
      <h2 className="text-center text-4xl font-bold text-white pt-11 mt-11 mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PM Project"
          isSelected={tag === "PM Project"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Dev Project"
          isSelected={tag === "Dev Project"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

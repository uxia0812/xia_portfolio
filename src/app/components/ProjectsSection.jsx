"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/portfolio_page.png",
    tag: ["All", "Front"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Survey App",
    description: "Project 2 description",
    image: "/images/projects/survey_app.png",
    tag: ["All", "Back"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Note + AI Chat Website",
    description: "Project 3 description",
    image: "/images/projects/note_ai_chat.png",
    tag: ["All", "Back"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Exhibition Website",
    description: "Project 4 description",
    image: "/images/projects/multi_it_project.png",
    tag: ["All", "Back"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Car Info Website",
    description: "Project 5 description",
    image: "/images/projects/car_info.png",
    tag: ["All", "Back"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "My AI Chat Website",
    description: "Project 6 description",
    image: "/images/projects/my_ai_chat.png",
    tag: ["All", "Back"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Todo List Website",
    description: "Project 7 description",
    image: "/images/projects/todo_list.png",
    tag: ["All", "Front"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Kahlua Menu Website",
    description: "Project 8 description",
    image: "/images/projects/kahlua_page.png",
    tag: ["All", "Front"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
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
          name="Front"
          isSelected={tag === "Front"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back"
          isSelected={tag === "Back"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

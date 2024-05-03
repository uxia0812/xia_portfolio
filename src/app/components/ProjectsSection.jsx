import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/portfolio_page.png",
    tag: ["Portfolio", "Web"],
  },
  {
    id: 2,
    title: "Survey App",
    description: "Project 2 description",
    image: "/images/projects/survey_app.png",
    tag: ["Survey", "Web"],
  },
  {
    id: 3,
    title: "Note + AI Chat Website",
    description: "Project 3 description",
    image: "/images/projects/note_ai_chat.png",
    tag: ["Note", "AI Chat"],
  },
  {
    id: 4,
    title: "Exhibition Website",
    description: "Project 4 description",
    image: "/images/projects/multi_it_project.png",
    tag: ["Exhibition", "Web"],
  },
  {
    id: 5,
    title: "Car Info Website",
    description: "Project 5 description",
    image: "/images/projects/car_info.png",
    tag: ["Car", "Web"],
  },
  {
    id: 6,
    title: "My AI Chat Website",
    description: "Project 6 description",
    image: "/images/projects/my_ai_chat.png",
    tag: ["AI", "Chat"],
  },
  {
    id: 7,
    title: "Todo List Website",
    description: "Project 7 description",
    image: "/images/projects/todo_list.png",
    tag: ["Todo", "Web"],
  },
  {
    id: 8,
    title: "Kahlua Menu Website",
    description: "Project 8 description",
    image: "/images/projects/kahlua_page.png",
    tag: ["Menu", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
      <div>
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

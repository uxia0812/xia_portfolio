import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/portfolio_page.png',
    tag: ["Portfolio", "Web"],
  },
  {
    id: 2,
    title: 'Survey App',
    description: 'Project 2 description',
    image: '/images/survey_app.png',
    tag: ["Survey", "Web"],
  },
  {
    id: 3,
    title: 'Note + AI Chat Website',
    description: 'Project 3 description',
    image: '/images/note_ai_chat.png',
    tag: ["Note", "AI Chat"],
  },
  {
    id: 4,
    title: 'Exhibition Website',
    description: 'Project 4 description',
    image: '/images/multi_it_project.png',
    tag: ["Exhibition", "Web"],
  },
  {
    id: 5,
    title: 'Car Info Website',
    description: 'Project 5 description',
    image: '/images/car_info.png',
    tag: ["Car", "Web"],
  },
  {
    id: 6,
    title: 'My AI Chat Website',
    description: 'Project 6 description',
    image: '/images/my_ai_chat.png',
    tag: ["AI", "Chat"],
  },
  {
    id: 7,
    title: 'Todo List Website',
    description: 'Project 7 description',
    image: '/images/todo_list.png',
    tag: ["Todo", "Web"],
  },
  {
    id: 8,
    title: 'Kahlua Menu Website',
    description: 'Project 8 description',
    image: '/images/kahlua_page.png',
    tag: ["Menu", "Web"],
  },
]

const ProjectsSection = () => {
  return (
    <div><h2>My Projects</h2></div>
  )
}

export default ProjectsSection
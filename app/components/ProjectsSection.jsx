"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ECommerce Web App",
    description:
      "Full end to end project including Frontend using ReactJs and Backend using NodeJs(ExpressJs), MongoDB(Mongoose).",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/mern-ecommerce",
    previewUrl: "https://mern-ecommerce-rmp1z8ia6-subhajit100.vercel.app/",
  },
  {
    id: 2,
    title: "Stock Manangement App",
    description:
      "Full end to end project using NextJs and MongoDB(Mongoose) for database.",
    image: "/images/projects/stock-management-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/stock-management",
    previewUrl: "https://stock-management-inky.vercel.app/",
  },
  {
    id: 3,
    title: "AI-Saas Tool",
    description:
      "This AI Saas Tool provides 5 different day to day AI Services using Chatgpt API's to make your daily life easy.",
    image: "/images/projects/ai_saas.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/AI-Saas-Tool",
    previewUrl: "https://ai-saas-tool.vercel.app/",
  },
  {
    id: 4,
    title: "Promptify Prompt Sharing Library",
    description:
      "You can share your awesome AI prompts here, it will help the community to learn and you can get recognition for the great work you are doing.",
    image: "/images/projects/promptify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/promptify_prompt_library",
    previewUrl: "https://promptify-prompt-library.vercel.app/",
  },
  {
    id: 5,
    title: "Netflix clone (Watchofy)",
    description:
      "Used NextJs App Based Router for frontend and API routes. Very similar to real Netflix.",
    image: "/images/projects/netflix_clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/Watchofy-app",
    previewUrl: "https://watchofy-app-nine.vercel.app/",
  },
  {
    id: 6,
    title: "Spotify Clone",
    description:
      "This website gives a little bit feel of spotify where we have some set of songs which you can play and have fun. Some of the functionalities include pausing and starting from any point, and it will automatically run next song when one ends, if no interruption in between",
    image: "/images/projects/spotify_thumbnail.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/Spotify_clone/",
    previewUrl: "https://subhajit100.github.io/Spotify_clone/",
  },
  {
    id: 7,
    title: "Tic Tac Toe Game",
    description:
      "This is very famous game which consists of 3*3 grid and players are allowed to play alternatively with 'X' or '0'. They will be able to see animations on game end or draw.",
    image: "/images/projects/tic_tac_toe.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/Tic_Tac_Toe_Better_CSS_Responsive",
    previewUrl:
      "https://subhajit100.github.io/Tic_Tac_Toe_Better_CSS_Responsive/",
  },
  {
    id: 8,
    title: "TextUtils Web App",
    description:
      "This app helps to change the collection of text to some different form. It can be converting letters to uppercase, or lowercase or capitalized format. This will also tell you the number of words entered and the average time to read that text",
    image: "/images/projects/textutils.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/TextUtils_React",
    previewUrl: "https://subhajit100.github.io/TextUtils_React/",
  },
  {
    id: 9,
    title: "Flipkart Clone (Frontend)",
    description:
      "This app looks like Flipkart on look and feel, where we have some set of images of different category of products like electronic gadgets, sports equipments and vacation trips.",
    image: "/images/projects/flipkart_clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/subhajit100/Flipkart_clone_website_only_style",
    previewUrl:
      "https://subhajit100.github.io/Flipkart_clone_website_only_style/",
  },
  {
    id: 10,
    title: "Todo App",
    description:
      " Seamless Drag and Drop option between active and completed tasks",
    image: "/images/projects/drag_drop_todo.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/subhajit100/Todo_App_Draggable_React_Typescript",
    previewUrl: "https://subhajit-web-masters-todo.netlify.app/",
  },
  {
    id: 11,
    title: "Uber App Clone",
    description:
      "This uses React Native 📱 powered by Expo Router & Google Maps API 🗺️ for directions, search autocomplete, places, and distance calculations.",
    image: "/images/projects/uber_app_clone.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/subhajit100/Uber_clone_app",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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

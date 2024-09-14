import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoLogoGithub, IoMdOpen } from "react-icons/io";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import { Project, projectsData, tags } from "@/constants";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      className="bg-transparent border-2 border-[#31363F] rounded-xl overflow-hidden shadow-md shadow-neutral-800 flex flex-col h-full relative"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={200}
        className="w-full h-48 object-fill p-2 rounded-xl z-10 pointer-events-none"
      />
      <div className="px-6 pb-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow text-ellipsis">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech: any, index: number) => (
            <span
              key={index}
              className="px-2 py-2 bg-[#31363F] rounded-full z-10"
              title={tech.name}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={20}
                height={20}
                className="w-4 sm:w-5 h-4 sm:h-5"
              />
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.link !== "#" && (
            <a
              href={project.link}
              className="px-4 sm:px-5 py-1 sm:py-2 bg-teal-300 hover:bg-teal-500 text-black font-bold rounded-full text-xl sm:text-2xl transition-colors duration-300 flex items-center cursor-pointer z-10"
            >
              <IoMdOpen />
            </a>
          )}
          {project.github !== "#" && (
            <a
              href={project.github}
              className="px-4 sm:px-5 py-1 sm:py-2 bg-teal-300 hover:bg-teal-500 text-black text-xl sm:text-2xl rounded-full font-bold transition-colors duration-300 flex items-center cursor-pointer z-10"
            >
              <IoLogoGithub />
            </a>
          )}
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </motion.div>
  );
};

const Projects: React.FC<{ setActiveTab: (tab: string) => void }> = ({
  setActiveTab,
}) => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (activeTag === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) =>
          project.tags.includes(activeTag.toLowerCase())
        )
      );
    }
  }, [activeTag])

  return (
    <section
      id="projects"
      className="w-full bg-neutral-950 min-h-screen relative shadow-inner shadow-neutral-900"
      onMouseOver={() => setActiveTab("Projects")}
    >
      <div className="min-h-screen w-full py-16 md:p-10 z-50">
        <h1 className="text-5xl font-bold text-center text-textLight mb-10">
          Projects 🖥️
        </h1>

        <div className="w-full h-full relative p-3 my-4 flex flex-wrap items-center justify-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`p-1 px-3 text-lg min-w-14 text-center border-2 border-gray-800 rounded-full cursor-pointer ${
                activeTag === tag
                  ? "bg-teal-400 text-black font-bold"
                  : "text-white"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isMounted &&
            filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <button
            className="mt-8 mx-auto block bg-teal-300 hover:bg-teal-500 text-black font-bold px-6 py-3 rounded-full"
            onClick={() => setVisibleProjects(visibleProjects + 3)}
          >
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;

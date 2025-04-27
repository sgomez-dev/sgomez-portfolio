"use client";
import Image from "next/image";
import { PROJECTS } from "../constants/index";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl w-70 h-96 sm:w-96"
          >
            <motion.div 
              className="relative h-full w-full"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100"
            >
              <h3 className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
                {project.name}
              </h3>
              <p className="p-4 text-sm sm:text-base md:text-lg lg:text-lg">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 rounded-full bg-white px-4 py-2 text-sm sm:text-sm md:text-base lg:text-base text-black hover:bg-gray-300"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
                  <ArrowOutwardIcon />
                </div>
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 rounded-full bg-white px-4 py-2 text-sm sm:text-sm md:text-base lg:text-base text-black hover:bg-gray-300"
              >
                <div className="flex items-center">
                  <span>View demo</span>
                  <ArrowOutwardIcon />
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
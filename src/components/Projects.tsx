import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-[#EAEFEF] mb-4 transition-colors duration-300">
          My Projects
        </h1>
        <p className="text-xl text-[#B6B09F] dark:text-[#B8CFCE] max-w-3xl mx-auto transition-colors duration-300">
          A showcase of my recent work and side projects
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black dark:text-[#EAEFEF] mb-3 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed mb-4 transition-colors duration-300">
                {project.description}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/80 dark:bg-[#7F8CAA]/25 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-black dark:text-[#EAEFEF] transition-colors duration-300 border border-white/40 dark:border-[#B8CFCE]/20 shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-black dark:bg-[#EAEFEF] text-white dark:text-[#333446] px-4 py-2 rounded-lg hover:bg-[#B6B09F] dark:hover:bg-[#B8CFCE] hover:text-white dark:hover:text-[#333446] transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </motion.a>
              )}
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 border-2 border-black dark:border-[#EAEFEF] text-black dark:text-[#EAEFEF] px-4 py-2 rounded-lg hover:bg-black dark:hover:bg-[#EAEFEF] hover:text-white dark:hover:text-[#333446] transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-[#EAEFEF] mb-4 transition-colors duration-300">Experience</h1>
        <p className="text-xl text-[#B6B09F] dark:text-[#B8CFCE] max-w-3xl mx-auto transition-colors duration-300">
          My professional journey and career highlights
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-[#B6B09F] dark:bg-[#7F8CAA] opacity-30 transition-colors duration-300"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black dark:bg-[#B8CFCE] rounded-full border-4 border-[#F2F2F2] dark:border-[#333446] z-10 transition-colors duration-300"></div>

            {/* Content Card */}
            <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black dark:text-[#EAEFEF] mb-1 transition-colors duration-300">{experience.role}</h3>
                  <p className="text-lg font-semibold text-[#B6B09F] dark:text-[#B8CFCE] mb-2 transition-colors duration-300">{experience.company}</p>
                  <p className="text-sm font-medium text-[#B6B09F] dark:text-[#7F8CAA] mb-4 transition-colors duration-300">{experience.duration}</p>
                </div>

                <p className="text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed mb-4 transition-colors duration-300">{experience.description}</p>

                {experience.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/80 dark:bg-[#7F8CAA]/25 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-black dark:text-[#EAEFEF] transition-colors duration-300 border border-white/40 dark:border-[#B8CFCE]/20 shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
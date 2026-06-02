import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';
import { achievements } from '../data/achievements';

const Achievements: React.FC = () => {
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-[#EAEFEF] mb-4 transition-colors duration-300">Achievements</h1>
        <p className="text-xl text-[#B6B09F] dark:text-[#B8CFCE] max-w-3xl mx-auto transition-colors duration-300">
          Hackathon wins, recognitions, and milestones along the way
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl flex flex-col"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="p-3 bg-black dark:bg-[#B8CFCE] rounded-lg text-white dark:text-[#333446] transition-colors duration-300 flex-shrink-0">
                <Trophy size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-black dark:text-[#EAEFEF] transition-colors duration-300">
                  {achievement.title}
                </h3>
                {achievement.prize && (
                  <span className="inline-block mt-1 bg-white/80 dark:bg-[#7F8CAA]/25 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-xs font-semibold text-black dark:text-[#EAEFEF] border border-white/40 dark:border-[#B8CFCE]/20">
                    {achievement.prize}
                  </span>
                )}
              </div>
            </div>

            <p className="text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed transition-colors duration-300 flex-1">
              {achievement.description}
            </p>

            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-black dark:text-[#EAEFEF] hover:text-[#B6B09F] dark:hover:text-[#B8CFCE] transition-colors"
              >
                View proof
                <ExternalLink size={15} />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;

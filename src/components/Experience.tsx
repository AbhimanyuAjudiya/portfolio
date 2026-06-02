import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number }>({ top: 0, height: 0 });

  useEffect(() => {
    // Center of a dot relative to the container, using layout offsets so the
    // measurement is stable and unaffected by the entrance transform animation.
    const dotCenter = (dot: HTMLDivElement) => {
      const item = dot.offsetParent as HTMLElement | null;
      const itemTop = item ? item.offsetTop : 0;
      return itemTop + dot.offsetTop + dot.offsetHeight / 2;
    };

    const updateLine = () => {
      const dots = dotRefs.current.filter(Boolean) as HTMLDivElement[];
      if (dots.length < 2) return;

      const top = dotCenter(dots[0]);
      const bottom = dotCenter(dots[dots.length - 1]);
      setLineStyle({ top, height: bottom - top });
    };

    updateLine();
    // Re-measure once fonts/layout settle.
    const timer = window.setTimeout(updateLine, 300);
    window.addEventListener('resize', updateLine);

    const container = containerRef.current;
    const observer = new ResizeObserver(updateLine);
    if (container) observer.observe(container);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', updateLine);
      observer.disconnect();
    };
  }, []);

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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
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
        className="relative pl-8 md:pl-12"
        ref={containerRef}
      >
        {/* Timeline line - spans from the center of the first dot to the center of the last dot */}
        <div
          className="absolute left-[7px] md:left-[11px] w-0.5 bg-[#B6B09F] dark:bg-[#7F8CAA] opacity-30 transition-colors duration-300"
          style={{ top: lineStyle.top, height: lineStyle.height }}
        />

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            className={`relative ${index < experiences.length - 1 ? 'mb-12' : ''}`}
          >
            {/* Timeline Dot */}
            <div
              ref={(el) => { dotRefs.current[index] = el; }}
              className="absolute -left-8 md:-left-[44px] top-7 w-4 h-4 bg-black dark:bg-[#B8CFCE] rounded-full border-4 border-[#F2F2F2] dark:border-[#333446] z-10 transition-colors duration-300"
            />

            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl"
            >
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-[#EAEFEF] mb-1 transition-colors duration-300">{experience.role}</h3>
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-lg font-semibold text-[#B6B09F] dark:text-[#B8CFCE] hover:text-black dark:hover:text-[#EAEFEF] transition-colors mb-2"
                  >
                    {experience.company}
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-[#B6B09F] dark:text-[#B8CFCE] mb-2 transition-colors duration-300">{experience.company}</p>
                )}
                <p className="text-sm font-medium text-[#B6B09F] dark:text-[#7F8CAA] transition-colors duration-300">{experience.duration}</p>
              </div>

              <p className="text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed mb-4 transition-colors duration-300">{experience.description}</p>

              {experience.highlights && (
                <ul className="space-y-2 mb-5">
                  {experience.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed transition-colors duration-300"
                    >
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black dark:bg-[#B8CFCE]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {experience.links && (
                <div className="flex flex-wrap gap-3 mb-5">
                  {experience.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-black dark:text-[#EAEFEF] hover:text-[#B6B09F] dark:hover:text-[#B8CFCE] transition-colors"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              )}

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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;

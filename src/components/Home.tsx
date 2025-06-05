import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const skills = [
    'React', 'Nextjs', 'TypeScript', 'Node.js','Tailwind CSS', 'WebSockets', 'WebRTC', 'SQL', 'noSQL', 'Solana', 'Ethereum', 'Web3.js', 'Rust', 'Solidity',
    'AWS', 'Docker', 'Git', 'Kubernetes', 'Redis'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-[#EAEFEF] mb-6 transition-colors duration-300">
          Hi, I'm <span className="text-[#B6B09F] dark:text-[#B8CFCE]">Abhimanyu Ajudiya</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#B6B09F] dark:text-[#7F8CAA] mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
          A passionate web3 & full-stack developer, I want to be the best version of myself.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to='/contact'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black dark:bg-[#EAEFEF] text-white dark:text-[#333446] px-8 py-3 rounded-lg font-medium hover:bg-[#B6B09F] dark:hover:bg-[#B8CFCE] dark:hover:text-[#333446] transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </motion.div>
          </Link>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-black dark:border-[#EAEFEF] text-black dark:text-[#EAEFEF] px-8 py-3 rounded-lg font-medium hover:bg-black dark:hover:bg-[#EAEFEF] hover:text-white dark:hover:text-[#333446] transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </div>

        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, href: 'https://github.com/AbhimanyuAjudiya', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/abhimanyu-ajudiya/', label: 'LinkedIn' },
            { icon: FaXTwitter, href: 'https://x.com/abhiii_aj', label: 'X (Twitter)' },
            { icon: FaTelegramPlane, href: 'https://t.me/abhiiiii_aj', label: 'Telegram' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-[#EAE4D5]/80 dark:bg-[#7F8CAA]/20 backdrop-blur-sm rounded-lg text-black dark:text-[#EAEFEF] hover:bg-black dark:hover:bg-[#B8CFCE] hover:text-white dark:hover:text-[#333446] transition-colors border border-white/30 dark:border-[#B8CFCE]/20 shadow-lg"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-8 mb-16 transition-colors duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-black dark:text-[#EAEFEF] mb-6 text-center transition-colors duration-300">About Me</h2>
        <p className="text-lg text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed text-center max-w-3xl mx-auto mb-8 transition-colors duration-300">
          Hey! I’m a full-stack developer who loves building cool things on the web. I’ve been freelancing for a while now, working on everything from Web2 apps to Web3 projects. Lately, I’ve been diving into the Solana ecosystem and learning how to build real-world stuff like crypto payment systems. I’m always curious about new tech, love experimenting with frameworks, and enjoy contributing to open source whenever I can. When I’m not coding, you’ll probably find me reading tech blogs or trying out something new just for fun.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-8 transition-colors duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center transition-colors duration-300">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg text-black dark:text-white font-medium shadow-sm hover:shadow-md transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
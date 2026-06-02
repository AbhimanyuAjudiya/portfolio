import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const skills = [
    'Sui Move', 'Solidity', 'Walrus', 'zkLogin', 'Chainlink', 'Arbitrum', 'TypeScript', 'JavaScript',
    'Java', 'Python', 'React', 'Next.js', 'Node.js', 'Express.js', 'WebSocket', 'gRPC', 'AWS', 'Docker',
    'Kubernetes', 'Kafka', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma'
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
          Founding Blockchain Engineer building decentralized infrastructure, smart contracts, and high-performance backend systems across Sui and EVM.
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
            href="/Abhimanyu_Resume.pdf"
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
            { icon: SiNotion, href: 'https://hail-dresser-3f4.notion.site/Abhimanyu-Ajudiya-36550e63d24f809fbc3ec3db340d5f7d', label: 'Notion' },
            { icon: FaTelegramPlane, href: 'https://t.me/abhimanyu_aj', label: 'Telegram' },
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
          I'm a software engineer who builds reliable backend systems, full-stack products, and infrastructure from the ground up. I work comfortably across the stack, from APIs, databases, and distributed systems to smart contracts and decentralized storage. As Founding Blockchain Engineer at SuiSign, I architected and shipped a full document-signing platform end to end. I've won three international hackathons, including the Sui Overflow Global Hackathon ($30k prize, among 3,000+ developers), by shipping production-grade systems under tight deadlines. When I'm not building, I'm solving LeetCode problems (250+ solved) or digging into system design.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-8 mb-16 transition-colors duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-black dark:text-[#EAEFEF] mb-6 text-center transition-colors duration-300">Why Hire Me?</h2>
        <div className="text-lg text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed max-w-3xl mx-auto space-y-5 transition-colors duration-300">
          <p>
            I'm genuinely obsessed with building. Most of my day goes into coding, learning new systems, and building things that actually matter. I love difficult problems because they push me to grow fast.
          </p>
          <p>
            You can give me something completely unfamiliar with a hard deadline, and I'll still find a way to figure it out and ship it. That hunger to learn and execute is probably my biggest strength.
          </p>
          <p>
            I'm not someone who wants to stay comfortable. I want to work with ambitious people, solve hard technical problems, and build products that have real impact. If you're betting on me, you're betting on someone who's going to outwork, outlearn, and keep compounding every single month.
          </p>
        </div>
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
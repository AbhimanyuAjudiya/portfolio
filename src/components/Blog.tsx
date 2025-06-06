import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-[#EAEFEF] mb-4 transition-colors duration-300">Blog</h1>
        <p className="text-xl text-[#B6B09F] dark:text-[#B8CFCE] max-w-3xl mx-auto transition-colors duration-300">
          Thoughts on web development, technology, and programming
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-[#EAEFEF] mb-4 hover:text-[#B6B09F] dark:hover:text-[#B8CFCE] transition-colors">
                {post.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[#B6B09F] dark:text-[#7F8CAA] transition-colors duration-300">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <p className="text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed mb-6 transition-colors duration-300">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 bg-white/80 dark:bg-[#7F8CAA]/25 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-black dark:text-[#EAEFEF] transition-colors duration-300 border border-white/40 dark:border-[#B8CFCE]/20 shadow-md"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
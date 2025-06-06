import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blog';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.slug === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-[#EAEFEF] mb-4 transition-colors duration-300">Post Not Found</h1>
        <p className="text-xl text-[#B6B09F] dark:text-[#B8CFCE] mb-8 transition-colors duration-300">The blog post you're looking for doesn't exist.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-black dark:bg-[#EAEFEF] text-white dark:text-[#333446] px-6 py-3 rounded-lg hover:bg-[#B6B09F] dark:hover:bg-[#B8CFCE] hover:text-white dark:hover:text-[#333446] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </div>
    );
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold text-black dark:text-[#EAEFEF] mb-6 mt-8 transition-colors duration-300">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-black dark:text-[#EAEFEF] mb-4 mt-6 transition-colors duration-300">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-black dark:text-[#EAEFEF] mb-3 mt-4 transition-colors duration-300">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('```')) {
        return null; // Handle code blocks separately if needed
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="text-[#B6B09F] dark:text-[#B8CFCE] mb-2 transition-colors duration-300">{line.replace('- ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed mb-4 transition-colors duration-300">{line}</p>;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#B6B09F] dark:text-[#B8CFCE] hover:text-black dark:hover:text-[#EAEFEF] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <article className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-8 md:p-12 transition-colors duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-[#EAEFEF] mb-6 transition-colors duration-300">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#B6B09F] dark:text-[#7F8CAA] transition-colors duration-300">
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

            <div className="flex flex-wrap gap-2 mb-8">
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
          </header>

          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>
        </article>
      </motion.div>
    </div>
  );
};

export default BlogPost;
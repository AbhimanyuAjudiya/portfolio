import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { BsTelegram } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

// EmailJS configuration - add these to your .env file
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const EMAIL_JS_PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map EmailJS field names to formData keys
    const fieldMap: Record<string, string> = {
      'name': 'name',
      'email': 'email',
      'message': 'message'
    };
    
    const formDataKey = fieldMap[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [formDataKey]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (!formRef.current || !EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_JS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration missing');
      }

      await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        formRef.current,
        EMAIL_JS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhimanyuajudiya@gmail.com',
      href: 'mailto:abhimanyuajudiya@gmail.com',
    },
    {
      icon: BsTelegram,
      label: 'Telegram',
      value: '@abhiiiii_aj',
      href: 'https://t.me/abhiiiii_aj',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Guajarat, India',
      href: 'https://www.google.com/maps/place/Guajarat',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-[#EAEFEF] mb-4 transition-colors duration-300">Get In Touch</h1>
        <p className="text-xl text-[#B6B09F] dark:text-[#B8CFCE] max-w-3xl mx-auto transition-colors duration-300">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-8 transition-colors duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl">
            <h2 className="text-2xl font-bold text-black dark:text-[#EAEFEF] mb-6 transition-colors duration-300">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-[#7F8CAA]/30 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 bg-black dark:bg-[#B8CFCE] rounded-lg text-white dark:text-[#333446] transition-colors duration-300 flex-shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-black dark:text-[#EAEFEF] transition-colors duration-300">{info.label}</p>
                    <p className="text-[#B6B09F] dark:text-[#B8CFCE] transition-colors duration-300 break-words text-sm sm:text-base">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-[#EAE4D5] dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-8 transition-colors duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl">
            <h3 className="text-xl font-bold text-black dark:text-[#EAEFEF] mb-4 transition-colors duration-300">Let's Connect</h3>
            <p className="text-[#B6B09F] dark:text-[#B8CFCE] leading-relaxed transition-colors duration-300">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a chat about technology and development. Feel free to reach out!
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#EAE4D5]/70 dark:bg-[#7F8CAA]/15 backdrop-blur-md rounded-2xl p-8 transition-colors duration-300 border border-white/20 dark:border-[#B8CFCE]/10 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-black dark:text-[#EAEFEF] mb-6 transition-colors duration-300">Send a Message</h2>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black dark:text-[#EAEFEF] mb-2 transition-colors duration-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/80 dark:bg-[#7F8CAA]/25 backdrop-blur-sm border border-[#B6B09F]/20 dark:border-[#7F8CAA]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#B8CFCE] focus:border-transparent transition-all text-black dark:text-[#EAEFEF] shadow-md"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-[#EAEFEF] mb-2 transition-colors duration-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/80 dark:bg-[#7F8CAA]/25 backdrop-blur-sm border border-[#B6B09F]/20 dark:border-[#7F8CAA]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#B8CFCE] focus:border-transparent transition-all text-black dark:text-[#EAEFEF] shadow-md"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black dark:text-[#EAEFEF] mb-2 transition-colors duration-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/80 dark:bg-[#7F8CAA]/25 backdrop-blur-sm border border-[#B6B09F]/20 dark:border-[#7F8CAA]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#B8CFCE] focus:border-transparent transition-all resize-none text-black dark:text-[#EAEFEF] shadow-md"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black dark:bg-[#EAEFEF] text-white dark:text-[#333446] px-6 py-3 rounded-lg font-medium hover:bg-[#B6B09F] dark:hover:bg-[#B8CFCE] hover:text-white dark:hover:text-[#333446] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white dark:border-[#333446] border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg flex items-center gap-2 text-green-800 dark:text-green-300 transition-colors duration-300"
            >
              <CheckCircle size={20} />
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg flex items-center gap-2 text-red-800 dark:text-red-300 transition-colors duration-300"
            >
              <AlertCircle size={20} />
              Something went wrong. Please try again or contact me directly.
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
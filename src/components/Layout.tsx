import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Code, Briefcase, BookOpen, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const GRID_SIZE = '100px 100px'; 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Experience', href: '/experience', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#333446] relative overflow-x-hidden transition-colors duration-300">
      {/* Background Grid Pattern with Hover Effect */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: theme === 'dark' 
            ? `
              linear-gradient(to right, #7F8CAA 1px, transparent 1px),
              linear-gradient(to bottom, #7F8CAA 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, #B6B09F 1px, transparent 1px),
              linear-gradient(to bottom, #B6B09F 1px, transparent 1px)
            `,
          backgroundSize: GRID_SIZE,
        }}
      />
      
      <div
        className="fixed inset-0 opacity-100 transition-all duration-300 ease-out"
        style={{
          backgroundImage: theme === 'dark'
            ? `
              linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
            `
            : `
              linear-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.4) 1px, transparent 1px)
            `,
          backgroundSize: GRID_SIZE,
          maskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EAE4D5]/80 dark:bg-[#333446]/90 backdrop-blur-md border-b border-[#B6B09F]/20 dark:border-[#7F8CAA]/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-black dark:text-[#EAEFEF] hover:text-[#B6B09F] dark:hover:text-[#B8CFCE] transition-colors">
              AJ
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all hover:bg-[#F2F2F2]/50 dark:hover:bg-[#7F8CAA]/20 ${
                      location.pathname === item.href 
                        ? 'text-black dark:text-[#EAEFEF] bg-[#F2F2F2]/30 dark:bg-[#7F8CAA]/30' 
                        : 'text-[#B6B09F] dark:text-[#B8CFCE] hover:text-black dark:hover:text-[#EAEFEF]'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[#B6B09F] dark:text-[#B8CFCE] hover:text-black dark:hover:text-[#EAEFEF] hover:bg-[#F2F2F2]/50 dark:hover:bg-[#7F8CAA]/20 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-black dark:text-[#EAEFEF] hover:bg-[#F2F2F2]/50 dark:hover:bg-[#7F8CAA]/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-black dark:text-[#EAEFEF] hover:bg-[#F2F2F2]/50 dark:hover:bg-[#7F8CAA]/20 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#B6B09F]/20 dark:border-[#7F8CAA]/30">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all hover:bg-[#F2F2F2]/50 dark:hover:bg-[#7F8CAA]/20 ${
                      location.pathname === item.href 
                        ? 'text-black dark:text-[#EAEFEF] bg-[#F2F2F2]/30 dark:bg-[#7F8CAA]/30' 
                        : 'text-[#B6B09F] dark:text-[#B8CFCE] hover:text-black dark:hover:text-[#EAEFEF]'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-20 min-h-screen pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
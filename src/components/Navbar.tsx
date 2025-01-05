import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-transparent z-50 shadow-lg backdrop-blur-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-extrabold text-gray-900 dark:text-white">Ming Xee</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Social Media', 'Skills', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="relative overflow-hidden group text-gray-700 dark:text-gray-300 text-lg font-medium px-4 py-2 rounded-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:opacity-80"
              >
                <span className="group-hover:text-teal-500 transition-all duration-300">{item}</span>
                {/* Remove Background Gradient on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-0 transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Icon */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button with Smooth Hover Animation */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-125 hover:shadow-2xl hover:opacity-80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden px-4 py-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="space-y-6">
            {['Home', 'Social Media', 'Skills', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`block w-full text-left text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md text-xl font-semibold transition-all duration-300 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-teal-500 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

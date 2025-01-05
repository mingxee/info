import React from 'react';
import { ChevronDown, User } from 'lucide-react';

export default function Home() {
  // Smooth scrolling to the projects section
  const handleScroll = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 text-center relative z-10">
        {/* Profile Icon with Hover Effect */}
        <div className="mb-8">
          <User
            className="w-28 h-28 text-white mx-auto animate-pulse transform transition-transform duration-300 ease-in-out hover:scale-125"
          />
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white leading-tight animate-fade-in hover:text-yellow-300 transition-colors duration-300 ease-in-out">
          Hey, I'm Ming Xee
        </h1>

        {/* Subheadline with Text Animation */}
        <p className="mt-6 text-xl text-gray-200 dark:text-gray-400 max-w-4xl mx-auto font-semibold animate-fade-in-delay text-shadow-md">
          A passionate developer blending creativity with technology, focused on solving problems and crafting solutions with code.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-12">
          <button
            onClick={handleScroll}
            className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-purple-700 hover:from-teal-600 hover:to-purple-800 transition-all rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            See My Projects
            <ChevronDown className="ml-3 w-6 h-6 animate-bounce" />
          </button>
        </div>

        {/* Floating Card (About Me) */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl transform transition-transform duration-500 hover:translate-y-4 max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-5">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm a software engineer passionate about building impactful solutions that improve lives. Constantly learning and evolving.
          </p>
        </div>
      </div>

      {/* Animated Downward Chevron */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-10 h-10 text-white opacity-80" />
      </div>
    </section>
  );
}

import React from 'react';
import { Bot, Wifi, Wrench, GamepadIcon } from 'lucide-react';

const projects = [
  {
    title: 'XeeAI Project',
    description: 'A Telegram bot for chatting with AI and supporting voice, image, and video interactions.',
    icon: Bot,
    tags: ['Python', 'Telegram Bot API', 'AI'],
    features: ['AI Chat', 'Voice Support', 'Image Support', 'Video Support'],
    link: 'https://t.me/XeeChatBot',
    available: true,
  },
  {
    title: 'XeeMC Project',
    description: 'A survival Minecraft server supporting both Java and Bedrock editions.',
    icon: GamepadIcon,
    tags: ['Java', 'Docker', 'Redis'],
    features: ['Cross-Platform Play', 'Custom Plugins', 'Economy System', 'Anti-Cheat'],
    link: 'https://xeemc.mingxee.xyz',
    available: true,
  },
  {
    title: 'Discord Gambling Project',
    description: 'An advanced gaming Discord bot with crypto crash, horse racing, slots, trivia, and comprehensive betting systems.',
    icon: Bot,
    tags: ['Python', 'Discord.py', 'SQLite'],
    features: ['Crypto Crash Game', 'Horse Racing with Live Animations', 'Slot Machines', 'Trivia & Mini Games'],
    link: 'https://discord.com/oauth2/authorize?client_id=1051858859960041532',
    available: true,
  },
  {
    title: 'WIFIXee Project',
    description: 'A wireless security and pentesting tool with features like fake access points and WPA handshake capturing.',
    icon: Wifi,
    tags: ['Python', 'Scapy', 'Linux'],
    features: ['Fake AP Creation', 'WPA Handshake Capture', 'Network Analysis', 'Report Generation'],
    link: '#',
    available: false,
  },
  {
    title: 'aXeeTool Project',
    description: 'A penetration testing tool for Android, iOS, Windows, and macOS devices for ethical hacking.',
    icon: Wrench,
    tags: ['Python', 'Java', 'Shell'],
    features: ['Device Exploitation', 'Vulnerability Scanning', 'Payload Generation', 'Cross-Platform Support'],
    link: '#',
    available: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
            Explore my collection of projects that showcase creativity, technical skills, and passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative p-8 rounded-2xl shadow-lg bg-gradient-to-r ${
                project.available
                  ? 'from-indigo-100 to-indigo-300 dark:from-indigo-900 dark:to-indigo-800'
                  : 'from-gray-300 to-gray-400 dark:from-gray-800 dark:to-gray-700'
              } transition-transform transform hover:-translate-y-3 hover:shadow-2xl`}
            >
              {/* Icon with Badge */}
              <div className="absolute -top-6 left-6">
                <div
                  className={`p-4 rounded-full shadow-md ${
                    project.available
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-500 text-gray-100'
                  }`}
                >
                  <project.icon className="w-10 h-10" />
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
                {project.title}
              </h3>

              {/* Availability Badge */}
              <span
                className={`absolute top-4 right-4 px-4 py-1 text-sm font-medium rounded-full shadow ${
                  project.available
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 text-gray-900'
                }`}
              >
                {project.available ? 'Available' : 'Coming Soon'}
              </span>

              {/* Project Description */}
              <p className="mt-4 text-gray-700 dark:text-gray-400">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      project.available
                        ? 'bg-indigo-200 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400'
                        : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-500'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Features List */}
              <ul className="mt-6 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${
                      project.available
                        ? 'text-gray-800 dark:text-gray-300'
                        : 'text-gray-500 dark:text-gray-500'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <div className="mt-8">
                {project.available ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg py-3 transition-all"
                  >
                    View Project
                  </a>
                ) : (
                  <span className="block text-center bg-gray-500 text-gray-100 font-medium rounded-lg py-3">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Bot, Wifi, Wrench, GamepadIcon } from 'lucide-react';

const projects = [
  {
    title: 'Discord Bot Project',
    description: 'A versatile bot for Discord servers with features like role management, music controls, and slash command support.',
    icon: Bot,
    tags: ['Node.js', 'Discord.js', 'MongoDB'],
    features: ['Role Management', 'Music Controls', 'Slash Commands', 'Moderation Tools'],
    link: '#'
  },
  {
    title: 'WIFIXee Project',
    description: 'A wireless security and pentesting tool with features like fake access points and WPA handshake capturing.',
    icon: Wifi,
    tags: ['Python', 'Scapy', 'Linux'],
    features: ['Fake AP Creation', 'WPA Handshake Capture', 'Network Analysis', 'Report Generation'],
    link: '#'
  },
  {
    title: 'aXeeTool Project',
    description: 'A penetration testing tool for Android, iOS, Windows, and macOS devices for ethical hacking.',
    icon: Wrench,
    tags: ['Python', 'Java', 'Shell'],
    features: ['Device Exploitation', 'Vulnerability Scanning', 'Payload Generation', 'Cross-Platform Support'],
    link: '#'
  },
  {
    title: 'XeeMC Project',
    description: 'A survival Minecraft server supporting both Java and Bedrock editions.',
    icon: GamepadIcon,
    tags: ['Java', 'Docker', 'Redis'],
    features: ['Cross-Platform Play', 'Custom Plugins', 'Economy System', 'Anti-Cheat'],
    link: 'https://xeemc.mingxee.xyz'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and interests in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                  <project.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

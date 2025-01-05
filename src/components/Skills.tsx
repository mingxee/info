import React from 'react';
import { FaPython, FaJava, FaJs, FaReact, FaDatabase, FaCode } from 'react-icons/fa'; // Importing icons

const skillCategories = [
  {
    title: 'Programming Languages',
    description: 'Core languages I use for development',
    skills: [
      { name: 'Python', level: 'Advanced', description: 'Data analysis, automation, and backend development', icon: <FaPython /> },
      { name: 'Java', level: 'Advanced', description: 'Android development and enterprise applications', icon: <FaJava /> },
      { name: 'JavaScript', level: 'Advanced', description: 'Web development and Node.js applications', icon: <FaJs /> },
      { name: 'TypeScript', level: 'Advanced', description: 'Type-safe JavaScript development', icon: <FaCode /> },
      { name: 'C/C++', level: 'Intermediate', description: 'System programming and optimization', icon: <FaCode /> },
      { name: 'PHP', level: 'Intermediate', description: 'Web development and CMS customization', icon: <FaCode /> },
      { name: 'Shell Script', level: 'Advanced', description: 'Automation and system administration', icon: <FaCode /> },
      { name: 'HTML/CSS', level: 'Advanced', description: 'Frontend development and styling', icon: <FaCode /> }
    ]
  },
  {
    title: 'Frameworks & Technologies',
    description: 'Tools and platforms I work with',
    skills: [
      { name: 'React', level: 'Advanced', description: 'Frontend development with modern React', icon: <FaReact /> },
      { name: 'Node.js', level: 'Advanced', description: 'Backend development and API creation', icon: <FaCode /> },
      { name: 'MySQL', level: 'Advanced', description: 'Database design and optimization', icon: <FaDatabase /> },
      { name: 'Flutter', level: 'Intermediate', description: 'Cross-platform mobile development', icon: <FaCode /> },
      { name: 'Kali Linux', level: 'Advanced', description: 'Penetration testing and security', icon: <FaCode /> },
      { name: 'Bootstrap', level: 'Advanced', description: 'Responsive web development', icon: <FaCode /> }
    ]
  },
  {
    title: 'Specialized Skills',
    description: 'Additional expertise areas',
    skills: [
      { name: 'Cybersecurity', level: 'Advanced', description: 'Penetration testing and security analysis', icon: <FaCode /> },
      { name: 'Game Development', level: 'Intermediate', description: 'Creating interactive experiences', icon: <FaCode /> },
      { name: 'Bug Bounty', level: 'Advanced', description: 'Identifying and reporting security vulnerabilities', icon: <FaCode /> },
      { name: 'Git', level: 'Advanced', description: 'Version control and collaborative development', icon: <FaCode /> },
      { name: 'SQL Injection', level: 'Advanced', description: 'Database security and exploitation techniques', icon: <FaDatabase /> },
      { name: 'XSS', level: 'Advanced', description: 'Cross-site scripting and security measures', icon: <FaCode /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
            A deep dive into my technical proficiencies, tools, and expertise.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {category.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:scale-105 transform transition-transform duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl text-green-500 dark:text-green-400 mr-4">
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {skill.description}
                    </p>
                    <span
                      className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${
                        skill.level === 'Advanced'
                          ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                          : 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

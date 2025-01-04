import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    description: 'Core languages I use for development',
    skills: [
      { name: 'Python', level: 'Advanced', description: 'Data analysis, automation, and backend development' },
      { name: 'Java', level: 'Advanced', description: 'Android development and enterprise applications' },
      { name: 'JavaScript', level: 'Advanced', description: 'Web development and Node.js applications' },
      { name: 'TypeScript', level: 'Advanced', description: 'Type-safe JavaScript development' },
      { name: 'C/C++', level: 'Intermediate', description: 'System programming and optimization' },
      { name: 'PHP', level: 'Intermediate', description: 'Web development and CMS customization' },
      { name: 'Shell Script', level: 'Advanced', description: 'Automation and system administration' },
      { name: 'HTML/CSS', level: 'Advanced', description: 'Frontend development and styling' }
    ]
  },
  {
    title: 'Frameworks & Technologies',
    description: 'Tools and platforms I work with',
    skills: [
      { name: 'React', level: 'Advanced', description: 'Frontend development with modern React' },
      { name: 'Node.js', level: 'Advanced', description: 'Backend development and API creation' },
      { name: 'MySQL', level: 'Advanced', description: 'Database design and optimization' },
      { name: 'Flutter', level: 'Intermediate', description: 'Cross-platform mobile development' },
      { name: 'Kali Linux', level: 'Advanced', description: 'Penetration testing and security' },
      { name: 'Bootstrap', level: 'Advanced', description: 'Responsive web development' }
    ]
  },
  {
    title: 'Specialized Skills',
    description: 'Additional expertise areas',
    skills: [
      { name: 'Cybersecurity', level: 'Advanced', description: 'Penetration testing and security analysis' },
      { name: 'Game Development', level: 'Intermediate', description: 'Creating interactive experiences' },
      { name: 'Bug Bounty', level: 'Advanced', description: 'Identifying and reporting security vulnerabilities' },
      { name: 'Git', level: 'Advanced', description: 'Version control and collaborative development' },
      { name: 'SQL Injection', level: 'Advanced', description: 'Database security and exploitation techniques' },
      { name: 'XSS', level: 'Advanced', description: 'Cross-site scripting and security measures' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>
        
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        skill.level === 'Advanced' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                          : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
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
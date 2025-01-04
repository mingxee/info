import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex items-center justify-center py-8 bg-indigo-50 dark:bg-gray-800">
      <a
        href="mailto:info@mingxee.xyz"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-gray-700 hover:shadow-lg transition-all duration-300"
      >
        <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
        <span className="text-gray-900 dark:text-white font-medium">info@mingxee.xyz</span>
      </a>
    </div>
  );
}
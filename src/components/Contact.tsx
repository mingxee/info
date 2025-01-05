import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative z-10 px-6">
        <h2 className="text-2xl text-white font-semibold mb-4">Get in Touch</h2>
        <p className="text-sm text-white mb-6 max-w-sm mx-auto opacity-85">
          Have questions or want to collaborate? Drop us a message.
        </p>
        <a
          href="mailto:info@mingxee.xyz"
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-300 text-white font-medium hover:scale-105 transition-all duration-300"
        >
          <Mail className="w-5 h-5 text-white mr-3" />
          <span className="text-sm">info@mingxee.xyz</span>
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import { FaGithub, FaTelegram, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaDiscord, FaReddit, FaWeixin } from 'react-icons/fa';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    url: 'https://github.com/mingxee',
    color: 'hover:bg-gray-800 hover:text-white'
  },
  { 
    name: 'Discord', 
    icon: <FaDiscord />, 
    url: 'https://discord.com/users/860843138210201601',
    color: 'hover:bg-blue-500 hover:text-white'
  },
  { 
    name: 'Telegram', 
    icon: <FaTelegram />, 
    url: 'https://t.me/mongxee',
    color: 'hover:bg-blue-500 hover:text-white'
  },
  { 
    name: 'TikTok', 
    icon: <FaTiktok />, 
    url: 'https://www.tiktok.com/@mingxee',
    color: 'hover:bg-black hover:text-white'
  },
  { 
    name: 'Facebook', 
    icon: <FaFacebook />, 
    url: 'https://www.facebook.com/AmMing.Lee',
    color: 'hover:bg-blue-600 hover:text-white'
  },
  { 
    name: 'Twitter', 
    icon: <FaTwitter />, 
    url: 'https://x.com/rachaly26616',
    color: 'hover:bg-sky-500 hover:text-white'
  },
  { 
    name: 'Instagram', 
    icon: <FaInstagram />, 
    url: 'https://www.instagram.com/mongfee168',
    color: 'hover:bg-pink-600 hover:text-white'
  },
  { 
    name: 'YouTube', 
    icon: <FaYoutube />, 
    url: 'https://youtube.com/@lonely_8l',
    color: 'hover:bg-red-600 hover:text-white'
  },
  { 
    name: 'Reddit', 
    icon: <FaReddit />, 
    url: 'https://www.reddit.com/u/Rachaly/',
    color: 'hover:bg-orange-600 hover:text-white'
  }
];

export default function SocialMedia() {
  return (
    <section id="social-media" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Connect With Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always excited to connect with fellow developers and tech enthusiasts!
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${social.color}`}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-3xl transition-colors duration-300">
                {social.icon}
              </div>
              <span className="text-sm font-medium">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

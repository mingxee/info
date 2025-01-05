import React from 'react';
import {
  FaGithub,
  FaTelegram,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaDiscord,
  FaReddit,
} from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/mingxee' },
  { name: 'Discord', icon: <FaDiscord />, url: 'https://discord.com/users/860843138210201601' },
  { name: 'Telegram', icon: <FaTelegram />, url: 'https://t.me/mongxee' },
  { name: 'TikTok', icon: <FaTiktok />, url: 'https://www.tiktok.com/@mingxee' },
  { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/AmMing.Lee' },
  { name: 'Twitter', icon: <FaTwitter />, url: 'https://x.com/rachaly26616' },
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/mongfee168' },
  { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com/@lonely_8l' },
  { name: 'Reddit', icon: <FaReddit />, url: 'https://www.reddit.com/u/Rachaly/' },
];

export default function SocialMedia() {
  return (
    <section id="social-media" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            I’m always open to collaborations and discussions. Find me on your favorite platform!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-transparent rounded-lg transition-transform transform hover:scale-110 hover:shadow-lg group"
            >
              <div className="w-16 h-16 flex items-center justify-center text-3xl text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full mb-4 transition-colors group-hover:border-blue-600 group-hover:text-blue-600">
                {social.icon}
              </div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-300 group-hover:text-blue-600">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { RESUME_DATA } from '../constants';

export default function Links() {
  return (
    <div className="w-full max-w-md mx-auto animate-fade-in-up">
      <h2 className="text-3xl font-bold text-center tracking-tight mb-8">Connect with Me</h2>
      <div className="flex flex-col space-y-4">
        {RESUME_DATA.contact.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-4 bg-gray-900/50 border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <link.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            <span className="ml-4 text-lg text-gray-200 group-hover:text-white transition-colors">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { RESUME_DATA } from '../constants';

export default function About() {
  return (
    <div className="text-center flex flex-col items-center justify-center animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
        {RESUME_DATA.name}
      </h1>
      <h2 className="mt-2 text-lg md:text-xl text-gray-400">
        AI Engineer & Full-Stack Developer
      </h2>
      <p className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg">
        {RESUME_DATA.summary}
      </p>
    </div>
  );
}

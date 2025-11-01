import React from 'react';

export default function Lanyard() {
  return (
    <div className="relative flex flex-col items-center group mb-8 animate-fade-in-down">
      {/* Strap */}
      <div className="w-1.5 h-24 bg-gray-800 rounded-t-sm shadow-inner" />
      
      {/* Badge Holder */}
      <div
        className="relative w-48 h-64 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-white/10 rounded-2xl shadow-2xl p-4 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-2 group-hover:rotate-3"
        style={{ perspective: '1000px' }}
      >
        <div className="absolute inset-0 bg-black/20 rounded-2xl" />
        <span className="text-8xl font-thin text-gray-400/50 z-10 select-none">
          P
        </span>
      </div>
    </div>
  );
}

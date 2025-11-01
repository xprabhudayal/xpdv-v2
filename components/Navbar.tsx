import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  onResumeClick: () => void;
}

const NavItem: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
      isActive ? 'bg-white/20 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
    }`}
  >
    {label}
  </button>
);

export default function Navbar({ activePage, setActivePage, onResumeClick }: NavbarProps) {
  return (
    <header className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center space-x-2 p-2 bg-black/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
        <NavItem
          label="About"
          isActive={activePage === Page.About}
          onClick={() => setActivePage(Page.About)}
        />
        <NavItem
          label="Projects"
          isActive={activePage === Page.Projects}
          onClick={() => setActivePage(Page.Projects)}
        />
        <button
            onClick={onResumeClick}
            className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          Resume
        </button>
        <NavItem
          label="Links"
          isActive={activePage === Page.Links}
          onClick={() => setActivePage(Page.Links)}
        />
      </nav>
    </header>
  );
}

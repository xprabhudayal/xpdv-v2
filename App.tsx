import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Lanyard from './components/Lanyard';
import About from './components/About';
import Projects from './components/Projects';
import Links from './components/Links';
import LiveButton from './components/LiveButton';
import LiveChatModal from './components/LiveChatModal';

export default function App() {
  const [activePage, setActivePage] = useState<Page>(Page.About);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  const renderPage = useCallback(() => {
    switch (activePage) {
      case Page.Projects:
        return <Projects />;
      case Page.Links:
        return <Links />;
      case Page.About:
      default:
        return <About />;
    }
  }, [activePage]);

  const handleResumeDownload = () => {
    // This assumes a PDF file is in a public/static assets folder
    const link = document.createElement('a');
    link.href = '/Prabhudayal_Vaishnav_Resume.pdf';
    link.download = 'Prabhudayal_Vaishnav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-black text-white w-screen h-screen overflow-hidden flex flex-col items-center justify-center relative p-4 md:p-8">
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      
      <Navbar activePage={activePage} setActivePage={setActivePage} onResumeClick={handleResumeDownload} />
      
      <main className="w-full h-full flex flex-col items-center justify-center transition-opacity duration-500">
        {activePage === Page.About && <Lanyard />}
        <div className={`w-full max-w-7xl mx-auto transition-all duration-500 ${activePage === Page.About ? 'mt-[-10vh]' : ''}`}>
           {renderPage()}
        </div>
      </main>

      <LiveButton onClick={() => setIsLiveChatOpen(true)} />

      {isLiveChatOpen && <LiveChatModal onClose={() => setIsLiveChatOpen(false)} />}
    </div>
  );
}

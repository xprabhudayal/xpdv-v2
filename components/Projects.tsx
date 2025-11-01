import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants';
import { Project } from '../types';
import { generateImage } from '../services/geminiService';
import { ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative rounded-2xl overflow-hidden bg-gray-900/50 border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-[1.02] ${className}`}
    >
      <div className="w-full h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 animate-pulse"></div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-white flex items-center">
          {project.title}
          <ExternalLinkIcon className="w-4 h-4 ml-2 text-gray-400 group-hover:text-white transition-colors" />
        </h3>
        <p className="text-sm text-gray-400 mt-1">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>(RESUME_DATA.projects);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateArt = async () => {
        setIsLoading(true);
        const updatedProjects = await Promise.all(
            projects.map(async (p) => {
                try {
                    const imageUrl = await generateImage(p.title);
                    return { ...p, image: imageUrl };
                } catch (error) {
                    console.error(`Failed to generate image for ${p.title}`, error);
                    // use a placeholder on failure
                    return { ...p, image: `https://picsum.photos/seed/${p.title}/400/200` };
                }
            })
        );
        setProjects(updatedProjects);
        setIsLoading(false);
    };

    useEffect(() => {
        // Set initial placeholders
        setProjects(projects.map(p => ({...p, image: `https://picsum.photos/seed/${p.title.replace(/\s/g, '')}/400/200`})));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 animate-fade-in">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                <button
                    onClick={handleGenerateArt}
                    disabled={isLoading}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                    {isLoading ? 'Generating Art...' : '✨ Generate AI Art'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

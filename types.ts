// FIX: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export enum Page {
  About,
  Projects,
  Links,
}

export interface Link {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string;
  points: string[];
}

export interface Education {
    degree: string;
    institution: string;
    date: string;
    details: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  points: string[];
  url: string;
  image?: string;
}

export interface Achievement {
    title: string;
    organization: string;
    date: string;
    points: string[];
}

export interface ResumeData {
  name: string;
  contact: {
    email: string;
    portfolio: string;
    links: Link[];
  };
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: {
    programming: string[];
    ai_ml: string[];
    data: string[];
    misc: string[];
    soft: string[];
  };
  achievements: Achievement[];
}
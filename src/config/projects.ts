import type { Project } from '@/types/project';

interface ProjectsConfig {
  sectionLabel: string;
  title: string;
  description: string;
  visitLabel: string;
  openLabel: string;
  projects: Project[];
}

export const projectsConfig: ProjectsConfig = {
  sectionLabel: 'Projects',
  title: 'My Projects',
  description: 'Some of my recent works',
  visitLabel: 'View all projects',
  openLabel: 'Open',
  projects: [
    {
      slug: 'portofolio',
      title: 'Personal Portfolio Website',
      description:
        'A modern personal portfolio website built with Next.js, React, TypeScript, and Node.js to showcase projects, skills, and professional experience.',
      detailDescription:
        'This portfolio website is developed using Next.js App Router, React for dynamic UI components, TypeScript for type-safe development, and Node.js for backend support. It features a clean, responsive design to present projects, technical skills, and professional background in an engaging way.',
      thumbnail: '/assets/Portofolio.png',
      tags: ['Next.js', 'TypeScript', 'React', 'node.js', 'Tailwind CSS'],
      url: 'https://portofolio-sabilarrusdi.vercel.app',
      features: [
        'project showcase',
        'responsive layout',
        'Next.js and TypeScript implementation',
      ],
      featured: true,
    },
    {
      slug: 'gg-ignite',
      title: 'GG Ignite (Roblox experience)',
      description:
        'A modular Club-style Roblox framework with data storage, progress balancing, animated UI, and a scalable service architecture.',
      detailDescription:
        'GG Ignite is a Roblox experience built around modular systems, persistent player data, polished UI flows, and scalable gameplay services for a club-style game loop.',
      thumbnail: '/assets/GG_Ignite.svg',
      tags: ['Roblox', 'Luau', 'DataStore', 'UI'],
      url: 'https://www.roblox.com/games/125353838633696/GG-IGNITE',
      features: [
        'Persistent player data and progression',
        'Animated interface flow for core actions',
        'Reusable Luau service architecture',
      ],
      featured: true,
    },
    {
      slug: 'medrecord',
      title: 'Medrecord (simple e-clinic application)',
      description:
        'simple e-clinic application website to support work in a clinic, built with Next.js, TypeScript, and Tailwind CSS. It features a responsive design, user authentication, and a dashboard for managing patient records.',
      detailDescription:
        'Medrecord is a simple e-clinic web application designed to support clinic workflows through patient record management, responsive dashboard screens, and practical web app architecture.',
      thumbnail: '/assets/Medrecord.svg',
      tags: ['Next.js', 'TypeScript', 'API', 'Dashboard', 'Tailwind CSS', 'postgreSQL', 'Prisma'],
      url: 'https://medrecord.vercel.app',
      features: [
        'Responsive dashboard interface',
        'Patient record management workflow',
        'Next.js and TypeScript implementation',
      ],
      featured: true,
    },
  ],
};

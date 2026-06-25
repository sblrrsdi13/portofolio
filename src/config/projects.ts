import type { Project } from '@/types/project';

export const projectsConfig = {
  sectionLabel: 'Projects',
  title: 'My Projects',
  description: 'Some of my recent works',
  visitLabel: 'View all projects',
  openLabel: 'Open',
  projects: [
    {
      title: 'GG Ignite (Roblox experience)',
      description:
        'A modular Club-style Roblox framework with data storage, progress balancing, animated UI, and a scalable service architecture.',
      thumbnail: '/assets/GG_Ignite.svg',
      tags: ['Roblox', 'Luau', 'DataStore', 'UI'],
      url: 'https://www.roblox.com/games/125353838633696/GG-IGNITE',
      featured: true,
    },
    {
      title: 'Medrecord (simple e-clinic application)',
      description:
        'simple e-clinic application website to support work in a clinic, built with Next.js, TypeScript, and Tailwind CSS. It features a responsive design, user authentication, and a dashboard for managing patient records.',
      thumbnail: '/assets/Medrecord.svg',
      tags: ['Next.js', 'TypeScript', 'API', 'Dashboard'],
      url: 'https://medrecord.vercel.app',
      featured: true,
    },
  ] satisfies Project[],
};

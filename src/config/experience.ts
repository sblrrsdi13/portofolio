import type { Experience } from '@/types/experience';

export const experienceConfig = {
  sectionLabel: 'Experience',
  title: 'A timeline of systems, teams, and launches.',
  description:
    'Hands-on development across Roblox production, web platforms, and client-facing delivery.',
  items: [
    {
      role: 'Founder & Lead Roblox Developer Experience',
      company: 'GG Ignite',
      period: '2024 - Present',
      description:
        'Developing and maintaining a Roblox nightclub experience featuring immersive environments, interactive gameplay systems, visual effects, and optimized multiplayer performance.',
      highlights: [
        'Luau scripting',
        'Roblox Studio Solo development',
        'Nightclub gameplay systems',
        'Interactive UI & UX',
        'Lighting & visual effects',
        'Performance optimization',
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: '2022 - Present',
      description:
        'Building fast web applications, dashboards, landing pages, and automation workflows for creators and small teams.',
      highlights: ['Next.js apps', 'API integrations', 'Production deployment'],
    },
    {
      role: 'Game UI Engineer',
      company: 'Client Projects',
      period: '2021 - 2023',
      description:
        'Created responsive in-game interfaces, animated menu systems, shop flows, and player feedback patterns.',
      highlights: ['Animated UI systems', 'Design implementation', 'Performance tuning'],
    },
  ] satisfies Experience[],
};

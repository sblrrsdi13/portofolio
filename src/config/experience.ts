import type { Experience } from '@/types/experience';

export const experienceConfig = {
  sectionLabel: 'Experience',
  title: 'A timeline of systems, teams, and launches.',
  description:
    'Hands-on development across Roblox production, web platforms, and client-facing delivery.',
  items: [
    {
      role: 'Founder & Lead Roblox Developer Experience',
      company: 'Grand Genesis Studio (comunity)',
      period: '2025 - Present',
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
  ] satisfies Experience[],
};

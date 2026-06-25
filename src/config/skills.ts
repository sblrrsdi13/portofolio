import type { Skill } from '@/types/skill';

export const skillsConfig = {
  sectionLabel: 'My Tech Stack',
  title: 'Technologies I work with',
  description: 'A practical stack for Roblox experiences and modern web applications.',
  backgroundIcons: [
    { src: '/assets/skills/react.svg', alt: 'React logo' },
    { src: '/assets/skills/nextjs.svg', alt: 'Next.js logo' },
    { src: '/assets/skills/typescript.svg', alt: 'TypeScript logo' },
    { src: '/assets/skills/tailwind.svg', alt: 'Tailwind CSS logo' },
    { src: '/assets/skills/javascript.svg', alt: 'JavaScript logo' },
    { src: '/assets/skills/luau.svg', alt: 'Luau logo' },
    { src: '/assets/skills/mysql.svg', alt: 'MySQL logo' },
    { src: '/assets/skills/git.svg', alt: 'Git logo' },
    { src: '/assets/skills/python.svg', alt: 'Python logo' },
    { src: '/assets/skills/nodejs.svg', alt: 'Node.js logo' },
    { src: '/assets/skills/html.svg', alt: 'HTML logo' },
    { src: '/assets/skills/css.svg', alt: 'CSS logo' },
  ],
  skills: [
    {
      name: 'Luau',
      description: 'Roblox gameplay systems, reusable modules, and live game services.',
      icon: {
        src: '/assets/skills/Luau.svg',
        alt: 'Luau logo',
      },
    },
    {
      name: 'React',
      description: 'Component-driven interfaces with polished state and interaction patterns.',
      icon: {
        src: '/assets/skills/react.svg',
        alt: 'React logo',
      },
    },
    {
      name: 'Next.js',
      description: 'App Router, SEO, static generation, and production-ready web delivery.',
      icon: {
        src: '/assets/skills/nextjs.svg',
        alt: 'Next.js logo',
      },
    },
    {
      name: 'TypeScript',
      description: 'Strict, expressive types for safer application and tooling code.',
      icon: {
        src: '/assets/skills/typescript.svg',
        alt: 'TypeScript logo',
      },
    },
    {
      name: 'Tailwind CSS',
      description: 'Responsive layouts, utility styling, and clean design systems.',
      icon: {
        src: '/assets/skills/tailwind.svg',
        alt: 'Tailwind CSS logo',
      },
    },
    {
      name: 'JavaScript',
      description: 'Modern browser logic, tooling, and full stack application behavior.',
      icon: {
        src: '/assets/skills/javascript.svg',
        alt: 'JavaScript logo',
      },
    },
    {
      name: 'MySQL',
      description: 'Structured data, persistence, dashboards, and content workflows.',
      icon: {
        src: '/assets/skills/mysql.svg',
        alt: 'MySQL logo',
      },
    },
        {
      name: 'PostgreSQL',
      description: 'Structured data, persistence, dashboards, and content workflows.',
      icon: {
        src: '/assets/skills/postgresql.svg',
        alt: 'PostgreSQL logo',
      },
    },
    {
      name: 'Git',
      description: 'Version control, collaboration, release flow, and project hygiene.',
      icon: {
        src: '/assets/skills/git.svg',
        alt: 'Git logo',
      },
    },
  ] satisfies Skill[],
};

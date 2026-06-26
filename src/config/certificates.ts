import type { Certificate } from '@/types/certificate';

interface CertificatesConfig {
  sectionLabel: string;
  title: string;
  description: string;
  detailLabel: string;
  certificates: Certificate[];
}

export const certificatesConfig: CertificatesConfig = {
  sectionLabel: 'Certificates',
  title: 'Selected Certificates',
  description: 'Proof of learning, practice, and technical growth.',
  detailLabel: 'Details',
  certificates: [
    {
      slug: 'roblox-creator-fundamentals',
      title: 'Roblox Creator Fundamentals',
      issuer: 'Roblox Creator Hub',
      description:
        'Core Roblox development concepts including studio workflow, scripting fundamentals, and experience publishing.',
      detailDescription:
        'This certificate represents foundational Roblox creator knowledge, including Studio workflow, scripting concepts, publishing flow, and practical experience design fundamentals.',
      thumbnail: '/assets/certificate-roblox.svg',
      issuedAt: '2026',
      url: 'https://create.roblox.com',
      skills: ['Roblox Studio', 'Luau', 'Publishing'],
      features: ['Studio workflow', 'Scripting basics', 'Experience publishing'],
    },
    {
      slug: 'modern-web-development',
      title: 'Modern Web Development',
      issuer: 'Self-paced Learning',
      description:
        'Practical frontend development using React, Next.js, TypeScript, responsive layouts, and deployment workflows.',
      detailDescription:
        'This certificate highlights practical modern web development skills across React interfaces, Next.js routing, strict TypeScript, responsive styling, and deployment workflows.',
      thumbnail: '/assets/certificate-web.svg',
      issuedAt: '2026',
      url: 'https://nextjs.org',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      features: ['Responsive UI', 'App Router fundamentals', 'Production deployment'],
    },
  ],
};

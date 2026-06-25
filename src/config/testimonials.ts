import type { Testimonial } from '@/types/testimonial';

export const testimonialsConfig = {
  sectionLabel: 'Testimonials',
  title: 'Trusted for polished delivery and clear communication.',
  description:
    'Client notes from Roblox systems, dashboards, and interface work.',
  items: [
    {
      name: 'Ari M.',
      role: 'Roblox Studio Owner',
      review:
        'Nestleee turned a messy game loop into a clean, scalable system. The UI felt premium and the code was easy for our team to extend.',
      rating: 5,
    },
    {
      name: 'Dylan R.',
      role: 'Community Founder',
      review:
        'The dashboard work was fast, thoughtful, and production-ready. Communication stayed clear from planning through launch.',
      rating: 5,
    },
    {
      name: 'Mika S.',
      role: 'Game Producer',
      review:
        'Our players noticed the difference immediately. Menus loaded smoothly, interactions felt better, and the systems were much easier to maintain.',
      rating: 5,
    },
  ] satisfies Testimonial[],
};

'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.32, margin: '-80px' }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'flex min-h-[calc(100svh-5rem)] scroll-mt-24 snap-start items-center py-4 sm:py-6',
        className,
      )}
    >
      <div className="w-full">{children}</div>
    </motion.section>
  );
}

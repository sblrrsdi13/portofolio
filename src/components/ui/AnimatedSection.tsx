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
      viewport={{ once: true, amount: 0.22, margin: '-60px' }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'scroll-mt-20 py-10 sm:py-12 md:flex md:min-h-[calc(100svh-5rem)] md:snap-start md:items-center md:py-6',
        className,
      )}
    >
      <div className="w-full">{children}</div>
    </motion.section>
  );
}

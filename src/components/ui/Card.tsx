import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  lift?: boolean;
}

export function Card({ children, className, lift = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-[1.35rem] p-6 transition duration-300',
        lift && 'hover:-translate-y-1 hover:border-indigo-300/50 hover:shadow-indigo-200/30',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

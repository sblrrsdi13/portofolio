import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[#151923] !text-slate-50 shadow-lg shadow-slate-300/60 hover:bg-[#252b38]',
  secondary:
    'border border-slate-200 bg-white/70 text-slate-950 shadow-sm shadow-slate-200/60 hover:border-indigo-200 hover:bg-white',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-12 px-5 text-sm',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-white',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}

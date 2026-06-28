import type { ComponentType, SVGProps } from 'react';
import { socialsConfig } from '@/config/socials';
import type { SocialIcon } from '@/types/social';

const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C6.477 2 2 6.58 2 12.232c0 4.523 2.865 8.36 6.84 9.718.5.095.682-.222.682-.494 0-.244-.009-.89-.014-1.748-2.783.623-3.37-1.377-3.37-1.377-.455-1.187-1.11-1.503-1.11-1.503-.908-.635.069-.622.069-.622 1.004.072 1.533 1.055 1.533 1.055.893 1.56 2.343 1.109 2.913.848.092-.662.35-1.11.637-1.366-2.22-.257-4.555-1.14-4.555-5.075 0-1.12.39-2.036 1.03-2.753-.104-.258-.447-1.298.1-2.706 0 0 .84-.274 2.75 1.052A9.345 9.345 0 0 1 12 6.69c.85.004 1.705.117 2.505.344 1.91-1.326 2.747-1.052 2.747-1.052.548 1.408.204 2.448.1 2.706.64.717 1.028 1.633 1.028 2.753 0 3.944-2.338 4.814-4.566 5.067.359.317.679.94.679 1.894 0 1.366-.012 2.467-.012 2.802 0 .275.18.594.688.493A10.031 10.031 0 0 0 22 12.232C22 6.58 17.523 2 12 2Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.5V20.5h-3.5V8.75ZM9.25 8.75h3.35v1.6h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.62h-3.5v-5.87c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v5.97h-3.5V8.75Z"
      fill="currentColor"
    />
  </svg>
);

const Mail = (props: SVGProps<SVGSVGElement>) => (
<svg {...props} viewBox="0 49.4 512 399.42" aria-hidden="true">
    <path d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" fill="currentColor" />
    <path d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" fill="currentColor" />
    <path d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" fill="currentColor" />
    <path d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" fill="currentColor" />
    <path d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" fill="currentColor" />
  </svg>
);

const Discord = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 199" fill="none" aria-hidden="true">
    <path
      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
      fill="currentColor"
    />
  </svg>
);

const icons: Record<SocialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: Github,
  linkedin: LinkedIn,
  mail: Mail,
  discord: Discord,
};

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {socialsConfig.map((social) => {
        const Icon = icons[social.icon];

        return (
          <a
            key={social.href}
            href={social.href}
            aria-label={social.label}
            className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white/75 text-slate-950 shadow-sm shadow-slate-200/70 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}

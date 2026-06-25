import { Github, Linkedin, Mail, MessageCircle, type LucideIcon } from 'lucide-react';
import { socialsConfig } from '@/config/socials';
import type { SocialIcon } from '@/types/social';

const icons: Record<SocialIcon, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  discord: MessageCircle,
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
            <Icon className="size-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}

export type SocialIcon = 'github' | 'linkedin' | 'mail' | 'discord';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

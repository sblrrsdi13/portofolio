import Image from 'next/image';
import { BriefcaseBusiness, CheckCircle2, Folder, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { heroConfig } from '@/config/hero';
import { statsConfig } from '@/config/stats';

const statIcons: Record<(typeof statsConfig)[number]['icon'], LucideIcon> = {
  briefcase: BriefcaseBusiness,
  folder: Folder,
  users: Users,
  check: CheckCircle2,
};

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 px-4 py-6 sm:px-6 sm:py-8 md:flex md:min-h-[calc(100svh-5rem)] md:snap-start md:items-center lg:px-8"
    >
      <Container className="glass relative min-h-auto overflow-hidden rounded-[1.75rem] px-6 py-8 sm:px-10 sm:py-10 lg:min-h-130 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_20%,rgba(99,102,241,0.13),transparent_26rem)]" />

        <div className="absolute inset-0 lg:hidden">
          <Image
            src={heroConfig.avatar.src}
            alt={heroConfig.avatar.alt}
            fill
            priority
            className="object-contain object-center opacity-[0.16] dark:opacity-[0.11]"
            sizes="100vw"
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="relative grid min-h-140 items-center gap-8 lg:min-h-110 lg:grid-cols-[0.9fr_1.05fr_0.8fr]">
          <div className="z-10 max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              {heroConfig.greeting}{' '}
              <span className="text-indigo-600">{heroConfig.name}</span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-slate-500 sm:text-2xl">
              {heroConfig.title}
            </p>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              {heroConfig.description}
            </p>
            <div className="mt-8 flex flex-row flex-wrap items-center gap-3">
              {heroConfig.buttons.map((button) => (
                <Button
                  key={button.href}
                  href={button.href}
                  variant={button.variant}
                  className="w-auto"
                >
                  {button.label}
                </Button>
              ))}
            </div>
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium text-slate-500">{heroConfig.followLabel}</p>
              <SocialLinks />
            </div>
          </div>

          <div className="relative order-first mx-auto hidden h-50 w-full max-w-70 sm:h-65 sm:max-w-85 lg:order-0 lg:block lg:h-117.5 lg:max-w-none">
            <Image
              src={heroConfig.avatar.src}
              alt={heroConfig.avatar.alt}
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 560px"
            />
          </div>

          <div className="">
            <div className="space-y-1">
              {statsConfig.map((stat) => {
                const Icon = statIcons[stat.icon];

                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 border-slate-200/80 px-1 py-4 last:border-b-0"
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-950">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-slate-600">{stat.label}</span>
                    <span
                      className={`ml-auto text-sm font-bold ${
                        stat.icon === 'check' ? 'text-emerald-600' : 'text-slate-950'
                      }`}
                    >
                      {stat.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

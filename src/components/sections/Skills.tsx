import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Container } from '@/components/layout/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { skillsConfig } from '@/config/skills';

const floatingIconLayout = [
  { className: 'left-[3%] top-[7%] size-12 opacity-45', duration: '8s', delay: '-1s' },
  { className: 'left-[16%] top-[19%] size-10 opacity-35', duration: '10s', delay: '-3s' },
  { className: 'left-[5%] top-[58%] size-14 opacity-40', duration: '9s', delay: '-4s' },
  { className: 'left-[24%] bottom-[7%] size-9 opacity-30', duration: '11s', delay: '-2s' },
  { className: 'right-[4%] top-[8%] size-14 opacity-40', duration: '9s', delay: '-5s' },
  { className: 'right-[18%] top-[23%] size-10 opacity-35', duration: '12s', delay: '-1s' },
  { className: 'right-[5%] top-[61%] size-12 opacity-45', duration: '8s', delay: '-3s' },
  { className: 'right-[27%] bottom-[8%] size-9 opacity-30', duration: '10s', delay: '-6s' },
  { className: 'left-[42%] top-[5%] size-10 opacity-25', duration: '12s', delay: '-2s' },
  { className: 'left-[47%] bottom-[5%] size-11 opacity-25', duration: '9s', delay: '-4s' },
  { className: 'left-[12%] top-[42%] size-9 opacity-30', duration: '11s', delay: '-7s' },
  { className: 'right-[12%] top-[45%] size-9 opacity-30', duration: '10s', delay: '-5s' },
];

export function Skills() {
  return (
    <AnimatedSection id="skills">
      <Container>
        <div className="relative min-h-[calc(100svh-7rem)] overflow-hidden px-3 py-10 sm:px-8 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(66,88,214,0.14),transparent_24rem)]" />
          <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
            {skillsConfig.backgroundIcons.map((icon, index) => {
              const layout = floatingIconLayout[index % floatingIconLayout.length];

              return (
                <span
                  key={`${icon.src}-${index}`}
                  className={`floating-skill-icon absolute grid place-items-center rounded-2xl border border-white/50 bg-white/60 shadow-lg shadow-slate-300/30 backdrop-blur-md ${layout.className}`}
                  style={{
                    '--float-duration': layout.duration,
                    '--float-delay': layout.delay,
                    '--float-distance': index % 2 === 0 ? '-16px' : '14px',
                    '--float-rotate': `${(index % 5) * 3 - 6}deg`,
                  } as CSSProperties}
                >
                  <Image
                    src={icon.src}
                    alt=""
                    width={34}
                    height={34}
                    className="size-7 object-contain sm:size-8"
                  />
                </span>
              );
            })}
          </div>

          <div className="relative flex min-h-[calc(100svh-14rem)] items-center justify-center">
            <Card className="mx-auto w-full max-w-2xl p-5 text-center shadow-slate-300/40 sm:p-7">
              <h2 className="text-2xl font-bold text-slate-950">{skillsConfig.sectionLabel}</h2>
              <p className="mt-1 text-sm text-slate-600">{skillsConfig.title}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {skillsConfig.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-slate-200 bg-white/70 p-4 text-center shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <span className="mx-auto grid size-12 place-items-center rounded-xl bg-white shadow-sm">
                      <Image
                        src={skill.icon.src}
                        alt={skill.icon.alt}
                        width={32}
                        height={32}
                        className="size-8 object-contain"
                      />
                    </span>
                    <h3 className="mt-3 text-xs font-bold text-slate-900">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

import { CalendarDays } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { experienceConfig } from '@/config/experience';

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <Container>
        <div className="mx-auto w-full max-w-5xl">
          <SectionTitle
            label={experienceConfig.sectionLabel}
            title={experienceConfig.title}
            description={experienceConfig.description}
          />
          <div className="relative mt-10 space-y-5">
            <div className="absolute left-5 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-slate-200 md:block" />
            {experienceConfig.items.map((item) => (
              <div key={`${item.company}-${item.period}`} className="relative md:pl-14">
                <span className="absolute left-0 top-7 hidden size-10 place-items-center rounded-full border border-slate-200 bg-white text-indigo-600 shadow-sm md:grid">
                  <CalendarDays className="size-4" aria-hidden="true" />
                </span>
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-indigo-600">{item.company}</p>
                    </div>
                    <p className="font-mono text-sm text-slate-500">{item.period}</p>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

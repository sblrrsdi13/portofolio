import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { aboutConfig } from '@/config/about';

export function About() {
  return (
    <AnimatedSection id="about">
      <Container>
        <div className="flex min-h-[calc(100svh-9rem)] items-center justify-center py-8 sm:py-12">
          <div className="relative w-full max-w-[1120px] px-0 sm:px-4">
            <div className="absolute -bottom-16 -left-8 z-20 hidden md:block lg:-bottom-20 lg:left-0">
              <Image
                src={aboutConfig.avatar.src}
                alt={aboutConfig.avatar.alt}
                width={350}
                height={460}
                priority
                className="h-auto object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.16)]"
              />
            </div>
            <div
              className="ml-0 w-full rounded-2xl border border-slate-300 bg-white px-6 py-9 shadow-[0_18px_46px_rgba(42,51,82,0.14)] sm:px-10 sm:py-11 md:ml-[120px] md:min-h-[360px] md:pl-[190px] lg:ml-[150px] lg:min-h-[410px] lg:pl-[220px]"
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {aboutConfig.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {aboutConfig.description}
              </p>

              <Button
                href={aboutConfig.button.href}
                variant="secondary"
                className="mt-8"
              >
                {aboutConfig.button.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

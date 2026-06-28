import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { aboutConfig } from '@/config/about';

export function About() {
  return (
    <AnimatedSection id="about">
      <Container>
        <div className="flex min-h-[calc(100svh-9rem)] items-start justify-center pt-12 sm:pt-16 pb-8 sm:pb-10">
          <div className="relative w-full max-w-7xl px-4 sm:px-6">
            <div className="relative overflow-visible">
              <div className="absolute -left-16 -top-15 z-30 hidden lg:block lg:h-136 lg:w-104">
                <Image
                  src={aboutConfig.avatar.src}
                  alt={aboutConfig.avatar.alt}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white px-5 py-8 shadow-[0_18px_46px_rgba(42,51,82,0.14)] dark:shadow-[0_18px_46px_rgba(0,0,0,0.28)] sm:px-10 sm:py-11 lg:pl-100">
                <div className="absolute inset-0 lg:hidden">
                  <Image
                    src={aboutConfig.avatar.src}
                    alt={aboutConfig.avatar.alt}
                    fill
                    priority
                    className="object-contain object-center opacity-[0.16] dark:opacity-[0.11]"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0" />
                </div>

                <div className="relative z-10 flex min-h-120 flex-col justify-end lg:min-h-0">
                  <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl lg:text-left">
                    {aboutConfig.title}
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0 lg:text-left">
                    {aboutConfig.description}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
                    <Button href={aboutConfig.button.href} variant="secondary">
                      {aboutConfig.button.label}
                    </Button>
                    <Button
                      href={aboutConfig.cvButton.href}
                      variant="primary"
                      download={aboutConfig.cvButton.filename}
                    >
                      {aboutConfig.cvButton.label}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

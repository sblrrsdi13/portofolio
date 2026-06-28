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
            <div className="absolute -bottom-20 left-0 z-20 hidden lg:block">
              <Image
                src={aboutConfig.avatar.src}
                alt={aboutConfig.avatar.alt}
                width={350}
                height={460}
                priority
                className="h-auto w-[230px] object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.16)] lg:w-[290px]"
              />
            </div>
            <div
              className="relative min-h-[540px] w-full overflow-hidden rounded-2xl border border-slate-300 bg-white px-5 py-8 shadow-[0_18px_46px_rgba(42,51,82,0.14)] dark:shadow-[0_18px_46px_rgba(0,0,0,0.28)] sm:px-10 sm:py-11 lg:ml-[150px] lg:min-h-[410px] lg:overflow-visible lg:pl-[220px]"
            >
              <div className="absolute inset-0 lg:hidden">
                <Image
                  src={aboutConfig.avatar.src}
                  alt={aboutConfig.avatar.alt}
                  fill
                  priority
                  className="object-contain object-center opacity-[0.16] dark:opacity-[0.11]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(245,247,252,0.72)_55%,rgba(245,247,252,0.94)_100%)] dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.12)_0%,rgba(15,23,42,0.42)_55%,rgba(15,23,42,0.82)_100%)]" />
              </div>

              <div className="relative z-10 flex min-h-[480px] flex-col justify-end lg:block lg:min-h-0">
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
      </Container>
    </AnimatedSection>
  );
}

import { Star } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { testimonialsConfig } from '@/config/testimonials';

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials">
      <Container>
        <Card className="mx-auto w-full max-w-6xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            {testimonialsConfig.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            {testimonialsConfig.description}
          </p>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {testimonialsConfig.items.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border border-slate-200 bg-white/70 p-6"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="size-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-5 min-h-28 text-sm leading-6 text-slate-700">
                  &quot;{testimonial.review}&quot;
                </p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Card>
      </Container>
    </AnimatedSection>
  );
}

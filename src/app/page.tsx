import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <main className="space-y-2 sm:space-y-3">
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}

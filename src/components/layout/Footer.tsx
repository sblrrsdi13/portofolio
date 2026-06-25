import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="pb-8 pt-2">
      <Container className="flex flex-col items-center justify-center gap-5 text-xs text-slate-500 sm:flex-row">
        <p>
          &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

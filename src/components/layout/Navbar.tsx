'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

type Theme = 'light' | 'dark';
const themeChangeEvent = 'themechange';

const navVisibility = [
  'min-[420px]:inline-flex',
  'min-[520px]:inline-flex',
  'min-[680px]:inline-flex',
  'min-[820px]:inline-flex',
  'min-[980px]:inline-flex',
  'min-[1120px]:inline-flex',
];

function getThemeSnapshot(): Theme {
  if (typeof document === 'undefined') {
    return 'light';
  }

  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getServerThemeSnapshot(): Theme {
  return 'light';
}

function subscribeTheme(callback: () => void) {
  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener('storage', callback);

  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener('storage', callback);
  };
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(siteConfig.nav[0]?.href ?? '#home');
  const pendingNavRef = useRef<string | null>(null);
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function applyTheme(nextTheme: Theme) {
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  function handleNavClick(href: string) {
    pendingNavRef.current = href;
    setActiveHref(href);
    setMobileOpen(false);
  }

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    }

    function closeOnDesktop() {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false);
      }
    }

    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    let scrollIdleTimer: number | undefined;

    const scrollPadding = Number.parseFloat(
      getComputedStyle(document.documentElement).scrollPaddingTop,
    );
    const navOffset = (Number.isFinite(scrollPadding) ? scrollPadding : 88) + 72;

    function getActiveHref() {
      const sectionLinks = siteConfig.nav.filter((item) => item.href.startsWith('#'));
      let current = sectionLinks[0]?.href ?? '#home';

      for (const item of sectionLinks) {
        const section = document.querySelector(item.href);

        if (section instanceof HTMLElement && section.getBoundingClientRect().top <= navOffset) {
          current = item.href;
        }
      }

      if (window.scrollY < 48) {
        current = sectionLinks[0]?.href ?? '#home';
      }

      return current;
    }

    function syncActiveHref(nextHref?: string) {
      const next = nextHref ?? getActiveHref();
      setActiveHref((prev) => (prev === next ? prev : next));
    }

    function finishNavScroll() {
      const pendingHref = pendingNavRef.current;

      if (pendingHref) {
        pendingNavRef.current = null;
        syncActiveHref(pendingHref);
        return;
      }

      syncActiveHref();
    }

    function onScroll() {
      if (pendingNavRef.current) {
        return;
      }

      window.clearTimeout(scrollIdleTimer);
      scrollIdleTimer = window.setTimeout(finishNavScroll, 120);
    }

    function onHashChange() {
      const hash = window.location.hash;

      if (hash && siteConfig.nav.some((item) => item.href === hash)) {
        pendingNavRef.current = hash;
        syncActiveHref(hash);
      }
    }

    syncActiveHref();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scrollend', finishNavScroll, { passive: true });
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollend', finishNavScroll);
      window.removeEventListener('hashchange', onHashChange);
      window.clearTimeout(scrollIdleTimer);
    };
  }, []);

  return (
    <header className="sticky top-2 z-50 px-3 sm:top-3">
      <Container className="glass relative grid h-14 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-[1.1rem] px-3 sm:h-16 sm:gap-3 sm:rounded-[1.35rem] sm:px-5">
        <a
          href={siteConfig.nav[0]?.href ?? '#home'}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label={`${siteConfig.name} home`}
          onClick={() => handleNavClick(siteConfig.nav[0]?.href ?? '#home')}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-xl sm:size-11">
            <Image
              src={siteConfig.brand.logo.src}
              alt={siteConfig.brand.logo.alt}
              width={30}
              height={30}
              className="size-8 object-contain sm:size-9"
              priority
            />
          </span>
          <span className="max-w-[6.5rem] truncate text-sm font-bold tracking-normal text-slate-950 min-[360px]:max-w-[9rem] min-[360px]:text-base lg:max-w-none">
            {siteConfig.name}
          </span>
        </a>

        <nav
          className="flex min-w-0 items-center justify-center gap-1 overflow-hidden"
          aria-label="Primary navigation"
        >
          {siteConfig.nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`hidden shrink-0 rounded-xl px-2.5 py-2 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-sm lg:px-3 xl:px-4 ${navVisibility[index]} ${
                activeHref === item.href
                  ? 'bg-slate-100 text-indigo-600'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
              }`}
              aria-current={activeHref === item.href ? 'page' : undefined}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <div
            className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 min-[1180px]:flex"
            aria-label="Theme selector"
          >
            <button
              type="button"
              className={`grid size-8 place-items-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                theme === 'light' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-700'
              }`}
              aria-label="Use light mode"
              aria-pressed={theme === 'light'}
              onClick={() => applyTheme('light')}
            >
              <Sun className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`grid size-8 place-items-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                theme === 'dark' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-900'
              }`}
              aria-label="Use dark mode"
              aria-pressed={theme === 'dark'}
              onClick={() => applyTheme('dark')}
            >
              <Moon className="size-4" aria-hidden="true" />
            </button>
          </div>
          <Button
            href={siteConfig.navCta.href}
            variant="secondary"
            size="sm"
            className="hidden min-[1240px]:inline-flex"
          >
            {siteConfig.navCta.label}
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 min-[1280px]:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <Container className="absolute left-0 right-0 top-[calc(100%+0.5rem)] min-[1280px]:hidden">
          <div
            id="mobile-navigation"
            className="glass max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[1.1rem] p-2.5 sm:rounded-[1.35rem] sm:p-3"
          >
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                    activeHref === item.href
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-700 hover:bg-white/70 hover:text-indigo-600'
                  }`}
                  aria-current={activeHref === item.href ? 'page' : undefined}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-3 grid gap-3 border-t border-slate-200/70 pt-3 min-[420px]:grid-cols-[auto_1fr] min-[420px]:items-center">
              <div
                className="flex w-fit items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1"
                aria-label="Theme selector"
              >
                <button
                  type="button"
                  className={`grid size-8 place-items-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                    theme === 'light' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-700'
                  }`}
                  aria-label="Use light mode"
                  aria-pressed={theme === 'light'}
                  onClick={() => applyTheme('light')}
                >
                  <Sun className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className={`grid size-8 place-items-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                    theme === 'dark' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-900'
                  }`}
                  aria-label="Use dark mode"
                  aria-pressed={theme === 'dark'}
                  onClick={() => applyTheme('dark')}
                >
                  <Moon className="size-4" aria-hidden="true" />
                </button>
              </div>
              <Button
                href={siteConfig.navCta.href}
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {siteConfig.navCta.label}
              </Button>
            </div>
          </div>
        </Container>
      ) : null}
    </header>
  );
}

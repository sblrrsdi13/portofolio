'use client';

import Image from 'next/image';
import { Code2, Globe2, UserRound } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export function WelcomeScreen() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!visible) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, prefersReducedMotion ? 900 : siteConfig.welcome.durationMs);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, [prefersReducedMotion, visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#eef2f8] text-slate-950 dark:bg-[#050816] dark:text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.55, ease: 'easeOut' }}
        >
          <div className="grid-pattern absolute inset-0 opacity-80" />
          <motion.div
            className="absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-400/18"
            initial={prefersReducedMotion ? false : { scale: 0.8, opacity: 0.25 }}
            animate={prefersReducedMotion ? undefined : { scale: 1.12, opacity: 0.75 }}
            transition={{ duration: 2.1, ease: 'easeInOut' }}
          />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white/70 to-transparent dark:from-[#050816]/80" />
          <motion.div
            className="relative mx-5 flex w-full max-w-2xl flex-col items-center text-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              {[
                { icon: Code2, label: 'Code' },
                { icon: UserRound, label: 'Developer' },
                { icon: Globe2, label: 'Website' },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.span
                    key={item.label}
                    className="glass grid size-11 place-items-center rounded-full text-indigo-600 shadow-lg shadow-indigo-200/30 dark:text-indigo-200 dark:shadow-black/30"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                    aria-label={item.label}
                  >
                    {index === 0 ? (
                      <Image
                        src={siteConfig.brand.logo.src}
                        alt={siteConfig.brand.logo.alt}
                        width={22}
                        height={22}
                        priority
                        className="size-5 object-contain"
                      />
                    ) : (
                      <Icon className="size-5" aria-hidden="true" />
                    )}
                  </motion.span>
                );
              })}
            </div>

            <motion.h1
              className="mt-8 text-4xl font-black leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {siteConfig.welcome.title}
              <br />
              <span className="text-slate-500 dark:text-white/55">
                {siteConfig.welcome.subtitle}
              </span>
            </motion.h1>

            <motion.p
              className="mt-7 text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600/70 dark:text-indigo-200/55 sm:text-base"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.58 }}
            >
              {siteConfig.welcome.domain}
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

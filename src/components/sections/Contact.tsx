'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Container } from '@/components/layout/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { contactConfig } from '@/config/contact';

const EMAILJS_SERVICE_ID = 'service_pf2vsho';   // ← ganti
const EMAILJS_TEMPLATE_ID = 'template_91xjlzb'; // ← ganti
const EMAILJS_PUBLIC_KEY = 'WyH3ERtlwvpJ6rAqe';   // ← ganti

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <AnimatedSection id="contact" className="pb-6">
      <Container>
        <Card className="mx-auto grid w-full max-w-6xl gap-7 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.8fr_1fr_0.65fr] lg:items-center">
          <div>
            <SectionTitle
              label={contactConfig.sectionLabel}
              title={contactConfig.title}
              description={contactConfig.description}
              align="left"
            />
          </div>
          <div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  {contactConfig.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={contactConfig.form.namePlaceholder}
                  className="mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white/75 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  {contactConfig.form.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={contactConfig.form.emailPlaceholder}
                  className="mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white/75 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  {contactConfig.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder={contactConfig.form.messagePlaceholder}
                  className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white/75 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {status === 'success' && (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  ❌ Failed to send. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#151923] px-5 text-sm font-semibold text-white shadow-lg shadow-slate-300/60 transition hover:bg-[#252b38] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{status === 'loading' ? 'Sending...' : contactConfig.form.submitLabel}</span>
                <Send className="size-4" aria-hidden="true" />
              </button>
            </form>
          </div>
          <Image
            src="/assets/contact-illustration.svg"
            alt={contactConfig.illustrationAlt}
            width={360}
            height={320}
            className="mx-auto hidden h-auto max-h-85 w-full max-w-90 object-contain lg:block"
          />
        </Card>
      </Container>
    </AnimatedSection>
  );
}
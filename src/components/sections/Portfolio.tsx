'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, ChevronDown, ChevronRight, FolderKanban, Layers3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { certificatesConfig } from '@/config/certificates';
import { projectsConfig } from '@/config/projects';
import { skillsConfig } from '@/config/skills';

type PortfolioTab = 'projects' | 'certificates' | 'tech-stack';

const visibleLimit = 3;

const tabs: Array<{
  id: PortfolioTab;
  label: string;
  icon: LucideIcon;
}> = [
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'tech-stack', label: 'Tech Stack', icon: Layers3 },
];

const floatingIconLayout = [
  { className: 'left-[3%] top-[7%] size-12 opacity-45', duration: '8s', delay: '-1s' },
  { className: 'left-[16%] top-[19%] size-10 opacity-35', duration: '10s', delay: '-3s' },
  { className: 'left-[5%] top-[58%] size-14 opacity-40', duration: '9s', delay: '-4s' },
  { className: 'left-[24%] bottom-[7%] size-9 opacity-30', duration: '11s', delay: '-2s' },
  { className: 'right-[4%] top-[8%] size-14 opacity-40', duration: '9s', delay: '-5s' },
  { className: 'right-[18%] top-[23%] size-10 opacity-35', duration: '12s', delay: '-1s' },
  { className: 'right-[5%] top-[61%] size-12 opacity-45', duration: '8s', delay: '-3s' },
  { className: 'right-[27%] bottom-[8%] size-9 opacity-30', duration: '10s', delay: '-6s' },
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('projects');

  return (
    <AnimatedSection id="portfolio">
      <Container>
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-2 py-10 sm:px-4 lg:px-6">
          <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-normal text-slate-950 sm:text-5xl">
              Portfolio Showcase
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Explore my journey through projects, certifications, and technical expertise.
            </p>
          </div>

          <div className="glass relative mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-2 rounded-[1.35rem] p-2 sm:grid-cols-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`flex min-h-12 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                    isActive
                      ? 'bg-white text-indigo-600 shadow-sm shadow-slate-200/60'
                      : 'text-slate-500 hover:bg-white/55 hover:text-slate-950'
                  }`}
                  aria-pressed={isActive}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="relative mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.99 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeTab === 'projects' ? <ProjectsPanel /> : null}
                {activeTab === 'certificates' ? <CertificatesPanel /> : null}
                {activeTab === 'tech-stack' ? <TechStackPanel /> : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

function ProjectsPanel() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = projectsConfig.projects.slice(0, visibleLimit);
  const extraProjects = projectsConfig.projects.slice(visibleLimit);
  const hasMore = projectsConfig.projects.length > visibleLimit;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        <AnimatePresence initial={false}>
          {showAll
            ? extraProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            : null}
        </AnimatePresence>
      </div>
      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#151923] px-5 text-sm font-semibold !text-slate-50 shadow-lg shadow-slate-300/60 transition hover:bg-[#252b38] focus:outline-none focus:ring-2 focus:ring-indigo-300"
            onClick={() => setShowAll((value) => !value)}
          >
            {showAll ? 'View Less' : 'View More'}
            <ChevronDown
              className={`size-4 transition ${showAll ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      ) : null}
    </>
  );
}

function CertificatesPanel() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = certificatesConfig.certificates.slice(0, visibleLimit);
  const extraCertificates = certificatesConfig.certificates.slice(visibleLimit);
  const hasMore = certificatesConfig.certificates.length > visibleLimit;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleCertificates.map((certificate) => (
          <CertificateCard key={certificate.title} certificate={certificate} />
        ))}
        <AnimatePresence initial={false}>
          {showAll
            ? extraCertificates.map((certificate) => (
                <motion.div
                  key={certificate.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CertificateCard certificate={certificate} />
                </motion.div>
              ))
            : null}
        </AnimatePresence>
      </div>
      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#151923] px-5 text-sm font-semibold !text-slate-50 shadow-lg shadow-slate-300/60 transition hover:bg-[#252b38] focus:outline-none focus:ring-2 focus:ring-indigo-300"
            onClick={() => setShowAll((value) => !value)}
          >
            {showAll ? 'View Less' : 'View More'}
            <ChevronDown
              className={`size-4 transition ${showAll ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      ) : null}
    </>
  );
}

function ProjectCard({ project }: { project: (typeof projectsConfig.projects)[number] }) {
  return (
    <article className="glass rounded-[1.35rem] p-4 transition hover:-translate-y-1">
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={720}
        height={420}
        className="h-44 w-full rounded-2xl border border-slate-200 bg-white/60 object-cover"
      />
      <div className="p-1 pt-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} className="border-slate-200 bg-slate-100 text-slate-700">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-950">{project.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="mt-5 flex justify-end">
          <Link
            href={`/portfolio/projects/${project.slug}`}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#151923] px-4 text-sm font-semibold !text-slate-50 shadow-lg shadow-slate-300/60 transition hover:bg-[#252b38] focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Details
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function CertificateCard({
  certificate,
}: {
  certificate: (typeof certificatesConfig.certificates)[number];
}) {
  return (
    <article className="glass rounded-[1.35rem] p-4 transition hover:-translate-y-1">
      <Image
        src={certificate.thumbnail}
        alt={certificate.title}
        width={720}
        height={420}
        className="h-48 w-full rounded-2xl border border-slate-200 bg-white/60 object-cover"
      />
      <div className="p-1 pt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-indigo-600">{certificate.issuer}</p>
          <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600">
            {certificate.issuedAt}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-bold text-slate-950">{certificate.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{certificate.description}</p>
        <div className="mt-5 flex justify-end">
          <Link
            href={`/portfolio/certificates/${certificate.slug}`}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#151923] px-4 text-sm font-semibold !text-slate-50 shadow-lg shadow-slate-300/60 transition hover:bg-[#252b38] focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            {certificatesConfig.detailLabel}
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function TechStackPanel() {
  return (
    <div className="relative overflow-hidden px-3 py-10 sm:px-8 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(66,88,214,0.14),transparent_24rem)]" />
      <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
        {skillsConfig.backgroundIcons.map((icon, index) => {
          const layout = floatingIconLayout[index % floatingIconLayout.length];

          return (
            <span
              key={`${icon.src}-${index}`}
              className={`floating-skill-icon absolute grid place-items-center rounded-2xl border border-white/50 bg-white/60 shadow-lg shadow-slate-300/30 backdrop-blur-md ${layout.className}`}
              style={{
                '--float-duration': layout.duration,
                '--float-delay': layout.delay,
                '--float-distance': index % 2 === 0 ? '-16px' : '14px',
                '--float-rotate': `${(index % 5) * 3 - 6}deg`,
              } as CSSProperties}
            >
              <Image
                src={icon.src}
                alt=""
                width={34}
                height={34}
                className="size-7 object-contain sm:size-8"
              />
            </span>
          );
        })}
      </div>
      <div className="glass relative mx-auto max-w-4xl rounded-[1.35rem] p-5 sm:p-7">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-950">{skillsConfig.sectionLabel}</h3>
          <p className="mt-2 text-sm text-slate-600">{skillsConfig.title}</p>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {skillsConfig.skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-center transition hover:-translate-y-1 hover:bg-white"
            >
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white shadow-sm">
                <Image
                  src={skill.icon.src}
                  alt={skill.icon.alt}
                  width={36}
                  height={36}
                  className="size-9 object-contain"
                />
              </span>
              <h4 className="mt-3 text-sm font-bold text-slate-900">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

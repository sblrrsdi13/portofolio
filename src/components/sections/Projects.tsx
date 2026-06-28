import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { projectsConfig } from '@/config/projects';

export function Projects() {
  return (
    <AnimatedSection id="projects">
      <Container>
        <Card className="mx-auto w-full max-w-6xl p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                {projectsConfig.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                {projectsConfig.description}
              </p>
            </div>
            <a
              href="#projects"
              className="hidden items-center gap-2 text-sm font-semibold text-slate-950 sm:flex"
            >
              {projectsConfig.visitLabel}
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectsConfig.projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-300/40"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={720}
                  height={420}
                  className="h-44 w-full object-cover"
                  priority={project.slug === 'portofolio'}
                />
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="border-slate-200 bg-slate-100 py-1 text-slate-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-2 min-h-20 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    className="mt-5 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  >
                    <span>{projectsConfig.openLabel}</span>
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Card>
      </Container>
    </AnimatedSection>
  );
}

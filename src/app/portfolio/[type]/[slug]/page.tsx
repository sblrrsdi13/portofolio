import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Code2, ExternalLink, Layers3, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { certificatesConfig } from '@/config/certificates';
import { projectsConfig } from '@/config/projects';

type DetailType = 'projects' | 'certificates';

interface DetailPageProps {
  params: Promise<{
    type: DetailType;
    slug: string;
  }>;
}

const allItems = [
  ...projectsConfig.projects.map((project) => ({
    type: 'projects' as const,
    slug: project.slug,
    title: project.title,
    description: project.detailDescription,
    thumbnail: project.thumbnail,
    tags: project.tags,
    url: project.url,
    repositoryUrl: project.repositoryUrl,
    features: project.features,
    statLabel: 'Technologies Used',
    statValue: project.tags.length,
  })),
  ...certificatesConfig.certificates.map((certificate) => ({
    type: 'certificates' as const,
    slug: certificate.slug,
    title: certificate.title,
    description: certificate.detailDescription,
    thumbnail: certificate.thumbnail,
    tags: certificate.skills,
    url: certificate.url,
    repositoryUrl: undefined,
    features: certificate.features,
    statLabel: 'Skills Covered',
    statValue: certificate.skills.length,
  })),
];

export function generateStaticParams() {
  return allItems.map((item) => ({
    type: item.type,
    slug: item.slug,
  }));
}

export default async function PortfolioDetailPage({ params }: DetailPageProps) {
  const { type, slug } = await params;
  const item = allItems.find((entry) => entry.type === type && entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <Container>
        <div className="relative mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl gap-8 overflow-hidden rounded-[1.75rem] px-2 py-8 sm:px-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-6">
          <div className="absolute inset-0 -z-10 rounded-[1.75rem] bg-[radial-gradient(circle_at_15%_10%,rgba(66,88,214,0.14),transparent_26rem),radial-gradient(circle_at_85%_82%,rgba(14,165,233,0.12),transparent_24rem)]" />

          <section>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back
            </Link>

            <h1 className="mt-9 text-4xl font-black tracking-normal text-slate-950 sm:text-5xl">
              {item.title}
            </h1>
            <div className="mt-5 h-px w-24 bg-slate-300" />
            <p className="mt-9 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              {item.description}
            </p>

            <div className="mt-9 grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-slate-950 text-white">
                  <Code2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl font-bold text-slate-950">{item.statValue}</p>
                  <p className="text-xs text-slate-500">{item.statLabel}</p>
                </div>
              </div>
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-slate-950 text-white">
                  <Layers3 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl font-bold text-slate-950">{item.features.length}</p>
                  <p className="text-xs text-slate-500">Key Features</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {item.url ? (
                <a
                  href={item.url}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#151923] px-4 text-sm font-semibold !text-slate-50 shadow-lg shadow-slate-300/60 transition hover:bg-[#252b38] focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  aria-label={`Open ${item.title}`}
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Open
                </a>
              ) : null}
              {item.repositoryUrl ? (
                <a
                  href={item.repositoryUrl}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-4 text-sm font-semibold text-slate-950 shadow-sm shadow-slate-200/60 transition hover:border-indigo-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Repository
                </a>
              ) : null}
            </div>

            <div className="mt-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <Code2 className="size-4 text-indigo-600" aria-hidden="true" />
                Technologies Used
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} className="border-slate-200 bg-slate-100 text-slate-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={960}
              height={560}
              className="glass h-auto w-full rounded-[1.35rem] border border-slate-200 object-cover p-3"
              priority
            />

            <div className="glass rounded-[1.35rem] p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <Sparkles className="size-5 text-indigo-600" aria-hidden="true" />
                Key Features
              </h2>
              <ul className="mt-6 space-y-4">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

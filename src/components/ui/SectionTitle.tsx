interface SectionTitleProps {
  label: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <h2 className="text-2xl font-bold tracking-normal text-slate-950 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

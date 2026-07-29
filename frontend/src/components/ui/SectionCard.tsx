type SectionCardProps = {
  title: string
  description: string
  badge?: string
}

export function SectionCard({ title, description, badge }: SectionCardProps) {
  return (
    <article className="card">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-lg font-semibold text-ink">{title}</h2>
        {badge ? (
          <span className="shrink-0 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-primary-dark">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-ink-muted">{description}</p>
      <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs text-ink-muted">
        Feed and posting UI — later module.
      </p>
    </article>
  )
}

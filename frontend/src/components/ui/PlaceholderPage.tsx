type PlaceholderPageProps = {
  title: string
  description: string
  moduleNote?: string
}

export function PlaceholderPage({ title, description, moduleNote }: PlaceholderPageProps) {
  return (
    <div className="container-app py-12">
      <div className="card max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Module 1</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">{title}</h1>
        <p className="mt-4 text-ink-muted">{description}</p>
        {moduleNote ? (
          <p className="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-ink-muted">
            {moduleNote}
          </p>
        ) : null}
      </div>
    </div>
  )
}

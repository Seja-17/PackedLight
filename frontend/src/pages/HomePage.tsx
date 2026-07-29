import { Link } from 'react-router-dom'
import { theme } from '@/lib/theme'
import { aiCapabilities } from '@/lib/ai-capabilities'

export function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-teal-50/80 to-surface">
        <div className="container-app py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Travel planning</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {theme.brand.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-muted">{theme.brand.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/explore" className="btn-primary no-underline">
              Explore destinations
            </Link>
            <Link to="/signup" className="btn-ghost border border-slate-200 no-underline">
              Create free account
            </Link>
          </div>
        </div>
      </section>

      <section className="container-app py-16">
        <h2 className="text-xl font-semibold text-ink">Foundation ready</h2>
        <p className="mt-2 max-w-2xl text-ink-muted">
          Routing, layout, API client, and global header currency converter are configured. Phase 1
          launches with ~10 curated countries; the database supports unlimited expansion.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold text-ink">Travel-only AI can answer</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
              {aiCapabilities.canAnswer.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-ink">Travel-only AI cannot answer</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
              {aiCapabilities.cannotAnswer.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent" aria-hidden="true">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

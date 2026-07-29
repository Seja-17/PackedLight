import { Link } from 'react-router-dom'
import { DashboardWidget } from '@/components/dashboard/DashboardWidget'

const PLACEHOLDER_COUNTRIES = [
  { name: 'Japan', code: 'JP' },
  { name: 'France', code: 'FR' },
  { name: 'Thailand', code: 'TH' },
]

export function DashboardPage() {
  return (
    <div className="container-app py-10">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Module 1</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">Dashboard</h1>
        <p className="mt-2 max-w-2xl text-ink-muted">
          Your home after login: trips, favorites, budget summary, and recently viewed countries.
          Widgets below are layout shells — data arrives in later modules.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardWidget
          title="Recently viewed countries"
          description="Quick return to destinations you explored recently."
        >
          <ul className="space-y-2">
            {PLACEHOLDER_COUNTRIES.map((country) => (
              <li
                key={country.code}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm"
              >
                <span className="font-medium text-ink">{country.name}</span>
                <span className="text-xs text-ink-muted">{country.code}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-muted">Sample data — history tracking in Module 2+.</p>
        </DashboardWidget>

        <DashboardWidget
          title="Saved trips"
          description="Itineraries you created or bookmarked."
        >
          <p className="rounded-lg bg-slate-50 px-3 py-6 text-center text-sm text-ink-muted">
            No trips yet
          </p>
        </DashboardWidget>

        <DashboardWidget
          title="Budget summary"
          description="Spending overview from your active trip."
        >
          <p className="rounded-lg bg-slate-50 px-3 py-6 text-center text-sm text-ink-muted">
            Chart.js widget — later module
          </p>
        </DashboardWidget>

        <DashboardWidget
          title="Packing checklist"
          description="Trip-specific packing lists linked from Explore."
        >
          <Link
            to="/packing-checklist"
            className="inline-flex text-sm font-medium text-primary no-underline hover:text-primary-dark"
          >
            Open packing checklist →
          </Link>
        </DashboardWidget>

        <DashboardWidget
          title="AI travel assistant"
          description="Recent conversations scoped to travel topics only."
        >
          <p className="rounded-lg bg-slate-50 px-3 py-6 text-center text-sm text-ink-muted">
            Travel-only AI chat — later module
          </p>
        </DashboardWidget>

        <DashboardWidget
          title="Bookmarks"
          description="Saved blogs and community posts."
        >
          <p className="rounded-lg bg-slate-50 px-3 py-6 text-center text-sm text-ink-muted">
            No bookmarks yet
          </p>
        </DashboardWidget>
      </div>
    </div>
  )
}

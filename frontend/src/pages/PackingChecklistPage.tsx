import { Link } from 'react-router-dom'
import { aiCapabilities } from '@/lib/ai-capabilities'

const SAMPLE_ITEMS = [
  { id: 'passport', label: 'Passport and copies', packed: false },
  { id: 'adapter', label: 'Power adapter / charger', packed: false },
  { id: 'meds', label: 'Medications', packed: false },
  { id: 'layers', label: 'Weather-appropriate layers', packed: false },
  { id: 'daybag', label: 'Day bag', packed: false },
] as const

export function PackingChecklistPage() {
  return (
    <div className="container-app py-10">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Module 1</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">Packing checklist</h1>
        <p className="mt-2 text-ink-muted">
          Trip-specific lists tied to destinations and weather. Interactive save/sync arrives in a
          later module — this page defines the layout shell.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="card lg:col-span-2">
          <h2 className="text-lg font-semibold text-ink">Default list</h2>
          <p className="mt-1 text-sm text-ink-muted">Sample items for demonstration.</p>
          <ul className="mt-4 space-y-2">
            {SAMPLE_ITEMS.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-2.5"
              >
                <input
                  type="checkbox"
                  id={item.id}
                  disabled
                  className="h-4 w-4 rounded border-slate-300 text-primary"
                  aria-label={`Mark ${item.label} as packed`}
                />
                <label htmlFor={item.id} className="text-sm text-ink">
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-muted">
            Checkboxes disabled in Module 1 — persistence added with auth in Module 2+.
          </p>
        </section>

        <aside className="card h-fit">
          <h2 className="text-base font-semibold text-ink">AI packing help</h2>
          <p className="mt-2 text-sm text-ink-muted">
            The travel AI can suggest items for your destination. It will not answer non-travel
            questions.
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-muted">
            {aiCapabilities.canAnswer
              .filter((item) => item.toLowerCase().includes('pack'))
              .map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
          </ul>
          <Link
            to="/dashboard"
            className="mt-6 inline-flex text-sm font-medium text-primary no-underline hover:text-primary-dark"
          >
            ← Back to dashboard
          </Link>
        </aside>
      </div>
    </div>
  )
}

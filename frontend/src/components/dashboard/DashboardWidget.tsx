import type { ReactNode } from 'react'

type DashboardWidgetProps = {
  title: string
  description: string
  children?: ReactNode
}

export function DashboardWidget({ title, description, children }: DashboardWidgetProps) {
  return (
    <section className="card flex flex-col">
      <h2 className="text-base font-semibold text-ink">{title}</h2>
      <p className="mt-1 text-sm text-ink-muted">{description}</p>
      <div className="mt-4 flex-1">{children}</div>
    </section>
  )
}

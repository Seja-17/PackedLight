import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="container-app flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-6xl font-bold text-slate-200">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 max-w-md text-ink-muted">
        The page you requested does not exist or has moved.
      </p>
      <Link to="/" className="btn-primary mt-8 no-underline">
        Back to home
      </Link>
    </div>
  )
}

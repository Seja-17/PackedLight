import { Link } from 'react-router-dom'
import { theme } from '@/lib/theme'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="container-app grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="text-lg font-semibold text-ink">{theme.brand.name}</p>
          <p className="mt-2 max-w-md text-sm text-ink-muted">{theme.brand.tagline}</p>
          <p className="mt-4 text-xs text-ink-muted">
            Flight and hotel links open trusted partner sites. PackedLight does not process
            payments.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/explore" className="no-underline text-ink-muted hover:text-primary">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="no-underline text-ink-muted hover:text-primary">
                Travel blogs
              </Link>
            </li>
            <li>
              <Link to="/community" className="no-underline text-ink-muted hover:text-primary">
                Community
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Account</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/login" className="no-underline text-ink-muted hover:text-primary">
                Log in
              </Link>
            </li>
            <li>
              <Link to="/signup" className="no-underline text-ink-muted hover:text-primary">
                Sign up
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="no-underline text-ink-muted hover:text-primary">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/packing-checklist"
                className="no-underline text-ink-muted hover:text-primary"
              >
                Packing checklist
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4">
        <p className="container-app text-center text-xs text-ink-muted">
          © {year} {theme.brand.name}. University major project — MVP.
        </p>
      </div>
    </footer>
  )
}

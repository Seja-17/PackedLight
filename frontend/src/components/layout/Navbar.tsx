import { CurrencyConverter } from '@/components/layout/CurrencyConverter'
import { NavLink } from 'react-router-dom'
import { theme } from '@/lib/theme'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-4 py-2 text-lg font-semibold tracking-[0.02em] transition-all duration-200 sm:text-xl',
    isActive
      ? 'bg-teal-50 text-primary-dark shadow-sm'
      : 'text-ink-muted hover:bg-slate-100 hover:text-ink',
  ].join(' ')

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="container-app flex h-20 items-center justify-between gap-6 px-2 sm:px-4">
        <NavLink
  to="/"
  className="flex shrink-0 items-center no-underline transition-transform duration-200 hover:scale-[1.02]"
>
  <img
    src={theme.brand.logoSrc}
    alt={`${theme.brand.name} Logo`}
    className="h-16 w-auto object-contain"
  />
</NavLink>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          <NavLink to="/explore" className={navLinkClass}>
            Explore
          </NavLink>
          <NavLink to="/blogs" className={navLinkClass}>
            Blogs
          </NavLink>
          <NavLink to="/community" className={navLinkClass}>
            Community
          </NavLink>
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4">
          <CurrencyConverter />
          <NavLink
  to="/login"
  className="btn-ghost hidden whitespace-nowrap text-base font-semibold tracking-[0.02em] no-underline sm:inline-flex"
>
  Log in
</NavLink>

<NavLink
  to="/signup"
  className="btn-primary whitespace-nowrap text-base font-semibold tracking-[0.02em] no-underline"
>
  Sign up
</NavLink>
        </div>
      </div>

      <nav
        className="container-app flex gap-2 overflow-x-auto border-t border-slate-100 px-2 py-3 md:hidden"
        aria-label="Mobile"
      >
        <NavLink to="/explore" className={navLinkClass}>
          Explore
        </NavLink>
        <NavLink to="/blogs" className={navLinkClass}>
          Blogs
        </NavLink>
        <NavLink to="/community" className={navLinkClass}>
          Community
        </NavLink>
        <NavLink to="/dashboard" className={navLinkClass}>
          Dashboard
        </NavLink>
      </nav>
    </header>
  )
}

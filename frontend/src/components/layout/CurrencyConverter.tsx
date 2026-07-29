/**
 * Global header currency converter shell.
 * Exchange rates and persistence are wired in a later module.
 */
export function CurrencyConverter() {
  return (
    <div
      className="hidden max-w-[12rem] shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs shadow-sm lg:flex"
      title="Currency converter — rates added in a later module"
      aria-label="Currency converter"
    >
      <label className="sr-only" htmlFor="currency-from">
        From currency
      </label>
      <input
        id="currency-from"
        type="text"
        readOnly
        value="1 USD"
        className="w-14 rounded border-0 bg-slate-50 px-1 py-0.5 text-center font-medium text-ink"
        aria-readonly="true"
      />
      <span className="text-ink-muted" aria-hidden="true">
        →
      </span>
      <label className="sr-only" htmlFor="currency-to">
        To currency
      </label>
      <select
        id="currency-to"
        disabled
        className="rounded border-0 bg-slate-50 px-1 py-0.5 text-ink-muted"
        aria-label="Target currency"
      >
        <option>EUR</option>
        <option>GBP</option>
        <option>JPY</option>
        <option>INR</option>
      </select>
    </div>
  )
}

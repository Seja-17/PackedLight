/**
 * Design tokens for PackedLight.
 * Tailwind theme extensions live in src/styles/theme.css (@theme).
 * Use these constants when JavaScript needs the same values (charts, meta, etc.).
 */
import logo from '../assets/logo.png';

export const theme = {
  brand: {
    name: 'PackedLight',
    tagline: 'Plan lighter. Travel smarter.',
    logoSrc: logo,
  },
} as const;

export type Theme = typeof theme

/**
 * Travel-only AI scope for PackedLight (Gemini).
 * Enforced in the AI service layer in a later module; defined here for UI copy and guards.
 */
export const aiCapabilities = {
  canAnswer: [
    'Food and local cuisine',
    'Culture and customs',
    'Packing advice',
    'Navigation apps and getting around',
    'Visa basics (general guidance only)',
    'Currency and money tips',
    'Safety and travel advisories (general)',
    'Weather advice for destinations',
    'Attractions and things to do',
  ],
  cannotAnswer: [
    'Homework or academic assignments',
    'Coding or programming help',
    'General ChatGPT-style questions unrelated to travel',
    'Medical diagnoses or legal advice',
    'Booking or payment processing',
  ],
} as const

export type AiCapabilityList = typeof aiCapabilities

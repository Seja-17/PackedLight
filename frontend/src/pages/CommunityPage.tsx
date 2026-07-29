import { SectionCard } from '@/components/ui/SectionCard'

const COMMUNITY_SECTIONS = [
  {
    title: 'Questions',
    description:
      'Ask the community for help with visas, routes, local customs, and practical travel decisions.',
    badge: 'Q&A',
  },
  {
    title: 'Discussions',
    description:
      'Longer threads about destinations, trip reports, and travel experiences with likes and comments.',
    badge: 'Threads',
  },
  {
    title: 'Travel tips',
    description:
      'Short, actionable advice — packing hacks, airport tips, budget saves, and local know-how.',
    badge: 'Tips',
  },
] as const

export function CommunityPage() {
  return (
    <div className="container-app py-10">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Module 1</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">Community</h1>
        <p className="mt-2 text-ink-muted">
          Three feed types: questions, discussions, and travel tips. Posting, likes, and comments
          are implemented in a later module.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {COMMUNITY_SECTIONS.map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </div>
    </div>
  )
}

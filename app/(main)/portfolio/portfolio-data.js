// Portfolio project metadata (for the portfolio landing page)
// Full case study content lives in individual [slug]/page.js files

export const projects = [
  {
    slug: 'platform-console',
    title: 'Re-architecting a platform console for scale',
    thesis: 'Designing and shipping a foundational information architecture that supports multiple personas, evolving infrastructure models, and future roadmap growth.',
    role: 'Staff Product Designer · CoreWeave',
  },
  {
    slug: 'onboarding-at-scale',
    title: 'Redefining onboarding at scale',
    thesis: 'Designing a system to surface hidden risk, effort, and ownership across a distributed onboarding experience as CoreWeave scaled.',
    role: 'Staff Product Designer · CoreWeave',
  },
  {
    slug: 'permission-aware-systems',
    title: 'Designing permission-aware systems across surfaces',
    thesis: 'Reframing permissions as a platform-wide communication problem spanning console, API, and infrastructure-as-code.',
    role: 'Staff Product Designer · CoreWeave',
  },
]

// Helper function to get project metadata by slug
export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug)
}

// Helper function to get all slugs (for static generation)
export function getAllProjectSlugs() {
  return projects.map(project => project.slug)
}

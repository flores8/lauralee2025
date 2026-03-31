// Portfolio project metadata (for the portfolio landing page)
// Full case study content lives in individual [slug]/page.js files

export const projects = [
  {
    slug: 'platform-console',
    title: 'Building a product model that could scale with the platform',
    thesis: 'CoreWeave\'s console was built for Kubernetes experts. As the platform expanded, that foundation stopped working. I made the call to rebuild above the implementation layer, creating a shared product model that could hold as the company and team scaled.',
    role: 'Platform foundations & information architecture',
  },
  {
    slug: 'permission-aware-systems',
    title: 'Designing permission-aware systems across platform surfaces',
    thesis: 'Reframing permissions as a platform-wide communication problem spanning console, API, and infrastructure-as-code.',
    role: 'Cross-surface policy and mental models',
  },
  {
    slug: 'onboarding-at-scale',
    title: 'Redefining onboarding at scale',
    thesis: 'Designing a system to surface hidden risk, effort, and ownership across a distributed onboarding experience as CoreWeave scales.',
    role: 'Distributed onboarding systems & risk visibility',
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

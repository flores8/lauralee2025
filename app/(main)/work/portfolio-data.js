// Portfolio project metadata (for the portfolio landing page)
// Full case study content lives in individual [slug]/page.js files

export const projects = [
  {
    slug: 'permission-aware-systems',
    title: 'Reframing access as a platform communication problem',
    thesis: 'Making restricted capabilities visible shifted support questions toward what access customers needed to use them.',
    role: 'Cross-surface policy and mental models',
  },
  {
    slug: 'onboarding-at-scale',
    title: 'Making onboarding visible at scale',
    thesis: 'Onboarding research surfaced gaps in how teams communicated delivery timelines and informed a shared tool for tracking capacity.',
    role: 'Distributed onboarding systems & risk visibility',
  },
  {
    slug: 'platform-console',
    title: 'Building a product model that could scale with the platform',
    thesis: 'A new product model gave bare-metal customers a console experience and gave teams a shared structure for planning new features.',
    role: 'Platform foundations & information architecture',
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

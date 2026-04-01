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
    title: 'Reframing access as a platform communication problem',
    thesis: 'CoreWeave\'s permission system enforced access correctly but communicated nothing. Users assumed features were missing. I reframed it as a platform communication problem, aligned Security, Product, and Platform Engineering around a shared principle, and led my team through execution across console, API, and Terraform.',
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

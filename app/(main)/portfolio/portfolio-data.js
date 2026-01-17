// Portfolio project data

export const projects = [
  {
    slug: 'platform-console',
    title: 'Designing a scalable platform console',
    thesis: 'Re-architecting information architecture and workflows to support multiple personas, infrastructure models, and future roadmap growth.',
    role: 'Staff Product Designer · CoreWeave',
    description: [
      'Full project description paragraph 1...',
      'Full project description paragraph 2...',
    ],
    images: [
      {
        url: 'https://your-bucket.s3.amazonaws.com/portfolio/project-1-1.jpg',
        alt: 'Image description',
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: 'onboarding-at-scale',
    title: 'Redefining onboarding at scale',
    thesis: 'Designing a system to surface risk, effort, and ownership across a distributed onboarding process.',
    role: 'Staff Product Designer · CoreWeave',
    description: [
      'Full project description paragraph 1...',
      'Full project description paragraph 2...',
    ],
    images: [
      {
        url: 'https://your-bucket.s3.amazonaws.com/portfolio/project-2-1.jpg',
        alt: 'Image description',
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: 'permission-aware-systems',
    title: 'Designing permission-aware systems',
    thesis: 'Reframing permissions as a cross-surface communication problem across UI, API, and infrastructure-as-code.',
    role: 'Staff Product Designer · CoreWeave',
    description: [
      'Full project description paragraph 1...',
      'Full project description paragraph 2...',
    ],
    images: [
      {
        url: 'https://your-bucket.s3.amazonaws.com/portfolio/project-3-1.jpg',
        alt: 'Image description',
        width: 1200,
        height: 800,
      },
    ],
  },
]

// Helper function to get project by slug
export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug)
}

// Helper function to get all slugs (for static generation)
export function getAllProjectSlugs() {
  return projects.map(project => project.slug)
}

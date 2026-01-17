// Portfolio project data
// Update with your actual AWS S3 image URLs when ready

export const projects = [
  {
    slug: 'project-1',
    title: 'Project Title 1',
    tagline: 'A brief description of this project',
    thumbnail: 'https://your-bucket.s3.amazonaws.com/portfolio/project-1-thumb.jpg',
    year: '2024',
    role: 'Lead Product Designer',
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
      // Add more images as needed
    ],
  },
  {
    slug: 'project-2',
    title: 'Project Title 2',
    tagline: 'A brief description of this project',
    thumbnail: 'https://your-bucket.s3.amazonaws.com/portfolio/project-2-thumb.jpg',
    year: '2023',
    role: 'Product Designer',
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
    slug: 'project-3',
    title: 'Project Title 3',
    tagline: 'A brief description of this project',
    thumbnail: 'https://your-bucket.s3.amazonaws.com/portfolio/project-3-thumb.jpg',
    year: '2023',
    role: 'Staff Product Designer',
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

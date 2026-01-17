import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug, getAllProjectSlugs, projects } from '../portfolio-data'

// Generate static params for all project pages
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)

  // If project not found, show 404
  if (!project) {
    notFound()
  }

  // Get previous/next projects for navigation
  const currentIndex = projects.findIndex(p => p.slug === params.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="project-detail">
      <Link href="/portfolio" className="back-link">
        ← Back to Portfolio
      </Link>

      <article className="project-content">
        <header className="project-header">
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span>{project.role}</span>
            <span className="meta-separator">•</span>
            <span>{project.year}</span>
          </div>
        </header>

        <div className="project-description">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="project-images">
          {project.images.map((image, index) => (
            <div key={index} className="project-image">
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </article>

      {(prevProject || nextProject) && (
        <nav className="project-navigation">
          {prevProject && (
            <Link href={`/portfolio/${prevProject.slug}`} className="project-nav-link prev">
              <span className="nav-label">← Previous</span>
              <span className="nav-title">{prevProject.title}</span>
            </Link>
          )}
          {nextProject && (
            <Link href={`/portfolio/${nextProject.slug}`} className="project-nav-link next">
              <span className="nav-label">Next →</span>
              <span className="nav-title">{nextProject.title}</span>
            </Link>
          )}
        </nav>
      )}
    </div>
  )
}

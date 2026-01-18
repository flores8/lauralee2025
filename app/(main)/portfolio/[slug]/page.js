import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, getAllProjectSlugs, projects } from '../portfolio-data'

// Import individual project content components
import PlatformConsole from './platform-console'
// Import other projects as you create them:
// import OnboardingAtScale from './onboarding-at-scale'
// import PermissionAwareSystems from './permission-aware-systems'

// Generate static params for all project pages
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Map slugs to their content components
const projectComponents = {
  'platform-console': PlatformConsole,
  // Add other projects here as you create them:
  // 'onboarding-at-scale': OnboardingAtScale,
  // 'permission-aware-systems': PermissionAwareSystems,
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)

  // If project not found, show 404
  if (!project) {
    notFound()
  }

  // Get the content component for this project
  const ProjectContent = projectComponents[params.slug]

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
          </div>
        </header>

        {ProjectContent ? (
          <ProjectContent />
        ) : (
          <div className="project-placeholder">
            <p>This case study is coming soon.</p>
          </div>
        )}
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

import Link from 'next/link'
import { projects } from './portfolio-data'

export default function Portfolio() {
  return (
    <div className="portfolio-overview">
      <h1>Selected work</h1>
      <p className="portfolio-intro">
      Platform, systems, and foundational product design.
      </p>
      
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.slug} className="portfolio-card">
            <h2>{project.title}</h2>
            <p className="portfolio-card-thesis">{project.thesis}</p>
            <p className="portfolio-card-role">{project.role}</p>
            <Link 
              href={`/portfolio/${project.slug}`}
              className="portfolio-card-link"
            >
              View case study →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { projects } from './portfolio-data'

export default function Portfolio() {
  return (
    <div className="portfolio-overview">
      <h1>Portfolio</h1>
      <p className="portfolio-intro">
        Selected work from my career designing platform systems and infrastructure products.
      </p>
      
      <div className="portfolio-grid">
        {projects.map((project) => (
          <Link 
            href={`/portfolio/${project.slug}`} 
            key={project.slug}
            className="portfolio-card"
          >
            <div className="portfolio-card-image">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="portfolio-card-content">
              <h2>{project.title}</h2>
              <p className="portfolio-card-tagline">{project.tagline}</p>
              <p className="portfolio-card-meta">{project.role} • {project.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

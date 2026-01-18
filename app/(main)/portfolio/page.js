import Link from 'next/link'
import { projects } from './portfolio-data'

export default function Portfolio() {
  return (
    <div className="portfolio-overview">
      <h1>Selected work</h1>
      <p className="portfolio-intro">
      These case studies focus on foundational platform design, system-level UX, and scaling products responsibly.
      </p>
      
      <p className="resume-link">
        <a 
          href="https://lauraleeflores-com-website.s3.us-east-2.amazonaws.com/lauralee-flores-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume (PDF) →
        </a>
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

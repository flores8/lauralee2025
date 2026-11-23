import Link from 'next/link'
import { projects } from './portfolio-data'

export default function Portfolio() {
  return (
    <div className="portfolio-overview">
      <h1>Selected work</h1>
      <p className="portfolio-intro">
      A look at how I approach complex product problems: the framing, the tradeoffs, and what we learned.
      </p>
      <p className="resume-link">
        <a
          href="/resume/lauralee-flores-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume (PDF) →
        </a>
        <br />
        <a href="/resume/lauralee-flores-resume.docx" download>
          Download Word version (DOCX)
        </a>
      </p>
<div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.slug} className="portfolio-card">
            <h2>{project.title}</h2>
            <p className="portfolio-card-thesis">{project.thesis}</p>
<Link 
              href={`/work/${project.slug}`}
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

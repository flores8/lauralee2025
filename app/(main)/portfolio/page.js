import Link from 'next/link'
import { projects } from './portfolio-data'

export default function Portfolio() {
  return (
    <div className="portfolio-overview">
      <h1>Selected work</h1>
      <p className="portfolio-intro">
      Designing the abstractions, frameworks, and decision models that make complex platforms scalable.
      </p>
      <p className="portfolio-role">
        I'm a Staff Product Designer and Design Lead at CoreWeave, where I established the design function and led foundational platform work across console, API, and infrastructure products. 
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
      <div className="how-to-read">
        <h2>Overview</h2>
        <p>These projects focus on system-level design decisions rather than isolated interfaces. Each case study includes context on problem framing, design tradeoffs, and long-term impact. I recommend starting with the overview of each project, then diving deeper where the details are most relevant to your team’s challenges. Visuals are included where they clarify outcomes, but the emphasis is on how complex platforms are made legible, trustworthy, and scalable over time.</p>
      </div>
      
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
      <div className="portfolio-outro">
        <p>I’m seeking Principal or Staff+ IC roles focused on platform, infrastructure, or systems design - partnering closely with Product and Engineering leadership to solve problems that compound over time.</p>
      </div>
    </div>
  )
}

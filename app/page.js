import Link from 'next/link'

export default function Home() {
  return (
    <div className="intro">
      <h1>I'm Lauralee</h1>
      <p>I design platform products that make complex systems legible and scalable through clear abstractions, decision frameworks, and strategic foundations.
      </p>
      <p>
      I’m a Staff Product Designer leading design at the intersection of infrastructure, AI, and systems design. At CoreWeave, I established the design function and lead foundational platform work that shapes how the organization builds and scales its products. I focus on designing structures that help teams move faster with clarity - technically <em>and</em> organizationally.
      </p>
      <p><Link href="/portfolio" className="more-link">View systems case studies →</Link></p>
    </div>
  )
}
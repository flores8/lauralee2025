import Link from 'next/link'

export default function Home() {
  return (
    <div className="intro">
      <h1>I'm Lauralee</h1>
      <p>I design platform products that make complex systems legible and scalable through clear abstractions, decision frameworks, and strategic foundations.
      </p>
      <p>
      I'm a staff product designer leading design at the intersection of infrastructure, AI, and systems design - most recently at CoreWeave, where I established the design function and led foundational platform work. I believe the best products come from understanding how systems scale - not just technically, but organizationally - and designing the structures that help teams move faster with clarity.
      </p>
      <p><Link href="/portfolio" className="more-link">View systems case studies →</Link></p>
    </div>
  )
}
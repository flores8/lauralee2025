import Link from 'next/link'

export default function Home() {
  return (
    <div className="intro">
      <h1>I'm Lauralee</h1>
      <p>I design platform products that make complex systems legible and scalable.
      </p>
      <p>
      I'm a staff product designer working at the intersection of infrastructure, AI, and systems design - most recently leading foundational design work at CoreWeave. I believe the best products come from deep curiosity about people, technology, and the constraints that shape real-world systems.
      </p>
      <p><Link href="/portfolio" className="more-link">View selected work →</Link></p>
    </div>
  )
}
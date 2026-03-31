import Link from 'next/link'

export default function Home() {
  return (
    <div className="intro">
      <h1>I'm Lauralee</h1>
      <p>I lead product design at CoreWeave, where I built the design function from the ground up and now manage the team responsible for the company's core product experience.
      </p>
      <p>
      My focus is on the problems that sit between teams and systems: the places where product coherence quietly breaks down as things scale, where someone has to own the frame before execution can start, and where design judgment does more work than design output. CoreWeave builds AI infrastructure. These are complex, high-stakes products, and the foundation has to hold.
      </p>
      <p><Link href="/work" className="more-link">View selected work →</Link></p>
    </div>
  )
}
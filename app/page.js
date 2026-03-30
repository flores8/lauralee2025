import Link from 'next/link'

export default function Home() {
  return (
    <div className="intro">
      <h1>I'm Lauralee</h1>
      <p>I lead product design at CoreWeave, where I built the design function from the ground up and now manage the team responsible for the company's core product experience.
      </p>
      <p>
      My focus is on the problems that sit between teams and systems — where product coherence breaks down as things scale, where someone needs to own the frame before anyone can execute against it, and where design judgment matters more than design output. CoreWeave builds AI infrastructure. The products are complex, the stakes are real, and getting the foundation right actually matters.
      </p>
      <p><Link href="/portfolio" className="more-link">View selected work →</Link></p>
    </div>
  )
}
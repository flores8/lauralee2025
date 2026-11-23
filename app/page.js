import Link from 'next/link'

export default function Home() {
  return (
    <div className="intro">
      <h1>I’m Lauralee Flores</h1>
      <p>
        I built CoreWeave’s product design function from the ground up. Today I lead four Staff designers working on our core AI infrastructure products.
      </p>
      <p>
        I focus on the problems that sit between teams and systems. In our{' '}
        <Link href="/work/permission-aware-systems">permissions work</Link>, I helped Security, Product, and Platform Engineering agree on how to make restricted capabilities visible to customers while keeping access rules in place.
      </p>
      <p><Link href="/work" className="more-link">View selected work →</Link></p>
    </div>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div className="intro">
      <h1>I'm Lauralee</h1>
      <p>
        Designer, wife, mother, and lifelong learner.
      </p>
      <p>
        I believe the best work comes from staying endlessly curious - about your craft, 
        about technology, about the small design choices that shape our daily lives.
      </p>
      <p>
        Whether I'm creating digital experiences, exploring AI's creative possibilities, 
        or navigating life alongside my husband and our two amazing teenagers, 
        I'm always asking: what can this teach me?
      </p>
      <Link href="/about" className="more-link">
        More about me →
      </Link>
    </div>
  )
}
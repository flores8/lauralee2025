import Link from 'next/link'

export default function About() {
  return (
    <div className="intro">
      <Link href="/" style={{ fontSize: '0.9rem', opacity: 0.6 }}>
        ← Back
      </Link>
      <h1 style={{ marginTop: '2rem' }}>About</h1>
      {/* Content to be added */}
    </div>
  )
}
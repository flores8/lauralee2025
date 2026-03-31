import Link from 'next/link'


export default function About() {
  return (
    <div className="intro">
      <h1>About</h1>
      
      <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        {/* <h2>The craft</h2> */}
        <p>I'm a design leader at CoreWeave, where I built the design function from scratch and now lead the team responsible for the company's core product experience. That means hiring and developing designers, setting direction across a complex product surface, and making sure the experience holds together as the company scales.</p>
        <p>Before CoreWeave I was at Weights & Biases, working on tooling for ML practitioners at a time when most people outside the field weren't paying close attention to what was coming. I've been thinking about AI and what it does to products, and to the people building them, for four years now. That context shapes how I work.</p>
        <p>My background is in research. I trained in Human-Computer Interaction and psychology, and spent the early part of my career studying how people make sense of complex systems before I got restless and wanted to shape them instead. That instinct stayed with me. The most important design work still happens before anyone opens a tool: in how you frame the problem, what constraints you name, and what you decide not to solve.</p>
        <p>That framing instinct extends to how I think about teams. Good work requires trust, and trust requires clarity about who owns what, what we're optimizing for, and what we're willing to give up. I try to make those things explicit rather than leaving them to assumption.</p>
        <p>Which brings me to the harder question about where all of this is going. After four years inside AI products, I think the honest version is more disruptive than most designers want to say out loud. The roles we think of as product, design, and engineering are going to collapse into fewer, different things. What won't go away is the judgment about what gets built and the judgment about what it should feel like to use. Those decisions still require a person. Everything else is becoming infrastructure.</p>
<p><Link href="/portfolio" className="more-link">View selected work →</Link></p>
      </section>
    </div>
  )
}
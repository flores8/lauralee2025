import PortfolioActions from '../../components/PortfolioActions'

export default function About() {
  return (
    <div className="intro">
      <h1>About</h1>
      <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <p>
          I built the product design function for CoreWeave’s infrastructure business, and I’ve kept shaping the team as the company has grown.
          Today I lead four Staff designers and a UX researcher.
        </p>
        <p>
          When acquisitions brought new teams and products together, I saw we’d need a shared design system and hired a Staff designer to lead it.
          Our onboarding work showed me how much we could learn by following customers across team handoffs, so I hired CoreWeave’s first UX researcher to build a dedicated practice.
          Together, we’re making research part of every phase of product work across the company.
        </p>
        <p>
          I came to design through research. I trained in human-computer interaction and psychology and started out studying how people make sense of complex systems.
          Eventually I got restless and wanted to shape those systems myself. I’ve been a product designer since 2010, working in B2B SaaS.
          Before joining CoreWeave, I designed tools for machine learning engineers at Weights &amp; Biases.
        </p>
        <p>
          The curiosity I brought to research shows up in how I mentor. I love finding out what someone wants to learn and looking for work that gives them a chance to grow in that direction.
          One of my favorite parts of leading a team is giving people room to use their own judgment and seeing how proud they are of their work and of who they’re becoming.
        </p>
        <PortfolioActions />
      </section>
    </div>
  )
}

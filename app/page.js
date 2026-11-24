import PortfolioActions from './components/PortfolioActions'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={`intro ${styles.intro}`}>
      <h1>I’m Lauralee Flores</h1>
      <p>
        I build design teams and research practices. I love helping people grow into roles where they can lead more of the work.
      </p>
      <p>
        At CoreWeave, I started the product design function and now lead four Staff designers. I also hired a Staff UX Researcher, and we’re building a practice that brings customer research into more product decisions.
      </p>
      <p>
        If you’re building a design or research team in a complex product organization, I’d love to compare notes on how you give people room to lead.
      </p>
      <PortfolioActions />
    </div>
  )
}

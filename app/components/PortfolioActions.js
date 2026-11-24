import Link from 'next/link'
import styles from './PortfolioActions.module.css'

export default function PortfolioActions() {
  return (
    <div className={styles.actions}>
      <a href="https://www.linkedin.com/in/lauraleeflores" className={styles.primary}>
        Connect on LinkedIn <span aria-hidden="true">↗</span>
      </a>
      <Link href="/work" className={styles.secondary}>
        View selected work <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}

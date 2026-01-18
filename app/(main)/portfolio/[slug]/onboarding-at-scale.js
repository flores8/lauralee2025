import Image from 'next/image'

export default function OnboardingAtScale() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Redefining onboarding success at scale</h1>
        <p>Designing a system to surface risk, effort, and misalignment as CoreWeave grew from tens to hundreds of customers.</p>
      </header>
      <section className="case-study-section">
        <h2>Problem</h2>
        <p>
        CoreWeave’s onboarding appeared successful, but only because internal teams absorbed friction manually through live support, Slack, and tribal knowledge. As the company prepared to scale, leadership lacked visibility into where onboarding effort actually lived, which parts were brittle, and what would quietly fail as customer volume increased.
        </p>
        <h2>Why it mattered</h2>
        <p>Onboarding was a critical constraint on growth, with VP-level OKRs tied to scaling it responsibly. Without a shared understanding of how onboarding truly worked across product behavior, human intervention, and capacity delivery, the company risked automating the wrong things, scaling fragile processes, and misinterpreting success signals as volume increased.</p>
        <h2>My role and scope</h2>
        <p>I was brought in as a Staff Product Designer to create clarity where none existed—operating across Product, Engineering, Customer Experience, Sales, and Capacity Planning. I was explicitly trusted to challenge existing onboarding goals, metrics, and assumptions if the findings showed the organization was optimizing for the wrong outcomes.</p>
        <h2>Solution (high level)</h2>
        <p>I reframed onboarding from a linear flow into a distributed system, then designed a repeatable discovery and sense-making framework that continuously surfaced where effort, risk, and misalignment accumulated over time. Rather than prescribing a single solution, the work created a durable way for leadership to see onboarding clearly and make better decisions as conditions changed.</p>
        <h2>Impact</h2>
        <ul>
          <li>Shifted onboarding conversations from reactive fixes to systemic understanding</li>
          <li>Clarified ownership boundaries across product, support, and capacity delivery</li>
          <li>Enabled leadership to prioritize based on scale risk rather than anecdote</li>
          <li>Established design as a sense-making function, informing strategy, not just execution</li>
        </ul>
      </section>
    </div>
  )
}

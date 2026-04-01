export default function PlatformConsole() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Building a product model that could scale with the platform</h1>
      </header>
      <section className="case-study-section">
        <p>CoreWeave's console was built around Kubernetes and a narrow set of infrastructure experts. As the platform expanded to enterprise admins, AI practitioners, and bare-metal customers, that foundation stopped working. Customers avoided the UI in favor of Terraform and custom scripts. Onboarding required significant human support. New features made things denser without making them clearer.</p>
        <p>This was the first project I took on at CoreWeave, before any design team existed. The decision I had to make was structural: patch the existing model or design a new one above it.</p>
        <p>I chose to rebuild above the implementation layer. Rather than exposing Kubernetes abstractions as user-facing primitives, I designed a shared product model anchored to user intent. Infrastructure workflows were separated from organizational and administrative concerns. The hierarchy was built to absorb new personas and product areas without requiring reorganization each time something shipped.</p>
        <p>That decision had a cost: it deprioritized short-term familiarity for Kubernetes experts in favor of a foundation that could hold as the company scaled. Product and engineering leadership aligned on that tradeoff, and it became the reference point for roadmap and feature planning going forward.</p>
        <p>What it unlocked: non-expert users could orient themselves without deep infrastructure knowledge. Bare-metal customers finally had a UI surface. New product areas had a predictable place to live. And when I built out the design team, they had a shared product language to design against rather than starting from scratch.</p>
      </section>
    </div>
  )
}

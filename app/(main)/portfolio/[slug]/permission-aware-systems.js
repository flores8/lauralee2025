import Image from 'next/image'

export default function PermissionAwareSystems() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Designing permission-aware systems across UI, API, and IaC</h1>
        <p>Reframing permissions from a UI state into a platform-wide communication problem.</p>
      </header>
      <section className="case-study-section">
        <h2>Problem</h2>
        <p>
        At CoreWeave, permission constraints were not enforced correctly, but communicated poorly. By hiding inaccessible resources entirely, the platform prevented users from understanding what capabilities existed at all. This led customers to assume features were missing, made permission requests vague or misdirected, and quietly suppressed adoption, especially for users interacting primarily through APIs and Terraform.
        </p>
        <h2>Why it mattered</h2>
        <p>Permissions sit at the intersection of safety, trust, and discoverability. When systems enforce access without explaining constraint, they distort user understanding and undermine confidence. As CoreWeave scaled, this breakdown became systemic: the console, APIs, and infrastructure-as-code tools told inconsistent or silent stories about what the platform could do.</p>
        <h2>My role and scope</h2>
        <p>As Staff Product Designer (acting design lead), I partnered with Platform Engineering, Security, and Product to redesign how access constraints are communicated across the entire platform, not just the UI, ensuring users could reason accurately about capability without compromising security.</p>
        <h2>Solution (high level)</h2>
        <p>I reframed permissions as a product communication problem, defining cross-surface principles that separate awareness from action. The system now signals that capabilities exist while clearly stating that access is restricted - consistently across the console, API responses, and Terraform - so users understand boundaries without being misled or over-informed.</p>
        <h2>Impact</h2>
        <ul>
          <li>Corrected false assumptions about missing functionality</li>
          <li>Improved clarity and specificity of permission requests</li>
          <li>Reduced ambiguity across support, product, and engineering teams</li>
          <li>Established consistent access semantics across UI, API, and automation</li>
          <li>Enabled safer feature rollout without hiding capabilities behind silence</li>
        </ul>
      </section>
    </div>
  )
}

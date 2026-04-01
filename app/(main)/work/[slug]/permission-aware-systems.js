export default function PermissionAwareSystems() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Reframing access as a platform communication problem</h1>
      </header>
      <section className="case-study-section">
        <p>CoreWeave's permission system enforced access correctly but communicated nothing. When users lacked permissions, resources simply disappeared. No error, no explanation, no signal that anything existed at all. Customers assumed features were missing, support tickets asked whether capabilities existed, and adoption quietly stalled because users could not tell what the platform offered.</p>
        <p>The instinct across the org was to treat this as a UI problem. It was not. The same pattern showed up in API responses and Terraform outputs. Fixing console states would have been superficial and fragile.</p>
        <p>I reframed it: this was a platform communication failure, not a display issue. The principle I brought to Security, Product, and Platform Engineering was simple: awareness does not equal entitlement. Users could see that a capability existed and that their access was restricted without that implying the boundary was negotiable. Security could maintain strict enforcement. Users gained accurate understanding. Those two things were not in conflict.</p>
        <p>That reframe became the alignment anchor. Rather than relitigating permission behavior for every new capability, teams had a shared principle to design against. My team led the execution across console states, API responses, and Terraform outputs, with me guiding direction and navigating the cross-functional relationships needed to get Security and Platform Engineering to a shared model.</p>
        <p>What changed: users stopped assuming features were missing. Permission requests became specific. Support conversations shifted from "does CoreWeave support X" to "what access do I need for X." And new capabilities could ship without each team independently deciding how permissions should surface.</p>
      </section>
    </div>
  )
}

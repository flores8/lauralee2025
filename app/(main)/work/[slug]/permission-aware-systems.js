export default function PermissionAwareSystems() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Reframing access as a platform communication problem</h1>
      </header>
      <section className="case-study-section">
        <p>After we made restricted capabilities visible, the support conversations we saw shifted from whether CoreWeave offered a capability to what access customers needed to use it.</p>
        <p>Before that, resources simply disappeared when a customer lacked permission. From the customer’s side, restricted access looked like a missing feature. The pattern showed up in the console, API responses, and Terraform outputs, so we needed a shared approach across the platform.</p>
        <p>I brought one principle to Security, Product, and Platform Engineering. <em>Awareness does not equal entitlement.</em> We could show customers that a capability existed and explain their access while keeping enforcement in place.</p>
        <p>I set the direction and aligned those teams on how to apply it. My team led the work across console states, API responses, and Terraform outputs. As new capabilities shipped, teams had a common rule for how to show restricted access.</p>
      </section>
    </div>
  )
}

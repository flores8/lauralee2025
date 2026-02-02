import Image from 'next/image'
import LightboxImage from '@/app/components/LightboxImage'

export default function PermissionAwareSystems() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Designing permission-aware systems across UI, API, and IaC</h1>
        <p>This work aligned security, platform, and product around shared access semantics, eliminating recurring ambiguity and enabling safer feature rollout at scale.</p>
      </header>
      <section className="case-study-section">
        <h2>Why this mattered at scale</h2>
        <ul>
          <li>Addressed widespread misinterpretation where users assumed missing functionality rather than restricted access, suppressing platform adoption.</li>
          <li>Resolved organizational ambiguity that forced Security, Platform, and Product to relitigate permission behavior for every new capability.</li>
          <li>Enabled safer feature rollout by making constraints explicit without hiding what the platform offered.</li>
        </ul>

        <h2>My role</h2>
        <p>As Staff Product Designer and acting design lead, I owned the reframing of permissions from a UI enforcement detail into a platform-wide communication system. I partnered closely with Platform Engineering, Security, and Product to define cross-surface access principles spanning the console, APIs, and infrastructure-as-code. This work set the default model for how new capabilities and permissions are introduced across the platform.</p>

        <h2>Problem</h2>
        <p>
        At CoreWeave, permission constraints were enforced correctly, but communicated poorly. By hiding inaccessible resources entirely, the platform prevented users from understanding what capabilities existed at all. This led customers to assume features were missing, made permission requests vague or misdirected, and quietly suppressed adoption, especially for users interacting primarily through APIs and Terraform.
        </p>
        <h2>Solution (high level)</h2>
        <p>I reframed permissions as a product communication problem, defining cross-surface principles that separate awareness from action. The system now signals that capabilities exist while clearly stating that access is restricted - consistently across the console, API responses, and Terraform - so users understand boundaries without being misled or over-informed.</p>
        <h2>Impact</h2>
        <ul>
          <li>Corrected false assumptions about missing functionality</li>
          <li>Improved clarity and specificity of permission requests</li>
          <li>Reduced ambiguity across support, product, and engineering teams</li>
          <li>Established consistent access semantics across UI, API, and automation</li>
          <li>Enabled safer feature rollout without hiding capabilities</li>
        </ul>
      </section>
      <hr className="case-study-divider" />
      <section className="case-study-section">
        <h2 className="case-study-title">Design approach</h2>
        <p><em>Details, decisions, and outcomes</em></p>

        <h2>When silence erased capability</h2>
        <p>CoreWeave customers often assumed the platform was missing features it actually supported. They'd ask support whether capabilities existed, request access to things they already had permission to use, or avoid the console entirely in favor of Terraform and custom code - not because the UI was difficult, but because inaccessible resources were completely hidden.</p>
        <p>The platform enforced permissions by hiding what users couldn't access. No resource, no action button, no navigation item - technically correct, security-first, defensible. But this approach collapsed two different truths into indistinguishable silence: this doesn't exist and this exists, but you can't access it.</p>
        <p>Users who lacked permissions couldn't tell what the platform offered. They couldn't plan infrastructure, request the right access, or even know what questions to ask. The system prevented action but also erased awareness - and for a platform designed to handle complex infrastructure, that misalignment undermined trust.</p>
        <p>This wasn't contained to the console. Customers provisioned most infrastructure through APIs and Terraform, where the same pattern surfaced as silent absence or opaque errors. What initially looked like a UI state problem was actually a platform-wide communication failure.</p>

        <h2>Constraints and non-negotiables</h2>
        <p>The solution needed to preserve CoreWeave's conservative security posture while working consistently across console, API, and infrastructure-as-code - including for users who never touched the UI. It couldn't rely on role-based assumptions given the variability of org structures and service accounts, and it needed to remain stable as new resources and permissions were added.</p>
        <p>Most critically: increasing visibility couldn't weaken security boundaries. The goal was accuracy, not access.</p>
        

        <h2>Reframing permissions as a platform communication problem</h2>
        <p>This wasn't a discoverability problem or a UI-state problem. Permissions were already enforcing access correctly. The failure was that the platform communicated nothing - silence where there should have been clarity.</p>
        <p>The solution required separating two things the system had collapsed: awareness and action. Users needed to understand what capabilities existed and why access was restricted, without implying they were entitled to those capabilities or that security boundaries were negotiable.</p>
        <p>This reframe changed everything. The design goal wasn't to enable more actions or expose more controls - it was to enable accurate understanding across every surface where users encountered the platform.</p>

        <h2>Designing a system that communicates constraint without erasing capability</h2>

        <h3>1. Reveal existence without implying entitlement</h3>
        <p>In the console, inaccessible capabilities surface in a disabled state with concise explanations. In APIs and Terraform, the same intent shows up as explicit error responses rather than silent absence. The pattern is consistent: <em>this exists, access is restricted, here's why</em>.</p>

        <h3>2. Tune disclosure by context, not by role</h3>
        <p>Disclosure varies by interaction context, not user role. The console can use progressive disclosure and visual affordances. APIs need structured error codes. Terraform needs actionable plan output. What remains constant is intent: every surface answers the same questions - does this exist, is it restricted, what does that mean now?</p>

        <h3>3. Design for users who never see the UI</h3>
        <p>Many CoreWeave users interact exclusively through APIs, Terraform, and automation. API errors, plan outputs, and validation messages carry the same semantic meaning as console states: capability exists, access is restricted, this is intentional. Permissions became a platform property, not a UI artifact.</p>

        <h2>How the principles showed up across the platform</h2>
      </section>

      <LightboxImage
        src="https://lauraleeflores-com-website.s3.us-east-2.amazonaws.com/create-bucket-disabled.png"
        alt="Create bucket button disabled when in view-only mode"
        width={1700}
        height={292}
        caption="Console: Capabilities remain visible while clearly communicating restricted access, allowing users to understand what exists without being able to act."
      />

      <section className="case-study-section">
        <p>In the console, the "Create a bucket" action remains visible but disabled, with a tooltip explaining "You have view-only access. Ask an admin to grant bucket creation permissions." Users see what's possible without confusion about whether the feature exists.</p>
        <p>API responses use explicit error codes and structured messages:</p>
        <pre className="code-block">
{`{
  "error": {
    "code": "PERMISSION_DENIED",
    "message": "Bucket creation requires storage.admin role",
    "resource": "storage.buckets.create"
  }
}`}
        </pre>
        <p>The response confirms the capability exists, states the specific permission gap, and provides the resource identifier needed to request access.</p>

        <h2>Aligning security, platform, and product around shared semantics</h2>
        <p>Platform Engineering, Security, and Product initially treated permissions as backend enforcement, not product communication. Early conversations surfaced tension: Security worried that showing restricted resources implied they were negotiable. Product wanted clarity but feared security would veto changes. Platform Engineering needed consistent rules they could implement without case-by-case judgment.</p>
        <p>Rather than debating individual UI states, I anchored alignment on the core principle: awareness ≠ entitlement. Security could maintain strict enforcement while users gained visibility. The principles became the shared model for introducing new capabilities - no re-litigation, no exceptions.</p>

        <h2>Outcomes</h2>
        <p>Users stopped assuming features were missing. Permission requests became specific - naming the capability and required role rather than asking whether something existed.</p>
        <p>Support conversations shifted from "Does CoreWeave support X?" to "What access do I need for X?" API and Terraform users encountered explicit errors with actionable context instead of silent failures.</p>
        <p>Internally, product and engineering teams introduced new capabilities without debating how permissions should surface. Access behavior became predictable and reusable across the platform.</p>

        <h2>Designing systems that tell the truth</h2>
        <p>Permissions reveal whether a platform is honest. When they hide what exists, they distort understanding and erode trust. When they separate awareness from action, they allow users to reason accurately about capability and constraint - even when the answer is "not for you."</p>
        <p>By treating access as a communication problem rather than an enforcement detail, this work made CoreWeave's platform legible without compromising security. Users could see what existed. Teams could ship features without hiding them. And the system could enforce boundaries while telling the truth about what was possible.</p>


      </section>
    </div>
  )
}

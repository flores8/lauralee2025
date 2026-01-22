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
          <li>Prevented users from misinterpreting restricted access as missing functionality across the console, API, and Terraform.</li>
          <li>Established shared access semantics that aligned security, platform, and product teams around consistent system behavior.</li>
          <li>Enabled safer feature rollout at scale by making capability and constraint explicit without weakening security boundaries.</li>
        </ul>
        <h2>Problem</h2>
        <p>
        At CoreWeave, permission constraints were enforced correctly, but communicated poorly. By hiding inaccessible resources entirely, the platform prevented users from understanding what capabilities existed at all. This led customers to assume features were missing, made permission requests vague or misdirected, and quietly suppressed adoption, especially for users interacting primarily through APIs and Terraform.
        </p>
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
      <hr className="case-study-divider" />
      <section className="case-study-section">
        <h2 className="case-study-title">Case study</h2>
        <p><em>Details, decisions, and outcomes</em></p>

        <h2>The problem and why it was hard to see</h2>
        <p>At CoreWeave, permissions were implemented with a conservative default: if a user didn’t have access to a resource or action, it simply wouldn’t appear. From a security perspective, this pattern was defensible - it reduced accidental misuse, kept the UI clean, and matched backend authorization behavior.</p>
        <p>But as the platform expanded, this “hide it” model introduced a subtle failure mode: it didn’t just prevent action, it prevented awareness. Users who lacked access couldn’t tell what capabilities existed, which meant they couldn’t plan, request the right permissions, or even know what to ask for. The system was technically correct, but it was quietly erasing product truth.</p>
        <p>This became especially costly because many customers weren’t primarily using the console. They provisioned infrastructure through APIs and Terraform, where the same pattern showed up as silent absence or opaque errors. What looked like a simple UI decision had become a platform-wide communication gap that suppressed adoption and undermined trust.</p>

        <h2>Constraints and non-negotiables</h2>
        <p>Before exploring solutions, it was important to make the constraints explicit. This problem sat at the intersection of security, platform architecture, and user understanding, which ruled out several seemingly obvious approaches.</p>
        <p><span className="bold">The solution needed to:</span></p>
        <ul>
          <li>Preserve a conservative security posture, without leaking sensitive information or implying entitlement to restricted resources</li>
          <li>Work consistently across <span className="bold">console, API, and infrastructure-as-code</span>, including for users who never interact with the UI</li>
          <li>Avoid relying on role-based assumptions, given the variability of org structures, service accounts, and automation</li>
          <li>Provide clarity without verbosity, especially in programmatic contexts where excessive explanation can create noise or risk</li>
          <li>Remain stable as new resources, permissions, and product areas were added</li>
        </ul>
        <p>Just as importantly, the system could not “fix” discoverability by encouraging unsafe behavior. Any increase in visibility had to be paired with equally clear boundaries. The goal was not to help users bypass access controls, but to help them reason accurately about what the platform could do and why certain actions were unavailable.</p>

        <h2>Reframing permissions as a platform communication problem</h2>
        <p>As I examined where confusion surfaced - across the console, API responses, Terraform plans, and support conversations - it became clear that this wasn’t a discoverability or UI-state problem. Permissions were already enforcing what users could and couldn’t do. The failure was in how the platform communicated capability and constraint.</p>
        <p>By hiding inaccessible resources entirely, the system collapsed two distinct ideas into one: this doesn’t exist and this exists, but you can’t access it. That ambiguity distorted users’ mental models and led them to draw incorrect conclusions about the platform’s capabilities. In effect, the system was technically correct but communicatively silent.</p>
        <p>Reframing the problem this way shifted the design goal. The objective was no longer to enable action or expose more controls, but to <span className="bold">enable understanding</span>. The platform needed to clearly signal that a capability existed, explicitly state that access was restricted, and do so consistently—whether a user was interacting through the console, an API, or infrastructure-as-code—without implying entitlement or weakening security boundaries.</p>

        <h2>Designing a system that communicates constraint without erasing capability</h2>
        <p>Once the problem was reframed, the solution could not be a single pattern or UI change. It needed to be a set of <span className="bold">platform-level principles</span> that governed how permissions communicate across all surfaces, visual and non-visual alike.</p>

        <h3>1. Reveal existence without implying entitlement</h3>
        <p>The most important distinction was separating <span className="bold">awareness</span> from <span className="bold">action</span>. Rather than hiding inaccessible capabilities entirely, the system needed to acknowledge that they existed while remaining explicit that the user could not act on them.</p>
        <p>In the console, this meant surfacing certain resources or actions in a disabled state, paired with concise, contextual explanations. The goal was not to invite interaction, but to orient users: this exists, and access is intentionally restricted. Outside the UI, the same intent needed to be expressed through clear, structured responses rather than silent failure.</p>
        <p>This preserved security boundaries while correcting a critical gap in understanding. Users could reason about what the platform offered without being misled into thinking access was accidental, temporary, or negotiable.</p>

        <h3>2. Tune disclosure by context, not by role</h3>
        <p>A tempting approach was to vary behavior based on user roles: show more to admins, less to everyone else. In practice, this broke down quickly. Roles varied across organizations, automation often ran under service accounts, and assumptions about who “should” understand the system rarely held.</p>
        <p>Instead, disclosure was tuned by <span className="bold">interaction context</span>. In the console, where visual affordances and progressive disclosure were available, explanations could be brief and situational. In APIs and infrastructure-as-code, clarity needed to come from explicit errors and response semantics.</p>
        <p>What mattered was not uniform presentation, but uniform intent. Regardless of surface, the system needed to answer the same questions: Does this capability exist? Is it restricted? And what does that mean right now?</p>

        <h3>3. Design for users who never see the UI</h3>
        <p>A critical realization was that many CoreWeave users would never encounter these access states in the console at all. For them, the platform existed entirely through APIs, Terraform, and automation.</p>
        <p>This required treating non-UI touch points as first-class UX surfaces. API errors, Terraform plan outputs, and validation messages were intentionally designed to carry the same meaning as the console: clearly signaling that a capability existed, explicitly stating that access was restricted, and avoiding language that implied misconfiguration or transient failure.</p>
        <p>Silence in these contexts was not neutral, it actively misled users. By designing access behavior at the platform level, permissions became a property of the system itself rather than an artifact of any single interface.</p>

        <h2>How the principles showed up across the platform</h2>
        <p>These principles were applied consistently across the console and non-UI surfaces. While the specific presentation varied by context, the intent remained the same: acknowledge capability, state restriction clearly, and avoid implying entitlement or error.</p>
        <p>Below are two representative examples.</p>
      </section>

      <LightboxImage
        src="https://lauraleeflores-com-website.s3.us-east-2.amazonaws.com/create-bucket-disabled.png"
        alt="Create bucket button disabled when in view-only mode"
        width={1700}
        height={292}
        caption="Console: Capabilities remain visible while clearly communicating restricted access, allowing users to understand what exists without being able to act."
      />

      <section className="case-study-section">
        <p><em>API responses followed the same semantic principles, using explicit error states rather than silent failure.</em></p>

        <h2>Aligning security, platform, and product around shared semantics</h2>
        <p>This work required close partnership across Platform Engineering, Security, and Product, where permissions had historically been treated as a backend enforcement concern rather than a product communication surface. Early discussions surfaced real tension: increasing visibility risked being interpreted as weakening security, while maintaining silence continued to mislead users.</p>
        <p>Rather than debating individual UI states, I focused alignment on shared principles - separating awareness from action, preserving conservative defaults, and ensuring consistency across surfaces. By grounding decisions in system semantics rather than interface preference, we were able to agree on behaviors that engineers could implement confidently and security could support without exception handling. These principles became the default model for how new capabilities and permissions are introduced across the platform.</p>

        <h2>Outcomes: measuring success through understanding</h2>
        <p>The success of this work was measured less by feature usage and more by whether users and teams could reason accurately about the platform’s capabilities and constraints.</p>
        <p>Following these changes:</p>
        <ul> 
          <li>Users were less likely to assume functionality was missing and more likely to make <span className="bold">specific, informed permission requests</span></li>
          <li>Support conversations shifted from <em>"does this exist?"</em> to <em>"what's required to use it?"</em></li>
          <li>API and Terraform users encountered <span className="bold">clear, intentional responses</span> instead of silent absence or ambiguous errors</li>
          <li>Product and engineering teams could introduce new capabilities without re-litigating how access states should appear or behave</li>
        </ul>
        <p>Internally, permissions became easier to reason about across teams. The platform now communicated consistent intent regardless of surface, reducing one-off explanations and making access behavior predictable as the system evolved.</p>

        <h2>Designing systems that tell the truth</h2>
        <p>This work reshaped how I think about design in complex platforms. Permissions are one of the clearest places where systems reveal whether they are telling the truth. When designed poorly, they distort understanding and quietly undermine trust. When designed well, they allow users to reason accurately about what is possible, even when the answer is not for you.</p>
        <p>By treating permissions as a product communication problem rather than a UI state, the platform became more honest. Users could distinguish between missing capability and restricted access. Engineers could introduce new features without hiding them behind silence. And the system could enforce boundaries without misleading the people interacting with it.</p>
        <p>I now carry this principle into all platform work: <span className="bold">design is responsible not just for usability, but for how systems explain themselves - especially where constraints, safety, and trust intersect.</span></p>


      </section>
    </div>
  )
}

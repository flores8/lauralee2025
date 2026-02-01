import LightboxImage from '@/app/components/LightboxImage'

export default function PlatformConsole() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Designing a scalable cloud console for a growing infra platform</h1>
        <p>Re-architecting CoreWeave’s product model to support multiple personas, infrastructure types, and long-term scale.</p>
      </header>
      <section className="case-study-section">
        <h2>Why this mattered at scale</h2>
        <ul>
          <li>The console no longer accurately represented the platform as it existed, leaving bare-metal customers without a reliable way to understand or operate their infrastructure.</li>
          <li>Rapid expansion of product lines and customer volume meant structural ambiguity could no longer be absorbed through support or institutional knowledge.</li>
          <li>Without a shared product model, each new feature or persona increased risk and slowed execution across the organization.</li>
        </ul>
        <h2>My role</h2>
        <p>In response to these scale pressures, I established the shared product model and information architecture for the CoreWeave console; led platform-level design decisions across navigation, workflows, and interaction patterns; partnered with Product and Engineering leadership to align roadmap and system structure.</p>
        <h2>Problem</h2>
        <p>
          CoreWeave’s cloud console was built around Kubernetes and expert infrastructure engineers, making it difficult to use, hard to trust, and increasingly brittle as the platform expanded to enterprise admins, AI practitioners, and bare-metal infrastructure. Customers often avoided the UI in favor of Terraform and custom code, and onboarding relied heavily on human support.
        </p>
        <h2>Solution (high level)</h2>
        <p>I re-architected the console around a shared, intent-based product model abstracted above Kubernetes, separating infrastructure workflows from organizational and administrative concerns. This created a durable foundation that could support multiple personas and infrastructure models, while enabling continued platform growth without fragmenting the experience.</p>
        <h2>Impact</h2>
        <ul>
          <li><span className="bold">Established a stable foundation for platform expansion</span> - Created structural clarity that allowed the product to grow without accumulating technical or conceptual debt</li>
          <li><span className="bold">Shifted design from reactive execution to strategic enablement</span> - Transformed how teams collaborated on roadmap decisions and feature planning through shared language and repeatable patterns</li>
          <li><span className="bold">Made complex infrastructure accessible without sacrificing depth</span> - Enabled non-experts to operate confidently while preserving advanced capabilities for technical users</li>
        </ul>
      </section>

      <hr className="case-study-divider" />

      <section className="case-study-section">
        <h2 className="case-study-title">Design approach</h2>
        <p><em>Structure, decisions, and outcomes</em></p>

        <h2>The problem and why structure was the real constraint</h2>
        <p>At the time I joined CoreWeave, the console reflected how the platform was implemented rather than how customers reasoned about their work. Core concepts were anchored in Kubernetes abstractions - clusters, node pools, PVCs - which worked for a narrow set of infrastructure experts but broke down as the platform and customer base expanded.</p>
        <p>As new personas and capabilities were added, the product became denser without becoming clearer. Enterprise administrators struggled to manage access, policy, and billing. AI practitioners were forced to learn low-level infrastructure concepts unrelated to their goals. Even experienced engineers increasingly relied on Terraform and custom code because the UI felt harder to reason about and less trustworthy for critical actions.</p>
        <p>The issue wasn’t missing features or visual quality. It was structural. Without a stable, user-centered product model, every new addition increased cognitive load and risked fragmenting the experience. Improving onboarding, workflows, or automation without addressing that foundation would have been superficial and fragile at scale.</p>

        <h2>Constraints and scale pressures</h2>
        <p>CoreWeave had already expanded beyond Kubernetes to support bare-metal infrastructure, with multiple large customers actively running on bare metal. However, the console was still tightly coupled to Kubernetes-based environments and could not represent bare-metal infrastructure at all. As a result, a meaningful portion of the platform, and some of its most important customers, had no reliable UI surface to view or reason about their infrastructure.</p>
        <p>At the same time, the company was significantly increasing its investment in the platform itself. CoreWeave was transitioning from serving a small number of high-touch customers to supporting hundreds of customers, while launching multiple new product lines and feature areas in parallel. The console was no longer a supporting tool - it was becoming a core interface through which customers were expected to understand, trust, and operate the platform.</p>
        <p>These pressures exposed a critical constraint: the existing console structure could not absorb the platform as it actually existed. It was tightly coupled to a single infrastructure model, optimized for a narrow persona, and dependent on institutional knowledge and manual support to bridge gaps.</p>
        <p>What was required was a shared, intent-based product model abstracted above any single infrastructure implementation - one capable of representing both Kubernetes and bare metal, supporting rapid roadmap growth, and remaining legible as customer volume and platform responsibility increased.</p>

        <h2>Reframing the console around a shared product model</h2>
        <p>The solution was to design above any single infrastructure abstraction. By treating Kubernetes-specific constructs as implementation details rather than user-facing primitives, the console could support both Kubernetes and bare metal workloads without forcing users to reason about systems irrelevant to their goals.</p>
        <p>This shared model became the reference point for all structural decisions: information architecture, workflow design, and roadmap planning. The console's responsibility shifted from exposing infrastructure mechanics to helping users understand what CoreWeave offered, how major capabilities related to one another, and where different types of work belonged.</p>
        <p>This meant intentionally deprioritizing short-term familiarity for Kubernetes experts in favor of a stable, intent-based structure that could support future personas and infrastructure types.  </p>

        <h2>Designing a structure that could scale without fragmenting</h2>
        <p>The structure grouped functionality by purpose rather than implementation. Active infrastructure workflows were separated from organizational and administrative concerns, allowing users to quickly orient themselves based on the type of work they were doing rather than the underlying systems involved.</p>
        <p>This separation reduced cognitive load in two important ways. First, it clarified what CoreWeave offered at a glance: users could see the major categories of capability without needing deep infrastructure knowledge. Second, it created predictable places for new features to live, so growth no longer required rethinking the entire navigation each time something shipped.</p>
        <p>By anchoring the hierarchy to durable user intent instead of transient system details, the console could absorb new personas, infrastructure types, and product areas without fragmenting the experience or forcing users to relearn where things belonged.</p>
      </section>

      <LightboxImage
        src="https://lauraleeflores-com-website.s3.us-east-2.amazonaws.com/nav-before-and-after.png"
        alt="CoreWeave console navigation before and after"
        width={1200}
        height={1000}
        caption="Structural shift: Navigation moved from implementation-first objects to an intent-based product model, clearly separating platform usage from organizational governance and creating a structure that could scale without rework."
      />
      <LightboxImage
        src="https://lauraleeflores-com-website.s3.us-east-2.amazonaws.com/roadmapped-read-ia.png"
        alt="CoreWeave information architecture as shipped and with roadmapped items"
        width={1200}
        height={1000}
        caption="Durable structure: The same information architecture supported shipped, in-flight, and planned roadmap items without requiring reorganization."
      />

      <section className="case-study-section">
        <h2>Scaling design execution through shared patterns</h2>
        <p>As additional designers joined and began working across different product areas in parallel, early designs surfaced predictable inconsistencies - not due to lack of skill, but because the product previously lacked a shared interaction language. Similar actions were being designed with different patterns, levels of interruption, and permission behavior, creating the risk that the console would fragment at the workflow level.</p>
        <p>Rather than correcting individual designs in isolation, I defined shared interaction patterns and decision frameworks that translated the product model into repeatable rules for behavior. These patterns clarified when to use pages versus drawers or modals, how permission-aware states should behave across navigation and actions, and how the system communicates risk, state, and irreversibility. This allowed teams to design independently while producing coherent, predictable workflows.</p>
      </section>

      <section className="case-study-section">

        <h2>Outcomes: making the platform legible, trustworthy, and scalable</h2>
        <p>For users:</p>
        <ul>
          <li>Non-expert users could understand what CoreWeave offered and where different types of work belonged without deep infrastructure knowledge</li>
          <li>Enterprise administrators gained dedicated surfaces for identity, policy, and billing, eliminating misdirected workflows</li>
          <li>Infrastructure engineers retained access to advanced capabilities without implementation-first navigation</li>
        </ul>
        <p>For the organization:</p>
        <ul>
          <li>New product areas, personas, and infrastructure types could be added without restructuring navigation or re-litigating hierarchy decisions</li>
          <li>Product, design, and engineering teams could discuss roadmap decisions using a shared product language, shifting conversations from implementation details to intent and tradeoffs</li>
          <li>Design patterns and workflows could be reused confidently across teams without reintroducing inconsistency</li>
        </ul>
        <p>By re-architecting the console around a shared product model, this work created the conditions for CoreWeave to scale without accumulating structural debt. The platform was no longer tightly coupled to a single persona or infrastructure abstraction, allowing new capabilities and automation to be introduced without fragmenting the experience. When systems grow faster than understanding, structure becomes the primary lever for trust, scale, and long-term velocity.</p>
      </section>

      
    </div>
  )
}

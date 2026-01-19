import LightboxImage from '@/app/components/LightboxImage'

export default function PlatformConsole() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Designing a scalable cloud console for a growing infra platform</h1>
        <p>Re-architecting CoreWeave’s product model to support multiple personas, infrastructure types, and long-term scale.</p>
      </header>
      <section className="case-study-section">
        <h2>Problem</h2>
        <p>
          CoreWeave’s cloud console was built around Kubernetes and expert infrastructure engineers, making it difficult to use, hard to trust, and increasingly brittle as the platform expanded to enterprise admins, AI practitioners, and bare-metal infrastructure. Customers often avoided the UI in favor of Terraform and custom code, and onboarding relied heavily on human support.
        </p>
        <h2>Why it mattered</h2>
        <p>Without a stable, user-centered product model, the console could not scale. Each new persona, feature, or infrastructure offering increased cognitive load, eroded trust, and raised operational cost, blocking adoption and slowing the business.</p>
        <h2>My role and scope</h2>
        <p>As the first product designer at CoreWeave, I led the foundational redesign of the console’s information architecture, product model, and interaction patterns, partnering closely with product, engineering, and executives during a period of rapid platform and team growth.</p>
        <h2>Solution (high level)</h2>
        <p>I re-architected the console around a shared, intent-based product model abstracted above Kubernetes, separating infrastructure workflows from organizational and administrative concerns. This created a durable foundation that could support multiple personas, multiple infrastructure types, and future platform growth without fragmenting the experience.</p>
        <h2>Impact</h2>
        <ul>
          <li>Established a stable conceptual foundation used across product, engineering, and design</li>
          <li>Made the console more legible, predictable, and trustworthy for non-expert users</li>
          <li>Reduced structural risk as new features, personas, and automation shipped</li>
          <li>Enabled scalable onboarding, shared design patterns, and future AI-assisted workflows</li>
          <li>Laid the groundwork for future platform expansion and organizational alignment</li>
        </ul>
      </section>

      <hr className="case-study-divider" />

      <section className="case-study-section">
        <h2 className="case-study-title">Case study</h2>
        <p><em>Structure, decisions, and outcomes</em></p>

        <h2>The problem and why structure was the real constraint</h2>
        <p>At the time I joined CoreWeave, the console reflected how the platform was implemented rather than how customers reasoned about their work. Core concepts were anchored in Kubernetes abstractions—clusters, node pools, PVCs—which worked for a narrow set of infrastructure experts but broke down as the platform and customer base expanded.</p>
        <p>As new personas and capabilities were added, the product became denser without becoming clearer. Enterprise administrators struggled to manage access, policy, and billing. AI practitioners were forced to learn low-level infrastructure concepts unrelated to their goals. Even experienced engineers increasingly relied on Terraform and custom code because the UI felt harder to reason about and less trustworthy for critical actions.</p>
        <p>The issue wasn’t missing features or visual quality. It was structural. Without a stable, user-centered product model, every new addition increased cognitive load and risked fragmenting the experience. Improving onboarding, workflows, or automation without addressing that foundation would have been superficial—and fragile at scale.</p>

        <h2>Constraints and scale pressures</h2>
        <p>Any structural change to the console had to account for a growing set of constraints that went beyond navigation or labeling. The platform was expanding along multiple axes simultaneously—new customer personas, new infrastructure models, and increasing organizational complexity—while still needing to support existing, deeply technical users.</p>
        <p>Several constraints shaped the work from the outset:</p>
        <ul>
          <li>The console needed to support multiple personas with fundamentally different goals, without fragmenting into role-specific products</li>
          <li>Core concepts could not remain tightly coupled to Kubernetes, as the platform was expanding to include bare metal and other infrastructure models</li>
          <li>The structure had to remain stable as new product areas shipped, avoiding constant reorganization or renaming</li>
          <li>Many customers would continue to rely on Terraform and APIs, so the UI needed to be trustworthy and predictable rather than exhaustive</li>
          <li>Any new model had to be legible enough to support onboarding, documentation, and future automation</li>
        </ul>
        <p>These constraints ruled out incremental cleanup. Renaming a few items or rearranging pages would not address the underlying mismatch between system structure and customer intent. What was required was a clearer, more durable product model that could absorb growth without increasing cognitive load.</p>

        <h2>Reframing the console around a shared product model</h2>
        <p>As the scope of the problem became clear, it was evident that the console needed more than a reorganized navigation. It needed a shared product model—one grounded in customer intent rather than internal implementation details—that could serve as a stable foundation for structure, workflows, and future growth.</p>
        <p>This meant designing above any single infrastructure abstraction. Kubernetes concepts were deeply familiar internally, but anchoring the console’s primary vocabulary to them limited who the product could serve and how it could evolve. By treating Kubernetes-specific constructs as implementation details rather than user-facing primitives, the console could support both Kubernetes and bare metal workloads without forcing users to reason about systems irrelevant to their goals.</p>
        <p>Reframing the console this way clarified what the product was responsible for communicating. The goal was no longer to expose infrastructure mechanics, but to help users understand what CoreWeave offered, how major capabilities related to one another, and where different types of work belonged. This shared model became the reference point for information architecture, workflow design, and future roadmap decisions.</p>

        <h2>Designing a structure that could scale without fragmenting</h2>
        <p>With a shared product model in place, the next step was to translate that model into a structure users could reliably navigate and reason about. The goal was not to optimize for immediate familiarity, but to establish a hierarchy that would remain legible as the platform continued to grow.</p>
        <p>The structure moved away from a flat, accumulation-based navigation toward a clear hierarchy that grouped functionality by purpose rather than implementation. Active infrastructure workflows were separated from organizational and administrative concerns, allowing users to quickly orient themselves based on the type of work they were doing rather than the underlying systems involved.</p>
        <p>This separation reduced cognitive load in two important ways. First, it clarified what CoreWeave offered at a glance—users could see the major categories of capability without needing deep infrastructure knowledge. Second, it created predictable places for new features to live, so growth no longer required rethinking the entire navigation each time something shipped.</p>
        <p>Most importantly, the structure was designed to be stable. By anchoring the hierarchy to durable user intent instead of transient system details, the console could absorb new personas, infrastructure types, and product areas without fragmenting the experience or forcing users to relearn where things belonged.</p>
      </section>

      <LightboxImage
        src="https://lauraleeflores-com-website.s3.us-east-2.amazonaws.com/nav-before-and-after.png"
        alt="CoreWeave console navigation before and after"
        width={1200}
        height={1000}
        caption="Structural shift: Navigation moved from implementation-first objects to an intent-based product model, clearly separating platform usage from organizational governance and creating a structure that could scale without rework."
      />

      <section className="case-study-section">
        <h2>From structure to workflows</h2>
        <p>With a stable product model and structure in place, the next challenge was ensuring that day-to-day workflows would remain consistent as the platform and team scaled. This became especially important as additional designers joined and began working across different product areas in parallel.</p>
        <p>Early designs surfaced predictable inconsistencies—not due to lack of skill, but because the product previously lacked a shared interaction language. Without clear rules, similar actions were being designed with different patterns, levels of interruption, and permission behavior, creating the risk that the console would fragment again at the workflow level.</p>
        <p>Rather than correcting individual designs in isolation, I focused on defining shared interaction patterns and decision frameworks that translated the product model into repeatable rules for behavior. These patterns clarified when to use pages versus drawers or modals, how permission-aware states should behave across navigation and actions, and how the system communicates risk, state, and irreversibility. This allowed teams to design independently while still producing coherent, predictable workflows.</p>
      </section>

      <LightboxImage
        src="https://lauraleeflores-com-website.s3.us-east-2.amazonaws.com/roadmapped-read-ia.png"
        alt="CoreWeave information architecture as shipped and with roadmapped items"
        width={1200}
        height={1000}
        caption="Durable structure: The same information architecture supported shipped, in-flight, and planned roadmap items without requiring reorganization."
      />

      <section className="case-study-section">
        <h2>Establishing shared foundations as the team scaled</h2>
        <p>As this work progressed, the design team itself began to scale. I was responsible for onboarding additional product designers and supporting them as they took ownership of different product areas. Rather than acting as a central reviewer or bottleneck, I focused on establishing shared foundations—product models, interaction patterns, and decision principles—that allowed designers to operate independently without reintroducing inconsistency.</p>
        <p>This shifted how design functioned within the organization. Designers could make confident decisions without needing constant alignment, product and engineering teams gained a clearer understanding of how new work should fit into the platform, and discussions increasingly centered on intent and tradeoffs rather than surface-level preference. The result was a design practice that scaled alongside the product, without sacrificing coherence or velocity.</p>

        <h2>Outcomes: making the console legible and scalable</h2>
        <p>This work fundamentally changed how the console—and future work built on it—could evolve.</p>
        <p>Following the structural redesign:</p>
        <ul>
          <li>Users could more easily understand what CoreWeave offered, where different types of work belonged, and which actions were safe to take</li>
          <li>Enterprise administrators gained a clear, dedicated surface for identity, policy, and billing, reducing confusion and misdirected workflows</li>
          <li>Infrastructure engineers retained access to advanced capabilities without being forced through implementation-first navigation</li>
          <li>New product areas could be added without restructuring the console or re-litigating naming and hierarchy decisions</li>
        </ul>
        <p>Internally, the console gained a shared conceptual foundation. Product, design, and engineering teams could discuss roadmap decisions using consistent language, reducing friction and accelerating execution. What had previously felt brittle and hard to reason about became predictable and extensible.</p>

        <h2>Creating a foundation the platform could grow on</h2>
        <p>By re-architecting the console around a shared product model, this work created the conditions for CoreWeave to scale without accumulating structural debt. The platform was no longer tightly coupled to a single persona or infrastructure abstraction, allowing new capabilities, workloads, and automation to be introduced without fragmenting the experience.</p>
        <p>This foundation made higher-order improvements possible. Onboarding, error handling, and permission behavior could now be approached as product problems rather than support burdens. Design patterns and workflows could be reused confidently across teams. And future investments—including AI-assisted experiences—had a stable, legible system to build on rather than amplifying confusion.</p>
        <p>This work reinforced a principle I now carry into all platform design: when systems grow faster than understanding, structure is not an aesthetic concern—it is the primary lever for trust, scale, and long-term velocity.</p>
      </section>

      {/* Example of side-by-side images */}
      <div className="case-study-image-grid">
        <LightboxImage
          src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/before.jpg"
          alt="Before state"
          width={800}
          height={600}
          caption="Before"
        />
        <LightboxImage
          src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/after.jpg"
          alt="After state"
          width={800}
          height={600}
          caption="After"
        />
      </div>

      
    </div>
  )
}

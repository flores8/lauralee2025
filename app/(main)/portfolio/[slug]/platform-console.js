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

      {/* You can add images anywhere in your content */}
      <LightboxImage
        src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/image-1.jpg"
        alt="Description of your image"
        width={1200}
        height={800}
        caption="Optional: Add a caption for your image"
      />

      {/* Problem statement */}
      <section className="case-study-section">
        <h2>The Challenge</h2>
        <p>
          Describe the problem you were solving...
        </p>
      </section>

      {/* Another image example */}
      <LightboxImage
        src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/image-2.jpg"
        alt="Another image description"
        width={1400}
        height={900}
      />

      {/* Your design process */}
      <section className="case-study-section">
        <h2>Design Process</h2>
        <p>
          Walk through your design process...
        </p>
        
        <h3>Research Phase</h3>
        <p>
          You can use h3 for subsections...
        </p>
      </section>

      {/* Solution */}
      <section className="case-study-section">
        <h2>The Solution</h2>
        <p>
          Describe what you built...
        </p>
      </section>

      {/* Add as many sections and images as you need */}
      <section className="case-study-section">
        <h2>Impact</h2>
        <p>
          Share the results and impact...
        </p>
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

      {/* Learnings */}
      <section className="case-study-section">
        <h2>Key Learnings</h2>
        <ul>
          <li>You can use bullet points</li>
          <li>For listing key takeaways</li>
          <li>Or any other structured content</li>
        </ul>
      </section>
    </div>
  )
}

import Image from 'next/image'

export default function PlatformConsole() {
  return (
    <div className="case-study">
      {/* Introduction section */}
      <section className="case-study-section">
        <h2>Context</h2>
        <p>
          Add your introduction here. Write as much as you need - thousands of words are fine.
          You can include multiple paragraphs, just wrap each one in {'<p>'} tags.
        </p>
        <p>
          This is a second paragraph to show how multiple paragraphs work.
        </p>
      </section>

      {/* You can add images anywhere in your content */}
      <figure className="case-study-image">
        <Image
          src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/image-1.jpg"
          alt="Description of your image"
          width={1600}
          height={1000}
          style={{ width: '100%', height: 'auto' }}
        />
        <figcaption>Optional: Add a caption for your image</figcaption>
      </figure>

      {/* Problem statement */}
      <section className="case-study-section">
        <h2>The Challenge</h2>
        <p>
          Describe the problem you were solving...
        </p>
      </section>

      {/* Another image example */}
      <figure className="case-study-image">
        <Image
          src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/image-2.jpg"
          alt="Another image description"
          width={1400}
          height={900}
          style={{ width: '100%', height: 'auto' }}
        />
      </figure>

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
        <figure className="case-study-image">
          <Image
            src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/before.jpg"
            alt="Before state"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
          <figcaption>Before</figcaption>
        </figure>
        <figure className="case-study-image">
          <Image
            src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/after.jpg"
            alt="After state"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
          <figcaption>After</figcaption>
        </figure>
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

import Link from 'next/link'


export default function About() {
  return (
    <div className="intro">
      <h1>About</h1>
      
      <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        {/* <h2>The craft</h2> */}
        <p>
        I'm a Staff Product Designer specializing in platform and infrastructure systems - designing the abstractions, frameworks, and foundations that help complex technical products scale.
        </p>
        <p>I began my career in user research with training in Human–Computer Interaction and psychology. Over time I grew restless - I wanted to not only study systems, but shape them. I transitioned into product design, bringing that systems lens with me - where thinking, making, and problem-solving coexist.</p>
        <p>At CoreWeave, I established the design function and lead foundational platform work that shapes how the company thinks about AI infrastructure products. Today, my work focuses on designing platform systems that make complex technology legible, scalable, and trustworthy. I'm drawn to problems where structure matters - where the right abstraction or framework can unlock teams and products.</p>
        <p>Although my scope has included design leadership, my work has remained deeply hands-on — owning system design, interaction models, and platform foundations, and using leadership authority to remove structural drag rather than step away from design.</p>
        <p>My approach balances strategic systems thinking with hands-on execution, always asking: what needs to exist for this to scale well? I believe the best design is often invisible, felt rather than noticed. And I care deeply about how teams work together: clarity and rigor don't require cruelty, and trust is a prerequisite for good work.</p>
        <p>I'm especially excited about this moment in technology. AI is collapsing the distance between idea and execution, creating new opportunities for designers who understand systems to amplify judgment rather than replace it.</p>
        <p>Family life has sharpened my ability to navigate complexity, hold multiple perspectives, and make decisions with incomplete information - skills that translate directly into designing systems for diverse users and use cases.</p>
        <p>I'm motivated by work that lasts: thoughtful systems, resilient teams, and products that respect the people who use them. </p>
        <p>I'm currently seeking Principal or Staff+ IC roles focused on platform, infrastructure, or systems design - where I can partner closely with Product and Engineering leadership to solve problems that compound over time.</p>
        <p><Link href="/portfolio" className="more-link">View systems case studies →</Link></p>
      </section>
    </div>
  )
}
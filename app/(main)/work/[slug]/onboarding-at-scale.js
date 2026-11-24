export default function OnboardingAtScale() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Making onboarding visible at scale</h1>
      </header>
      <section className="case-study-section">
        <p>CoreWeave was successfully onboarding customers. It just wasn't doing it through product. Customer Experience, Sales, Engineering, and Capacity Planning absorbed friction manually through Slack, live calls, and institutional knowledge. From the outside, things worked. Inside, the organization was compensating for a system it couldn't see.</p>
        <p>Leadership knew something was wrong but had no reliable way to find it. I was brought in with an explicit mandate: challenge existing assumptions, surface uncomfortable truths, and help leadership distinguish between problems that would break at scale and problems that just needed better communication.</p>
        <p>The first reframe was structural. Onboarding wasn't a linear flow with gaps. It was a distributed system — one where progress depended on the interaction between product behavior, human intervention, capacity availability, and timing, none of which were owned by a single team. That reframe changed the question from "where does onboarding break" to "where does onboarding rely on compensation, and what happens to that at scale."</p>
        <p>From there I designed a discovery and measurement framework: phased internal research tracing real customer journeys across tickets, Slack threads, and handoffs, paired with longitudinal customer surveys tracking confidence over time. The framework was designed to keep working as conditions changed — not a one-time analysis but a repeatable system for seeing onboarding clearly.</p>
        <p>One thing it surfaced immediately: capacity planning was a hidden trust problem. Customers signed contracts with delivery commitments. When those timelines shifted without clear communication across Sales, Engineering, and Customer Experience, trust eroded fast. Making that dependency visible brought the right teams together and informed the development of an internal tool to give everyone a shared view of capacity status in real time.</p>
        <p>Following those handoffs showed me why we needed to keep learning from customers as the products changed. I hired a UX researcher to build that practice. They lead the research while I set priorities, help clear barriers, and continue to report customer satisfaction directly to VP leadership.</p>
        <p>In one early navigation study, we heard that infrastructure engineers needed to monitor resources across projects. That finding helped the team choose a view that starts with resources and lets people filter by project.</p>
      </section>
    </div>
  )
}

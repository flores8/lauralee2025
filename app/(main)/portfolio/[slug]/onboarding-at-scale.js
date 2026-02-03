import Image from 'next/image'

export default function OnboardingAtScale() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Redefining onboarding success at scale</h1>
        <p>Designing a system to surface risk, effort, and misalignment as CoreWeave grew from tens to hundreds of customers.</p>
      </header>
      <section className="case-study-section">
        <h2>Why this mattered at scale</h2>
        <ul>
          <li>Leadership knew onboarding had problems but had no way to identify what they were. This work built the system to find them, and to keep finding them as conditions changed.</li>
          <li>Shifted decisions from reactive fixes to systemic prioritization, grounded in a measurement framework that tracked customer confidence across onboarding over time.</li>
          <li>Made hidden dependencies visible, particularly around capacity planning, clarifying ownership and enabling more deliberate choices about what to automate, support manually, or redesign.</li>
        </ul>

        <h2>My role</h2>
        <p>I was brought in as Staff Product Designer to create clarity where none existed, operating across Product, Engineering, Customer Experience, Sales, and Capacity Planning. Leadership explicitly trusted me to challenge existing onboarding goals, metrics, and assumptions if findings showed the organization was optimizing for the wrong outcomes — surfacing uncomfortable truths, making tradeoffs visible, and helping leadership distinguish between issues genuinely blocking scale and those that simply required better communication or expectation-setting.</p>

        <h2>Problem</h2>
        <p>
        CoreWeave's onboarding appeared successful, but only because internal teams absorbed friction manually through live support, Slack, and institutional knowledge. As the company prepared to scale, leadership lacked visibility into where onboarding effort actually lived, which parts were brittle, and what would quietly fail as customer volume increased.
        </p>

        <h2>Solution (high level)</h2>
        <p>I reframed onboarding from a linear flow into a distributed system, then designed a repeatable discovery and sense-making framework that continuously surfaced where effort, risk, and misalignment accumulated over time. Rather than prescribing a single solution, the work created a durable way for leadership to see onboarding clearly and make better decisions as conditions changed.</p>
        <h2>Impact</h2>
        <ul>
          <li>Shifted onboarding conversations from reactive fixes to systemic understanding</li>
          <li>Clarified ownership boundaries across product, support, and capacity delivery</li>
          <li>Enabled leadership to prioritize based on scale risk rather than anecdote</li>
          <li>Established design as a sense-making function that informed strategy, not just execution.</li>
        </ul>

        </section>
        
        <hr className="case-study-divider" />
        
        <section className="case-study-section">
          <h2 className="case-study-title">Design approach</h2>
          <p><em>System framing, decisions, and impact</em></p>

          <h2>The problem and why onboarding appeared to work</h2>
          <p>When this work began, CoreWeave was successfully onboarding customers. Progress was steady, issues were often resolved quickly, and from the outside, onboarding appeared to be working.</p>
          <p>That success depended heavily on people rather than product. Customer Experience, Sales, Product, Engineering, and Capacity Planning teams absorbed friction through live support, Slack conversations, and deep institutional knowledge. Customers made progress not because the system was clear, but because the organization compensated for its ambiguity.</p>
          <p>This model held while the customer base was small. But it masked a growing risk. As CoreWeave prepared to scale from tens of customers to hundreds, leadership lacked visibility into which parts were brittle and which assumptions would quietly break under volume. Onboarding wasn't failing, it was succeeding in a way that could not scale.</p>

          <h2>Why scale made this dangerous</h2>
          <p>CoreWeave had an explicit goal to grow from tens of customers to hundreds, with onboarding identified as a critical constraint. The VP of Engineering and VP of Customer Experience were accountable for this outcome, but lacked a clear picture of where onboarding effort and risk actually lived.</p>
          <p>The challenge was not a lack of ownership or effort, it was a lack of visibility. Product saw feature readiness, Customer Experience saw tickets and live calls, Engineering saw failures and manual interventions, and Capacity Planning managed timelines that often sat outside the product entirely. Each perspective was valid and incomplete.</p>
          <p>Without a shared view of how onboarding behaved end to end, the organization risked scaling processes that depended on specific people, informal coordination, or unspoken assumptions — precisely the kinds of dependencies that fail under volume.</p>

          <h2>Reframing onboarding as a distributed system</h2>
          <p>As I examined real onboarding journeys across customers and teams, it became clear that treating onboarding as a linear sequence of steps was part of the problem. In practice, onboarding was a distributed system. Progress depended on the interaction between product behavior, human intervention, documentation, capacity availability, and timing - none of which moved in a straight line or were owned by a single team.</p>
          <p>This reframe changed the question being asked. Instead of "where does onboarding break?", the more useful question became "where does onboarding rely on compensation, and what happens to that compensation at scale?" This lens made it possible to distinguish between friction that was acceptable or intentional and friction that was fragile, unowned, and likely to fail as volume increased.</p>

          <h2>Designing a system to surface risk and effort over time</h2>
          <p>Once onboarding was reframed as a distributed system, a one-time journey map or static report was insufficient. Onboarding behavior would continue to change as new customers onboarded, infrastructure came online, and delivery timelines shifted. What the organization needed was not a single answer, but a repeatable way to see where effort, risk, and misalignment accumulated over time.</p>
          <p>I designed a phased discovery system that operated alongside onboarding itself. Internal discovery established a grounded baseline by tracing real customer onboarding end to end: reviewing tickets, Slack threads, meeting recordings, delivery plans, and handoffs to identify where progress depended on manual intervention or specific individuals.</p>
          <p>This was paired with longitudinal customer research that tracked how confidence evolved over time, particularly around moments of uncertainty such as capacity availability or timeline changes. Findings were then triangulated with stakeholders across Product, Engineering, Customer Experience, and Capacity Planning, translating observations into clear recommendations: what could scale through product changes, what required clearer ownership or communication, and where human involvement was intentional and appropriate.</p>

          <h2>Creating a measurable baseline for onboarding health</h2>
          <p>Once onboarding was understood as a system rather than a flow, it became clear that the organization lacked a reliable way to measure whether changes were actually improving the customer experience. Progress was inferred from activity and outcomes, but leadership had no consistent signal for how customers felt about different aspects of onboarding over time.</p>
          <p>I designed a two-survey measurement framework: a post-onboarding survey sent roughly one week after delivery to capture early confidence and friction, and an annual survey to track satisfaction over sustained usage. Both surveys shared a core set of questions — covering overall satisfaction, confidence in CoreWeave meeting needs, and ability to get work running — so trends could be compared over time. The post-onboarding survey added questions specific to clarity, first workload friction, and documentation effectiveness during onboarding. The framework was deliberately designed to start simple and add complexity only as patterns emerged, so the baseline would be clean and the signal trustworthy from the start.</p>
          <p>While baseline collection was still in progress, this work established a shared, repeatable way to evaluate onboarding health from the customer's perspective and guide future investment.</p>

          <h2>Shifting decisions from reaction to diagnosis</h2>
          <p>With a clearer view of how onboarding actually behaved, conversations began to change. Instead of responding primarily to individual failures or loud issues, teams could discuss onboarding in terms of systemic patterns — where effort clustered, where uncertainty recurred, and where progress depended on fragile compensation rather than clear product behavior.</p>
          <p>This visibility clarified ownership. Teams could now distinguish between problems that required product changes, those that needed clearer process or expectation-setting, and those where intentional human involvement was appropriate. Decisions about what to automate, what to fix, and what to leave high-touch became grounded in scale risk rather than anecdote.</p>

          <h2>Surfacing hidden risk in capacity planning and communication</h2>
          <p>One critical issue the system surfaced was around capacity planning and expectation management during onboarding. Customers often signed contracts with specific capacity commitments tied to dates, but when those dates shifted without clear communication across teams, trust eroded quickly.</p>
          <p>Capacity delivery depended on coordination across sales, account executives, capacity planning, engineering, data center build-out, and customer experience — none of whom had a shared, real-time view of status or ownership. Build-out timelines were particularly vulnerable to factors outside anyone's control, such as delayed parts deliveries, and when those disruptions weren't communicated quickly across teams, the impact compounded.</p>
          <p>By making this dependency visible, I was able to bring the relevant teams together and clarify the underlying constraints. This informed the design and development of an internal tool that will provide a shared, up-to-date view of capacity status and changes — reducing surprise, improving cross-team coordination, and addressing a scale risk that would have compounded rapidly as customer volume increased.</p>

          <h2>Outcomes: making onboarding visible and actionable</h2>
          <p>While this work did not aim to "fix" onboarding in a single pass, it meaningfully changed how onboarding was understood, discussed, and improved at CoreWeave.</p>
          <p>Rather than guessing or reacting to individual failures, I built a system to uncover those problems systematically and to keep uncovering them as conditions changed. That shift from intuition to structured visibility was the core outcome.</p>
          <p>From there, ownership boundaries became clearer, reducing ambiguity around who should act when capacity shifted or timelines changed. Decisions about automation versus intentional human involvement became more deliberate and explicit.</p>
          <p>Most importantly, onboarding was no longer treated as a black box that "worked until it didn't." It became a system the organization could examine honestly, challenge over time, and adapt as conditions changed.</p>

          <h2>Design as a sense-making function at scale</h2>
          <p>When products scale faster than shared understanding, the primary risk is not poor execution — it is misaligned decision-making. In those moments, design's responsibility extends beyond improving experiences to helping organizations see their systems truthfully.</p>
          <p>By creating a repeatable way to surface effort, risk, and misalignment, onboarding evolved from an opaque process into something the organization could reason about deliberately. And the framework itself, not just the findings, became the durable contribution: a way to keep asking the right questions as conditions changed.</p>
          
      </section>
    </div>
  )
}

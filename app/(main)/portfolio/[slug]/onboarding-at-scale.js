import Image from 'next/image'

export default function OnboardingAtScale() {
  return (
    <div className="case-study">
      <header className="project-header">
        <h1>Redefining onboarding success at scale</h1>
        <p>Designing a system to surface risk, effort, and misalignment as CoreWeave grew from tens to hundreds of customers.</p>
      </header>
      <section className="case-study-section">
        <h2>Problem</h2>
        <p>
        CoreWeave’s onboarding appeared successful, but only because internal teams absorbed friction manually through live support, Slack, and tribal knowledge. As the company prepared to scale, leadership lacked visibility into where onboarding effort actually lived, which parts were brittle, and what would quietly fail as customer volume increased.
        </p>
        <h2>Why it mattered</h2>
        <p>Onboarding was a critical constraint on growth, with VP-level OKRs tied to scaling it responsibly. Without a shared understanding of how onboarding truly worked across product behavior, human intervention, and capacity delivery, the company risked automating the wrong things, scaling fragile processes, and misinterpreting success signals as volume increased.</p>
        <h2>My role and scope</h2>
        <p>I was brought in as a Staff Product Designer to create clarity where none existed—operating across Product, Engineering, Customer Experience, Sales, and Capacity Planning. I was explicitly trusted to challenge existing onboarding goals, metrics, and assumptions if the findings showed the organization was optimizing for the wrong outcomes.</p>
        <h2>Solution (high level)</h2>
        <p>I reframed onboarding from a linear flow into a distributed system, then designed a repeatable discovery and sense-making framework that continuously surfaced where effort, risk, and misalignment accumulated over time. Rather than prescribing a single solution, the work created a durable way for leadership to see onboarding clearly and make better decisions as conditions changed.</p>
        <h2>Impact</h2>
        <ul>
          <li>Shifted onboarding conversations from reactive fixes to systemic understanding</li>
          <li>Clarified ownership boundaries across product, support, and capacity delivery</li>
          <li>Enabled leadership to prioritize based on scale risk rather than anecdote</li>
          <li>Established design as a sense-making function, informing strategy, not just execution</li>
        </ul>

        </section>
        
        <hr className="case-study-divider" />
        
        <section className="case-study-section">
          <h2 className="case-study-title">Case study</h2>
          <p><em>System framing, decisions, and impact</em></p>

          <h2>The problem and why onboarding appeared to work</h2>
          <p>When this work began, CoreWeave was successfully onboarding customers. Progress was steady, customers were moving forward, and issues were often resolved quickly. From the outside, onboarding appeared to be working.</p>
          <p>That success, however, depended heavily on people rather than product. Customer Experience, Sales, Product, Engineering, and Capacity Planning teams absorbed friction through live support, Slack conversations, meetings, and deep institutional knowledge. When workflows were unclear or timelines shifted, the gaps were filled manually. Customers made progress not because the system was clear, but because the organization compensated for its ambiguity.</p>
          <p>This model held while the customer base was small. But it masked a growing risk. As CoreWeave prepared to scale from tens of customers to hundreds, leadership lacked visibility into where onboarding effort actually lived, which parts were brittle, and which assumptions would quietly break under volume. Onboarding wasn’t failing—it was succeeding in a way that could not scale.</p>

          <h2>Why scale made this dangerous</h2>
          <p>As onboarding became a company-level priority, its limitations became more consequential. CoreWeave had an explicit goal to grow from tens of customers to hundreds, with onboarding identified as a critical constraint on that growth. The VP of Engineering and VP of Customer Experience were accountable for this outcome—but lacked a clear picture of where onboarding effort and risk actually lived.</p>
          <p>The challenge was not a lack of ownership or effort. It was a lack of visibility. Different teams experienced onboarding through different lenses: Product saw feature readiness, Customer Experience saw tickets and live calls, Engineering saw failures and manual interventions, and Capacity Planning managed timelines that often sat outside the product entirely. Each perspective was valid—and incomplete.</p>
          <p>As a result, decisions about onboarding improvements were often reactive. Teams addressed loud failures or local pain points without understanding whether those fixes reduced or reinforced underlying fragility. Without a shared view of how onboarding behaved end to end, the organization risked scaling processes that depended on specific people, informal coordination, or unspoken assumptions—precisely the kinds of dependencies that fail under volume.</p>

          <h2>Reframing onboarding as a distributed system</h2>
          <p>As I examined real onboarding journeys across customers and teams, it became clear that treating onboarding as a linear sequence of steps was part of the problem. In practice, onboarding was a distributed system. Progress depended on the interaction between product behavior, human intervention, documentation, capacity availability, and timing—none of which moved in a straight line or were owned by a single team.</p>
          <p>Onboarding “worked” when gaps were actively compensated for: a support engineer clarified unclear product behavior, a PM renegotiated expectations when capacity shifted, or someone with institutional knowledge stepped in at the right moment. Failure was often quiet. Customers continued moving forward, but with increased uncertainty, hidden effort, and accumulating risk. Success, in other words, was frequently the result of coordination rather than clarity.</p>
          <p>Reframing onboarding this way changed the question being asked. Instead of “where does onboarding break?”, the more useful question became “where does onboarding rely on compensation, and what happens to that compensation at scale?” This lens made it possible to distinguish between friction that was acceptable or intentional and friction that was fragile, unowned, and likely to fail as volume increased.</p>

          <h2>Designing a system to surface risk and effort over time</h2>
          <p>Once onboarding was reframed as a distributed system, a one-time journey map or static report was insufficient. Onboarding behavior would continue to change as new customers onboarded, infrastructure came online, and delivery timelines shifted. What the organization needed was not a single answer, but a repeatable way to see where effort, risk, and misalignment accumulated over time.</p>
          <p>I designed a phased discovery system that operated alongside onboarding itself. The goal was not just to gather insights, but to create an ongoing feedback loop that reflected how onboarding actually functioned in practice. Internal discovery established a grounded baseline by tracing real customer onboardings end to end—reviewing tickets, Slack threads, meeting notes, delivery plans, and handoffs to identify where progress depended on manual intervention or specific individuals.</p>
          <p>This was paired with longitudinal customer research that tracked how confidence evolved over time, particularly around moments of uncertainty such as capacity availability or timeline changes. Findings were then triangulated with stakeholders across Product, Engineering, Customer Experience, and Capacity Planning, translating observations into clear recommendations: what could scale through product changes, what required clearer ownership or communication, and where human involvement was intentional and appropriate.</p>

          <h2>Shifting decisions from reaction to diagnosis</h2>
          <p>With a clearer view of how onboarding actually behaved, conversations began to change. Instead of responding primarily to individual failures or loud issues, teams could discuss onboarding in terms of systemic patterns—where effort clustered, where uncertainty recurred, and where progress depended on fragile compensation rather than clear product behavior.</p>
          <p>This visibility clarified ownership. Teams were better able to distinguish between problems that required product changes, those that needed clearer process or expectation-setting, and those where intentional human involvement was appropriate. Decisions about what to automate, what to fix, and what to leave high-touch became grounded in scale risk rather than anecdote, allowing leadership to prioritize with greater confidence and precision.</p>

          <h2>Being trusted to challenge goals and assumptions</h2>
          <p>This work required operating across organizational boundaries where no single team owned onboarding end to end. As the findings emerged, leadership made the mandate explicit: if the work showed that the organization was optimizing for the wrong outcomes, I was expected to say so. That included challenging assumptions about what onboarding success meant, which signals were trustworthy, and whether existing OKRs reflected the real constraints on scale.</p>
          <p>Rather than validating a predetermined direction, my role was to act as a sense-making layer—surfacing uncomfortable truths, making tradeoffs visible, and helping leadership distinguish between issues that were genuinely blocking scale and those that simply required better communication or expectation-setting. This level of trust shaped how the work was conducted and ensured that insights translated into decisions, not just documentation.</p>

          <h2>Outcomes: making onboarding visible and actionable</h2>
          <p>While this work did not aim to “fix” onboarding in a single pass, it meaningfully changed how onboarding was understood, discussed, and improved at CoreWeave.</p>
          <p>As a result:</p>
          <ul>
            <li>Leadership gained a clearer view into where onboarding relied on hidden effort, fragile coordination, and informal compensation</li>
            <li>Teams were able to prioritize improvements based on scale risk, rather than reacting to isolated failures or anecdotal feedback</li>
            <li>Ownership boundaries became clearer, reducing ambiguity around who should act when capacity shifted or timelines changed</li>
            <li>Decisions about automation versus intentional human involvement became more deliberate and explicit</li>
          </ul>
          <p>Most importantly, onboarding was no longer treated as a black box that “worked until it didn’t.” It became a system the organization could examine honestly, challenge over time, and adapt as conditions changed.</p>

          <h2>Design as a sense-making function at scale</h2>
          <p>This work reinforced a shift in how I think about design’s role in complex, infrastructure-heavy systems. When products scale faster than shared understanding, the primary risk is not poor execution—it is misaligned decision-making. In those moments, design’s responsibility extends beyond improving experiences to helping organizations see their systems truthfully.</p>
          <p>By creating a repeatable way to surface effort, risk, and misalignment, this work enabled onboarding to evolve from an opaque process into something the organization could reason about deliberately. It allowed leadership to challenge goals when they no longer reflected reality, invest where scale risk was highest, and distinguish between problems that required automation, clearer product behavior, or intentional human involvement.</p>
          <p>I now carry this principle into all platform work: when systems depend on hidden compensation to function, design’s most important contribution is not smoothing the experience, but making the truth visible so better decisions can be made.</p>
          
      </section>
    </div>
  )
}

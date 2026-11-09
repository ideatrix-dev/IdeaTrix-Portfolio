const STEPS = [
  {
    num: '01 / DISCOVER',
    title: 'Understand the challenge',
    description: 'We listen, ask questions, and define what your business and users really need.',
  },
  {
    num: '02 / DESIGN & BUILD',
    title: 'Make it happen',
    description:
      'We plan, design, and develop a tailored solution with usability and quality in mind.',
  },
  {
    num: '03 / LAUNCH',
    title: 'Keep moving forward',
    description: 'We support the launch and help your digital product evolve with your goals.',
  },
]

export default function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <div className="head">
          <div className="kicker">Our approach</div>
          <h2>
            Good ideas deserve
            <br />
            great execution.
          </h2>
          <p>
            A simple process helps us stay aligned, move thoughtfully, and deliver work that
            matters.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((step) => (
            <article className="step" key={step.num}>
              <div className="num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

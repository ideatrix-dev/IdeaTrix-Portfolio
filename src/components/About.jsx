import { AboutBrain } from './Illustrations'

const POINTS = ['Human-first design', 'Modern technology', 'Scalable solutions', 'Reliable partnership']

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div className="brain-image">
          <AboutBrain />
          <div className="image-caption">A mind built for digital possibilities</div>
        </div>
        <div className="aboutcopy">
          <div className="kicker">About Ideatrix</div>
          <h2>We think beyond code.</h2>
          <p>
            Ideatrix is an IT software solutions company focused on turning ideas into meaningful
            digital experiences. We combine design, technology, and practical strategy to create
            products that feel simple, work reliably, and grow with your business.
          </p>
          <p>
            From startups taking their first digital step to businesses modernizing their
            operations, we bring your goals into focus and build around them.
          </p>
          <div className="points">
            {POINTS.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

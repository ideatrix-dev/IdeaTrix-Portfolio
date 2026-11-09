import { HeroBrain } from './Illustrations'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="kicker">Ideas • Intelligence • Innovation</div>
          <h1>
            We give your
            <br />
            <span>ideas a brain.</span>
          </h1>
          <p>
            We create beautiful websites, intelligent software, and digital experiences that make
            your business stand out and move forward.
          </p>
          <div className="actions">
            <a className="btn" href="#services">
              Explore solutions ↗
            </a>
            <a className="ghost" href="#contact">
              Let’s talk
            </a>
          </div>
          <div className="meta">
            <span>Designed around you</span>
            <span>Built to grow</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="halo" />
          <div className="ring" />
          <div className="ring r2" />
          <div className="brain-card">
            <div className="brain-card-top">
              <span>IDEATRIX SYSTEM / 01</span>
              <span className="live">
                <i /> CREATIVE MODE
              </span>
            </div>
            <HeroBrain />
            <div className="brain-stats">
              <div>
                <b>Think</b>
                <small>STRATEGY</small>
              </div>
              <div>
                <b>Build</b>
                <small>TECHNOLOGY</small>
              </div>
              <div>
                <b>Grow</b>
                <small>IMPACT</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

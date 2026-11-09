const SERVICES = [
  {
    icon: '⌘',
    title: 'Website Development',
    description:
      'Responsive business websites, online stores, portfolio sites, and maintenance that keep your brand looking its best.',
    link: 'Build your website ↗',
  },
  {
    icon: '▣',
    title: 'Custom Software',
    description:
      'Billing, inventory, employee management, dashboards, and workflows designed around your operation.',
    link: 'Build software ↗',
  },
  {
    icon: '▱',
    title: 'Mobile Apps',
    description:
      'Modern mobile applications with intuitive experiences for customers, teams, and everyday business.',
    link: 'Create an app ↗',
  },
  {
    icon: '↗',
    title: 'Digital Marketing',
    description:
      'SEO, social media, paid campaigns, content, and online branding to help people discover your business.',
    link: 'Grow online ↗',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="head">
          <div className="kicker">What we do</div>
          <h2>
            Smart solutions.
            <br />
            Made for real business.
          </h2>
          <p>
            We blend creative thinking and modern technology to help turn your business challenges
            into useful digital products.
          </p>
        </div>
        <div className="grid">
          {SERVICES.map((service) => (
            <article className="service" key={service.title}>
              <div className="ico">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact">{service.link}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

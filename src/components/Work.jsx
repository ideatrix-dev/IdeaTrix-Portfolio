import { DashboardIcon, MobileIcon, WebsiteIcon } from './Illustrations'

const PROJECTS = [
  {
    icon: <WebsiteIcon />,
    title: 'Business Website',
    description:
      'A polished, responsive online home that explains your value and makes it easy to connect.',
    pill: 'WEB DESIGN & DEVELOPMENT',
  },
  {
    icon: <DashboardIcon />,
    title: 'Business Dashboard',
    description:
      'A custom system that brings your operations, reports, and important information together.',
    pill: 'CUSTOM SOFTWARE',
  },
  {
    icon: <MobileIcon />,
    title: 'Mobile Experience',
    description:
      'A helpful app that keeps your service accessible and your customers connected.',
    pill: 'MOBILE APPLICATION',
  },
]

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="head">
          <div className="kicker">What we can create</div>
          <h2>
            Digital work with
            <br />
            a clear purpose.
          </h2>
          <p>Explore example project types we can tailor to your company and customers.</p>
        </div>
        <div className="work-grid">
          {PROJECTS.map((project) => (
            <article className="work" key={project.title}>
              <div className="workpic">{project.icon}</div>
              <div className="workbody">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="pill">{project.pill}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

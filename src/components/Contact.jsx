import { useState } from 'react'

const SERVICES = ['Website Development', 'Custom Software', 'Mobile App', 'Digital Marketing', 'Other']

export default function Contact() {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(
      'Thanks! This template form is a front-end demo. Connect it to your backend or email service to receive inquiries.',
    )
  }

  return (
    <section id="contact">
      <div className="wrap contact">
        <div className="contact-info">
          <div className="kicker">Contact us</div>
          <h2>
            Let’s build
            <br />
            your next idea.
          </h2>
          <p>
            Tell us what you’re planning. Share a few details and we can start exploring the right
            solution for your business.
          </p>
          <div className="detail">
            <strong>EMAIL</strong>
            <span>hello@ideatrix.com</span>
          </div>
          <div className="detail">
            <strong>OUR SERVICES</strong>
            <span>Web • Software • Apps • Marketing</span>
          </div>
        </div>
        <form id="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">YOUR NAME</label>
            <input id="name" name="name" placeholder="Full name" required />
          </div>
          <div>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field full">
            <label htmlFor="service">SERVICE</label>
            <select id="service" name="service">
              {SERVICES.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">TELL US ABOUT YOUR PROJECT</label>
            <textarea
              id="message"
              name="message"
              placeholder="What would you like to build?"
              required
            />
          </div>
          <button className="btn" type="submit">
            Send inquiry ↗
          </button>
          <p className="msg" id="msg">
            {message}
          </p>
        </form>
      </div>
    </section>
  )
}

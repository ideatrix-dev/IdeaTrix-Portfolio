import { useState } from 'react'
import { Logo } from './Illustrations'

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top">
          <span className="logo">
            <Logo />
          </span>
          <span>
            IDEATRIX<small>CREATIVE IT SOLUTIONS</small>
          </span>
        </a>
        <nav id="nav" className={open ? 'show' : undefined}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navright">
          <a className="navbtn" href="#contact">
            Start a project ↗
          </a>
        </div>
        <button
          className="hamb"
          id="hamb"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}

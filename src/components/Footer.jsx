const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <div className="footbrand">✦ IDEATRIX</div>
          <small>Creative IT solutions for ambitious ideas.</small>
        </div>
        <div className="footlinks">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <small>© {new Date().getFullYear()} Ideatrix</small>
      </div>
    </footer>
  )
}

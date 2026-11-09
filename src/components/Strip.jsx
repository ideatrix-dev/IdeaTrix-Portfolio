const TOOLS = ['WEB DEVELOPMENT', 'SOFTWARE', 'MOBILE APPS', 'DIGITAL MARKETING']

export default function Strip() {
  return (
    <div className="strip">
      <div className="wrap strip-in">
        <label>OUR DIGITAL TOOLKIT</label>
        {TOOLS.map((tool) => (
          <b key={tool}>{tool}</b>
        ))}
      </div>
    </div>
  )
}

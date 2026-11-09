export const PALETTES = {
  gold: {
    n: 'Gold Noir',
    bg: '#0a0a0a',
    panel: '#151515',
    a1: '#d4af37',
    a2: '#f5e6b3',
    a3: '#b8860b',
    text: '#faf6ea',
    muted: '#bdb49a',
    on: '#140f00',
  },
}

export const DEFAULT_PALETTE = 'gold'

function hexToRgb(hex) {
  const x = hex.slice(1)
  return [0, 2, 4].map((i) => parseInt(x.substr(i, 2), 16))
}

function mix(a, b, t) {
  return a.map((v, i) => Math.round(v + (b[i] - v) * t))
}

function set(name, rgb) {
  document.documentElement.style.setProperty(`--${name}-rgb`, rgb.join(','))
}

export function applyPalette(key) {
  const p = PALETTES[key] || PALETTES[DEFAULT_PALETTE]
  const bg = hexToRgb(p.bg)
  const panel = hexToRgb(p.panel)
  const text = hexToRgb(p.text)
  const muted = hexToRgb(p.muted)
  const black = [0, 0, 0]
  const isLight = !!p.light

  set('s0', isLight ? mix(bg, black, 0.04) : mix(bg, black, 0.35))
  set('s1', bg)
  set('s2', mix(bg, panel, 0.5))
  set('s3', panel)
  set('s4', isLight ? mix(panel, black, 0.05) : mix(panel, text, 0.07))

  set('d1', mix(bg, hexToRgb(p.a1), 0.2))
  set('d2', mix(bg, hexToRgb(p.a2), 0.2))
  set('d3', mix(bg, hexToRgb(p.a3), 0.2))

  set('a1', hexToRgb(p.a1))
  set('a2', hexToRgb(p.a2))
  set('a3', hexToRgb(p.a3))
  set('text', text)
  set('t2', muted)
  set('t3', mix(muted, bg, 0.4))
  set('on', hexToRgb(p.on))

  document.documentElement.style.colorScheme = isLight ? 'light' : 'dark'
  document.documentElement.setAttribute('data-pal', key)
}

export function Logo() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Ideatrix logo">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop style={{ stopColor: 'rgb(var(--a1-rgb))' }} />
          <stop offset="1" style={{ stopColor: 'rgb(var(--a2-rgb))' }} />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="19"
        strokeOpacity=".4"
        style={{ fill: 'rgb(var(--d1-rgb))', stroke: 'rgb(var(--a1-rgb))' }}
      />
      <path
        d="M31 14c-7-5-15 1-15 8-6 2-8 10-3 15-3 7 2 14 9 14 3 5 10 5 12 0 7 0 12-7 9-14 5-5 3-13-3-15-1-8-9-13-15-8z"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 16v34M18 24l9 4-3 7 8 3M15 39l10-1 2 9M46 24l-9 4 3 7-8 3M49 39l-10-1-2 9"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="31" r="3" style={{ fill: 'rgb(var(--a2-rgb))' }} />
    </svg>
  )
}

export function HeroBrain() {
  return (
    <svg className="brain-svg" viewBox="0 0 360 240" role="img" aria-label="Original glowing brain illustration">
      <defs>
        <linearGradient id="brainGrad" x1="0" y1="0" x2="1" y2="1">
          <stop style={{ stopColor: 'rgb(var(--a1-rgb))' }} />
          <stop offset=".55" style={{ stopColor: 'rgb(var(--a1-rgb))' }} />
          <stop offset="1" style={{ stopColor: 'rgb(var(--a2-rgb))' }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        fillOpacity=".08"
        stroke="url(#brainGrad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        filter="url(#glow)"
        style={{ fill: 'rgb(var(--a1-rgb))' }}
      >
        <path d="M177 43c-14-21-42-17-51 3-21-7-42 8-42 29-19 7-25 29-14 45-13 17-5 39 13 47-1 22 18 35 37 27 14 15 39 13 49-2V43c-9-13-23-14-32 0z" />
        <path d="M183 43c14-21 42-17 51 3 21-7 42 8 42 29 19 7 25 29 14 45 13 17 5 39-13 47 1 22-18 35-37 27-14 15-39 13-49-2V43c9-13 23-14 32 0z" />
        <path d="M180 40v153M105 72l27 8-7 22 22 11-5 20 18 15M255 72l-27 8 7 22-22 11 5 20-18 15M91 119l25-4 9 20-13 17M269 119l-25-4-9 20 13 17M127 49l17 14-3 18M233 49l-17 14 3 18M145 169l15-10 5 18M215 169l-15-10-5 18" />
      </g>
      <g style={{ fill: 'rgb(var(--a2-rgb))' }}>
        <circle cx="132" cy="80" r="3" />
        <circle cx="228" cy="80" r="3" />
        <circle cx="115" cy="135" r="2.5" />
        <circle cx="245" cy="135" r="2.5" />
        <circle cx="180" cy="104" r="3.5" />
      </g>
      <g strokeOpacity=".5" strokeWidth="1" style={{ stroke: 'rgb(var(--a2-rgb))' }}>
        <path d="M132 80l48 24 48-24M115 135l65-31 65 31M145 169l35-65 35 65" />
      </g>
    </svg>
  )
}

export function AboutBrain() {
  return (
    <svg viewBox="0 0 440 340" role="img" aria-label="Brain network image illustration">
      <defs>
        <linearGradient id="bigbrain" x1="0" y1="0" x2="1" y2="1">
          <stop style={{ stopColor: 'rgb(var(--a1-rgb))' }} />
          <stop offset="1" style={{ stopColor: 'rgb(var(--a2-rgb))' }} />
        </linearGradient>
        <filter id="bigglow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        stroke="url(#bigbrain)"
        strokeWidth="2.4"
        filter="url(#bigglow)"
        style={{ fill: 'rgba(var(--a1-rgb),0.06)' }}
      >
        <path d="M218 49c-24-31-65-23-80 6-31-9-59 14-59 43-26 11-34 41-19 63-18 23-7 53 17 65-2 29 25 47 51 36 18 20 54 17 67-3V49c-12-18-31-19-42 0z" />
        <path d="M222 49c24-31 65-23 80 6 31-9 59 14 59 43 26 11 34 41 19 63 18 23 7 53-17 65 2 29-25 47-51 36-18 20-54 17-67-3V49c12-18 31-19 42 0z" />
        <path d="M220 45v244M100 96l40 11-10 30 32 17-8 27 25 21M340 96l-40 11 10 30-32 17 8 27-25 21M78 172l34-5 13 27-18 22M362 172l-34-5-13 27 18 22M146 64l22 19-5 24M294 64l-22 19 5 24M154 235l22-15 8 25M286 235l-22-15-8 25" />
      </g>
      <g style={{ fill: 'rgb(var(--a2-rgb))' }}>
        <circle cx="140" cy="107" r="5" />
        <circle cx="300" cy="107" r="5" />
        <circle cx="112" cy="194" r="4" />
        <circle cx="328" cy="194" r="4" />
        <circle cx="220" cy="130" r="5" />
        <circle cx="220" cy="238" r="4" />
      </g>
      <g strokeOpacity=".45" style={{ stroke: 'rgb(var(--a2-rgb))' }}>
        <path d="M140 107l80 23 80-23M112 194l108-64 108 64M154 235l66-105 66 105" />
      </g>
    </svg>
  )
}

export function WebsiteIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none">
      <rect
        x="10"
        y="13"
        width="60"
        height="48"
        rx="6"
        strokeWidth="2"
        style={{ stroke: 'rgb(var(--a1-rgb))' }}
      />
      <path
        d="M10 25h60M20 19h2m5 0h2M22 34h20M22 41h36M22 48h29"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ stroke: 'rgb(var(--a2-rgb))' }}
      />
    </svg>
  )
}

export function DashboardIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none">
      <rect
        x="9"
        y="12"
        width="62"
        height="56"
        rx="7"
        strokeWidth="2"
        style={{ stroke: 'rgb(var(--a2-rgb))' }}
      />
      <path
        d="M9 26h62M20 19h2m5 0h2M20 56V43h9v13m6 0V35h9v21m6 0V47h9v9"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ stroke: 'rgb(var(--a2-rgb))' }}
      />
    </svg>
  )
}

export function MobileIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none">
      <rect
        x="23"
        y="7"
        width="34"
        height="66"
        rx="8"
        strokeWidth="2"
        style={{ stroke: 'rgb(var(--a3-rgb))' }}
      />
      <path
        d="M29 16h22M29 24h22M29 33h22M29 42h14M36 65h8"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ stroke: 'rgb(var(--a3-rgb))' }}
      />
      <circle cx="40" cy="54" r="3" style={{ fill: 'rgb(var(--a2-rgb))' }} />
    </svg>
  )
}

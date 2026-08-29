// Verbatim port of the mockup's renderHeroArt() SVG scene as static JSX.
const PALETTE = {
  sky: ["#BFE3FA", "#DCF1FC", "#EEF9FF"],
  glow: { cx: 0.5, cy: 0.08, color: "#FFFDF0" },
  cloud: "#FFFFFF",
  cloudOpacity: 0.8,
  hill: "#AFD3C0",
  ground: ["#7FC765", "#5FAE4C"],
  glass: ["#DFF1FB", "#AEDBF2"],
  windowLit: "#FCE39A",
  windowUnlit: "#BFE0F5",
};
const LIT_COLS = [0, 2, 4, 6];

function buildWindows() {
  const rects = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 8; c++) {
      const lit = ((LIT_COLS.includes(c) ? 1 : 0) + r) % 2 === 0;
      rects.push(
        <rect
          key={`${r}-${c}`}
          x={392 + c * 44}
          y={150 + r * 44}
          width={30}
          height={30}
          rx={4}
          fill={lit ? PALETTE.windowLit : PALETTE.windowUnlit}
        />,
      );
    }
  }
  return rects;
}

export default function HeroArt() {
  const p = PALETTE;
  return (
    <div className="hero-art" id="hero-art">
      <svg viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hsky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={p.sky[0]} />
            <stop offset="0.5" stopColor={p.sky[1]} />
            <stop offset="1" stopColor={p.sky[2]} />
          </linearGradient>
          <radialGradient id="hglow" cx={p.glow.cx} cy={p.glow.cy} r="0.5">
            <stop offset="0" stopColor={p.glow.color} stopOpacity=".95" />
            <stop offset="1" stopColor={p.glow.color} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hglass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={p.glass[0]} />
            <stop offset="1" stopColor={p.glass[1]} />
          </linearGradient>
          <linearGradient id="hground" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={p.ground[0]} />
            <stop offset="1" stopColor={p.ground[1]} />
          </linearGradient>
        </defs>
        <rect width="1200" height="360" fill="url(#hsky)" />
        <rect width="1200" height="360" fill="url(#hglow)" />
        <circle cx="984" cy="66" r="40" fill="#FFF7DD" opacity="0.9" />
        <g fill={p.cloud} opacity={p.cloudOpacity}>
          <ellipse cx="360" cy="70" rx="60" ry="16" />
          <ellipse cx="410" cy="62" rx="42" ry="14" />
          <ellipse cx="720" cy="52" rx="52" ry="13" />
        </g>
        <path d="M0 250 Q220 196 460 236 T900 226 T1200 244 V360 H0Z" fill={p.hill} opacity="0.55" />
        <rect y="286" width="1200" height="74" fill="url(#hground)" />
        <path d="M470 360 L556 300 H660 L620 360Z" fill="#E7D6A6" opacity="0.85" />
        <ellipse cx="470" cy="300" rx="360" ry="18" fill="#5B4326" opacity="0.16" />
        <rect x="628" y="150" width="196" height="150" fill="url(#hglass)" stroke="#CFE6F3" strokeOpacity="0.6" />
        <g stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="2">
          <line x1="628" y1="188" x2="824" y2="188" />
          <line x1="628" y1="226" x2="824" y2="226" />
          <line x1="628" y1="264" x2="824" y2="264" />
          <line x1="694" y1="150" x2="694" y2="300" />
          <line x1="760" y1="150" x2="760" y2="300" />
        </g>
        <rect x="360" y="118" width="376" height="182" rx="8" fill="#FFF7E8" stroke="#E7C98F" />
        <rect x="360" y="118" width="376" height="20" rx="4" fill="#EBAE49" />
        <g fill="#B77E2E" opacity="0.7">
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={i} d={`M${378 + i * 30} 122 l5 6 -5 6 -5 -6z`} />
          ))}
        </g>
        <g>{buildWindows()}</g>
        <rect x="516" y="228" width="64" height="72" rx="6" fill="#3C2A16" />
        <rect x="522" y="234" width="24" height="66" fill="#5A4023" />
        <rect x="550" y="234" width="24" height="66" fill="#5A4023" />
        <rect x="506" y="216" width="84" height="16" rx="5" fill="#E7B455" />
        <rect x="500" y="300" width="96" height="8" rx="2" fill="#D9C08A" />
        <rect x="490" y="308" width="116" height="8" rx="2" fill="#CDB27C" />
        <g>
          <rect x="250" y="236" width="12" height="64" rx="3" fill="#8A5E33" />
          <circle cx="256" cy="222" r="40" fill="#6FA863" />
          <circle cx="286" cy="238" r="28" fill="#7FB975" />
          <circle cx="226" cy="240" r="26" fill="#5F9A57" />
        </g>
        <g>
          <rect x="892" y="250" width="10" height="50" rx="3" fill="#8A5E33" />
          <circle cx="897" cy="240" r="30" fill="#6FA863" />
          <circle cx="922" cy="252" r="22" fill="#7FB975" />
        </g>
        <ellipse cx="640" cy="308" rx="34" ry="16" fill="#5F9A57" />
        <ellipse cx="360" cy="312" rx="30" ry="14" fill="#6FA863" />
      </svg>
      <div className="scrim" />
      <div className="hero-badge">
        <span className="dot" />
        Hozir 41 o'quvchi darsda · 6 dars ketyapti
      </div>
      <div className="hud">
        <div className="hud-name">Namuna O'quv Markazi</div>
        <div className="hud-stats">
          <div>
            <div>41</div>
            <div>hozir darsda</div>
          </div>
          <div>
            <div>12</div>
            <div>dars ketyapti</div>
          </div>
          <div>
            <div>96%</div>
            <div>bugungi davomat</div>
          </div>
        </div>
      </div>
    </div>
  );
}

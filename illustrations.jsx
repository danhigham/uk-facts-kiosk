/* ===== Illustration library — flat paper-cutout SVG icons.
   Built from circles, rectangles, polygons, simple paths.
   Each takes a {size} prop and inherits palette via CSS vars. ===== */

function Frame({ size, children, bg = "var(--bg-2)" }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} style={{ overflow: "visible" }}>
      <defs>
        <pattern id="ill-stripes" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="7" height="14" fill="rgba(14,43,92,0.08)" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="200" rx="14" fill={bg} stroke="var(--ink)" strokeWidth="3" />
      <rect x="0" y="0" width="200" height="200" rx="14" fill="url(#ill-stripes)" />
      {children}
    </svg>
  );
}

/* ===== individual illustrations ===== */

function IllBigBen({ size = 140 }) {
  return (
    <Frame size={size} bg="var(--paper)">
      {/* sky */}
      <rect x="3" y="3" width="194" height="120" rx="10" fill="#cfdcef" />
      {/* tower */}
      <rect x="80" y="40" width="40" height="140" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      {/* clock face */}
      <circle cx="100" cy="80" r="18" fill="#fff" stroke="var(--ink)" strokeWidth="3" />
      <line x1="100" y1="80" x2="100" y2="68" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="80" x2="110" y2="80" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="80" r="2" fill="var(--ink)" />
      {/* spire */}
      <polygon points="80,40 100,12 120,40" fill="var(--ink)" />
      <circle cx="100" cy="8" r="4" fill="var(--red)" stroke="var(--ink)" strokeWidth="2" />
      {/* ground */}
      <rect x="3" y="170" width="194" height="27" fill="var(--sage)" />
    </Frame>
  );
}

function IllPhone({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* old rotary phone — base */}
      <rect x="40" y="100" width="120" height="50" rx="14" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      {/* dial */}
      <circle cx="100" cy="124" r="18" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="100" cy="124" r="6" fill="var(--ink)" />
      {/* handset */}
      <path d="M 35 80 Q 100 50 165 80 L 158 92 Q 100 68 42 92 Z" fill="var(--ink)" />
      <circle cx="42" cy="86" r="8" fill="var(--ink)" />
      <circle cx="158" cy="86" r="8" fill="var(--ink)" />
      {/* sound waves */}
      <path d="M 25 78 Q 18 86 25 94" stroke="var(--ink)" strokeWidth="2.5" fill="none" />
      <path d="M 175 78 Q 182 86 175 94" stroke="var(--ink)" strokeWidth="2.5" fill="none" />
    </Frame>
  );
}

function IllGuitar({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* guitar body */}
      <ellipse cx="80" cy="125" rx="42" ry="48" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      {/* sound hole */}
      <circle cx="80" cy="130" r="11" fill="var(--ink)" />
      {/* neck */}
      <rect x="100" y="40" width="22" height="80" fill="var(--ink)" />
      {/* head */}
      <rect x="96" y="20" width="30" height="22" rx="3" fill="var(--ink)" />
      {/* tuning pegs */}
      <circle cx="92" cy="28" r="3" fill="var(--butter)" />
      <circle cx="92" cy="36" r="3" fill="var(--butter)" />
      <circle cx="130" cy="28" r="3" fill="var(--butter)" />
      <circle cx="130" cy="36" r="3" fill="var(--butter)" />
      {/* strings */}
      <line x1="105" y1="42" x2="78" y2="170" stroke="#fff" strokeWidth="1" />
      <line x1="113" y1="42" x2="86" y2="170" stroke="#fff" strokeWidth="1" />
      {/* note */}
      <circle cx="155" cy="60" r="6" fill="var(--ink)" />
      <line x1="161" y1="60" x2="161" y2="38" stroke="var(--ink)" strokeWidth="3" />
    </Frame>
  );
}

function IllPencil({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* paper */}
      <rect x="35" y="40" width="100" height="130" rx="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" transform="rotate(-6 85 105)" />
      <line x1="48" y1="80" x2="120" y2="73" stroke="var(--ink-soft)" strokeWidth="2" transform="rotate(-6 85 105)" />
      <line x1="48" y1="100" x2="115" y2="93" stroke="var(--ink-soft)" strokeWidth="2" transform="rotate(-6 85 105)" />
      <line x1="48" y1="120" x2="125" y2="113" stroke="var(--ink-soft)" strokeWidth="2" transform="rotate(-6 85 105)" />
      {/* pencil */}
      <g transform="rotate(40 130 60)">
        <rect x="80" y="50" width="80" height="20" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
        <polygon points="160,50 180,60 160,70" fill="#f6dbb5" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="172,55 180,60 172,65" fill="var(--ink)" />
        <rect x="68" y="50" width="14" height="20" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      </g>
    </Frame>
  );
}

function IllChips({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* paper cone */}
      <polygon points="40,80 160,80 130,180 70,180" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <line x1="55" y1="100" x2="145" y2="100" stroke="var(--ink-soft)" strokeWidth="2" />
      {/* chips */}
      <rect x="58"  y="40" width="16" height="60" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      <rect x="78"  y="30" width="16" height="70" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      <rect x="98"  y="35" width="16" height="65" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      <rect x="118" y="42" width="16" height="58" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      {/* salt dots */}
      <circle cx="100" cy="60" r="2" fill="var(--paper)" />
      <circle cx="85" cy="50" r="2" fill="var(--paper)" />
      <circle cx="120" cy="55" r="2" fill="var(--paper)" />
    </Frame>
  );
}

function IllStones({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* sky */}
      <rect x="3" y="3" width="194" height="140" fill="#e8d4b6" />
      {/* sun */}
      <circle cx="155" cy="50" r="20" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      {/* stones */}
      <rect x="35"  y="80" width="22" height="70" fill="#a89888" stroke="var(--ink)" strokeWidth="3" />
      <rect x="65"  y="75" width="22" height="75" fill="#9c8b7c" stroke="var(--ink)" strokeWidth="3" />
      <rect x="95"  y="78" width="22" height="72" fill="#a89888" stroke="var(--ink)" strokeWidth="3" />
      <rect x="125" y="76" width="22" height="74" fill="#9c8b7c" stroke="var(--ink)" strokeWidth="3" />
      {/* lintel */}
      <rect x="33" y="68" width="118" height="14" fill="#7d6e60" stroke="var(--ink)" strokeWidth="3" />
      {/* ground */}
      <rect x="3" y="143" width="194" height="54" fill="var(--sage)" />
    </Frame>
  );
}

function IllWeb({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* laptop */}
      <rect x="35" y="60" width="130" height="85" rx="6" fill="var(--ink)" />
      <rect x="42" y="68" width="116" height="69" fill="var(--paper)" />
      <rect x="25" y="145" width="150" height="10" rx="3" fill="#9fa8b8" stroke="var(--ink)" strokeWidth="2.5" />
      {/* globe */}
      <circle cx="100" cy="103" r="22" fill="var(--blue)" stroke="var(--ink)" strokeWidth="3" />
      <ellipse cx="100" cy="103" rx="22" ry="9" fill="none" stroke="var(--paper)" strokeWidth="2" />
      <line x1="78" y1="103" x2="122" y2="103" stroke="var(--paper)" strokeWidth="2" />
      <ellipse cx="100" cy="103" rx="9" ry="22" fill="none" stroke="var(--paper)" strokeWidth="2" />
    </Frame>
  );
}

function IllCrown({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* crown base */}
      <rect x="40" y="110" width="120" height="40" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      {/* spikes */}
      <polygon points="40,110 60,60 80,110" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="80,110 100,40 120,110" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="120,110 140,60 160,110" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      {/* jewels */}
      <circle cx="60" cy="60" r="6" fill="var(--red)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="100" cy="40" r="7" fill="var(--blue)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="140" cy="60" r="6" fill="var(--sage)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="65" cy="130" r="4" fill="var(--red)" />
      <circle cx="100" cy="130" r="4" fill="var(--blue)" />
      <circle cx="135" cy="130" r="4" fill="var(--sage)" />
      {/* base */}
      <rect x="3" y="160" width="194" height="37" fill="var(--rose)" />
    </Frame>
  );
}

function IllTube({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* tunnel */}
      <ellipse cx="100" cy="100" rx="80" ry="70" fill="var(--ink)" />
      <ellipse cx="100" cy="100" rx="60" ry="52" fill="var(--bg)" />
      {/* roundel */}
      <circle cx="100" cy="100" r="36" fill="var(--red)" stroke="var(--ink)" strokeWidth="4" />
      <circle cx="100" cy="100" r="22" fill="var(--bg)" stroke="var(--ink)" strokeWidth="4" />
      <rect x="40" y="93" width="120" height="14" fill="var(--blue)" stroke="var(--ink)" strokeWidth="3" />
      <text x="100" y="106" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">UNDERGROUND</text>
    </Frame>
  );
}

function IllRaven({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* tower */}
      <rect x="20" y="100" width="40" height="80" fill="#a89888" stroke="var(--ink)" strokeWidth="3" />
      <polygon points="20,100 40,80 60,100" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      <rect x="30" y="120" width="8" height="14" fill="var(--ink)" />
      <rect x="44" y="120" width="8" height="14" fill="var(--ink)" />
      {/* raven */}
      <ellipse cx="130" cy="110" rx="40" ry="28" fill="var(--ink)" />
      <circle cx="160" cy="92" r="18" fill="var(--ink)" />
      <polygon points="174,90 192,94 174,100" fill="var(--butter)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="166" cy="88" r="3" fill="#fff" />
      <circle cx="166" cy="88" r="1.5" fill="var(--ink)" />
      <path d="M 100 110 Q 110 95 120 100" stroke="var(--ink)" strokeWidth="3" fill="none" />
      {/* ground */}
      <rect x="3" y="170" width="194" height="27" fill="var(--sage)" />
    </Frame>
  );
}

function IllTea({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* saucer */}
      <ellipse cx="100" cy="158" rx="68" ry="10" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      {/* cup */}
      <path d="M 50 80 L 60 150 Q 100 162 140 150 L 150 80 Z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      {/* tea */}
      <ellipse cx="100" cy="84" rx="46" ry="10" fill="#a86d3a" stroke="var(--ink)" strokeWidth="3" />
      {/* handle */}
      <path d="M 150 95 Q 175 100 170 130 Q 165 145 145 140" fill="none" stroke="var(--ink)" strokeWidth="3" />
      {/* steam */}
      <path d="M 80 60 Q 75 50 82 40 Q 88 30 82 22" stroke="var(--ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 105 55 Q 100 45 107 35 Q 113 25 107 18" stroke="var(--ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 130 60 Q 125 50 132 40 Q 138 30 132 22" stroke="var(--ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </Frame>
  );
}

function IllBagpipes({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* bag */}
      <ellipse cx="90" cy="120" rx="42" ry="38" fill="var(--sage)" stroke="var(--ink)" strokeWidth="3" />
      <path d="M 60 110 L 75 130 M 90 100 L 100 130 M 115 110 L 105 130" stroke="var(--ink)" strokeWidth="2" />
      {/* pipes */}
      <rect x="120" y="40" width="8" height="80" fill="#7d4e2a" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="135" y="30" width="8" height="90" fill="#7d4e2a" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="150" y="40" width="8" height="80" fill="#7d4e2a" stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="124" cy="35" r="6" fill="var(--ink)" />
      <circle cx="139" cy="25" r="6" fill="var(--ink)" />
      <circle cx="154" cy="35" r="6" fill="var(--ink)" />
      {/* chanter */}
      <rect x="78" y="155" width="6" height="28" fill="var(--ink)" />
    </Frame>
  );
}

function IllScroll({ size = 140 }) {
  return (
    <Frame size={size}>
      <rect x="35" y="50" width="130" height="100" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <ellipse cx="35" cy="100" rx="6" ry="50" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <ellipse cx="165" cy="100" rx="6" ry="50" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <line x1="55" y1="75" x2="145" y2="75" stroke="var(--ink)" strokeWidth="2" />
      <line x1="55" y1="90" x2="135" y2="90" stroke="var(--ink)" strokeWidth="2" />
      <line x1="55" y1="105" x2="145" y2="105" stroke="var(--ink)" strokeWidth="2" />
      <line x1="55" y1="120" x2="125" y2="120" stroke="var(--ink)" strokeWidth="2" />
      {/* feather quill */}
      <path d="M 130 30 Q 160 50 170 90 L 155 80 Q 150 60 130 30" fill="var(--red)" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  );
}

function IllSheep({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* hill */}
      <ellipse cx="100" cy="220" rx="180" ry="80" fill="var(--sage)" />
      {/* sheep body */}
      <ellipse cx="100" cy="115" rx="50" ry="40" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="65" cy="100" r="14" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="80" cy="92" r="14" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="100" cy="88" r="14" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="120" cy="92" r="14" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="135" cy="100" r="14" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      {/* face */}
      <ellipse cx="55" cy="125" rx="14" ry="16" fill="var(--ink)" />
      <circle cx="50" cy="120" r="2.5" fill="#fff" />
      {/* legs */}
      <rect x="78" y="148" width="6" height="20" fill="var(--ink)" />
      <rect x="118" y="148" width="6" height="20" fill="var(--ink)" />
    </Frame>
  );
}

function IllChocolate({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* wrapper */}
      <rect x="30" y="50" width="140" height="100" rx="6" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      {/* foil peeled */}
      <polygon points="30,50 70,40 80,60 30,70" fill="#d4d4d4" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
      {/* chocolate squares */}
      <g fill="#5a3920" stroke="var(--ink)" strokeWidth="2">
        <rect x="80" y="65" width="22" height="22" />
        <rect x="105" y="65" width="22" height="22" />
        <rect x="130" y="65" width="22" height="22" />
        <rect x="80" y="90" width="22" height="22" />
        <rect x="105" y="90" width="22" height="22" />
        <rect x="130" y="90" width="22" height="22" />
        <rect x="80" y="115" width="22" height="22" />
        <rect x="105" y="115" width="22" height="22" />
        <rect x="130" y="115" width="22" height="22" />
      </g>
    </Frame>
  );
}

function IllWaves({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* hexagonal columns (Giant's Causeway) */}
      {[
        [40,140],[68,140],[96,140],[124,140],[152,140],
        [54,115],[82,115],[110,115],[138,115],
        [40,90],[68,90],[96,90],[124,90],[152,90]
      ].map(([x,y],n) => (
        <polygon key={n}
          points={`${x},${y-12} ${x+12},${y-6} ${x+12},${y+6} ${x},${y+12} ${x-12},${y+6} ${x-12},${y-6}`}
          fill={n % 2 ? "#7d6e60" : "#a89888"} stroke="var(--ink)" strokeWidth="2.5" />
      ))}
      {/* sea */}
      <rect x="3" y="150" width="194" height="47" fill="var(--blue)" />
      <path d="M 0 158 Q 30 152 60 158 T 120 158 T 200 158" stroke="var(--paper)" strokeWidth="3" fill="none" />
      <path d="M 0 172 Q 30 166 60 172 T 120 172 T 200 172" stroke="var(--paper)" strokeWidth="2" fill="none" />
    </Frame>
  );
}

function IllMicrophone({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* mic */}
      <rect x="80" y="40" width="40" height="70" rx="20" fill="var(--ink)" />
      <line x1="85" y1="60" x2="115" y2="60" stroke="var(--paper)" strokeWidth="2" />
      <line x1="85" y1="75" x2="115" y2="75" stroke="var(--paper)" strokeWidth="2" />
      <line x1="85" y1="90" x2="115" y2="90" stroke="var(--paper)" strokeWidth="2" />
      <path d="M 60 100 Q 60 130 100 130 Q 140 130 140 100" stroke="var(--ink)" strokeWidth="4" fill="none" />
      <line x1="100" y1="130" x2="100" y2="160" stroke="var(--ink)" strokeWidth="4" />
      <rect x="75" y="160" width="50" height="10" rx="2" fill="var(--ink)" />
      {/* notes */}
      <circle cx="40" cy="60" r="5" fill="var(--red)" />
      <line x1="45" y1="60" x2="45" y2="40" stroke="var(--red)" strokeWidth="2.5" />
      <circle cx="160" cy="80" r="5" fill="var(--blue)" />
      <line x1="165" y1="80" x2="165" y2="60" stroke="var(--blue)" strokeWidth="2.5" />
    </Frame>
  );
}

function IllFinch({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* branch */}
      <line x1="20" y1="150" x2="180" y2="130" stroke="#7d4e2a" strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="115" r="8" fill="var(--sage)" />
      <circle cx="160" cy="105" r="8" fill="var(--sage)" />
      {/* finch */}
      <ellipse cx="100" cy="100" rx="36" ry="26" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="128" cy="84" r="16" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      <polygon points="142,82 156,86 142,90" fill="var(--butter)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="132" cy="80" r="3" fill="var(--ink)" />
      <path d="M 65 100 L 50 92 M 65 105 L 50 110" stroke="var(--ink)" strokeWidth="2.5" />
      <line x1="115" y1="125" x2="115" y2="138" stroke="var(--ink)" strokeWidth="3" />
    </Frame>
  );
}

function IllMower({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* grass */}
      <rect x="3" y="160" width="194" height="37" fill="var(--sage)" />
      <line x1="20" y1="160" x2="20" y2="150" stroke="var(--ink)" strokeWidth="2" />
      <line x1="40" y1="160" x2="40" y2="148" stroke="var(--ink)" strokeWidth="2" />
      <line x1="170" y1="160" x2="170" y2="152" stroke="var(--ink)" strokeWidth="2" />
      {/* mower body */}
      <rect x="40" y="100" width="100" height="50" rx="6" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      {/* wheels */}
      <circle cx="55" cy="155" r="14" fill="var(--ink)" />
      <circle cx="55" cy="155" r="5" fill="var(--paper)" />
      <circle cx="125" cy="155" r="14" fill="var(--ink)" />
      <circle cx="125" cy="155" r="5" fill="var(--paper)" />
      {/* handle */}
      <line x1="140" y1="105" x2="180" y2="50" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" />
      <rect x="170" y="40" width="20" height="8" rx="3" fill="var(--ink)" />
      {/* engine top */}
      <rect x="65" y="85" width="40" height="20" fill="var(--ink)" />
    </Frame>
  );
}

function IllBreakfast({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* plate */}
      <ellipse cx="100" cy="115" rx="78" ry="60" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <ellipse cx="100" cy="115" rx="62" ry="46" fill="var(--bg)" />
      {/* egg */}
      <ellipse cx="75" cy="100" rx="22" ry="18" fill="#fff" stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="75" cy="100" r="8" fill="var(--butter)" />
      {/* sausage */}
      <rect x="100" y="92" width="50" height="16" rx="8" fill="#a86d3a" stroke="var(--ink)" strokeWidth="2.5" />
      {/* beans */}
      <circle cx="90" cy="135" r="5" fill="#c9542e" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="100" cy="138" r="5" fill="#c9542e" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="112" cy="135" r="5" fill="#c9542e" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="105" cy="128" r="5" fill="#c9542e" stroke="var(--ink)" strokeWidth="1.5" />
      {/* tomato */}
      <circle cx="135" cy="130" r="10" fill="var(--red)" stroke="var(--ink)" strokeWidth="2.5" />
    </Frame>
  );
}

function IllVolcano({ size = 140 }) {
  return (
    <Frame size={size}>
      <rect x="3" y="3" width="194" height="120" fill="#cfdcef" />
      <polygon points="20,170 90,60 160,170" fill="#7d6e60" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="65,110 90,60 115,110" fill="#5a4e44" />
      {/* castle on top */}
      <rect x="75" y="50" width="30" height="20" fill="#a89888" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="73" y="46" width="6" height="6" fill="#a89888" />
      <rect x="89" y="46" width="6" height="6" fill="#a89888" />
      <rect x="101" y="46" width="6" height="6" fill="#a89888" />
      {/* ground */}
      <rect x="3" y="170" width="194" height="27" fill="var(--sage)" />
    </Frame>
  );
}

function IllTrain({ size = 140 }) {
  return (
    <Frame size={size}>
      <rect x="3" y="160" width="194" height="37" fill="#7d6e60" />
      {/* tracks */}
      <line x1="3" y1="170" x2="197" y2="170" stroke="var(--ink)" strokeWidth="2" />
      {/* engine */}
      <rect x="40" y="80" width="100" height="50" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      <rect x="60" y="50" width="40" height="35" fill="var(--ink)" />
      <circle cx="80" cy="62" r="6" fill="var(--butter)" />
      <rect x="105" y="60" width="20" height="20" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="40" y="125" width="100" height="12" fill="var(--ink)" />
      <circle cx="60" cy="148" r="14" fill="var(--ink)" />
      <circle cx="60" cy="148" r="6" fill="var(--paper)" />
      <circle cx="120" cy="148" r="14" fill="var(--ink)" />
      <circle cx="120" cy="148" r="6" fill="var(--paper)" />
      {/* steam */}
      <circle cx="80" cy="38" r="8" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="92" cy="28" r="10" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="76" cy="22" r="7" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
    </Frame>
  );
}

function IllSquirrel({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* tail */}
      <path d="M 50 110 Q 20 80 30 50 Q 50 30 75 50 Q 70 80 70 110 Z" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      {/* body */}
      <ellipse cx="105" cy="115" rx="35" ry="40" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      {/* belly */}
      <ellipse cx="105" cy="125" rx="20" ry="22" fill="#f5d4ad" />
      {/* head */}
      <circle cx="135" cy="85" r="22" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      <polygon points="125,68 130,55 138,65" fill="var(--red)" stroke="var(--ink)" strokeWidth="2.5" />
      <polygon points="143,65 150,53 155,68" fill="var(--red)" stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="142" cy="83" r="3" fill="var(--ink)" />
      <circle cx="148" cy="92" r="2" fill="var(--ink)" />
      {/* nut */}
      <ellipse cx="160" cy="105" rx="10" ry="13" fill="#a86d3a" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="155" y="93" width="10" height="6" fill="#7d4e2a" />
      <rect x="3" y="160" width="194" height="37" fill="var(--sage)" />
    </Frame>
  );
}

function IllComputer({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* old computer */}
      <rect x="35" y="60" width="130" height="80" fill="#cfd8e6" stroke="var(--ink)" strokeWidth="3" />
      <rect x="45" y="70" width="110" height="55" fill="var(--ink)" />
      {/* code */}
      <line x1="50" y1="80" x2="80" y2="80" stroke="var(--sage)" strokeWidth="2" />
      <line x1="50" y1="88" x2="100" y2="88" stroke="var(--sage)" strokeWidth="2" />
      <line x1="55" y1="96" x2="90" y2="96" stroke="var(--sage)" strokeWidth="2" />
      <line x1="55" y1="104" x2="110" y2="104" stroke="var(--sage)" strokeWidth="2" />
      <line x1="50" y1="112" x2="75" y2="112" stroke="var(--sage)" strokeWidth="2" />
      {/* base */}
      <rect x="80" y="140" width="40" height="20" fill="#9fa8b8" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="60" y="158" width="80" height="8" rx="2" fill="#9fa8b8" stroke="var(--ink)" strokeWidth="2.5" />
    </Frame>
  );
}

function IllMountain({ size = 140 }) {
  return (
    <Frame size={size}>
      <rect x="3" y="3" width="194" height="120" fill="#cfdcef" />
      <polygon points="20,170 80,80 130,170" fill="#7d6e60" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="60,170 130,50 200,170" fill="#a89888" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="60,90 80,80 90,95" fill="var(--paper)" />
      <polygon points="115,68 130,50 145,72" fill="var(--paper)" />
      <rect x="3" y="170" width="194" height="27" fill="var(--sage)" />
    </Frame>
  );
}

function IllPie({ size = 140 }) {
  return (
    <Frame size={size}>
      <ellipse cx="100" cy="160" rx="78" ry="14" fill="var(--ink)" />
      <ellipse cx="100" cy="115" rx="70" ry="50" fill="#c9954a" stroke="var(--ink)" strokeWidth="3" />
      <ellipse cx="100" cy="100" rx="60" ry="35" fill="#e0b370" stroke="var(--ink)" strokeWidth="2.5" />
      {/* lattice */}
      <line x1="50" y1="100" x2="150" y2="100" stroke="var(--ink)" strokeWidth="2" />
      <line x1="60" y1="85" x2="140" y2="115" stroke="var(--ink)" strokeWidth="2" />
      <line x1="60" y1="115" x2="140" y2="85" stroke="var(--ink)" strokeWidth="2" />
    </Frame>
  );
}

function IllPenicillin({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* petri dish */}
      <ellipse cx="100" cy="120" rx="70" ry="50" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      <ellipse cx="100" cy="115" rx="60" ry="40" fill="#e8e0c8" stroke="var(--ink)" strokeWidth="2" />
      {/* mould blobs */}
      <circle cx="80" cy="100" r="14" fill="var(--sage)" />
      <circle cx="120" cy="120" r="10" fill="var(--sage)" />
      <circle cx="95" cy="130" r="8" fill="var(--sage)" />
      {/* tiny dots */}
      <circle cx="80" cy="100" r="3" fill="var(--ink)" />
      <circle cx="84" cy="105" r="2" fill="var(--ink)" />
      <circle cx="76" cy="103" r="2" fill="var(--ink)" />
      <circle cx="120" cy="120" r="2" fill="var(--ink)" />
    </Frame>
  );
}

function IllLake({ size = 140 }) {
  return (
    <Frame size={size}>
      <rect x="3" y="3" width="194" height="100" fill="#cfdcef" />
      <polygon points="20,140 60,90 100,140" fill="#7d6e60" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="80,140 130,70 180,140" fill="#a89888" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="100" cy="160" rx="90" ry="22" fill="var(--blue)" stroke="var(--ink)" strokeWidth="3" />
      <path d="M 30 162 Q 50 158 70 162" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M 90 168 Q 110 164 130 168" stroke="var(--paper)" strokeWidth="2" fill="none" />
    </Frame>
  );
}

function IllTrumpet({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* horn */}
      <path d="M 30 100 L 90 95 L 90 110 L 30 105 Z" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      <path d="M 90 80 L 130 70 L 145 90 L 145 115 L 130 135 L 90 125 Z" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      {/* valves */}
      <rect x="60" y="78" width="6" height="22" fill="var(--ink)" />
      <rect x="70" y="78" width="6" height="22" fill="var(--ink)" />
      <rect x="80" y="78" width="6" height="22" fill="var(--ink)" />
      {/* mouthpiece */}
      <circle cx="25" cy="103" r="8" fill="var(--ink)" />
      {/* flag */}
      <rect x="155" y="40" width="3" height="40" fill="var(--ink)" />
      <polygon points="158,40 180,48 158,55" fill="var(--red)" stroke="var(--ink)" strokeWidth="2" />
    </Frame>
  );
}

function IllTV({ size = 140 }) {
  return (
    <Frame size={size}>
      <rect x="30" y="50" width="140" height="100" rx="10" fill="#7d6e60" stroke="var(--ink)" strokeWidth="3" />
      <rect x="45" y="65" width="110" height="70" rx="6" fill="#cfdcef" stroke="var(--ink)" strokeWidth="2.5" />
      {/* test pattern */}
      <rect x="45" y="65" width="22" height="70" fill="var(--red)" />
      <rect x="67" y="65" width="22" height="70" fill="var(--butter)" />
      <rect x="89" y="65" width="22" height="70" fill="var(--sage)" />
      <rect x="111" y="65" width="22" height="70" fill="var(--blue)" />
      <rect x="133" y="65" width="22" height="70" fill="var(--rose)" />
      {/* dial */}
      <circle cx="158" cy="100" r="6" fill="var(--ink)" />
      {/* legs */}
      <rect x="50" y="155" width="6" height="20" fill="var(--ink)" />
      <rect x="144" y="155" width="6" height="20" fill="var(--ink)" />
      {/* antenna */}
      <line x1="80" y1="50" x2="60" y2="20" stroke="var(--ink)" strokeWidth="3" />
      <line x1="120" y1="50" x2="140" y2="20" stroke="var(--ink)" strokeWidth="3" />
    </Frame>
  );
}

function IllLamp({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* lamp */}
      <rect x="80" y="100" width="40" height="50" fill="var(--ink)" />
      <polygon points="70,100 130,100 120,60 80,60" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <rect x="95" y="50" width="10" height="14" fill="var(--ink)" />
      <ellipse cx="100" cy="48" r="6" rx="6" ry="3" fill="var(--ink)" />
      {/* glow rays */}
      <line x1="60" y1="80" x2="40" y2="70" stroke="var(--butter)" strokeWidth="3" />
      <line x1="60" y1="100" x2="35" y2="100" stroke="var(--butter)" strokeWidth="3" />
      <line x1="140" y1="80" x2="160" y2="70" stroke="var(--butter)" strokeWidth="3" />
      <line x1="140" y1="100" x2="165" y2="100" stroke="var(--butter)" strokeWidth="3" />
      {/* base */}
      <rect x="60" y="148" width="80" height="10" fill="#7d6e60" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="3" y="158" width="194" height="39" fill="var(--bg-2)" />
    </Frame>
  );
}

function IllShakespeare({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* face */}
      <ellipse cx="100" cy="100" rx="34" ry="42" fill="#f5d4ad" stroke="var(--ink)" strokeWidth="3" />
      {/* hair */}
      <path d="M 66 80 Q 60 50 100 50 Q 140 50 134 80" fill="#7d4e2a" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      {/* moustache */}
      <path d="M 80 110 Q 100 116 120 110" stroke="var(--ink)" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* eyes */}
      <circle cx="86" cy="92" r="2.5" fill="var(--ink)" />
      <circle cx="114" cy="92" r="2.5" fill="var(--ink)" />
      {/* ruff collar */}
      <path d="M 60 140 Q 80 130 100 140 Q 120 130 140 140 L 140 155 L 60 155 Z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
      {/* shoulders */}
      <rect x="40" y="155" width="120" height="22" fill="var(--ink)" />
    </Frame>
  );
}

function IllOlympics({ size = 140 }) {
  return (
    <Frame size={size}>
      {/* podium */}
      <rect x="30" y="115" width="40" height="50" fill="var(--blue)" stroke="var(--ink)" strokeWidth="3" />
      <rect x="80" y="80" width="40" height="85" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" />
      <rect x="130" y="100" width="40" height="65" fill="var(--red)" stroke="var(--ink)" strokeWidth="3" />
      <text x="50" y="148" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800">2</text>
      <text x="100" y="130" textAnchor="middle" fill="var(--ink)" fontSize="28" fontWeight="800">1</text>
      <text x="150" y="142" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800">3</text>
      {/* stars */}
      <circle cx="40" cy="40" r="4" fill="var(--butter)" />
      <circle cx="160" cy="35" r="4" fill="var(--butter)" />
      <circle cx="100" cy="25" r="5" fill="var(--butter)" />
      <rect x="3" y="165" width="194" height="32" fill="var(--sage)" />
    </Frame>
  );
}

/* ===== map by key ===== */
const Illustrations = {
  bigben: IllBigBen, phone: IllPhone, guitar: IllGuitar, pencil: IllPencil,
  chips: IllChips, stones: IllStones, web: IllWeb, crown: IllCrown,
  tube: IllTube, raven: IllRaven, tea: IllTea, bagpipes: IllBagpipes,
  scroll: IllScroll, sheep: IllSheep, chocolate: IllChocolate, waves: IllWaves,
  microphone: IllMicrophone, finch: IllFinch, mower: IllMower, breakfast: IllBreakfast,
  volcano: IllVolcano, train: IllTrain, squirrel: IllSquirrel, computer: IllComputer,
  mountain: IllMountain, pie: IllPie, penicillin: IllPenicillin, lake: IllLake,
  trumpet: IllTrumpet, tv: IllTV, lamp: IllLamp, shakespeare: IllShakespeare,
  olympics: IllOlympics,
};

function Illustration({ name, size = 140 }) {
  const Comp = Illustrations[name];
  if (!Comp) return null;
  return <Comp size={size} />;
}

window.Illustration = Illustration;
window.Illustrations = Illustrations;

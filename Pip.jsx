/* Pip the Pigeon — geometric SVG mascot.
   Built from circles, rounded rects, and simple polygons (allowed). */

function Pip({ size = 110, mood = "happy", style = {} }) {
  // mood affects eye + beak slightly
  const winking = mood === "wink";
  const cheering = mood === "cheer";
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", ...style }}>
      {/* feet */}
      <g stroke="var(--ink)" strokeWidth="4" strokeLinecap="round">
        <line x1="85" y1="178" x2="85" y2="195" />
        <line x1="115" y1="178" x2="115" y2="195" />
        <line x1="80" y1="195" x2="92" y2="195" />
        <line x1="110" y1="195" x2="122" y2="195" />
      </g>

      {/* body */}
      <ellipse cx="100" cy="125" rx="55" ry="55" fill="#cfd8e6" stroke="var(--ink)" strokeWidth="5" />

      {/* belly highlight */}
      <ellipse cx="100" cy="140" rx="32" ry="28" fill="#eef2f7" />

      {/* wing */}
      <path d="M 60 110 Q 80 100 110 115 Q 120 145 95 158 Q 65 152 55 132 Z"
            fill="#9fb0c5" stroke="var(--ink)" strokeWidth="4" strokeLinejoin="round" />
      <path d="M 70 130 Q 88 130 100 142" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />

      {/* iridescent neck — tiny green/purple stripes */}
      <path d="M 75 78 Q 100 92 125 78 L 122 92 Q 100 104 78 92 Z"
            fill="var(--sage)" stroke="var(--ink)" strokeWidth="3" />

      {/* head */}
      <circle cx="100" cy="68" r="34" fill="#cfd8e6" stroke="var(--ink)" strokeWidth="5" />

      {/* eye */}
      {winking ? (
        <path d="M 88 64 Q 96 58 104 64" stroke="var(--ink)" strokeWidth="4" fill="none" strokeLinecap="round" />
      ) : (
        <>
          <circle cx="96" cy="64" r="6.5" fill="var(--ink)" />
          <circle cx="98" cy="62" r="2" fill="#fff" />
        </>
      )}

      {/* beak — orange triangle */}
      <polygon points="118,72 138,68 118,80" fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />

      {/* tiny crown for cheer */}
      {cheering && (
        <g transform="translate(78,28)">
          <polygon points="0,18 8,2 16,12 24,2 32,12 40,2 48,18"
                   fill="var(--butter)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="8" cy="6" r="2.5" fill="var(--red)" />
          <circle cx="40" cy="6" r="2.5" fill="var(--red)" />
        </g>
      )}
    </svg>
  );
}

/* Speech bubble around mascot text */
function PipSays({ children, size = 110, mood = "happy", side = "right" }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 14, flexDirection: side === "right" ? "row" : "row-reverse" }}>
      <div style={{ animation: "float 3s ease-in-out infinite" }}>
        <Pip size={size} mood={mood} />
      </div>
      <div style={{
        position: "relative",
        background: "var(--paper)",
        border: "3px solid var(--ink)",
        borderRadius: 22,
        padding: "16px 22px",
        boxShadow: "var(--shadow-sm)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--ink)",
        maxWidth: 520,
        lineHeight: 1.35
      }}>
        {children}
      </div>
    </div>
  );
}

window.Pip = Pip;
window.PipSays = PipSays;

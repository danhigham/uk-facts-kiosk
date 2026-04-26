/* ===== UK Map — uses real geographic SVG paths from uk-paths.js =====
   The source SVG has paths in raw projected units; a parent <g> applies the
   matrix transform to bring them into a 0-788 × 0-1000 viewBox.
   All five regions (England, Scotland, Wales, N. Ireland, Republic of
   Ireland) come from the same source, so they share one transform. */

const UK_TRANSFORM = "matrix(0.00021884 0 0 0.00021884 245.3672 1007.9446)";
const UK_SCALE = 0.00021884;

function UKMap({ highlight = [], shade = null, showCapitals = false }) {
  const hi = new Set(highlight);
  const data = window.UK_SVG?.countries || {};

  const isShaded = (id) => {
    if (!shade) return false;
    if (shade === "british-isles") return ["england","scotland","wales","nireland","ireland"].includes(id);
    if (shade === "great-britain") return ["england","scotland","wales"].includes(id);
    if (shade === "united-kingdom") return ["england","scotland","wales","nireland"].includes(id);
    return false;
  };

  const fillFor = (id) => {
    if (!hi.has(id)) return "var(--bg-2)";
    if (id === "england")  return "var(--red)";
    if (id === "scotland") return "var(--blue)";
    if (id === "wales")    return "var(--sage)";
    if (id === "nireland") return "var(--butter)";
    if (id === "ireland")  return "var(--rose)";
    return "var(--paper)";
  };

  // Capital pin positions in final viewBox coordinates (after transform applied)
  const capitals = [
    { id: "england",  name: "London",     x: 680, y: 870 },
    { id: "scotland", name: "Edinburgh",  x: 513, y: 465 },
    { id: "wales",    name: "Cardiff",    x: 500, y: 855 },
    { id: "nireland", name: "Belfast",    x: 370, y: 570 },
  ];

  // Country label positions (centroid-ish, tweaked to read well)
  const labels = [
    { id: "england",  name: "England",   x: 620, y: 770, size: 30, fillWhenHi: "#fff" },
    { id: "scotland", name: "Scotland",  x: 480, y: 390, size: 28, fillWhenHi: "#fff" },
    { id: "wales",    name: "Wales",     x: 470, y: 825, size: 25, fillWhenHi: "#fff" },
    { id: "nireland", name: "N. Ireland", x: 320, y: 575, size: 18, fillWhenHi: "#fff" },
    { id: "ireland",  name: "Ireland",   x: 270, y: 680, size: 30, fillWhenHi: "#fff" },
  ];

  // Render a country's paths inside the shared transform group.
  const renderCountryPaths = (id, fill, opts = {}) => {
    const paths = data[id];
    if (!paths) return null;
    return (
      <g transform={UK_TRANSFORM} style={{ transition: "fill 400ms ease" }}>
        {paths.map((d, i) => (
          <path key={`${id}-${i}`} d={d}
            fill={fill}
            stroke="var(--ink)"
            strokeWidth={opts.stroke || (4 / UK_SCALE)}
            strokeLinejoin="round"
            style={opts.style}
          />
        ))}
      </g>
    );
  };

  return (
    <svg viewBox="0 0 788 1000" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
      <defs>
        <pattern id="sea-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="1.2" fill="var(--ink)" opacity="0.08" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="788" height="1000" fill="url(#sea-dots)" />

      <g transform="translate(-50, 0)">

      {/* Shading: thick outline halo around the conceptual region */}
      {shade && (
        <g style={{ transition: "opacity 350ms ease" }} pointerEvents="none">
          {["england","scotland","wales","nireland","ireland"].map(id => isShaded(id) && (
            <g key={"shade-"+id} transform={UK_TRANSFORM}>
              {(data[id] || []).map((d, i) => (
                <path key={i} d={d}
                  fill="none"
                  stroke="#42fb1d"
                  strokeWidth={16 / UK_SCALE}
                  strokeLinejoin="round"
                  strokeOpacity="1"
                />
              ))}
            </g>
          ))}
        </g>
      )}

      {/* Real country paths — all five regions */}
      {renderCountryPaths("ireland",  fillFor("ireland"))}
      {renderCountryPaths("england",  fillFor("england"))}
      {renderCountryPaths("scotland", fillFor("scotland"))}
      {renderCountryPaths("wales",    fillFor("wales"))}
      {renderCountryPaths("nireland", fillFor("nireland"))}

      {/* labels */}
      <g style={{ fontFamily: "var(--body-font)", fontWeight: 800 }}>
        {labels.map(l => (
          <text key={l.id} x={l.x} y={l.y} textAnchor="middle"
            fontSize={l.size}
            fill={hi.has(l.id) ? l.fillWhenHi : "var(--ink-soft)"}
            style={{ paintOrder: "stroke", stroke: hi.has(l.id) ? "var(--ink)" : "transparent", strokeWidth: 3, strokeLinejoin: "round" }}
          >
            {l.name}
          </text>
        ))}
      </g>

      {/* capital pins */}
      {showCapitals && capitals.map(c => (
        <g key={c.name} className="pop-enter">
          <circle cx={c.x} cy={c.y} r="11" fill="var(--ink)" stroke="#fff" strokeWidth="3" />
          <circle cx={c.x} cy={c.y} r="4" fill="#fff" />
          <g transform={`translate(${c.x + 16}, ${c.y - 8})`}>
            <rect x="0" y="-20" rx="6" ry="6"
                  width={c.name.length * 11 + 22} height="30"
                  fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
            <text x="9" y="3" fontSize="20" fontWeight="800" fill="var(--ink)">{c.name}</text>
          </g>
        </g>
      ))}

      </g>
    </svg>
  );
}

window.UKMap = UKMap;

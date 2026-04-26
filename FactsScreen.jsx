/* Facts shuffler — random fact card with shuffle/category filter */

function FactsScreen({ onHome, mascotOn, density }) {
  const all = window.UK_DATA.facts;
  const cats = ["All", ...Array.from(new Set(all.map(f => f.cat)))];
  const [cat, setCat] = React.useState("All");
  const [idx, setIdx] = React.useState(0);
  const [seen, setSeen] = React.useState(new Set([0]));
  const [flipping, setFlipping] = React.useState(false);

  const pool = cat === "All" ? all : all.filter(f => f.cat === cat);
  const fact = pool[idx % pool.length];

  const SPIN_MS = 850;
  function shuffle() {
    if (flipping) return;
    setFlipping(true);
    // swap content while card is edge-on / mid-spin so the change is hidden
    setTimeout(() => {
      let next;
      do { next = Math.floor(Math.random() * pool.length); }
      while (pool.length > 1 && next === idx % pool.length);
      setIdx(next);
      setSeen(s => new Set([...s, next]));
    }, SPIN_MS / 2);
    setTimeout(() => setFlipping(false), SPIN_MS);
  }

  React.useEffect(() => { setIdx(0); }, [cat]);

  const catColor = c => ({
    Place: "var(--blue)",
    Invention: "var(--red)",
    Music: "var(--sage)",
    People: "var(--butter)",
    Food: "var(--rose)",
    Animal: "var(--sage)",
  }[c] || "var(--ink)");

  return (
    <div style={{ width: "100%", height: "100%", padding: "40px 60px", display: "flex", flexDirection: "column" }}>
      <ScreenHeader title="Did You Know?" onHome={onHome} accent="var(--blue)" />

      {/* category chips */}
      <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
        {cats.map(c => (
          <button key={c} onClick={() => setCat(c)} style={{
            padding: "10px 20px",
            border: "3px solid var(--ink)",
            borderRadius: 999,
            background: cat === c ? "var(--ink)" : "var(--paper)",
            color: cat === c ? "var(--paper)" : "var(--ink)",
            fontWeight: 800,
            fontSize: 20,
            cursor: "pointer",
            fontFamily: "var(--body-font)",
            boxShadow: cat === c ? "none" : "var(--shadow-sm)"
          }}>
            {c}
          </button>
        ))}
      </div>

      {/* main fact card */}
      <div style={{
        flex: 1,
        marginTop: 26,
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 30,
        perspective: 1600
      }}>
        <div className={"k-card" + (flipping ? " fact-card-spin" : "")} style={{
          background: "var(--paper)",
          padding: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}>
          <div className="fact-card-contents" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {/* header band */}
            <div style={{
              background: catColor(fact.cat),
              color: ["Food", "People"].includes(fact.cat) ? "var(--ink)" : "#fff",
              padding: "22px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "3px solid var(--ink)"
            }}>
              <div style={{ fontWeight: 800, fontSize: 26, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {fact.cat}
              </div>
            </div>

            {/* body */}
            <div style={{ padding: "32px 40px", display: "flex", gap: 28, flex: 1, alignItems: "stretch" }}>
              <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                <Illustration name={fact.ill} size={220} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
                <div style={{
                  fontFamily: "var(--display-font)",
                  fontWeight: 800,
                  fontSize: 48,
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em"
                }}>{fact.title}</div>

                <div style={{ fontSize: 24, lineHeight: 1.4, color: "var(--ink-soft)" }}>
                  {fact.body}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* side: shuffle controls + mascot */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {mascotOn && (
            <div className="k-card" style={{ background: "var(--bg-2)", padding: 18 }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
                <div style={{ animation: "float 3s ease-in-out infinite", flexShrink: 0 }}>
                  <Pip size={90} mood="wink" />
                </div>
                <div style={{
                  background: "var(--paper)",
                  border: "3px solid var(--ink)",
                  borderRadius: 18,
                  padding: "12px 16px",
                  boxShadow: "var(--shadow-sm)",
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  flex: 1
                }}>
                  Spin for a fresh fact, or filter by category!
                </div>
              </div>
            </div>
          )}

          <button className="k-btn primary" onClick={shuffle} style={{
            fontSize: 38,
            padding: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flex: 1
          }}>
            <span style={{ fontSize: 56 }}>🎲</span>
            <span>Shuffle!</span>
          </button>

          <div className="k-card" style={{ padding: 16, background: "var(--paper)" }}>
            <div style={{ fontSize: 13, fontFamily: "ui-monospace, Menlo, monospace", color: "var(--ink-soft)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              your collection
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, whiteSpace: "nowrap" }}>
              <div style={{ fontFamily: "var(--display-font)", fontWeight: 800, fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1 }}>
                {seen.size}
              </div>
              <div style={{ fontSize: 16, color: "var(--ink-soft)" }}>
                of {pool.length} seen
              </div>
            </div>
            <div style={{
              marginTop: 12, height: 12, background: "var(--bg-2)",
              borderRadius: 999, border: "2px solid var(--ink)", overflow: "hidden"
            }}>
              <div style={{
                width: `${Math.min(100, (seen.size / pool.length) * 100)}%`,
                height: "100%", background: "var(--sage)",
                transition: "width 400ms ease"
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.FactsScreen = FactsScreen;

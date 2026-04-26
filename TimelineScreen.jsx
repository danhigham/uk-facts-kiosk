/* Timeline screen — horizontal scroll-through of British history highlights */

function TimelineScreen({ onHome, mascotOn }) {
  const items = window.UK_DATA.timeline;
  const [i, setI] = React.useState(0);
  const item = items[i];

  return (
    <div style={{ width: "100%", height: "100%", padding: "40px 60px", display: "flex", flexDirection: "column" }}>
      <ScreenHeader title="Time Travel" onHome={onHome} accent="var(--sage)" />

      {/* big year + title */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 50, flex: 1, marginTop: 30 }}>
        <div key={"year-" + i} className="fade-enter" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="k-pill" style={{ background: "var(--red)", alignSelf: "flex-start" }}>
            event {i + 1} of {items.length}
          </div>
          <div style={{
            fontFamily: "var(--display-font)",
            fontWeight: 800,
            fontSize: 156,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginTop: 16,
            color: "var(--ink)"
          }}>
            {item.year}
          </div>
          <div style={{
            fontFamily: "var(--display-font)",
            fontWeight: 700,
            fontSize: 52,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginTop: 14,
            color: "var(--red)"
          }}>
            {item.title}
          </div>
        </div>

        <div key={"body-" + i} className="fade-enter" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ flex: 1, minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Illustration name={item.ill || "scroll"} size={300} />
          </div>
          {mascotOn ? (
            <PipSays size={110}>{item.body}</PipSays>
          ) : (
            <div className="k-card" style={{ padding: 24, fontSize: 24, lineHeight: 1.4 }}>
              {item.body}
            </div>
          )}
        </div>
      </div>

      {/* horizontal mini timeline */}
      <div style={{ marginTop: 30 }}>
        <div style={{
          position: "relative",
          height: 70,
          padding: "0 20px",
        }}>
          {/* line */}
          <div style={{
            position: "absolute",
            left: 30, right: 30, top: 35,
            height: 4, background: "var(--ink)",
            borderRadius: 4
          }} />
          {/* notches */}
          <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%"
          }}>
            {items.map((it, n) => (
              <button key={n} onClick={() => setI(n)}
                title={it.year}
                style={{
                  width: n === i ? 36 : 22,
                  height: n === i ? 36 : 22,
                  borderRadius: 999,
                  background: n === i ? "var(--red)" : (n < i ? "var(--ink)" : "var(--paper)"),
                  border: "3px solid var(--ink)",
                  cursor: "pointer", padding: 0,
                  boxShadow: n === i ? "var(--shadow-sm)" : "none",
                  transition: "all 200ms ease",
                  position: "relative"
                }}>
                {n === i && (
                  <div style={{
                    position: "absolute",
                    top: -28, left: "50%", transform: "translateX(-50%)",
                    fontFamily: "ui-monospace, Menlo, monospace",
                    fontSize: 13, color: "var(--ink-soft)", whiteSpace: "nowrap"
                  }}>{it.year}</div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 18 }}>
          <button className="k-btn" disabled={i === 0} onClick={() => setI(Math.max(0, i - 1))}
            style={{ flex: 1, opacity: i === 0 ? 0.4 : 1 }}>← Earlier</button>
          <button className="k-btn primary" disabled={i >= items.length - 1}
            onClick={() => setI(Math.min(items.length - 1, i + 1))}
            style={{ flex: 1, opacity: i >= items.length - 1 ? 0.4 : 1 }}>Later →</button>
        </div>
      </div>
    </div>
  );
}

window.TimelineScreen = TimelineScreen;

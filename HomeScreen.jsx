/* Home screen — mode launcher */

function HomeScreen({ onPick, mascotOn }) {
  const tiles = [
    { id: "explainer", label: "What is the UK?",   sub: "Tour the islands",       color: "primary", emoji: "🗺",  big: true },
    { id: "facts",     label: "Did You Know?",     sub: "Pull a random fact",     color: "blue",    emoji: "✨" },
    { id: "quiz",      label: "Quiz Time!",        sub: "Test what you know",     color: "butter",  emoji: "❓" },
    { id: "timeline",  label: "Time Travel",       sub: "5,000 years in 60 secs", sub2: true, color: "sage", emoji: "⏳" },
  ];

  return (
    <div style={{ width: "100%", height: "100%", padding: "60px 80px", display: "flex", flexDirection: "column" }}>
      {/* top strip */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className="k-pill">School Edition · Tap a tile</div>
        <div style={{ display: "flex", gap: 6 }}>
          <Stripe c="var(--red)" />
          <Stripe c="var(--paper)" />
          <Stripe c="var(--blue)" />
        </div>
      </div>

      {/* hero */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 30 }}>
        <div>
          <div style={{ fontFamily: "var(--display-font)", fontWeight: 800, fontSize: 132, lineHeight: 0.9, color: "var(--ink)", letterSpacing: "-0.04em" }}>
            Hello,<br />Britain!
          </div>
          <div style={{ fontSize: 28, marginTop: 18, color: "var(--ink-soft)", maxWidth: 640 }}>
            A teeny tour of <b>the UK</b>, <b>Great Britain</b> and <b>the British Isles</b> — plus
            a giant pile of brilliantly weird facts.
          </div>
        </div>

        {mascotOn && (
          <div style={{ marginRight: 30, marginBottom: -10 }}>
            <Pip size={210} mood="cheer" />
          </div>
        )}
      </div>

      {/* tiles */}
      <div style={{
        marginTop: 50,
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: 24,
        flex: 1
      }}>
        {tiles.map((t, i) => (
          <button
            key={t.id}
            onClick={() => onPick(t.id)}
            className={`k-card`}
            style={{
              background: t.color === "primary" ? "var(--red)" :
                          t.color === "blue"    ? "var(--blue)" :
                          t.color === "butter"  ? "var(--butter)" :
                          t.color === "sage"    ? "var(--sage)" : "var(--paper)",
              color: t.color === "butter" ? "var(--ink)" : "#fff",
              cursor: "pointer",
              padding: "28px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              textAlign: "left",
              fontFamily: "var(--body-font)",
              animation: `slideUp 500ms ${i * 80}ms ease both`,
              transition: "transform 120ms ease",
              border: "3px solid var(--ink)"
            }}
            onMouseDown={e => e.currentTarget.style.transform = "translateY(4px)"}
            onMouseUp={e => e.currentTarget.style.transform = ""}
            onMouseLeave={e => e.currentTarget.style.transform = ""}
          >
            <div style={{ fontSize: t.big ? 92 : 56, lineHeight: 1 }}>{t.emoji}</div>
            <div style={{ width: "100%" }}>
              <div style={{
                fontFamily: "var(--display-font)",
                fontWeight: 800,
                fontSize: t.big ? 52 : 30,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                textWrap: "balance",
                marginBottom: 10
              }}>{t.label}</div>
              <div style={{ fontSize: 18, opacity: 0.92, lineHeight: 1.3 }}>{t.sub}</div>
            </div>
          </button>
        ))}
      </div>

      {/* footer credits */}
      <div style={{ marginTop: 30, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 16, color: "var(--ink-soft)" }}>
        <div>For ages 5–8 · Touch to begin</div>
        <div style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>kiosk · v1 · classroom edition</div>
      </div>
    </div>
  );
}

function Stripe({ c }) {
  return <div style={{ width: 60, height: 30, background: c, border: "3px solid var(--ink)", borderRadius: 8 }} />;
}

window.HomeScreen = HomeScreen;

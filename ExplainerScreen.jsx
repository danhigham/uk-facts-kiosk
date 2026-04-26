/* Explainer — step-through the UK / GB / British Isles diagram */

function ExplainerScreen({ onHome, mascotOn }) {
  const steps = window.UK_DATA.explainerSteps;
  const [i, setI] = React.useState(0);
  const step = steps[i];

  return (
    <div style={{ width: "100%", height: "100%", padding: "40px 60px", display: "flex", flexDirection: "column" }}>
      <ScreenHeader title="What's what?" onHome={onHome} accent="var(--red)" />

      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 50, flex: 1, marginTop: 24 }}>
        {/* LEFT — map */}
        <div className="k-card" style={{
          background: "var(--paper)",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="k-pill" style={{
              background: stepColor(step.shade)
            }}>{step.label}</div>
            <div style={{ fontSize: 18, color: "var(--ink-soft)", fontFamily: "ui-monospace, Menlo, monospace" }}>
              step {i + 1} / {steps.length}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div key={i} className="fade-enter" style={{ width: "100%", height: "100%" }}>
              <UKMap
                highlight={step.highlight}
                shade={step.shade}
                showCapitals={step.showCapitals}
              />
            </div>
          </div>
        </div>

        {/* RIGHT — narrator + controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div key={i} className="fade-enter">
            <div style={{
              fontFamily: "var(--display-font)",
              fontWeight: 800,
              fontSize: 64,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--ink)"
            }}>
              {step.title}
            </div>
          </div>

          {mascotOn ? (
            <div key={"narr-" + i} className="fade-enter">
              <PipSays mood={i === steps.length - 1 ? "cheer" : "happy"} size={130}>
                {step.narrator}
              </PipSays>
            </div>
          ) : (
            <div key={"narr-" + i} className="fade-enter k-card" style={{ padding: 24, fontSize: 24, lineHeight: 1.4 }}>
              {step.narrator}
            </div>
          )}

          {/* legend with venn-ish chips */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: "auto" }}>
            <LegendChip color="var(--red)" label="England" active={step.highlight.includes("england")} />
            <LegendChip color="var(--blue)" label="Scotland" active={step.highlight.includes("scotland")} />
            <LegendChip color="var(--sage)" label="Wales" active={step.highlight.includes("wales")} />
            <LegendChip color="var(--butter)" label="Northern Ireland" active={step.highlight.includes("nireland")} ink />
            <LegendChip color="var(--rose)" label="Republic of Ireland (separate country!)" active={step.highlight.includes("ireland")} ink />
          </div>

          {/* controls */}
          <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
            <button className="k-btn" disabled={i === 0} onClick={() => setI(i - 1)}
              style={{ flex: 1, opacity: i === 0 ? 0.4 : 1 }}>← Back</button>
            {i < steps.length - 1 ? (
              <button className="k-btn primary" onClick={() => setI(i + 1)} style={{ flex: 2 }}>
                Next →
              </button>
            ) : (
              <button className="k-btn sage" onClick={onHome} style={{ flex: 2 }}>
                Done! 🎉
              </button>
            )}
          </div>

          {/* dot indicator */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            {steps.map((_, n) => (
              <button key={n} onClick={() => setI(n)}
                style={{
                  width: n === i ? 32 : 14, height: 14, borderRadius: 999,
                  background: n === i ? "var(--ink)" : "var(--bg-2)",
                  border: "2px solid var(--ink)", cursor: "pointer", padding: 0,
                  transition: "all 200ms ease"
                }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function stepColor(shade) {
  if (shade === "british-isles") return "var(--rose)";
  if (shade === "great-britain") return "var(--sage)";
  if (shade === "united-kingdom") return "var(--red)";
  return "var(--ink)";
}

function LegendChip({ color, label, active, ink }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 14,
      padding: "10px 16px",
      background: active ? color : "transparent",
      color: active ? (ink ? "var(--ink)" : "#fff") : "var(--ink-soft)",
      border: "3px solid var(--ink)",
      borderRadius: 999,
      fontWeight: 700,
      fontSize: 20,
      opacity: active ? 1 : 0.55,
      transition: "all 300ms ease"
    }}>
      <div style={{ width: 22, height: 22, background: color, border: "2px solid var(--ink)", borderRadius: 6 }} />
      {label}
    </div>
  );
}

function ScreenHeader({ title, onHome, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
      <button className="k-btn" onClick={onHome} style={{ fontSize: 20, padding: "12px 20px", whiteSpace: "nowrap", flexShrink: 0 }}>
        ← Home
      </button>
      <div style={{
        fontFamily: "var(--display-font)",
        fontWeight: 800,
        fontSize: 30,
        letterSpacing: "-0.01em",
        background: accent,
        color: "#fff",
        padding: "10px 22px",
        border: "3px solid var(--ink)",
        borderRadius: 14,
        boxShadow: "var(--shadow-sm)",
        whiteSpace: "nowrap",
        lineHeight: 1.1
      }}>
        {title}
      </div>
      <div style={{ width: 130, flexShrink: 0 }} />
    </div>
  );
}

window.ExplainerScreen = ExplainerScreen;
window.ScreenHeader = ScreenHeader;

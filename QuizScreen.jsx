/* Quiz mini-game */

function QuizScreen({ onHome, mascotOn }) {
  const Qs = window.UK_DATA.quiz;
  const [i, setI] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const q = Qs[i];

  function pick(idx) {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore(s => s + 1);
  }
  function next() {
    if (i + 1 >= Qs.length) setDone(true);
    else { setI(i + 1); setPicked(null); }
  }
  function restart() {
    setI(0); setPicked(null); setScore(0); setDone(false);
  }

  if (done) return <QuizDone score={score} total={Qs.length} onHome={onHome} onRestart={restart} mascotOn={mascotOn} />;

  return (
    <div style={{ width: "100%", height: "100%", padding: "40px 60px", display: "flex", flexDirection: "column" }}>
      <ScreenHeader title="Quiz Time!" onHome={onHome} accent="var(--butter)" />

      {/* progress */}
      <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 24 }}>
        <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 18, color: "var(--ink-soft)", minWidth: 80 }}>
          {String(i+1).padStart(2,"0")} / {String(Qs.length).padStart(2,"0")}
        </div>
        <div style={{ flex: 1, height: 16, background: "var(--bg-2)", border: "3px solid var(--ink)", borderRadius: 999, overflow: "hidden" }}>
          <div style={{
            width: `${((i + (picked !== null ? 1 : 0)) / Qs.length) * 100}%`,
            height: "100%", background: "var(--red)", transition: "width 400ms ease"
          }} />
        </div>
        <div className="k-pill" style={{ background: "var(--sage)" }}>
          ⭐ {score}
        </div>
      </div>

      {/* question card */}
      <div className="k-card" key={i} style={{
        background: "var(--paper)",
        padding: "44px 50px",
        marginTop: 26,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 30,
        animation: "slideUp 350ms ease both"
      }}>
        <div style={{
          fontFamily: "var(--display-font)",
          fontWeight: 800,
          fontSize: 60,
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          textWrap: "pretty"
        }}>
          {q.q}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, flex: 1 }}>
          {q.options.map((opt, idx) => {
            const isPicked = picked === idx;
            const isCorrect = idx === q.answer;
            const reveal = picked !== null;
            let bg = "var(--paper)", color = "var(--ink)";
            if (reveal && isCorrect) { bg = "var(--sage)"; color = "#fff"; }
            else if (reveal && isPicked && !isCorrect) { bg = "var(--red)"; color = "#fff"; }
            return (
              <button key={idx} onClick={() => pick(idx)}
                disabled={picked !== null}
                style={{
                  background: bg,
                  color,
                  border: "3px solid var(--ink)",
                  borderRadius: 18,
                  padding: "26px 30px",
                  fontFamily: "var(--body-font)",
                  fontWeight: 700,
                  fontSize: 28,
                  textAlign: "left",
                  cursor: picked === null ? "pointer" : "default",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  transition: "all 200ms ease",
                  opacity: reveal && !isPicked && !isCorrect ? 0.5 : 1
                }}>
                <span style={{
                  width: 44, height: 44, borderRadius: 999,
                  background: reveal && isCorrect ? "#fff" : reveal && isPicked ? "#fff" : "var(--ink)",
                  color: reveal && (isCorrect || isPicked) ? "var(--ink)" : "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 22, flexShrink: 0
                }}>{["A","B","C","D"][idx]}</span>
                {opt}
                {reveal && isCorrect && <span style={{ marginLeft: "auto", fontSize: 36 }}>✓</span>}
                {reveal && isPicked && !isCorrect && <span style={{ marginLeft: "auto", fontSize: 36 }}>✗</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* footer: explanation + next */}
      <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 24, minHeight: 110 }}>
        {picked !== null ? (
          <>
            <div className="fade-enter" style={{ flex: 1, display: "flex", alignItems: "center", gap: 18 }}>
              {mascotOn && <Pip size={96} mood={picked === q.answer ? "cheer" : "wink"} />}
              <div className="k-card" style={{
                padding: "18px 24px",
                background: picked === q.answer ? "var(--sage)" : "var(--rose)",
                color: "var(--ink)",
                fontSize: 22,
                fontWeight: 600,
                lineHeight: 1.35,
                flex: 1
              }}>
                <b>{picked === q.answer ? "Spot on! " : "Nearly! "}</b>
                {q.explain}
              </div>
            </div>
            <button className="k-btn primary" onClick={next} style={{ fontSize: 30, padding: "22px 36px" }}>
              {i + 1 >= Qs.length ? "See score →" : "Next →"}
            </button>
          </>
        ) : (
          <div style={{ flex: 1, color: "var(--ink-soft)", fontSize: 22 }}>
            👆 Tap an answer
          </div>
        )}
      </div>
    </div>
  );
}

function QuizDone({ score, total, onHome, onRestart, mascotOn }) {
  const pct = score / total;
  const verdict = pct === 1 ? "PERFECT!" : pct >= 0.7 ? "Brilliant!" : pct >= 0.4 ? "Nice try!" : "Have another go!";
  return (
    <div style={{ width: "100%", height: "100%", padding: 60, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30 }}>
      {mascotOn && <Pip size={220} mood="cheer" />}
      <div style={{ fontFamily: "var(--display-font)", fontWeight: 800, fontSize: 120, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
        {verdict}
      </div>
      <div className="k-card" style={{ padding: "30px 60px", background: "var(--butter)" }}>
        <div style={{ fontSize: 32, fontWeight: 700 }}>
          You scored <b style={{ fontSize: 56, fontFamily: "var(--display-font)" }}>{score}</b> out of {total}
        </div>
      </div>
      <div style={{ display: "flex", gap: 18, marginTop: 20 }}>
        <button className="k-btn" onClick={onHome}>← Home</button>
        <button className="k-btn primary" onClick={onRestart}>Play again 🔁</button>
      </div>
    </div>
  );
}

window.QuizScreen = QuizScreen;

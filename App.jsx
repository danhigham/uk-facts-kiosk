/* Main app shell */

const VALID_SCREENS = ["home", "explainer", "facts", "quiz", "timeline"];
const screenFromHash = () => {
  const h = window.location.hash.replace(/^#/, "");
  return VALID_SCREENS.includes(h) ? h : "home";
};

function App() {
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const [screen, _setScreen] = React.useState(screenFromHash);

  const setScreen = (s) => {
    _setScreen(s);
    window.location.hash = s;
  };

  React.useEffect(() => {
    const onHashChange = () => _setScreen(screenFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Apply tweaks to <html> element
  React.useEffect(() => {
    document.documentElement.dataset.style = tweaks.style;
    document.documentElement.dataset.palette = tweaks.palette;
    document.documentElement.dataset.density = tweaks.density;
  }, [tweaks.style, tweaks.palette, tweaks.density]);

  const screens = {
    home:      <HomeScreen      onPick={setScreen} mascotOn={tweaks.mascot} />,
    explainer: <ExplainerScreen onHome={() => setScreen("home")} mascotOn={tweaks.mascot} />,
    facts:     <FactsScreen     onHome={() => setScreen("home")} mascotOn={tweaks.mascot} density={tweaks.density} />,
    quiz:      <QuizScreen      onHome={() => setScreen("home")} mascotOn={tweaks.mascot} />,
    timeline:  <TimelineScreen  onHome={() => setScreen("home")} mascotOn={tweaks.mascot} />,
  };

  return (
    <>
      <div key={screen} style={{ width: "100%", height: "100%", animation: "slideUp 350ms ease both" }}>
        {screens[screen]}
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Visual style" />
        <TweakRadio label="Style" value={tweaks.style}
          options={["storybook", "cutout", "poster"]}
          onChange={v => setTweak("style", v)} />

        <TweakSection label="Colour palette" />
        <TweakRadio label="Palette" value={tweaks.palette}
          options={["heritage", "primary", "seaside", "mono"]}
          onChange={v => setTweak("palette", v)} />

        <TweakSection label="Mascot" />
        <TweakToggle label="Pip the Pigeon" value={tweaks.mascot}
          onChange={v => setTweak("mascot", v)} />

        <TweakSection label="Density" />
        <TweakRadio label="Density" value={tweaks.density}
          options={["cozy", "default", "dense"]}
          onChange={v => setTweak("density", v)} />
      </TweaksPanel>
    </>
  );
}

window.App = App;

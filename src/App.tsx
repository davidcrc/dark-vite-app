import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useThemeStore } from "./stores/theme";
import { useEffect } from "react";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const customTheme = useThemeStore((state) => state.custom);
  const switchTheme = useThemeStore((state) => state.switchTheme);
  const setCustomTheme = useThemeStore((state) => state.setCustomTheme);

  const handleChangeDarkTheme = () => {
    setCustomTheme("dark");
  };

  const handleChangeLightTheme = () => {
    setCustomTheme("light");
  };

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function handleThemeChange() {
    const preferredTheme = prefersDarkScheme.matches ? "dark" : "light";
    switchTheme(preferredTheme);
  }

  if (!customTheme) {
    prefersDarkScheme.addEventListener("change", handleThemeChange);
  }

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col justify-center h-screen w-full dark:bg-slate-600">
      <div className="mx-auto">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleChangeDarkTheme}
              className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-white"
            >
              Set to Dark theme
            </button>
            <button
              onClick={handleChangeLightTheme}
              className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-white"
            >
              Set to Light theme
            </button>
          </div>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;

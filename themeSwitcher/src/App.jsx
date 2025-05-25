import { useState, useEffect } from "react";

import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/Themebtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("Light");

  const DarkTheme = () => {
    setThemeMode("dark");
  };
  const LightTheme = () => {
    setThemeMode("Light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("Light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider
        value={{
          themeMode,
          DarkTheme,
          LightTheme,
        }}
      >
        <h1 className="py-10 text-3xl text-center text-white font-bold bg-gray-700 w-full">
          Hello Theme Changer and switcher Project
        </h1>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

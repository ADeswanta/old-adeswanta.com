import { useState, useEffect } from "react";

import I from "./Icon"

export default function ThemeSwitcher() {
  const [mode, setMode] = useState(localStorage.getItem('color-scheme') ?? "auto");

  const root = document.querySelector(':root');

  let detectTheme = event => {
    root.classList.remove("dark");
    root.classList.remove("invert");

    root.classList.add(event.matches ? "dark" : "light");
  }

  const updateTheme = () => {
    root.classList.remove("dark");
    root.classList.remove("invert");

    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', detectTheme);

    if (mode == "auto") {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme);
      detectTheme(window.matchMedia('(prefers-color-scheme: dark)'));
    } else if (mode == "invert") {
      root.classList.add("invert");
    } else if (mode == "dark") {
      root.classList.add("dark");
    }
  }

  const toggle = (mode) => {
    let res = isModeSet(mode) ? "auto" : mode;
    localStorage.setItem('color-scheme', res);
    setMode(res);
  }
  const isModeSet = (_) => {
    return _ == mode;
  }

  console.log("mode: " + mode);
  console.log("update!");

  updateTheme();

  return <span className="theme-switcher">
    <button className={ isModeSet("light") ? "active" : ""} onClick={() => toggle("light")}><I>wb_sunny</I></button>
    <button className={ isModeSet("invert") ? "active" : ""} onClick={() => toggle("invert")}><I>contrast</I></button>
    <button className={ isModeSet("dark") ? "active" : ""} onClick={() => toggle("dark")}><I>dark_mode</I></button>
  </span>
}

import I from "./Icon"

export default function ThemeSwitcher() {
  return <span className="theme-switcher">
    <button className="active"><I>wb_sunny</I></button>
    <button><I>contrast</I></button>
    <button><I>dark_mode</I></button>
  </span>
}

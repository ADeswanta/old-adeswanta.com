export default function Icon({ children, className }) {
  return <i className={[className, "material-symbols"].join(" ")}>{ children }</i>
}

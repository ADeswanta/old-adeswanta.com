import { jsx } from "react/jsx-runtime";
function Icon({ children, className }) {
  return /* @__PURE__ */ jsx("i", { className: [className, "material-symbols"].join(" "), children });
}
export {
  Icon as I
};

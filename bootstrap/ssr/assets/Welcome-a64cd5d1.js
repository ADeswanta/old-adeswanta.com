import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { I as Icon } from "./Icon-a2556431.js";
function Welcome() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsxs("section", { id: "coming-soon", className: "center full", children: [
      /* @__PURE__ */ jsx("h1", { children: "More content coming soon." }),
      /* @__PURE__ */ jsx("p", { children: "This website still has a few contents here. Stay tune or more content coming soon." })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "donation", className: "center", children: [
      /* @__PURE__ */ jsx("h3", { children: "Support Me" }),
      /* @__PURE__ */ jsx("p", { children: "Donation makes this website more evolved." }),
      /* @__PURE__ */ jsx("a", { href: "https://ko-fi.com/B0B8CDJ3M", target: "_blank", children: /* @__PURE__ */ jsxs("button", { className: "filled", children: [
        /* @__PURE__ */ jsx(Icon, { children: "volunteer_activism" }),
        "Donate"
      ] }) })
    ] })
  ] });
}
export {
  Welcome as default
};

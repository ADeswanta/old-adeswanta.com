import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { I as Icon } from "./Icon-a2556431.js";
function WIP() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Work In Progress" }),
    /* @__PURE__ */ jsxs("section", { id: "wip", className: "center", children: [
      /* @__PURE__ */ jsx("h1", { children: "WIP" }),
      /* @__PURE__ */ jsx("p", { children: "This page isn't ready yet." })
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
  WIP as default
};

import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Head, createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function Icon({ children, className }) {
  return /* @__PURE__ */ jsx("i", { className: [className, "material-symbols"].join(" "), children });
}
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
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WIP
}, Symbol.toStringTag, { value: "Module" }));
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
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/WIP.jsx": __vite_glob_0_0, "./Pages/Welcome.jsx": __vite_glob_0_1 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);

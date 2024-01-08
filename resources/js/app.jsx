import './bootstrap';
import { createInertiaApp, router } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'
import Layout from './Layout';
import charming from './Plugins/charming';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

let setLettering = () => {
  document.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(el => {
    let textNodes = Array.from(el.childNodes).filter((node) => { return node.nodeName == "#text" })
    // console.log("lettering = " + res.length)
    // console.log(el);
    textNodes.forEach((node) => {
      charming(node, {
        split: (str) => str.split(/(\s+)/),
        setClassName: () => "textHover"
      });
    })
  })
}

router.on('start', (event) => {
  console.log(`router.on('start'): Starting a visit to ${event.detail.visit.url}`)
})
document.addEventListener('DOMContentLoaded', (event) => {
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        // console.log(mutation.type);
          if (mutation.type === 'childList') {
            setLettering();
          }
      });
  }).observe(document.body, { attributes: true, childList: true, characterData: true, subtree: true });
})

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = (page => <Layout children={page} />)
    return page
  },

  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props}/>);
    console.log("onSetup");
  },
  progress: {
    color: '#157AA6',
  }
})

import './bootstrap';

import charming from './charming';

let setLettering = () => {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(el => {
        let textNodes = Array.from(el.childNodes).filter((node) => { return node.nodeName == "#text" })
        textNodes.forEach((node) => {
            charming(node, {
                split: (str) => str.split(/(\s+)/),
                setClassName: () => "textHover"
            });
        })
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                setLettering();
            }
        });
    }).observe(document.body, { attributes: true, childList: true, characterData: true, subtree: true });
})

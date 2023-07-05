// ==UserScript==
// @name         HelloWorld_banner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       wesley chen
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';
    let banner = $("<div id='hello_banner'><p style='color: red;'>Hello Tampermonkey!</p></div>");
    banner.css({
        "display": "flex",
        "align-items": "center",
        "top": "0px",
        "background-color": "#FFFFFF",
        "width": "100%",
        "height": "30px",
        "border": "2px solid red",
        // https://stackoverflow.com/questions/41487020/div-width100-will-over-the-browser-window-border
        "box-sizing": "border-box",
        "z-index": "10000",
    });
    $('body').prepend(banner);
})();

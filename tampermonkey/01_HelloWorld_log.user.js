// ==UserScript==
// @name         HelloWorld_log
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       wesley chen
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';
    GM_log("Hello Tampermonkey!");
    console.log("Hello Tampermonkey, too!");
})();
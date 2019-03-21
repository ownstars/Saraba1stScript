// ==UserScript==
// @name         Non-blocking S1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Notice ad-block friendly
// @author       ownstars
// @match        https://bbs.saraba1st.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    window.alert = function(msg) {
        var box = document.createElement('div');

        box.id = "nonblockingpop";
        box.innerHTML=msg;
        box.style.float = 'right';
        box.style.position = 'fixed';
        box.style.background = '#d7dec7 none repeat scroll 0% 0%';
        box.style.opacity = '0.85';
        box.style.padding = '10px';
        box.style.top = '3em';
        box.style.right = '1em';

        document.body.appendChild(box);

        setTimeout(function(){
            var box = document.getElementById('nonblockingpop');
            box.parentElement.removeChild(box);
        }, 2000);

    }
})();
// ==UserScript==
// @name         Secure Facebook
// @namespace    https://www.facebook.com/*
// @include      https://www.facebook.com/*
// @run-at       document-start
// @version      0.1
// @description  Automatically redirect www.facebook.com to secure.facebook.com
// @author       Ralph Ocdol
// @grant        none
// ==/UserScript==

(() => {
    'use strict';
    const defaultUrls = ['www.facebook.com', 'facebook.com'];
    if(!defaultUrls.includes(location.host)) {
        location.replace(`https://secure.facebook.com${location.pathname}${location.search}`);
    } else {
        let thisLink;
        const links = document.evaluate("//a[@href]",
                                  document,
                                  null,
                                  XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                                  null);
        links.map((link, index) => {
            thisLink = link.snapshotItem(index);

            thisLink.href = thisLink.href.replace('https://www.facebook.com/', 'https://secure.facebook.com/');
        });
    }
})();

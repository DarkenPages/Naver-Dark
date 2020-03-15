// ==UserScript==
// @name         Dark mode for NAVER
// @namespace    naverdark
// @version      1.0.15
// @description  Seamless and gorgeous Dark mode for NAVER
// @author       OrigamiDream
// @downloadURL  https://raw.githubusercontent.com/DarkenPages/Naver-Dark/master/Naver%20Dark.user.js
// @updateURL    https://raw.githubusercontent.com/DarkenPages/Naver-Dark/master/Naver%20Dark.user.js
// homepageURL   https://github.com/DarkenPages/Naver-Dark
// @include      *
// @grant        none
// ==/UserScript==

function applyFonts() {
    const fonts = document.querySelectorAll('#main-area #tbody [style], #n2_nboard #n2_content [style]');
    fonts.forEach((element) => {
        element.style.backgroundColor = '#242424';
        element.style.color = '#cacaca';
    });

    const bgColors = document.querySelectorAll('[bgcolor]');
    bgColors.forEach((element) => {
        element.setAttribute('bgcolor', '#242424');
    });

    const fontsAttributedColor = document.querySelectorAll('font[color], #n2_nboard #n2_content font[color]');
    fontsAttributedColor.forEach((font) => {
        font.setAttribute('color', '#cacaca');
    });
}

if(location.href.indexOf('naver') != -1) {
    applyFonts();

    document.addEventListener("DOMContentLoaded", function(event) {
        applyFonts();

        setTimeout(() => {
            applyFonts();
        }, 2000);
    });
}

// ==UserScript==
// @name         NAVER Dark Mode
// @namespace    https://www.naver.com
// @version      1.0
// @description  Incredibly gorgeous productivity style for NAVER. Requires other UserCSS extension to apply UserCSS immediately.
// @author       OrigamiDream
// @include      *
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
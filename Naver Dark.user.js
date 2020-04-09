// ==UserScript==
// @name         Dark mode for NAVER
// @namespace    naverdark
// @version      1.1.2
// @description  Seamless and gorgeous Dark mode for NAVER
// @author       OrigamiDream
// @downloadURL  https://raw.githubusercontent.com/DarkenPages/Naver-Dark/master/Naver%20Dark.user.js
// @updateURL    https://raw.githubusercontent.com/DarkenPages/Naver-Dark/master/Naver%20Dark.user.js
// @homepageURL  https://github.com/DarkenPages/Naver-Dark
// @include      https://cafe.naver.com/ArticleRead.nhn
// @include      https://cafe.naver.com/ArticlePreview.nhn
// @include      https://ui.nboard2.naver.com/nboard2
// @include      https://www.naver.com
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

function applySpecialBackground() {
    const backgroundImage = document.querySelector('.special_bg.special_hidden').style.backgroundImage;
    document.querySelector('.special img.special_img').src = backgroundImage.substring("url(\"".length, backgroundImage.length - "\")".length);
}

applyFonts();
applySpecialBackground();

document.addEventListener("DOMContentLoaded", function(event) {
    applyFonts();
    applySpecialBackground();

    setTimeout(() => {
        applyFonts();
        applySpecialBackground();
    }, 2000);
});

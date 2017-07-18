'use strict';

/*
 * rem计算方式：设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 */
(function () {

    /*设计稿宽度*/
    var docWidth = 750;

    var _html = document.documentElement;

    var recalc = function recalc(deviceWidth, docWidth) {
        return deviceWidth / (docWidth / 100) + 'px';
    };

    window.addEventListener('resize', function () {
        return _html.style.fontSize = recalc(document.documentElement.clientWidth, docWidth);
    }, false);
    document.addEventListener('DOMContentLoaded', function () {
        return _html.style.fontSize = recalc(document.documentElement.clientWidth, docWidth);
    }, false);
})();
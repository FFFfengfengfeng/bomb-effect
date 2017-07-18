/*
 * rem计算方式：设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 */
(function() {
    
    /*设计稿宽度*/
    let docWidth = 750;
    
    let _html = document.documentElement;
    
    let recalc = (deviceWidth, docWidth) => deviceWidth / (docWidth / 100) + 'px';
    
    window.addEventListener('resize', () => _html.style.fontSize = recalc(document.documentElement.clientWidth, docWidth), false);
    document.addEventListener('DOMContentLoaded', () => _html.style.fontSize = recalc(document.documentElement.clientWidth, docWidth), false);
    
})();
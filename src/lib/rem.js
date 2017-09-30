/**
 * Created by Administrator on 2017/9/28 0028.
 */
(function(doc, win) {
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            let clientWidth = docEl.clientWidth;
            let rem = clientWidth / 750;
            if (!clientWidth) return;
            docEl.style.fontSize = rem * 100 + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
function BARA() {
}

BARA.prototype.random = function(min, max) {
    "use strict";
    return Math.round(Math.random() * (max - min) + min);
};

BARA.prototype.setObj = function(obj, key) {
    window.localStorage[key] = JSON.stringify(obj);
};

BARA.prototype.getObj = function(key) {
    return JSON.parse(window.localStorage[key] || null);
};

BARA.prototype.applyListActive = function(selector) {
    try {
        var sel = $(selector).not(".bara-list-was-active");
        var size = sel.size();
        if (size > 0) {
            $(selector).removeClass("bara-list-active");
            var r = this.random(0, size - 1);
            var randomSel = sel.eq(r);
            randomSel.addClass("bara-list-active");
            randomSel.addClass("bara-list-was-active");
        } else {
            $(selector).removeClass("bara-list-active");
            $(selector).removeClass("bara-list-was-active");
            this.applyListActive(selector);
        }
    } catch (ex) {
        console.log(ex);
        alert(ex);
    }
};

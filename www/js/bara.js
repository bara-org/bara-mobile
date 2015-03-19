function BARA() {
}

BARA.prototype.random = function(min, max) {
    "use strict";
    return Math.round(Math.random() * (max - min) + min);
};

BARA.prototype.applyListActive = function(selector) {
    try {
        var sel = $(selector);
        var size = sel.size();
        if (size > 0) {
            sel.removeClass("bara-list-active");
            var randomSel = sel.eq(this.random(0, size - 1));
            randomSel.addClass("bara-list-active");
        }
    } catch (ex) {
        console.log(ex);
        alert(ex);
    }
}

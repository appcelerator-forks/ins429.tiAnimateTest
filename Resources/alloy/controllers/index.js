function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.spriteOne = Ti.UI.createImageView({
        width: "100dp",
        height: "100dp",
        top: 100,
        left: 100,
        color: "#000",
        image: "/007/1.png",
        id: "spriteOne"
    });
    $.__views.index.add($.__views.spriteOne);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var loaderIndex = 1, loaderAnimate = null, spriteOnePosition = {
        top: $.spriteOne.top,
        left: $.spriteOne.left
    };
    var loadingAnimation = function() {
        $.spriteOne.image = "/007/" + loaderIndex + ".png";
        loaderIndex++;
        95 === loaderIndex && (loaderIndex = 1);
    };
    var touchMoveBase = {
        set: function(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    };
    $.spriteOne.addEventListener("touchstart", function(event) {
        touchMoveBase.set(event.x, event.y);
        loaderAnimate = setInterval(loadingAnimation, 80);
    });
    $.spriteOne.addEventListener("touchmove", function(event) {
        spriteOnePosition.top += event.y - touchMoveBase.y;
        spriteOnePosition.left += event.x - touchMoveBase.x;
        this.animate({
            top: spriteOnePosition.top,
            left: spriteOnePosition.left,
            duration: 80
        });
        touchMoveBase.set(event.x, event.y);
    });
    $.spriteOne.addEventListener("touchend", function() {
        loaderIndex = 1;
        $.spriteOne.image = "/007/1.png";
        clearInterval(loaderAnimate);
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
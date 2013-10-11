function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.viewOne = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#ccc",
        id: "viewOne"
    });
    $.__views.index.add($.__views.viewOne);
    $.__views.mousePos = Ti.UI.createLabel({
        top: 0,
        text: "mouse",
        id: "mousePos"
    });
    $.__views.viewOne.add($.__views.mousePos);
    $.__views.spriteOne = Ti.UI.createImageView({
        width: 70,
        height: 70,
        zIndex: 2,
        top: 100,
        left: 100,
        color: "#000",
        image: "/007/1.png",
        id: "spriteOne"
    });
    $.__views.viewOne.add($.__views.spriteOne);
    $.__views.spriteTwo = Ti.UI.createImageView({
        width: 70,
        height: 70,
        zIndex: 2,
        top: 200,
        left: 100,
        color: "#000",
        image: "/007/1.png",
        id: "spriteTwo"
    });
    $.__views.viewOne.add($.__views.spriteTwo);
    $.__views.spriteThree = Ti.UI.createImageView({
        width: 70,
        height: 70,
        zIndex: 2,
        top: 200,
        left: 200,
        color: "#000",
        image: "/007/1.png",
        id: "spriteThree"
    });
    $.__views.viewOne.add($.__views.spriteThree);
    $.__views.targetOne = Ti.UI.createView({
        width: 70,
        height: 70,
        backgroundColor: "green",
        zIndex: 1,
        left: 10,
        top: 230,
        id: "targetOne"
    });
    $.__views.viewOne.add($.__views.targetOne);
    $.__views.targetTwo = Ti.UI.createView({
        width: 70,
        height: 70,
        backgroundColor: "blue",
        zIndex: 1,
        left: 90,
        top: 230,
        id: "targetTwo"
    });
    $.__views.viewOne.add($.__views.targetTwo);
    $.__views.targetThree = Ti.UI.createView({
        width: 70,
        height: 70,
        backgroundColor: "#fff",
        zIndex: 1,
        left: 170,
        top: 230,
        id: "targetThree"
    });
    $.__views.viewOne.add($.__views.targetThree);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var loaderIndex = 1, loaderAnimate = null;
    var loadingAnimation = function(target) {
        target.image = "/007/" + loaderIndex + ".png";
        loaderIndex++;
        95 === loaderIndex && (loaderIndex = 1);
    };
    $.spriteOne.addEventListener("touchstart", function(event) {
        this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne);
        loaderAnimate = setInterval(function() {
            loadingAnimation($.spriteOne);
        }, 80);
    });
    $.mousePos.setText($.spriteOne.getHeight() / 2 + " :: " + $.spriteOne.getWidth() / 2);
    $.spriteOne.addEventListener("touchmove", function(event) {
        var globalPoint = this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne), spritePosition = {
            top: this.top,
            left: this.left
        };
        $.mousePos.setText(globalPoint.x + " :: " + globalPoint.y);
        500 > globalPoint.y && (spritePosition.top = globalPoint.y - this.getHeight() / 2);
        300 > globalPoint.x && (spritePosition.left = globalPoint.x - this.getWidth() / 2);
        this.animate({
            top: spritePosition.top,
            left: spritePosition.left,
            duration: 80
        });
    });
    $.spriteOne.addEventListener("touchend", function(event) {
        var globalPoint = this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne), target = $.targetOne;
        this > target.getLeft() - 30;
        target.getLeft() + target.getWidth() + 30 > this;
        if (globalPoint.x > target.getLeft() - 30 && globalPoint.x < target.getLeft() + target.getWidth() + 30 && globalPoint.y > target.getTop() - 30 && globalPoint.y < target.getTop() + target.getHeight() + 30) {
            this.setTop($.targetOne.getTop());
            this.setLeft($.targetOne.getLeft());
        } else {
            loaderIndex = 1;
            this.image = "/007/1.png";
            clearInterval(loaderAnimate);
        }
    });
    $.spriteTwo.addEventListener("touchstart", function(event) {
        this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne);
        loaderAnimate = setInterval(function() {
            loadingAnimation($.spriteTwo);
        }, 80);
    });
    $.spriteTwo.addEventListener("touchmove", function(event) {
        var globalPoint = this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne), spritePosition = {
            top: this.top,
            left: this.left
        };
        $.mousePos.setText(globalPoint.x + " :: " + globalPoint.y);
        500 > globalPoint.y && (spritePosition.top = globalPoint.y - this.getHeight() / 2);
        300 > globalPoint.x && (spritePosition.left = globalPoint.x - this.getWidth() / 2);
        this.animate({
            top: spritePosition.top,
            left: spritePosition.left,
            duration: 80
        });
    });
    $.spriteTwo.addEventListener("touchend", function(event) {
        var globalPoint = this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne), target = $.targetTwo;
        if (globalPoint.x > target.getLeft() - 30 && globalPoint.x < target.getLeft() + target.getWidth() + 30 && globalPoint.y > target.getTop() - 30 && globalPoint.y < target.getTop() + target.getHeight() + 30) {
            this.setTop($.targetTwo.getTop());
            this.setLeft($.targetTwo.getLeft());
        } else {
            loaderIndex = 1;
            this.image = "/007/1.png";
            clearInterval(loaderAnimate);
        }
    });
    $.spriteThree.addEventListener("touchstart", function(event) {
        this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne);
        loaderAnimate = setInterval(function() {
            loadingAnimation($.spriteThree);
        }, 80);
    });
    $.spriteThree.addEventListener("touchmove", function(event) {
        var globalPoint = this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne), spritePosition = {
            top: this.top,
            left: this.left
        };
        $.mousePos.setText(globalPoint.x + " :: " + globalPoint.y);
        500 > globalPoint.y && (spritePosition.top = globalPoint.y - this.getHeight() / 2);
        300 > globalPoint.x && (spritePosition.left = globalPoint.x - this.getWidth() / 2);
        this.animate({
            top: spritePosition.top,
            left: spritePosition.left,
            duration: 80
        });
    });
    $.spriteThree.addEventListener("touchend", function(event) {
        var globalPoint = this.convertPointToView({
            x: event.x,
            y: event.y
        }, $.viewOne), target = $.targetThree;
        if (globalPoint.x > target.getLeft() - 30 && globalPoint.x < target.getLeft() + target.getWidth() + 30 && globalPoint.y > target.getTop() - 30 && globalPoint.y < target.getTop() + target.getHeight() + 30) {
            this.setTop($.targetThree.getTop());
            this.setLeft($.targetThree.getLeft());
        } else {
            loaderIndex = 1;
            this.image = "/007/1.png";
            clearInterval(loaderAnimate);
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
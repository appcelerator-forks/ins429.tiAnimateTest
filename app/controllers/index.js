
var spriteOneImages = 12,
  loaderIndex = 1,
  loaderAnimate = null;

var loadingAnimation = function(target) {
  target.image = '/007/' + loaderIndex + '.png';
  loaderIndex++;
  if (loaderIndex === 95) loaderIndex = 1;
};

$.spriteOne.addEventListener('touchstart', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne);
  loaderAnimate = setInterval(function(){loadingAnimation($.spriteOne)}, 80);
});

$.mousePos.setText( ($.spriteOne.getHeight() / 2) + ' :: ' + ($.spriteOne.getWidth() / 2) );

$.spriteOne.addEventListener('touchmove', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne),
    spritePosition = { top: this.top, left: this.left };
  $.mousePos.setText(globalPoint.x + ' :: ' + globalPoint.y);
  if (globalPoint.y < 500) spritePosition.top = globalPoint.y - (this.getHeight() / 2);
  if (globalPoint.x < 300) spritePosition.left = globalPoint.x - (this.getWidth() / 2);
  this.animate({
    top: spritePosition.top,
    left: spritePosition.left,
    duration: 80
  });
});

$.spriteOne.addEventListener('touchend', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne),
    target = $.targetOne;
    this > target.getLeft() - 30
    this < target.getLeft() + target.getWidth() + 30
  if ((globalPoint.x > target.getLeft() - 30 && globalPoint.x < target.getLeft() + target.getWidth() + 30) && (globalPoint.y > target.getTop() - 30 && globalPoint.y < target.getTop() + target.getHeight() + 30)) {
    this.setTop($.targetOne.getTop());
    this.setLeft($.targetOne.getLeft());
  } else {
    loaderIndex = 1;
    this.image = '/007/1.png';
    clearInterval(loaderAnimate);
  }
});

$.spriteTwo.addEventListener('touchstart', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne);
  loaderAnimate = setInterval(function(){loadingAnimation($.spriteTwo)}, 80);
});

$.spriteTwo.addEventListener('touchmove', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne),
    spritePosition = { top: this.top, left: this.left };
  $.mousePos.setText(globalPoint.x + ' :: ' + globalPoint.y);
  if (globalPoint.y < 500) spritePosition.top = globalPoint.y - (this.getHeight() / 2);
  if (globalPoint.x < 300) spritePosition.left = globalPoint.x - (this.getWidth() / 2);
  this.animate({
    top: spritePosition.top,
    left: spritePosition.left,
    duration: 80
  });
});

$.spriteTwo.addEventListener('touchend', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne),
    target = $.targetTwo;
  if ((globalPoint.x > target.getLeft() - 30 && globalPoint.x < target.getLeft() + target.getWidth() + 30) && (globalPoint.y > target.getTop() - 30 && globalPoint.y < target.getTop() + target.getHeight() + 30)) {
    this.setTop($.targetTwo.getTop());
    this.setLeft($.targetTwo.getLeft());
  } else {
    loaderIndex = 1;
    this.image = '/007/1.png';
    clearInterval(loaderAnimate);
  }
});

$.spriteThree.addEventListener('touchstart', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne);
  loaderAnimate = setInterval(function(){loadingAnimation($.spriteThree)}, 80);
});

$.spriteThree.addEventListener('touchmove', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne),
    spritePosition = { top: this.top, left: this.left };
  $.mousePos.setText(globalPoint.x + ' :: ' + globalPoint.y);
  if (globalPoint.y < 500) spritePosition.top = globalPoint.y - (this.getHeight() / 2);
  if (globalPoint.x < 300) spritePosition.left = globalPoint.x - (this.getWidth() / 2);
  this.animate({
    top: spritePosition.top,
    left: spritePosition.left,
    duration: 80
  });
});

$.spriteThree.addEventListener('touchend', function(event) {
  var globalPoint = this.convertPointToView({x : event.x, y : event.y}, $.viewOne),
    target = $.targetThree;
  if ((globalPoint.x > target.getLeft() - 30 && globalPoint.x < target.getLeft() + target.getWidth() + 30) && (globalPoint.y > target.getTop() - 30 && globalPoint.y < target.getTop() + target.getHeight() + 30)) {
    this.setTop($.targetThree.getTop());
    this.setLeft($.targetThree.getLeft());
  } else {
    loaderIndex = 1;
    this.image = '/007/1.png';
    clearInterval(loaderAnimate);
  }
});

$.index.open();

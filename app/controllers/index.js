
var spriteOneImages = 12,
  loaderIndex = 1,
  loaderAnimate = null,
  spriteOnePosition = { top: $.spriteOne.top, left: $.spriteOne.left };

var loadingAnimation = function() {
  $.spriteOne.image = '/007/' + loaderIndex + '.png';
  loaderIndex++;
  if (loaderIndex === 95) loaderIndex = 1;
};

var touchMoveBase = {
  set: function(_x, _y) {
    this.x = _x;
    this.y = _y;
  }
};

$.spriteOne.addEventListener('touchstart', function(event) {
  touchMoveBase.set(event.x, event.y);
  loaderAnimate = setInterval(loadingAnimation, 80);
});

$.spriteOne.addEventListener('touchmove', function(event) {
  spriteOnePosition.top += event.y - touchMoveBase.y;
  spriteOnePosition.left += event.x - touchMoveBase.x;
  this.animate({
    top: spriteOnePosition.top,
    left: spriteOnePosition.left,
    duration: 80
  });
  // reset absolute position to current position so next event will be relative to current position
  touchMoveBase.set(event.x, event.y);
});

$.spriteOne.addEventListener('touchend', function() {
  loaderIndex = 1;
  $.spriteOne.image = '/007/1.png';
  clearInterval(loaderAnimate);
});

$.index.open();

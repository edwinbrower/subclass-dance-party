var DonaldDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('donaldDancer');
};

DonaldDancer.prototype = Object.create(Dancer.prototype);
DonaldDancer.prototype.constructor = DonaldDancer;

DonaldDancer.prototype.step = function(timeBetweenSteps) {

  var dancerStep = this.__proto__.__proto__.step;  
  dancerStep.call(this, timeBetweenSteps);

  // this.$node.animate({left: this.left - 100}, 200, 'linear');
  // this.$node.animate({left: this.left + 100}, 200);
  // $('.leftRightDancer').addClass('moveLeft');
  // setTimeout(function() {
  //   $('.leftRightDancer').removeClass('moveLeft');
  // }, 100);
  //$('.dancer').removeClass('moveLeft');
  // this.$node.addClass('moveLeft');
  // setTimeout(function() {
  //   this.$node.removeClass('moveLeft');
  // }, 2000);
};
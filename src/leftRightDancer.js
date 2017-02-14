var LeftRightDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('leftRightDancer');
};

LeftRightDancer.prototype = Object.create(Dancer.prototype);
LeftRightDancer.prototype.constructor = LeftRightDancer;

LeftRightDancer.prototype.step = function(timeBetweenSteps) {
  var dancerStep = this.__proto__.__proto__.step;  
  dancerStep.call(this, timeBetweenSteps);

  this.$node.animate({left: this.left - 100}, timeBetweenSteps, 'linear');
  this.$node.animate({left: this.left + 100}, timeBetweenSteps);
};
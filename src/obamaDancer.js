var ObamaDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('obamaDancer');
};

ObamaDancer.prototype = Object.create(BlinkyDancer.prototype);
ObamaDancer.prototype.constructor = ObamaDancer;

ObamaDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};
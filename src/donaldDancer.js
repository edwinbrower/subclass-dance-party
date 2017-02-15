var DonaldDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('donaldDancer');
};

DonaldDancer.prototype = Object.create(Dancer.prototype);
DonaldDancer.prototype.constructor = DonaldDancer;

DonaldDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
};
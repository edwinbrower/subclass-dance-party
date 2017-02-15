var HillaryDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hillaryDancer');
};

HillaryDancer.prototype = Object.create(Dancer.prototype);
HillaryDancer.prototype.constructor = HillaryDancer;

HillaryDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
};
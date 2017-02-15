var ObamaDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('obamaDancer');
};

ObamaDancer.prototype = Object.create(BlinkyDancer.prototype);
ObamaDancer.prototype.constructor = ObamaDancer;

ObamaDancer.prototype.step = function(timeBetweenSteps) {
  var dancerStep = this.__proto__.__proto__.__proto__.step;  
  dancerStep.call(this, timeBetweenSteps);
  this.$node.toggle();
};
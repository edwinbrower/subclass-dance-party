var ObamaDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('obamaDancer');
  // this.oldStep = this.step;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

ObamaDancer.prototype = Object.create(BlinkyDancer.prototype);
ObamaDancer.prototype.constructor = ObamaDancer;

ObamaDancer.prototype.step = function(timeBetweenSteps) {
  var dancerStep = this.__proto__.__proto__.__proto__.step;
  // call the old version of step at the beginning of any call to this new version of step
  
  dancerStep.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
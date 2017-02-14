var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('squareDancer');
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(timeBetweenSteps) {
  var dancerStep = this.__proto__.__proto__.step;  
  dancerStep.call(this, timeBetweenSteps);
  this.$node.animate({left: this.left - 100}, 200);
  this.$node.animate({top: this.top - 100}, 200);
  this.$node.animate({left: this.left + 100}, 200);
  this.$node.animate({top: this.top + 100}, 200);
  this.$node.toggle();
};
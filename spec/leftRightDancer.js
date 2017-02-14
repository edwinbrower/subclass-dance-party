describe('leftRightDancer', function() {

  var leftRightDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    leftRightDancer = new LeftRightDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(leftRightDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that calls animate', function() {
    sinon.spy(leftRightDancer.$node, 'animate');
    leftRightDancer.step();
    expect(leftRightDancer.$node.animate.called).to.be.true;
  });

  it('should have a step function that moves left', function() {
    sinon.spy(leftRightDancer.$node, 'animate');
    leftRightDancer.step();
    expect(leftRightDancer.$node.position.left()).to.be.equal(leftRightDancer.left);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(leftRightDancer, 'step');
      expect(leftRightDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(leftRightDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(leftRightDancer.step.callCount).to.be.equal(2);
    });
  });
});

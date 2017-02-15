describe('obamaDancer', function() {

  var obamaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    obamaDancer = new ObamaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(obamaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('has a dancer class', function() {
    expect(obamaDancer.$node).to.have.class('dancer');
  });

  it('has a blinkyDancer class', function() {
    expect(obamaDancer.$node).to.have.class('blinkyDancer');
  });


  it('has a obamaDancer class', function() {
    expect(obamaDancer.$node).to.have.class('obamaDancer');
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(obamaDancer.$node, 'toggle');
    obamaDancer.step();
    expect(obamaDancer.$node.toggle.called).to.be.true;
  });

  it('should call step at least once per second', function() {
    sinon.spy(obamaDancer, 'step');
    expect(obamaDancer.step.callCount).to.be.equal(0);
    clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
    clock.tick(timeBetweenSteps);

    expect(obamaDancer.step.callCount).to.be.equal(1);

    clock.tick(timeBetweenSteps);
    expect(obamaDancer.step.callCount).to.be.equal(2);
  });
});
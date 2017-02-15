describe('hillaryDancer', function() {

  var hillaryDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hillaryDancer = new HillaryDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(hillaryDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('has a dancer class', function() {
    expect(hillaryDancer.$node).to.have.class('dancer');
  });

  it('has a hillaryDancer class', function() {
    expect(hillaryDancer.$node).to.have.class('hillaryDancer');
  });
});
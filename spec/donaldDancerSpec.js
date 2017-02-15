describe('donaldDancer', function() {

  var donaldDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    donaldDancer = new DonaldDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(donaldDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('has a dancer class', function() {
    expect(donaldDancer.$node).to.have.class('dancer');
  });

  it('has a donaldDancer class', function() {
    expect(donaldDancer.$node).to.have.class('donaldDancer');
  });
});
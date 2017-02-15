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
});
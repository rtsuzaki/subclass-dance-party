describe('stephDancer', function() {

  var stephDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    stephDancer = new makeStephDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(stephDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(stephDancer, 'step');
      expect(stephDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      debugger;
      clock.tick(timeBetweenSteps);

      expect(stephDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(stephDancer.step.callCount).to.be.equal(2);
    });
  });
});

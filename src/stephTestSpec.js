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


  describe('stephClass', function() {
    it('should have a class of steph' , function(){
      expect($(stephDancer.$node).attr('class')).to.equal('dancer steph');
    });
  });

  describe('steph constructor', function() {
    it('should have a constructor of makeStephDancer' , function(){
      expect(makeStephDancer.prototype.constructor).to.equal(makeStephDancer);
    });
  });
});

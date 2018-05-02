describe('lebronDancer', function() {

  var bliDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    lebronDancer = new makeLebronDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(lebronDancer.$node).to.be.an.instanceof(jQuery);
  });



  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(lebronDancer, 'step');
      expect(lebronDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      debugger;
      clock.tick(timeBetweenSteps);

      expect(lebronDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(lebronDancer.step.callCount).to.be.equal(2);
    });
  });
  

  describe('lebronClass', function() {
    it('should have a class of lebron' , function(){
      expect($(lebronDancer.$node).attr('class')).to.equal('dancer lebron');
    });
  });
  

  describe('lebron constructor', function() {
    it('should have a constructor of makeLebronDancer' , function(){
      expect(makeLebronDancer.prototype.constructor).to.equal(makeLebronDancer);
    });
  });

});

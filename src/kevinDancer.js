var makeKevinDancer = function(top, left, timeBetweenSteps) {  
  makeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('kevin')
};

makeKevinDancer.prototype = Object.create(makeDancer.prototype);
makeKevinDancer.prototype.constructor = makeKevinDancer;
makeKevinDancer.prototype.step =function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
}

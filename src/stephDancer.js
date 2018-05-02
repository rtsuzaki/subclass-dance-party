var makeStephDancer = function(top, left, timeBetweenSteps) {  
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="slidy"></span>');
  $(this.$node).addClass('steph');
};

makeStephDancer.prototype = Object.create(makeDancer.prototype);
makeStephDancer.prototype.constructor = makeStephDancer;
makeStephDancer.prototype.step =function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //$(this.$node).toggle("steph");

     // this.$node.animate({height: "+=20px"})
     // makeDancer.prototype.step.call(this);
     // this.$node.animate({height: "-=20px"} 
}

$(document).ready(function() {
  window.dancers = [];



  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });
  



  $('.lineUp').on('click', function(event) {
    var position = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.animate({top: '250', left: String(position) + 'px', easing: 'linear'});
      position += 75;  
    }
  });
   
  $('.pyTheorem').on('click', function(event) {
    var playerOne = window.dancers[0]; 
    var playerTwo = window.dancers[1];
    var shortestDistance = pyTheorem(playerOne, playerTwo);
    var playerOnePosition = playerOne.$node.offset()
    var playerTwoPosition = playerTwo.$node.offset()

    for(var ballerOne = 1; ballerOne < window.dancers.length; ballerOne++) {
      for(var ballerTwo = 2; ballerTwo < window.dancers.length; ballerTwo++) {
        if ((ballerOne !== ballerTwo) && (pyTheorem(window.dancers[ballerOne], window.dancers[ballerTwo]) < shortestDistance)) {
          shortestDistance = pyTheorem(window.dancers[ballerOne], window.dancers[ballerTwo]);
          playerOne = window.dancers[ballerOne];
          playerTwo = window.dancers[ballerTwo];
        }
      }
    }


   function pyTheorem(p1, p2){
      return ((Math.abs((p2.$node.offset().left - p1.$node.offset().left))**2) + ((Math.abs(p2.$node.offset().top - p1.$node.offset().top))**2))**(1/2);
    }


  $(playerOne.$node).addClass('spin');
  $(playerTwo.$node).addClass('spin');

 


})


});


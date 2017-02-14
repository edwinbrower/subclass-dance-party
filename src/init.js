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
    var pixToNum = function (stringNum) {
      return Number(stringNum.slice(0, -2));
    };

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
      //500
    );
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);

    dancer.$node.on('click', function() {
      // find the closest dancer 
      var currentLeft = pixToNum($(this).css('left'));
      var currentTop = pixToNum($(this).css('top'));
      //console.log(currentLeft.slice(0, currentLeft.length - 2));
      //console.log(Number(currentLeft.slice(0, - 2)));
      //console.log(pixToNum(currentLeft));
      var smallestDistance = window.innerWidth;
      var $closestNode;
      for (var i = 0; i < window.dancers.length; i++) {
        var left = pixToNum($(window.dancers[i]).css('left'));
        var top = pixToNum($(window.dancers[i]).css('top'));
        var distance = Math.sqrt(((currentLeft - left) * (currentLeft - left)) + ((currentTop - top) * (currentTop - top)));
        if (distance !== 0 && distance < smallestDistance) {
          $closestNode = window.dancers[i];
          smallestDistance = distance;
        }
      }

      console.log(smallestDistance);
      dancer.$node.addClass('interactionPostClick');
      $closestNode.addClass('interactionPostClick');
      setTimeout(function() {
        dancer.$node.removeClass('interactionPostClick');
        $closestNode.removeClass('interactionPostClick');
      }, 2000);
      //get left and top props of clicked dancer
        //iterate through window.dancers array
          //get left and top props
          // use dist formula to calc dist between current node and each node
          // find smallest that's not 0.

      // add class to current dancer and closest dancer that does something tbd


    });
    
    
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      //$(window.dancers[i]).addClass('stopAnimation');
      $(window.dancers[i]).animate({top: 200, left: i * window.innerWidth / window.dancers.length, position: 'absolute'});

      // TODO: Use CSS transform instead
      


    }
    // $('.dancer').removeClass('moveLeft');
    // $('.dancer').removeClass('squareDancer');
    // $('.dancer').removeClass('moveLeft');
    //$('.dancer').css('left', '400px');
    // for (var i = 0; i < timeOutStorage.length; i++) {
    //   clearTimeout(timeOutStorage[i]);
    // }
    //$('.dancer').stop(true, true);
          // for (var i = 1; i < 99999; i++) {
          //   window.clearTimeout(i);
          // }

          // $('.dancer').animate({left: 10});
    //$('.dancer').addClass('lineUpClass');
  });


});


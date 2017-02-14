$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var pixToNum = function (stringNum) {
      return Number(stringNum.slice(0, -2));
    };

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);


    // We are calculating the distance between this clicked node and all of the nodes. 
    // Then we returned the node with the smallest distance and added a class to that node and the clicked node.
    dancer.$node.on('click', function() {
      var currentLeft = pixToNum($(this).css('left'));
      var currentTop = pixToNum($(this).css('top'));
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
      dancer.$node.addClass('interactionPostClick');
      $closestNode.addClass('interactionPostClick');
      setTimeout(function() {
        dancer.$node.removeClass('interactionPostClick');
        $closestNode.removeClass('interactionPostClick');
      }, 2000);
    }); 
  });

  // Lines up all nodes in a horizonal line evenly dispersed calculated using the inner width of the window
  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i]).animate({top: 200, left: i * window.innerWidth / window.dancers.length, position: 'absolute'});
    }
  });
});
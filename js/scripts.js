// Business logic goes here
function pingPongArray(userNumber) {
  var initialNumbers = [];
  for (var i = 1; i <= userNumber; i++) {
    initialNumbers.push(i)
  }

  for (var i = 0; i < initialNumbers.length; i++) {
    var number = initialNumbers[i];
    if ((number % 5 === 0) && (number % 3 === 0)) {
      initialNumbers[i] = 'ping-pong';
    } else if (number % 5 === 0) {
      initialNumbers[i] = "pong";
    } else if (number % 3 === 0) {
      initialNumbers[i] = "ping";
    }
  }
  return initialNumbers;
}


  // initialNumbers.forEach(function(number) {
  //   if ((number % 5 === 0) && (number % 3 === 0)) {
  //   }
  // }

// UI logic goes here
$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
      event.preventDefault();
      var userNumber = parseInt($("input#number").val());
      var outcome = pingPongArray(userNumber);


      if (userNumber === 0) {
        alert("please use a number greater than zero")
      }
    //
    //   numbers.forEach(function(number) {
    //   if (three === false && five === false) {
    //     $("#result").append("<li>" + userNumber + "</li>");
    //   } else if ((three === true) && (five === true)) {
    //     $("#result").append("<li>" + "ping-pong" + "</li>");
    //   } else if ((three === true) && (five === false)) {
    //     $("#result").append("<li>" + "ping" + "</li>");
    //   } else if ((three === false) && (five === true)) {
    //     $("#result").append("<li>" + "pong" + "</li>");
    //   }
    // });
    for  (var i = 0; i < outcome.length; i++) {
      $("#result").append("<li>" + outcome[i] + "</li>")
    }

      $("#result").show();
  });
});

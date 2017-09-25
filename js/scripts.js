// Business logic goes here
function isPingPong(userNumber) {
  var initialNumbers = [];
  var output;
  for (var i = 1; i <= userNumber; i++) {
    initialNumbers.push(i)
  };
}
initialNumbers.forEach(function(initialNumber) {
  if 
}




}
} return numbers






// UI logic goes here
$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
      event.preventDefault();
      var userNumber = parseInt($("input#number").val());
      var outcome = isPingPong(userNumber);


    //   if (userNumber === 0) {
    //     alert("please use a number greater than zero")
    //   }
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

      $("#result").show();
  });
});

// Business logic goes here
function pingPong(number) {

  if (number % 15 === 0) {
    number = "ping-pong"
  } else if (number % 5 === 0) {
    number = "pong"
  } else if (number % 3 === 0) {
    number = "ping"
  } else {
    return false
  }
}

// UI logic goes here
$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
      event.preventDefault();
      var userNumber = parseInt($("input#number").val());
      var result = pingPong(number);

      if (result === false) {
        $("#result").append(userNumber)
      }

      $("#result").show();
      // $("#result").append(number);
  });
});

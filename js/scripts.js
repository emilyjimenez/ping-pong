// Business logic goes here
function isPingPong(userNumber) {
  var numbers = [];
  for (var i = 1; i <= userNumber; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
      numbers.push("pig-pong");
    } else if (i % 3 === 0) {
      numbers.replace(i,"ping");
    } else if (i % 5 === 0) {
      numbers.push(i,"pong");
    } else {
      numbers.push(i);
      console.log(i);
    }

}
} return numbers
// function isPong(userNumber) {
//
// });
// function isPing(userNumber) {





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


var pingPong = function(numbers) {
  var pingPongResults =[];
  for (i=1; i<=numbers; i+=1){
     if ((i%15===0)){
        pingPongResults.push("pingpong");
    } else if (i%5===0){
        pingPongResults.push("pong");
    } else if (i%3===0){
        pingPongResults.push("ping");
      }
      else ((i%3 !=0) && (i%5 !=0) && (i%15 !=0))
        pingPongResults.push(i);
      }

  return pingPongResults;
  }



$(document).ready(function() {
  $("form#userInputHere").submit(function(event) {
    event.preventDefault();
    $('#pingsPonged').empty();

    var usersNumber = parseInt($("#number").val());
    var outcomes = pingPong(usersNumber);
        if (outcomes === undefined || outcomes ===null || (outcomes <=0)){
    alert ("Enter a number greater than 0");
    } else {
        outcomes.forEach (function (numeral){
        $("#pingsPonged").append("<li>" + numeral + "</li>");
        })
      }
    });
    });

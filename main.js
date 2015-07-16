//commit made by Crystal O'Mara
//Function to get and verify users input
var chips = 100;
var bet;
turn();

function turn(){
  function input() {
    bet = prompt("You have $" + chips + ". How much would you like to bet?");
    while (bet>chips) {
      bet = prompt("Sorry, but you only have " + chips + " How much would you like to bet?");
    }
    var userInput = prompt ("Pick a number 1-36");
    while ((userInput > 36) ||(userInput < 0)) {
      userInput = prompt ("Sorry that's not a number 1-36. Try again");
    }
    return userInput;
  }
// function to return spot number and color as an array
  function randomSpin(){
  var red = "red";
  var black = "black";
  var wheel = [
    {num: 1, color: red, odds: 35},
    {num: 2, color: black, odds: 35},
    {num: 3, color: red, odds: 35},
    {num: 4, color: black, odds: 35},
    {num: 5, color: red, odds: 35},
    {num: 6, color: black, odds: 35},
    {num: 7, color: red, odds: 35},
    {num: 8, color: black, odds: 35},
    {num: 9, color: red, odds: 35},
    {num: 10, color: black, odds: 35},
    {num: 11, color: black, odds: 35},
    {num: 12, color: red, odds: 35},
    {num: 13, color: black, odds: 35},
    {num: 14, color: red, odds: 35},
    {num: 15, color: black, odds: 35},
    {num: 16, color: red, odds: 35},
    {num: 17, color: black, odds: 35},
    {num: 18, color: red, odds: 35},
    {num: 19, color: red, odds: 35},
    {num: 20, color: black, odds: 35},
    {num: 21, color: red, odds: 35},
    {num: 22, color: black, odds: 35},
    {num: 23, color: red, odds: 35},
    {num: 24, color: black, odds: 35},
    {num: 25, color: red, odds: 35},
    {num: 26, color: black, odds: 35},
    {num: 27, color: red, odds: 35},
    {num: 28, color: black, odds: 35},
    {num: 29, color: black, odds: 35},
    {num: 30, color: red, odds: 35},
    {num: 31, color: black, odds: 35},
    {num: 32, color: red, odds: 35},
    {num: 33, color: black, odds: 35},
    {num: 34, color: red, odds: 35},
    {num: 35, color: black, odds: 35},
    {num: 36, color: red, odds: 35}
  ];


  function spin(){
    var spot = Math.floor(Math.random() * wheel.length);
    return spot;
  }

  var spot = spin();
  var num = wheel[spot-1].num;
  var color = wheel[spot-1].color;
  var odds = wheel[spot-1].odds;

  return [num, color, odds];
 }


  var inputStr = input();
  var slot = randomSpin();
  var result = slot[0];

  if (inputStr === result.toString()) {
    chips += ( parseInt(bet) * parseInt(slot[2]) );
    console.log(chips);
    alert("Win! " + chips + " chips left");
  } else {
    chips -= (parseInt(bet));
    alert("Lose " + chips + " chips left");
  }
  nextTurn();
}
function nextTurn(){
  var playAgain = prompt("Would you like to play again? Y or N?");
  if (playAgain === "Y") {
    turn();
  }
}

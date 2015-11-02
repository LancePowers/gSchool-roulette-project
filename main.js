/*BUGS: validate bet outside of input function, have to enter a number for bet otherwise produces NaN, if dont enter y or n at end, just says thanks for playing, if bet more than you have will return a negative value after play*/

turn(100, 0);
//in: nothing, process:get how many chips were bet and user game bet, out:number of chips bet, user game bet
function turn(chips, bet){



  // var chips = 100;
  // var bet = 0;
  function inputPrompts(){
    var userInput = prompt ("Pick a number 1-36");

    bet = prompt("You have $" + chips + ". How much would you like to bet?");

    while (bet>chips) {
      /*bet = return*/
      return prompt("Sorry, but you only have " + chips + " How much would you like to bet?");
    }

    while (bet < 1) {
      return prompt("Sorry, but you have to bet at least one chip. How much would you like to bet? You have " + chips + " chips left.");
    }

    while ((userInput > 36) || (userInput < 1)) {
    /*userInput =*/
    return prompt ("Sorry that's not a number 1-36. Try again");
    }
    // return [bet, chips];
  }
}
// in: position desired on wheel, process: get position on wheel with other attributes, out: position on wheel with attributes
  function createWheel(position){
  var wheel = [
    {num: 1, color: "red"},
    {num: 2, color: "black"},
    {num: 3, color: "red"},
    {num: 4, color: "black"},
    {num: 5, color: "red"},
    {num: 6, color: "black"},
    {num: 7, color: "red"},
    {num: 8, color: "black"},
    {num: 9, color: "red"},
    {num: 10, color: "black"},
    {num: 11, color: "black"},
    {num: 12, color: "red"},
    {num: 13, color: "black"},
    {num: 14, color: "red"},
    {num: 15, color: "black"},
    {num: 16, color: "red"},
    {num: 17, color: "black"},
    {num: 18, color: "red"},
    {num: 19, color: "red"},
    {num: 20, color: "black"},
    {num: 21, color: "red"},
    {num: 22, color: "black"},
    {num: 23, color: "red"},
    {num: 24, color: "black"},
    {num: 25, color: "red"},
    {num: 26, color: "black"},
    {num: 27, color: "red"},
    {num: 28, color: "black"},
    {num: 29, color: "black"},
    {num: 30, color: "red"},
    {num: 31, color: "black"},
    {num: 32, color: "red"},
    {num: 33, color: "black"},
    {num: 34, color: "red"},
    {num: 35, color: "black"},
    {num: 36, color: "red"},
    {num: 0, color: "green"},
    {num: 00, color: "green"}
  ];
  return wheel[position];
}

//in: nothing, process:take a position from the wheel and randomize it out:randomized generated spot from the wheel
function randomSpin(){
  var randomizeSpot = Math.floor(Math.random() * 38);
  var generatedSpot = createWheel(randomizeSpot);
  return generatedSpot;
};

//in: nothing, process: take the randomally generated spot and get the attributes associated with it, put them into accessible array, out: attributes of spot in array
function seperateRandomOutput(wheelPosition){
  var wheelColor = wheelPosition.color;
  var wheelNumber = wheelPosition.num;
  var gameSpot = [wheelNumber, wheelColor];
  return gameSpot;
}

//in: take user spot bet and actual game spot, process: compare user spot to game spot, out: if match, true, if don't match, false
function compare(userSpot, gameSpot){
  userSpot =
  gameSpot = seperateRandomOutput(randomSpin());
  if (userSpot === gameSpot){
    true
  }
  else{
    false
  }
  return
}
compare();
//in: nothing? process: compare input to randomally generated spot, out:output the randomally generated number compared to the user game input number/bet and say if win or lose and how many chips user has left
function outputInfo(){
  var inputStr = input();
  var slot = randomSpin();
  var result = slot[0];
  if (inputStr === result.toString()) {
    chips += ( parseInt(bet) * parseInt(slot[2]) );
    alert(/*randomSpin() num + ", " + color + " " +*/ + " " + "Win! " + chips + " chips left");
  } else {
    chips -= (parseInt(bet));
    alert(/*randomSpin() num + ", " + color + " " +*/  + " " + "Lose " + chips + " chips left");
  }
  nextTurn();
}

function nextTurn(){
  var playAgain = prompt("Would you like to play again? Y or N?");
  //var again = playAgain;
  if (playAgain.toUpperCase() === "Y") {
    turn();
  } else {
    alert ("Thanks for playing!")
  }
}

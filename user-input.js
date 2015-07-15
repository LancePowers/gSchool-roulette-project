// var userInput;
// do {
//    userInput = prompt ("Pick a number!", "1-36");
// }
// while (userInput > 36 || userInput < 1) {
//     alert ("Incorrect input! Pick a number between 1-36");
//     userInput;
// }
// console.log("test");
function input() {
  while (true) {
   var userInput = prompt ("pick an number 1-36");
    if ((userInput < 37) && (userInput > 0)) {
      return;
    }
    else {
      alert ("Incorrect input! Pick a number between 1-36");
    }
  }
}
input();

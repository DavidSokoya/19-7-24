// 11.Convert a Number to a String!
// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toSting();
}

// 2. Beginner Series #2 Clock
// DESCRIPTION:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  
//  convert to seconds --> multiply the value of m by 60, and h by 360
let timeInSeconds = ((h * 3600) + (m * 60) + s)

// multiply the result by 1000 and return
return timeInSeconds * 1000
}

// Rock Paper Scissors!
// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {

  if(p1 === "scissors" && p2 === "paper" || p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock"  ){
    return "Player 1 won!"
  }
  else  if(p1 === "scissors" && p2 === "rock" || p1 === "rock" && p2 === "paper" || p1 === "paper" && p2 === "scissors" ){
    return "Player 2 won!"
  }else  {
    return "Draw!"
  }
}

// 4. Transportation on vacation

// DESCRIPTION:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
 
  let carCostPerDay = 40
  let totalAmount = carCostPerDay * d
  
  if(d < 3 ){
    totalAmount = totalAmount;
  }else if (d < 7) {
    totalAmount -= 20;
  }else{
    totalAmount -= 50;
  }

  return totalAmount;
}

// 5. Powers of 2

// DESCRIPTION:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
  let arr = []
  for(let i = 0; i <= n; i++){
    let res = Math.pow(2, i)
    arr.push(res);
  }

  return arr;
}

// 6. Testing 1-2-3

// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

 function number(array){
  //your awesome code here
  let newArr = []
 for (let i = 0; i < array.length; i++){
   let res =  `${i + 1}: ${array[i]}`
   newArr.push(res)
 }
return newArr
}

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}
// 7. 
// What is between?
// DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


function between(a, b) {
  // your code here
  let arr = [];
 
  for (let i = a; i <= b; i++) {
      arr.push(i)
  }
return arr
}


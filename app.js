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
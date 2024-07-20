// 1. Remove First and Last Character
// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
 //You got this!
  newStr = str.split("")
    newStr.shift()
      newStr.pop()
 return  newStr.join('')
};

// 2. String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let c = '';
  for (let i = 0; i < n; i++){
   c += s
  }
return c
}

function repeatStr (n, s) {
  return s.repeat(n);
}
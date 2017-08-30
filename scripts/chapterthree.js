// "Functions are the bread and butter of JavaScript programming. The concept of wrapping a piece of program in a value has many uses. It is a tool to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other."

// A function definition is just a regular variable definition where the value given to the variable happens to be a function.

// Paramaters and Scopes

// The parameters to a function behave like regular variables, but their initial values are given by the caller of the function, not the code in the function itself.

// Variables created inside a function's body is "local" while a variable created outside a function is "global" and are visible throughout a program.

//




// EXERCISES CHAPTER 3 --
console.log('chapter 3 exercises');

// Minimum - The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

console.log("exercise: minimum");

var min = function(a, b) {
  return Math.min(a, b);
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(5, 17));

console.log("exercise: recursion");

// Recursion - We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 // Zero is even.

 // One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

var isEven = function(theNumber) {
  if (theNumber < 0) {
    return "the number is negative";
  } else if (theNumber === 0) {
    return "the number is even";
  } else if (theNumber === 1) {
    return "the number is odd";
  } else {
    return isEven(theNumber - 2);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(5876));

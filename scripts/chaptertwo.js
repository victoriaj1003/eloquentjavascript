// variables : a way for a program to catch and hold an internal state
// keyword -> var indicates that this will define a variable
// "After a variable has been defined, its name can be used as an expression. The value of such an expression is the value the variable currently holds. "
// a variable points to a value but it does not hold that value forever. the = can reassign the value of the variable.
//  functions : a piece of program wrapped in a value. execute a function by "invoking", "calling", or "applying" it.
// control flow : a program executes in order, top to bottom.
// conditional execution : written with the keyword "if". to execute an alternative path, "else" is used. to execute through multiple choices, "else if" is used.
//  loops : looping control flow lets us go back to some point in the program and re-run it.
//  switch : can use instead of a series of "if/else" statements. (the syntax is inherited from C/Java programming.)

// EXERCISES CHAPTER 2 --
console.log('chapter 2 exercises');

// Looping a triangle - Write a loop that makes seven calls to console.log to output the following triangle:
console.log('exercise: looping a triangle');

var triangle = '#';

for (i = 0; i < 7; i++) {
  console.log(triangle);
  triangle = triangle + '#';
};

// FizzBuzz - Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
console.log('exercise: fizzbuzz');

// var fizzBuzzNumbers = 1;

for (i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else if
    (i % 3 === 0) {
      console.log('fizz');
    } else if
      (i % 5 === 0) {
        console.log('buzz');
      } else {
        console.log(i);
      }
    };

// Chess board - Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
console.log('exercise: chessboard');


var str = ""

for (j = 0; j < 8; j++) {
  if (j % 2 === 0) {
    str = str + "\n"
  } else {
    str = str + "\n"
  }

      for (i=0; i < 8; i++) {
           if ((i + j)% 2===0 ) {
                str = str + " "
           } else {
                str = str + "#"
           }
      };
};
   console.log(str);


// using a variable to change the size of the chessboard...

   var str = ""
   var size = 4

   for (j = 0; j < size; j++) {
    str = str + "\n"


         for (i=0; i < size; i++) {
              if ((i + j)% 2===0 ) {
                   str = str + " "
              } else {
                   str = str + "#"
              }
         };
   };
      console.log(str);

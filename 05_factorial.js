// Write a function that calculates the factorial of a given number.
// The factorial of a number n, denoted by n!, is the product of all positive integers
// less than or equal to n.
 
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  console.log(factorial(10)); // Output: 3628800

  /* //This function uses a recursive approach to calculate the factorial:
Base case: If n is 0 or 1, the factorial is 1.
Recursive case: If n is greater than 1, the factorial of n is n multiplied by the factorial of n-1.
This function will correctly calculate the factorial of any non-negative integer. */

/* Recursion is a programming technique where a function calls itself directly or indirectly. It's often used to solve problems that can be broken down into smaller, similar subproblems.

Key characteristics of recursive functions:

Base case: A condition that stops the recursion.
Recursive case: A condition that calls the function again with a smaller input. */
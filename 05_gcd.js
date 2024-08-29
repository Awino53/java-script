// Write a function that finds the greatest common divisor of two numbers.
//This function uses the Euclidean algorithm to find the greatest common divisor (GCD) of two numbers:
/* Base case: If b is 0, the GCD is a.
Recursive case: The GCD of a and b is the same as the GCD of b and the remainder of a divided by b.
The function recursively calls itself until the base case is reached, and then it returns the GCD. */
function gcd(a, b) {
    // Base case: If b is 0, the GCD is a
    if (b === 0) {
      return a;
    }
  
    // Recursive case: Calculate the GCD of b and the remainder of a divided by b
    return gcd(b, a % b);
  }
  
  // Example usage:
  console.log(gcd(12, 18)); // Output: 6
  console.log(gcd(24, 36)); // Output: 12
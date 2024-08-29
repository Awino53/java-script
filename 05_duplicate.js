//Write a function `removeDuplicates(nums)` that takes an array of numbers `nums` and removes any duplicate numbers, returning a new array without duplicates.

/* **Scenario:**  
You are developing a survey application where users can select multiple options. Write a function to remove duplicate selections from the user's responses to ensure accurate data analysis. */

function removeDuplicates(nums) {
    const uniqueNums = []; // Create an empty array to store unique numbers
    const numSet = new Set(); // Create a new Set to keep track of unique numbers
  
    for (let num of nums) { // Iterate through each number in the input array
      if (!numSet.has(num)) { // Check if the number is already in the Set
        uniqueNums.push(num); // If not, add it to the uniqueNums array
        numSet.add(num); // Add the number to the Set to mark it as seen
      }
    }
  
    return uniqueNums; // Return the array containing only unique numbers
  }
  // Example usage:
const nums = [1, 2, 3, 2, 4, 5, 4];
const uniqueNums = removeDuplicates(nums);
console.log(uniqueNums); // Output: [1, 2, 3, 4, 5]
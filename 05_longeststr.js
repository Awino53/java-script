//Write a function `longestSubstringWithoutRepeating(str)` that takes a string `str` and returns the length of the longest substring without repeating characters.

function lengthOfSubstr(input){
  let lengthsOfSubstring=[]
  for(let outerIndex=0;outerIndex<input.length;outerIndex++){
    let substr=input.charAt(outerIndex)
    for(let innerIndex = outerIndex + 1; innerIndex < input.length; innerIndex++ ){
      if(substr.includes(input.charAt(innerIndex))){
          break
      }else{
          substr = substr + input.charAt(innerIndex)                
      }
  }
  console.log(substr);
  lengthsOfSubstring.push(substr.length)
  
}
return Math.max(...lengthsOfSubstring)
}

console.log(lengthOfSubstr("character"));

  
    

  //This function works by using a sliding window approach:Initialize start and end pointers to 0, maxLen to 0, and an empty charIndex object to store the last index of each character.While end is less than the length of the string:Get the current character at end.If the current character is already in the charIndex object and its index is greater than or equal to start, update start to the index of the previous occurrence of the character plus 1.Update the charIndex object with the current character's index.Update maxLen with the maximum of its current value and end - start + 1.Increment end.Return maxLen.

  //Write a function `longestSubstringWithoutRepeating(str)` that takes a string `str` and returns the length of the longest substring without repeating characters.

  function longestSubstringWithoutRepeating(str) {
    // Initialize variables
    let start = 0; // Starting index of the current substring
    let end = 0; // Ending index of the current substring
    let maxLen = 0; // Maximum length of the substring without repeating characters
    let charIndex = {}; // Object to store the last index of each character
  
    // Iterate through the string
    while (end < str.length) {
      // Get the current character
      let currentChar = str[end];
  
      // If the current character is already in the charIndex object and its last occurrence is after the current start,
      // it means there's a repeating character. Update start to avoid repetition.
      if (charIndex[currentChar] !== undefined && charIndex[currentChar] >= start) {
        start = charIndex[currentChar] + 1; // Move start to the index after the previous occurrence
      }
  
      // Update the charIndex object with the current character's index
      charIndex[currentChar] = end;
  
      // Update maxLen if the current substring length is greater than the previous maximum
      maxLen = Math.max(maxLen, end - start + 1);
  
      // Move the end pointer to the next character
      end++;
    }
  
    // Return the maximum length
    return maxLen;
  }
  console.log();
  
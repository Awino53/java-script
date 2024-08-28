//write a funtion that calculates the factorial of a given number
/* function factorial(number){
    let result = 1;
    for (let index = 1; i <= number; i++) {
} 
}
console.log(factorial (5)); // Output: 120 */


//write a function that counts the number of vowels in a given string
const testString="write a function that counts the number of vowels in a given string"
const vowels=["a","e","i","o","u"]
//loop through the testString characters
//check if each character is found/included in the vowels arrays
//if present, increase counter (a variable holding the number of vowels found)
//return the final count after the loop--number of all vowels in the test string
function  countVowels(str) {
    let numberOfVowels = 0;
    let charactersArray=str.split("")
    charactersArray.forEach(function checkIfVowel(letter){
        if (vowels.includes(letter.toLowerCase()) ){
            numberOfVowels++
        }
    } )
    console.log("you string has " + numberOfVowels + "vowels");

    return numberOfVowels;
    
    
}
countVowels(testString);
countVowels("albert");




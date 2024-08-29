//control structure --sequence, conditional, loop/iteration
if ( 70>20) {
    console.log("conditional statement");
    console.log("conditional statement");
    console.log("conditional statement");
    console.log("conditional statement");
    
}else{
    console.log("it was false");
    console.log("it was false");

}
//garding system
let mark=20
if (mark<40) {
    console.log("grade e");
}else if (mark<60) {
        console.log("grade c");   
}else if(mark<80){
    console.log("grade b");
}else{
    console.log("grade a");
}
//rewrite this grading system using the switch statement
//let mark = 20;

switch (true) {
  case mark < 40:
    console.log("grade e");
    break;
  case mark < 60:
    console.log("grade c");
    break;
  case mark < 80:
    console.log("grade b");
    break;
  default:
    console.log("grade a");
}
/* In this rewritten code, the switch statement uses
 the expression true as the switch expression. 
 Each case statement checks a condition using the < operator.
  The break statement ensures that only the matching code block is executed. */


//loop/iterate--while,do while,for loop
let num=20
while(num<50) {
    console.log("hello, we are at number" + num);
    //num++ //incrementor
    num++ //incrementor
    
}
//rewrite this loop using a for loop
for (let num = 20; num < 50; num++) {
    console.log("hello, we are at number " + num);
  }
  /* In the for loop:
Initialization: let num = 20 initializes the num variable to 20.
Condition: num < 50 checks if the loop should continue.
Increment: num++ increments the num variable after each iteration.
The for loop provides a more concise and efficient way to achieve the same result as the while loop in this case. */

//write a function that counts prime numbers between a given range of numbers
//getPrime(23,90) --29,31,
function getPrime(startVal, lastValue){
    if(lastValue<=startVal){
        console.log("invalid range"); //error checking
        return 0
        
    }
    for(let number=startVal+1;number<lastValue;number++){
        console.log("testing number:" +number);
        let isPrime=true;
        for(let divisor=2; divisor<number; divisor++){
            if(number%divisor==0){
                console.log(number + " is not a prime number");
                isPrime=false;
            }
        }
        if(isPrime){
            console.log(number + " is a prime number");
        }else{
            console.log(number + "is not a prime number");
            
        }
        
    }
}
getPrime(23,90) //testing the function
//The function getPrime takes two parameters, startVal and lastValue, representing the range of numbers
//It first checks if the range is valid (i.e., startVal is less than or equal
getPrime(20253,90090)
//getPrime("twenty three", 90)
//getPrime(20253, 90090)


//write a function that determines if a given word or number is a palindrome
/* a palindrome is avalue that reads the same from both front and the back. eg. dad, 454,999*/
function checkIfPalindrome(value){
      let reversedValue=""
      if (typeof value == "string"){
        //reverse the string
        for(let index=value.length-1; index>=0; index--){
            reversedvalue=reversedValue +value.charAt(index)
            console.log(reversedValue);
            
        }
        if (value == reversedValue) {
            return true
        }else{
            return false
        }
      }else{
        console.log("testing a number");
        //reverse number
      }
}
console.log(checkIfPalindrome("dog"));//god
console.log(checkIfPalindrome("albert"));//-6
console.log(checkIfPalindrome("454"));

let someNumber=56
console.log();

// Write a function that counts the number of vowels in a given string.
// Write a function that finds the greatest common divisor of two numbers.
// Write a function that calculates the factorial of a given number.






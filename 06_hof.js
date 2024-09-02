//hogher order funtions-- functions that take other functions as arguments and/or return a funtion
//the funtion passed into another function as an argument is reffered to as a callback function
//callback functions are used to perform a specific task in a function that is passed to another function as

function testOne(){
    console.log("running test one function");
}
function testTwo(name,cbFunc){
    //long process...after
    console.log("running test two function");
    console.log(name.toUppercase());
    //done with long
    cbFunc();//hello world
    
}

testTwo("albert",function doSomething(){console.log("hello world")});
testTwo("albert",testOne);
//map , reduce ,forEach, sort, ---hof
//map()-- returns a new array with the results of applying a provided function on every element in this array.
//reduce()-- applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//forEach()-- calls a provided function once for each array element.
//sort()-- sorts the elements of an array in place and returns the array.
//filter()-- creates a new array with all elements that pass the test implemented by the provided function
//some()-- tests whether at least one element in the array passes the test implemented by the provided
//every()-- tests whether all elements in the array pass the test implemented by the provided function
//find()-- returns the first element in the array that satisfies the provided testing function.
let myColors=["red","green","blue","brown"]

myColors.forEach (function paintingScreen(color){
    console.log("painting  Screen With Color", +color + "which at index"+ index);
}) 
myColors.forEach(testOne)

//map array funtion/method - run a provided callback function on each element of the given array, and return a new array with new elements
//map()-- returns a new array with the results of applying a provided function on every element in

function convertToUppercase(currentColor){
    return currentColor.toUpperCase();
}
let resultingMap=myColors.map(convertToUppercase)
console.log(resultingMap);
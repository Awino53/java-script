//a funtion is a reusable block
//functions are defined using the funtion keywork or using an arrow symbol, then to use the code , we call//invoke the function
//functions can take arguments and return values
//functions can be used to perform complex tasks, like calculations, data manipulation, and more
//functions can be used to create reusable code, making it easier to maintain and update

function getSquare(x){
    console.log("getting square start");
    console.log(x*x);
    let result=x*x 
    console.log(result);
    console.log("getting square done");
    //html p
       
}
getSquare(32);//calling the func
getSquare(3)
getSquare(11)

function getSurfaceAreaCuboid(l,w,h){
    let front= (l*w)*2
    let top= (l*w)*2
    let side=(h*w)*2
    let totalSurface=front+top+side
    console.log("surface area is " + totalSurface + "cm square");
    return totalSurface

    
}

let res1=getSurfaceAreaCuboid(10,5,7)
let res2=getSurfaceAreaCuboid(14,50,17)
let res3=getSurfaceAreaCuboid(110,50,77)
//

console.log("ksh. 45,075");

function formatMoney(number){
    console.log("ksh." + number);
    
}
// to store the outcome of a function call, the fuction can have a return statement
console.log(res1);
console.log(res2);
//write a function that returns the area of a square geven length and the width
function getAreaOfSquare(length,width){
    let area = length * width
    return area
}
let res4=getAreaOfSquare(3,4)
console.log(res4);

//write a javaScript funtion that takes the radious of a circle as input/argument and returns its area
//7 =====3.142*7*7==154
function getAreaOfCircle(radius){
    const PI=3.142
    let area = PI * radius * radius
    return area
}
let res5=getAreaOfCircle(7)
let res6=getAreaOfCircle(456)
console.log(res5);
console.log(res6);


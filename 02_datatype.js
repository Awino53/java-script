//strings, numbers, boolean, null, undefined-- primitive/simple datatypes
//objects, arrays and functions-- non-primitives/complex data types 

//strings-- characters enclosed in quotes "" '' 
const currentColor="brown"
const admin="estherojul53@gmail.com"
const something="socialwork"
const date="38790562376"
console.log(currentColor,admin,something,date)

//numbers-- whole numbers or decimal numbers
const age= 25 
const rate=2.05

//boolean-- true or false 
const isAdult=true
const isMale=false
const darkModeOn=true
const isLoggedIn=false

//null and undefined-- empty values--  a place holder used in absence of default value
const name=null
const average=null
const isOnline=undefined


//undefined--javascript's value assigned to a defined variable that was not assigned a value
let newUser
let total

//types of operator can be used to check a variable or value's data type
console.log(typeof currentColor); //string
console.log(typeof isAdult); //boolean
console.log(typeof name); //object
console.log(typeof newUser); //undefined
console.log(typeof date);//string
console.log(typeof rate); //number

//Object -- a collection of data in a format like a real world object--it has properties and funtions/methods/actions
//objects are made up of key values pairs enclose in curly brackets{}-- object literals
let television={
    brand:"sony",
    model:"4k",
    color:"black",
    sizeInInches:63,
    solid:false,
    isOn:true,
    technicalSpecs :{
        resolution:"4k",
        refreshRate:"120hz",
        pixels:"15000*1200",
        sN:34552
    }
}
const laptop={
    brand:"lenovo",
    model:"ideapad",
    color:"silver",
    sizeInInches:15.6,
    solid:true,
    isOn:false,
    price:30000
    
}
console.log(television)
//acessing value in an object we use that dot notation
console.log(television.price);
console.log(laptop.price);
console.log(television.technicalSpecs.pixels);
//or we can use bracket notation
console.log(television["price"]);

//array -- is an zero- indexed list of items/data/elements
const students=["albert","kevin","victor"]
const staff=[{name:"awino",age:24},{name:"ntabo",age:19},"cherop",800,["web","data"],true,null] 
//to access data/elements of an array we use bracket notation with the indexes of the elements starting with 0 for the first element. 
console.log(students[0]);
console.log(staff[0]);
console.log(staff[1].age);//second staff member age
//we can also use the length property to access the last element of an array

//log "data" from staff array
console.log(staff[4]);
console.log(staff[4][1]);//data

//function --a reusable block of code
function nameOfFunction(){
    //code to execute/run when function is invoked/called
    console.log("function called");
    console.log("Running!!!");
    
}
function scream(){
    console.log("uuuuiiiii!!!");
    console.log("aaooo.");
    

}
scream()
scream()
scream()
scream()
//our didcount rate is 30%
function calculateDiscount(initial){
    //initial is an argument for this function
    console.log(0.3* initial);
    
}
calculateDiscount(900)//270
calculateDiscount(1000)
calculateDiscount(636)

/* function calculateDiscount(initial){
    console.log((rate/100) * initial );
    
}
calculateDiscount(900, 15)//
calculateDiscount(1000, 20)
calculateDiscount(636, 11) */

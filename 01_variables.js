 //variables provide a way to store data as your application is running e.g. the current logged in user, cart items,states e.t.c 
 // in js, we define/create variables using const, let or var keywords with a variable name, an assignment operator and the valeu to be stored. 
 //examples 
 const cartOpen = true; /* exaple= lets name it user1 so const user1=jane */
 let username = "Awino";
 //const and let are block scoped--- they are only accessible within a block{}of a code 
 //const is used for constant/non-changing variables
 //let is used for variables whose values change as the proram runs
 //var is function scoped--- it is accessible within the function it is declared in and all the functions
 var email = "estherojul53@gmail.com";

 //changing values 
 console.log(username);
 username = "Esther";  /* user2=esther; */
 console.log(username); /* console.log(user2) */
 console.log(cartOpen);  /* console.log(user1) */
 //cartOpen = false;  /* user1="sharon"; *///error-- you cannot change a value of a constant variable
 console.log(cartOpen); /* console.log(user1) */ 
 //console.log(user1); //error-- user1 is not defined in this scope 

//browser alerts --input-output 
const response =confirm("are you ready for this") 
console.log(response); //true or false /* //a boolead */ 
const age =prompt("how old are you?"); 
console.log(age); //user input 
//prompt() is used to get user input and returns the input as a string 
//forms are the standard way of getting user input
//stands for the document object model
//DOM is a tree-like data structure that represents the structure of an HTML or XML document
//It contains a collection of nodes that represent the elements of the document
//Each node in the DOM tree has a set of properties and methods that can be used to access
//its a programming interface for web documents (html,xml,>>usin python)
//we can use the DOM to manipulate the structure and content of a web page
//we can use the DOM to add, remove, or modify elements, attributes, and text content
/* the basic structure of the dom
the tree structure>>>it represents the document inform of a tree structure with nodes where each node represents a part of the documents (tsgs, attributes,selectors)
>>the root/parent node is adocument object itself
>>the child nodes are the elements of the document
>>the leaf nodes are the text content of the document
>>the DOM tree is a hierarchical structure, where each node has a parent and child nodes
>>the DOM tree is a dynamic structure, where nodes can be added, removed, or modified at
runtime
>>each node has aset of properties and methods that can be accesed and used tomanipulate the document manipulation of these methods is done via javascript where you can add,remove,modify,attributes in the document
event>>a specific moment of occasion that happens with specific target
the offers something we call event(event handler)this is where  aparticular function is called to execute once an event happens
*/
//dom element by id
//document.getElementById("id")
let myButton=document.getElementById("first")
let myParagraph=document.getElementById("new")

myButton.addEventListener("click",()=>{
    myParagraph.style.color="margenta"
    myParagraph.backgroundColor="yellow"
});
alert("hello customer, tunauza ndizi na bei ndogo");

/* create to tags in html and a paragraph that when the window is loaded the color of the text is green then when the button is clicked , it checks whether the color of the paragraph is green, else if its another color it changes the color to green, else if it turns red (te default value) */

//create 2 tags in html a button and a paragraph that when the window is loaded the color of the text is default black, when the button is clicked it checks wheather the color of the paragraph is green else if its another it changes to green else returns to default(red)
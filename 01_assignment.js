////discuss variable naming rules in javascript and naming convention
/* Variable Naming Rules:
*Start with a letter: Variables must begin with a letter (a-z, A-Z) or an underscore (_).
*Use only valid characters: The rest of the variable name can contain letters, numbers, underscores, and dollar signs ($).
*Avoid reserved keywords: Don't use JavaScript reserved words like var, let, const, if, else, etc., as variable names.
*Case sensitivity: JavaScript is case-sensitive, so myVariable and myvariable are considered different variables.
*Descriptive names: Choose names that clearly indicate the variable's purpose. Avoid cryptic or ambiguous names. */

/* Naming Conventions:
While there are no strict naming conventions enforced by JavaScript, following commonly accepted guidelines can improve code readability and maintainability:
*Camel case: Use camel case for multi-word variable names, where the first word is lowercase and subsequent words start with uppercase letters (e.g., myVariable, firstName).
*Pascal case: For class names, use Pascal case, where all words start with uppercase letters (e.g., MyClass).
*Underscore notation: While less common in JavaScript, underscore notation can be used for private or internal variables (e.g., _privateVariable).
*Avoid abbreviations: Generally, avoid using abbreviations in variable names unless they are widely understood and commonly used.
*Be consistent: Choose a naming convention and stick to it throughout your codebase to ensure consistency and readability. */

/////differentiate between accessing by values and accessing by reference in regard to accessing variables/data
/* In JavaScript, variables can be accessed by value or by reference. This distinction is crucial in understanding how data is stored and manipulated within the language.
Accessing by Value
Data Storage: When a variable is accessed by value, a copy of the data is stored in a new memory location.
Changes: Modifying the value of one variable does not affect the value of another.
Data Types: Primitive data types (numbers, strings, booleans, null, and undefined) are always accessed by value.
let num1 = 10;
let num2 = num1;

num1 = 20;
console.log(num1); // Output: 20
console.log(num2); // Output: 10 
In this example, num2 is a copy of num1. Changing num1 does not affect num2.

Accessing by Reference
Data Storage: When a variable is accessed by reference, it stores a memory address pointing to the actual data.
Changes: Modifying the data through one variable will affect the data accessed through another variable pointing to the same memory location.
Data Types: Objects (including arrays and functions) are accessed by reference.
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]
In this example, both arr1 and arr2 point to the same array in memory. Modifying arr1 also changes arr2.   

Key Differences:

Feature      	Access by  Value	Access by Reference
Data Storage	Copy of the data	Memory address
Changes       	Independent	        Shared
Data Types	    Primitive types	    Objects*/

///discuss the difference between primitive and non-primitive data types in JavaScript
/* Primitive vs. Non-Primitive Data Types in JavaScript
JavaScript distinguishes between two primary categories of data types: primitive and non-primitive (or reference).

Primitive Data Types
Primitive data types are immutable, meaning their values cannot be changed once they're created. They are stored directly in memory.
*Number: Represents numerical values (integers and floating-point numbers).
Examples: 10, 3.14, -5
*String: Represents sequences of characters.
Examples: "Hello", 'world'
*Boolean: Represents true or false values.
Examples: true, false
null: Represents the absence of a value.
Example: null
undefined: Represents a variable that has been declared but not yet assigned a value.
Example: let x; (x is undefined)
Symbol: Represents a unique identifier.
Example: const symbol = Symbol('unique');
Non-Primitive (Reference) Data Types
Non-primitive data types, also known as reference types, are mutable and can be changed after they're created. They are stored as references to objects in memory.

Object: Represents a collection of key-value pairs.
Example: const person = { name: "Alice", age: 30 };
Array: Represents an ordered collection of elements.
Example: const numbers = [1, 2, 3];
Function: Represents a block of code that can be executed.
Example: function greet(name) { console.log("Hello, " + name); }
Key Differences:

Feature	Primitive Data Types	Non-Primitive (Reference) Data Types
Mutability	Immutable	Mutable
Storage	Stored directly in memory	Stored as references to objects
Assignment	Creates a copy of the value	Creates a reference to the same object
Comparison	Compares values directly	Compares references */
//practice accessing data in arrays and objects --dot and bracket notations
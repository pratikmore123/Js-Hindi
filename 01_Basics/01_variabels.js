const accID=101
let accName="Pratik"
var accVar="sds"
accState="sdf"



console.log(accID);
console.table([accID, accName, accVar, accState]);


// 7 Primitive Data Types
let name = "Pratik";        // String
let age = 25;               // Number
let isLearning = true;      // Boolean
let address;                // Undefined
let score = null;           // Null
let uniqueId = Symbol("id"); // Symbol
let bigNumber = 900719925124740999n; // BigInt

// Reference Types
let person = { name: "Pratik", age: 25 };  // Object
let colors = ["red", "green", "blue"];     // Array (is an object)
function greet() { console.log("Hi"); }     // Function

let arr1=[1,2]
let arr2={name:"pdaf"}

// Check type
console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isLearning); // "boolean"
console.log(typeof address);    // "undefined"
console.log(typeof score);      // "object" (null is an object - JS quirk!)
console.log(typeof person);     // "object"
console.log(typeof colors);     // "object"
console.log(typeof greet);      // "function"

// What's the output?


console.log("arar")
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof NaN);
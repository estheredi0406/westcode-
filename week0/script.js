//PART 1 : PRIMITIVE VARIABLES means msot basic type of data. Holds a single value, nothing more.

const market = "Kejetia";   // value won't change → use const
let price = 8;              // value will change → use let
var old = "ignore this";    // old way → never use

// 1. String Primitive  — text
const vendorName = "Ama Owusu";

// 2. Number Primitive 
const priceGHS = 15.50;

// 3. Boolean Primitive 
const isOpen = true;

// 4. Array — ordered list, is also a data type but not primitive as it holds more than a single value. This is a reference type.
const crops = ["yam", "cassava", "plantain", "tomato"];
//   indexes:    0        1           2          3

//INDEX ACCES
console.log(crops[0]);  // "yam" — first element, index 0
console.log(crops[2]);  // "plantain"
console.log(crops[10]); // undefined — index doesn't exist

//ARRAY PROPERTY 

console.log(crops.length); // 4 — number of elements
// Last element trick:
console.log(crops[crops.length - 1]); // "tomato"



//ARRAY MUTATION

crops.push("pepper");   // adds element to end — returns new length
crops.pop();            // removes last element — returns removed element
crops.unshift("onion"); // adds element to beginning
crops.shift();          // removes first element


// 5. Object — one thing with many properties. It is an unordered collection of key-value pairs. 

// Object literal declaration
const product = {
  name: "Tomatoes",      // string property
  priceGHS: 8,           // number property
  inStock: true,         // boolean property
  tags: ["fresh", "local"] // array property — objects can hold anything
};


//Property access

// Dot notation — use when you know the property name
console.log(product.name);       // "Tomatoes"
console.log(product.priceGHS);   // 8

// Bracket notation — use when property name is dynamic
console.log(product["name"]);    // "Tomatoes"

const key = "inStock";
console.log(product[key]);       // true — bracket notation shines here


//Property mutation 

product.priceGHS = 10;           // mutating an existing property
product.seller = "Akosua";       // adding a new property dynamically
delete product.tags;             // removing a property



// Template literals 

//A template literal is a string that allows string interpolation and multi-line strings using backtick syntax.
const item = "Yam";
const pricee = 20;
const markett = "Kejetia";

// String concatenation — old way, avoid
const msg1 = "Fresh " + item + " costs " + price + " GHS at " + market;

// Template literal with string interpolation — always use this
const msg2 = `Fresh ${item} costs ${price} GHS at ${market}`;

// The ${} is called an interpolation expression — anything inside is evaluated
const msg3 = `Price with tax: ${price * 1.15} GHS`;  // expressions work
console.log(msg3); // "Price with tax: 23 GHS"

// Multi-line string — no special characters needed
const announcement = `
  Market: ${market}
  Item: ${item}
  Price: ${price} GHS
`;
console.log(announcement); 

































// 6. Null / Undefined
const phone = null;   // deliberately empty
let delivery;         // not set yet — undefined



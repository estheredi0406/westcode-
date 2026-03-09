console.log(`Roseta sells at Makola in Kumasi for 8 GHS`)
console.log(`Mary sells at Makola in Tema for 9 GHS`)
console.log(`Essi sells at Makola in Accra for 12 GHS`)


function describeVendor(vendor) {
  console.log(`${vendor.name} sells at ${vendor.market} in ${vendor.city} for ${vendor.priceGHS} GHS`)
}

describeVendor(vendors[0]) // Roseta sells at Makola in Kumasi for 8 GHS
describeVendor(vendors[1]) // Mary sells at Makola in Tema for 9 GHS
describeVendor(vendors[2]) // Essi sells at Makola in Accra for 12 GHS


//Anatomy of a function

function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}

/*
function — function declaration keyword
calculateTotal — function name — use camelCase always
price, quantity — parameters — placeholders for the values you'll pass in
{ } — function body — the code that runs
return — return statement — sends a value back to whoever called the function
calculateTotal(8, 5) — function call / function invocation
8, 5 — arguments — the actual values passed in when calling */


// price and quantity are PARAMETERS — placeholders in the definition
function calculateTotal(price, quantity) {
  return price * quantity;
}

// 8 and 5 are ARGUMENTS — real values passed at invocation
const total = calculateTotal(8, 5);
console.log(total); // 40


//RETURN VALUES 

// price and quantity are PARAMETERS — placeholders in the definition
function calculateTotal(price, quantity) {
  return price * quantity;
}

// 8 and 5 are ARGUMENTS — real values passed at invocation
const totall = calculateTotal(8, 5);
console.log(totall); // 40



//WAYS TO WRITE FUNCTIONS 
// 1. Function declaration — hoisted, can be called before it's defined
function greet(name) {
  return `Welcome to the market, ${name}!`;
}

// 2. Function expression — stored in a variable, not hoisted
const greet = function(name) {
  return `Welcome to the market, ${name}!`;
};

// 3. Arrow function — modern, concise syntax
const greet = (name) => {
  return `Welcome to the market, ${name}!`;
};

// Arrow function shorthand — when body is a single expression
const greet = (name) => `Welcome to the market, ${name}!`;


/*Technical terms:

Function declaration — function name() {} syntax
Function expression — function stored in a variable
Arrow function — () => {} syntax — modern ES6 syntax
Hoisting — function declarations are moved to the top of scope automatically, so they can be called before they appear in the file*/ 


//DEFAULT PARAMETERS 

function greet(name) {
  return `Welcome, ${name}!`;
}

console.log(greet());        // "Welcome, undefined!" — not great

// Default parameter — fallback value if argument is missing
function greet(name = 'Vendor') {
  return `Welcome, ${name}!`;
}

console.log(greet());        // "Welcome, Vendor!"
console.log(greet('Ama'));   // "Welcome, Ama!"

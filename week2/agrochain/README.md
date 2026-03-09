## Lesson 4 - DOM Manipulation

### What I learned 

- The DOM is the browser's tree of every HTML eleement
- JavaScript can select , read, change and create elenets as well as delete
- getElementById — selects elements by their id
- textContent — reads and sets plain text of an element
- innerHTML — sets HTML content inside an element
- createElement — creates a new element in memory
- appendChild — adds element to the page inside a parent
- classList.add — adds a CSS class to an element
- Ternary operator — one line if/else: condition ? "yes" : "no"

### What I Built
Generated 5 AgroChain farmer cards from a JavaScript array.
No hardcoded HTML — pure data-driven UI.
Out of stock cards styled differently using dynamic class names.
Farmer count updates automatically when array changes.

### Key Insight
The data lives in JavaScript. HTML is generated automatically.
Add a farmer to the array — a card appears on screen.
This is exactly how React works under the hood.

### Bug I Fixed
ReferenceError — was calling farmers.length before declaring 
the farmers array. Declaration order matters. Always declare 
before you use.
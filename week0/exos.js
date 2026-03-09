let market = 'Makola';
market = 'Ikejaa'

console.log(market);


let products = [
    'Cassava',
    'Gombo',
    'Yam',
    'onions'
]

console.log(products[0])
console.log(products[products.length - 1])

products.push('banana')

console.log(products)



let vendor = {
    name: 'Akosua',
    product: 'Tomatoes',
    market: 'Makola',
    location: 'Building B',
    gender: 'female',
}

console.log(vendor.name)
console.log(vendor.gender)

console.log(vendor['market'])

vendor.date = 'mondays'

console.log(vendor)

console.log(`${vendor.name} is the best in ${vendor.market}`)















let vendors = [
    {name: 'Roseta', market: 'Makola', city: 'Kumassi', priceGHS: 8},
    {name: 'Mary', market: 'Makola', city: 'Tema', priceGHS: 9},
    {name: 'Essi', market: 'Makola', city: 'Accra', priceGHS: 12}
]
 

console.log(vendors[1]) 

console.log(vendors[2].city)

console.log(`${vendors[0].name} sells at ${vendors[0].city} at ${vendors[0].market}`)
console.log(`${vendors[2].name } sells at ${vendors[2].city} at ${vendors[2].market}`)



function describeVendor(vendor) {

    console.log(`${vendor.name} sells at ${vendor.market} in ${vendor.city} at price ${vendor.priceGHS}`)  
}


describeVendor(vendors[0])
describeVendor(vendors[1])
describeVendor(vendors[2])



//Exo 2

function calculateTotal(price, quantity) {

    return price * quantity
}


const total = calculateTotal(5, 6)

console.log(`total cost: ${total}`)


//Exo 3

function greetBuyer (name = 'Valued Customer') {

    return `Welcome to Makola Market ${name}`
}



console.log(greetBuyer('Alice'))

console.log(greetBuyer())


//Exo 4

function getPriceWithTax(price, taxRate = 0.15) {

    return `Price after tax: ${price + taxRate* price} GHS`
}


console.log(getPriceWithTax(25, 0.05))
console.log(getPriceWithTax(1000)) 
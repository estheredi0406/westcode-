const products = [
    {name: 'Tomatoes', price: 8, seller: 'Ama', market: 'Makola'},
    {name: 'onions', price: 9, seller:'Akos', market: 'Akoke'},
    {name: 'Plantain', price: 10, seller: 'Amina', market: 'Bojida'}
]


console.log(`Total products: ${products.length}`);

console.log(`First product: ${products[0].name}`);

console.log(`${products[1].name} costs ${products[1].price} GHS`);

const key = 'Seller';
console.log(`Seller of plaintain: ${products[2][key]}`);





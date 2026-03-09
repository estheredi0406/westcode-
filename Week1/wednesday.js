const farmers = [
  { name: "Kofi Mensah", crop: "Yam", priceGHS: 12, region: "Ashanti", inStock: true },
  { name: "Ama Owusu", crop: "Tomatoes", priceGHS: 8, region: "Greater Accra", inStock: true },
  { name: "Yaw Darko", crop: "Cassava", priceGHS: 5, region: "Volta", inStock: false },
  { name: "Abena Asante", crop: "Plantain", priceGHS: 7, region: "Western", inStock: true },
  { name: "Kwame Boateng", crop: "Pepper", priceGHS: 15, region: "Ashanti", inStock: false }
]




/* Exercise 6 — method chaining ❌ NOT DONE
```
In ONE chain — filter farmers that are inStock,
then map them to this string:
"[name] — [crop] — [price] GHS"

Store in const availableListings
Print it
```
 */

const availableListings = farmers
.filter(farmer => farmer.inStock)
.map(farmer => `${farmer.name} - ${farmer.crop} - ${farmer.priceGHS} GHS` )




/*### Exercise 5 — find ❌ NOT DONE
```
Task 1: Find the farmer who grows "Tomatoes"
        Store in const tomatoFarmer
        Print their full name

Task 2: Find the first farmer whose priceGHS 
        is greater than 10
        Print their name and price */



const firstFarmer = farmers.find(farmer => farmer.priceGHS > 10)

console.log(`${firstFarmer.name} - ${firstFarmer.priceGHS}`)

const tomatoFarmer = farmers.find(farmer => farmer.crop === 'Tomatoes')







/*Exercise 4 — filter ❌ NOT DONE
```
Task 1: Create availableFarmers — only farmers 
        where inStock is true

Print it. 

Task 2: Create ashantiFarmers — only farmers 
        from "Ashanti" region
        Print it.*/


const availableFarmers = farmers.filter(farmer => farmer.inStock)
console.log(availableFarmers)

const ashantiFarmers = farmers.filter(farmer => farmer.region === "Ashanti" )


/*### Exercise 3 — map ✅ DONE
```
Create a new array called listings where each 
element is a string:
"Kofi Mensah - Yam - 12 GHS - Ashanti"
```*/ 


const listings = farmers.map(farmer => 
    `${farmer.name} - ${farmer.crop} - ${farmer.priceGHS} - ${farmer.region}`)

console.log(listings)



/*### Exercise 2 — forEach ✅ DONE
```
Same output as Exercise 1 but using forEach

array.method((item, index) => {
    // what you want to do
})
```
 */


farmers.forEach(farmer => {
    console.log(`${farmer.name } grows ${farmers.crop}`)
})


/* ### Exercise 1 — for loop ✅ DONE
```
Print every farmer's name and crop:
"Kofi Mensah grows Yam"
``` */


for(let i = 0; i < farmers.length; i++) {

    console.log(`${farmers[i].name} sells ${farmers[i].crop} `)
}




/*### Exercise 2 — forEach ✅ DONE
```
Same output as Exercise 1 but using forEach
```
 */




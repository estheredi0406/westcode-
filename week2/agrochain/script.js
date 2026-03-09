

/*Task 1 — Select and update (10 min)
Without touching index.html — use JavaScript only to:

Select the h1 and change its text to "AgroChain — Farm to Table"
Select #farmer-count and set its text to "5 farmers available" */






const farmers = [
  { name: "Kofi Mensah", crop: "Yam", priceGHS: 12, region: "Ashanti", inStock: true },
  { name: "Ama Owusu", crop: "Tomatoes", priceGHS: 8, region: "Greater Accra", inStock: true },
  { name: "Yaw Darko", crop: "Cassava", priceGHS: 5, region: "Volta", inStock: false },
  { name: "Abena Asante", crop: "Plantain", priceGHS: 7, region: "Western", inStock: true },
  { name: "Kwame Boateng", crop: "Pepper", priceGHS: 15, region: "Ashanti", inStock: false },
  { name: "Kwame Boateng", crop: "Pepper", priceGHS: 15, region: "Ashanti", inStock: false }
]

const title = document.querySelector('h1')

title.textContent = "AgroChain- Farm to Table" 

const count = document.getElementById('farmer-count')

count.textContent = `${farmers.length} farmers available`



/*Then using forEach, createElement, classList.add, innerHTML and appendChild — generate one card per farmer inside #listings-container.
Each card must show:

Farmer name
Crop
Price in GHS
Region
Stock status — "In Stock" or "Out of Stock"

Open index.html with Live Server. You should see 5 cards on screen.*/


const container = document.querySelector('#listings-container')

farmers.forEach(farmer => {


    const card = document.createElement('div')

    card.classList.add('card') 
    card.classList.add(farmer.inStock? "in-stock" : "out-of-stock")



    card.innerHTML = `
    <h2> ${farmer.name}</h2>
    <p> ${farmer.crop}</p>
    <P> ${farmer.priceGHS} GHS</p>
    <P> ${farmer.region}</p>
    <p>${farmer.inStock ? "In Stock" : "Out of Stock"}</p> 
    `
    container.appendChild(card)
})
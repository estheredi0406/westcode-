
const members = [
{name: 'Elisa', amountGHS: 45, hasPaid: true, week: 1, phone: '+233565696654'
},
{name: 'Marie', amountGHS: 3780, hasPaid: true, week: 2, phone: '+233589688666'},
{name: 'Akosua', amountGHS: 30, hasPaid: true, week: 2, phone: '+233589689666'},
{name: 'Aba', amountGHS: 90, hasPaid: false, week: 2, phone: '+233589655216'},
{name: 'Joloe', amountGHS: 30, hasPaid: true, week: 1, phone: '+233589655678'},
{name: 'Mariam', amountGHS: 780, hasPaid: false, week: 2, phone: '+23362536545'},
{name: 'Teflan', amountGHS: 300, hasPaid: false, week: 2, phone: '+233589657896'},
]


const title = document.querySelector('h1')
const memberCount = document.querySelector('#totalMembers')
const totalAmount = document.querySelector('#totalAmount')
const searchInput = document.querySelector('#search')
const paidBtn = document.querySelector('#btn-paid')
const resetBtn = document.querySelector('#btn-reset')
const membersContainer = document.querySelector('#members-container')


//set up the content for membercount


memberCount.textContent = `Total: ${members.length}`

const total = members.reduce((sum, member) => sum + member.amountGHS, 0)

totalAmount.textContent = `Total Amount: ${total} GHS`



//RenderMembers function

function renderMembers (membersToRender)  { 

    membersContainer.innerHTML = ''
    membersToRender.forEach((member)=> {

    const card = document.createElement('div') // we have creaed a div
    card.classList.add('card') // we have created a css class called card 
    card.classList.add(member.hasPaid ? 'paid' : 'unpaid') // conditinal class using ternary operator

    card.innerHTML = ` 
    <h2>${member.name}</h2>
    <p>${member.amountGHS}</p>
   <span class="badge ${member.hasPaid ? 'badge-paid' : 'badge-unpaid'}">${member.hasPaid ? 'Paid' : 'Unpaid'}</span>
    <p>${member.week}</p>
    <p>${member.phone}</p> 
    `
    membersContainer.appendChild(card) 
}) //inneerhtml inserts html inside the card 

}

renderMembers(members) 

// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')

document.getElementById("input-btn").addEventListener("click", saveInput)

function saveInput(){
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
}



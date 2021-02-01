// TODO: PART 2 - Listen for Custom Event and Display Associates on DOM
// Which Component Needs to Listen for the "showAssociates" event?
// ** New AssociatesModalComponent
// Create ModalComponent that takes in a Criminal object and returns some HTML representation of a criminal’s associates
// Add EventListener to Event Hub that listens for "showAssociates" event
// TEST - need event listener on DOM >> Where? Button Component
// Needs a place to go in the DOM - add Modal Container to index.html
// Get the Criminal ID from the detail
// Find the criminal from the array of criminals (>> import useCriminals)
// Call the ModalComponent function and pass in the criminal as an argument and store HTML string in a variable
// Add the resulting HTML to the DOM
// ADD MODAL CSS
// Import modal.css to main.css

import { useCriminals } from "../criminals/CriminalDataProvider.js"

// targets container on the DOM
const contentContainer = document.querySelector(".associatesContainer")

// AssociatesList takes a criminal object and returns an HTML representation of selected properties on that
// criminal object, in this case, criminal name, known associates, associates name, and alibi.
// String of HTML is being stored in HTMLRep. criminalObj.known_associates is grabbing the know associates 
// property from the array of criminals. .map is creating a new array with the associates name and alibi by 
// accessing the associate property and grabbing their name and alibi.
// .join("") is eliminating the commas that are between the objects properties.
export const AssociatesList = (criminalObj) => {
    const HTMLRep = `
    <div id="alibi__modal" class="modal--parent">
        <div class="modal--content">
        <h1>Known associates for ${criminalObj.name}</h1>
        ${criminalObj.known_associates.map(associate => {
        return `<section class="associate__container">
        <div class="associate__name">${associate.name}</div>
        <div class="associate__alibi">Alibi: ${associate.alibi}</div>
        </section>`
        }).join("")}
        
        <button id="modal--close">close modal</button>
        </div>
    </div>
    `

contentContainer.innerHTML = HTMLRep

}

// This event listener is listening for the custom event "AssociatesClicked" from ShowAssociatesButton that 
// provides the id of the criminal upon button click.
const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", event => {
    // storing the criminal id from the custom event in a variable
    const selectedCriminalId = event.detail.criminalId
    // copy of criminals array in a variable
    const criminalsArray = useCriminals()
    // .find is selecting the first criminal in the array whose id matches the id of the criminal that was clicked on.
    const selectedCriminal = criminalsArray.find((criminal) => criminal.id === selectedCriminalId)
    // The selectedCriminal argument is providing us with the criminal and all of their specs: id, crime, name etc.
    // AssociatesList has grabbed specific properties from the criminal object and fit them into the HTML representation.
    AssociatesList(selectedCriminal)
})

// This is the event listener that listens for the click on the close modal button in the pop up window.
// close modal returns an empty string, so the html that was printed to the DOM to create the window is replaced with nothing.
eventHub.addEventListener("click", event => {
    if (event.target.id === "modal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
} 



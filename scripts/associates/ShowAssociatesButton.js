// We are creating the HTML for the button, and using an Event Listener that
// targets the id of the button(associates__${criminal.id}) that also splits the 
// id using .split("--"). Split is storing the prefix 
// and id of the split associates__${criminal.id} into an array ([prefix,criminalId]).
import "./AssociatesList.js"

export const ShowAssociatesButton = (criminal) => {
    return `
    <button id="associates--${criminal.id}">Associate Alibis</button>
    `
}

const eventHub = document.querySelector(".container")

// The custom event grabs the criminalId from the array ([prefix,criminalId]) when it detects a click event.
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("associates--")) {
    const [prefix, criminalId] = event.target.id.split("--")
    const customEvent = new CustomEvent("AssociatesClicked", {
    //    This is a detail object.
        detail: {
        //    This is converting the criminalId from a string to an integer.
           criminalId: parseInt(criminalId)
       } 
    })
        eventHub.dispatchEvent(customEvent)
    }
})

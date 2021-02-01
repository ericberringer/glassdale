const contentTarget = document.querySelector(".noteListButton")
// .noteListButton is the class on the div in our HTML where the button will live.
const eventHub = document.querySelector(".container")

// Here we are listening for a click event on the show notes button, if the showNotes button is clicked dispatch
// the custom event which sends a flare up that the button was clicked.
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})
// The show note button is rendered to the DOM on page load by exporting this function. ShowNoteButton targets our button container
// and sends the html representation of the button there.
export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}
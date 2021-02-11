import { saveNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// This is the HTML to construct out form on the DOM, includes the fields for
// author, note, suspect, and the saveNote button, etc.
const render = () => {
    contentTarget.innerHTML = `
    <form action="">
        <label htmlFor="note-text">Note: </label>
        <input type="text" placeholder="Write Note Here" id="note-text">
        <label htmlFor="note-author">Author: </label>
        <input type="text" placeholder="Author" id="note-author">
        <label htmlFor="note-date">Note: </label>
        <input type="date" placeholder="Date" id="note-date">
        <label htmlFor="note-suspect">Suspect: </label>

        <select placeholder="Select Suspect" id="noteForm--criminal" class="criminalSelect">
        </select>
        
        <label htmlFor="note-intuition">Intuition: </label>
        <input type="text" placeholder="Enter Suspect Name" id="note-suspect">
        
        <button id="saveNote">Save Note</button>
        </form>
        `
    }
    // This goes in the above select tag.
    // <option value="${ criminal.id }">${ criminal.name }</option>
    // This was under the suspect label tag
    // <input type="text" placeholder="Enter Suspect Name" id="note-intuition">

// Calling NoteForm on main.js will render the form and button html to the DOM.
export const NoteForm = () => {
    render()
}

// We need to listen for a click event in our eventHub (main container). 
// "saveNote is id of the Save Note Button in above HTML."
// if the button is clicked, a new note will be constructed, the consts in the
// is statement are connecting the object properties with their representation in the above HTML.
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        const suspect = document.querySelector("#note-suspect").value
        const author = document.querySelector("#note-author").value
        const date = document.querySelector("#note-date").value
        const intuition = document.querySelector("#note-intuition").value
        const text = document.querySelector("#note-text").value
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "text": text,
            "suspect": suspect,
            "date": date,
            "author": author,
            "intuition": intuition
        }

        // saveNote (from NoteProvider.js) houses the info from the api, newNote holds the structure of the key/value pairs, which is
        // the representation of each object from the api.
        // Call saveNote and pass in newNote. saveNote is executed when the click event on the save note button
        // is clicked.
        saveNote(newNote)
        //  This function call marries the api info with its html structure and the rendering to the DOM.
    }
})


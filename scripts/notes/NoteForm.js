import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        
        <label htmlFor="note-text">Note: </label>
        <input type="text" placeholder="Write Note Here" id="note-text">
        <label htmlFor="note-date">Note: </label>
        <input type="date" placeholder="Date" id="note-date">
        <label htmlFor="note-suspect">Note: </label>
        <input type="text" placeholder="Enter Suspect Name" id="note-suspect">
        
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component. "saveNote is id of the Save Note Button in above HTML."
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
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

        // saveNote houses the info from the api, newNote holds the structure of the key/value pairs, which is
        // the representation of each object from the api.
        // Call saveNote and pass in newNote. saveNote is executed when the click event on the save note button
        // is clicked.
        saveNote(newNote)
    }
})


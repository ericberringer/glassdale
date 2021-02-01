import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".notesContainer")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

// This event listener listens for a click. NoteList() from down below, gets all the notes
// and renders them to the DOM when called.
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
        return NoteHTMLConverter(noteObject)
        // iterates through the array of note objects.
        // convert the notes objects to HTML with NoteHTMLConverter
    }).join("")
    

        // appends above converted objects to HTML into a container that is sent to 
        // the proper parent container on the DOM (.noteListContainer).
    contentTarget.innerHTML = `
        <h3>Case Notes</h3>
        <section class="notesList">
        ${allNotesConvertedToStrings}
        </section>
    `
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
      NoteList()
    }
  })
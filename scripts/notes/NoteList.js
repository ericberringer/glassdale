import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { deleteNote } from "../notes/NoteProvider.js"

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".notesContainer")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

// This event listener listens for a click. NoteList() from down below, gets all the notes
// and renders them to the DOM when called.
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray, criminalArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
        const relatedCriminalObject = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
        return NoteHTMLConverter(noteObject, relatedCriminalObject)
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
        .then(getCriminals)
            .then(() => {
                const allNotes = useNotes()
                const allCriminals = useCriminals()
                render(allNotes, allCriminals)
        })
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
      NoteList()
    }
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})
const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" placeholder="Write Note Here" id="note-text">
        <input type="text" placeholder="Date" id="note-date">
        <input type="text" placeholder="Enter Suspect Name" id="note-suspect">

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}
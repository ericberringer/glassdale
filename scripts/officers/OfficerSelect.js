import { getOfficers, useOfficers } from './OfficerDataProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // If the change event occurred on an element with the id of #officerSelect
        // execute the changeEvent function.
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const officerSelectedCustomEvent = new CustomEvent("officerSelected", {
            detail: {
                selectedOfficerName: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(officerSelectedCustomEvent)
    }
})

export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
    .then( () => {
      // Get all officers from application state
      const officers = useOfficers()
      render(officers)
    })
}

const render = officerCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer...</option>
        ${
            officerCollection.map(officer => `<option value="${officer.name}">${officer.name}</option>`).join("")
        }
    </select>
    `
}
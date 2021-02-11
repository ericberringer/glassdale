export const ShowWitnessesButton = (witness) => {
    return `
    <button class="showWitnesses" id="witnesses--${witness.id}">${witness.statements}</button>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        const customEvent = new CustomEvent("witnessButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})


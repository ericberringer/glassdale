import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { Witness } from "./Witness.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessesButton")
const buttonTarget = document.querySelector(".closeWitnessesButton")


export const ShowWitnessesButton = () => {
    return `
    <button class="showWitnesses" id="showWitnessButton"></button>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    getWitnesses()
        .then(() => {
            const witnessesArray = useWitnesses()
            let witnessStatementsHTMLRep = ""

            for (const witness of witnessesArray) {
                witnessStatementsHTMLRep += Witness(witness)
            }
            document.querySelector(".witnessContainer").innerHTML = `
            <h3>Witness Statements</h3>
            ${witnessStatementsHTMLRep}
            `
        })
})

buttonTarget.addEventListener("click", event => {
    if(event.target.id === "closeWitnesses" ) {
    }
   return document.querySelector(".witnessContainer").innerHTML = ""
})






// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "showWitnesses") {
//         const customEvent = new CustomEvent("witnessButtonClicked")
//         eventHub.dispatchEvent(customEvent)
//     }
// })


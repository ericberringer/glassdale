import { ShowWitnessesButton } from "./ShowWitnessesButton.js"

export const Witness = (witness) => {
    return `
    <article>
        <h3>${witness.name}</h3>
        <p>${witness.statements}</p>

     </article>
        `
    }


    // ${ShowWitnessesButton(witness)}
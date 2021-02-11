import { ShowWitnessesButton } from "./ShowWitnessesButton.js"

export const Witness = (witness) => {
    return `
    <article>
        <h2>${witness.name}</h2>
        <p>${witness.statements}</p>

        ${ShowWitnessesButton(witness)}
    </article>
    `
}
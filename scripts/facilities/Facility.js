import { ShowFacilitiesButton } from "./ShowFacilitiesButton.js"

export const Facility = (facility) => {
    return `
    <article>
        <h2>${facility.name}</h2>
        <p>Security Level: ${facility.securityLevel}</p>
        <p>Capacity: ${facility.capacity}</p>
        <h3>Criminals: </h3>

    </article>
    `
}
import { ShowFacilitiesButton } from "./ShowFacilitiesButton.js"

export const Facility = (facility, criminals) => {
    return `
    <article>
        <h2>${facility.facilityName}</h2>
        <p>Security Level: ${facility.securityLevel}</p>
        <p>Capacity: ${facility.capacity}</p>
        <h3>Criminals: </h3> 
        <div>
            <ol>
                ${criminals.map(criminal => `<li>${criminal.name}</li>`).join(" ")}
            </ol>
        </div>
    </article>
    `
}
import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"

export const Criminal = (criminal, facilities) => {
    return `
    <article class="criminal"
        <h2>${criminal.name}</h2>
        <p>Age: ${criminal.age}</p>
        <p>Crime: ${criminal.conviction}</p>
        <p>Facilities: ${facilities.map(f => `${f.facilityName}`).join("")}</p>
        <p>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>

        ${ShowAssociatesButton(criminal)}
    </article>
    `
}
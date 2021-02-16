
// need contentTarget, event Hub. Need to get the criminals
// and facilities. 
// filter the facilities by their criminals.
// need custom event on button click that dispatches a custom event called facilitiesButtonClicked.

const contentTarget = document.querySelector(".facilitiesButton")


export const ShowFacilitiesButton = (facility) => {
    return `
    <button class="facilitiesButton" id="associates--${facility.id}">List Facilities</button>
    `
}


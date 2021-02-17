
// need contentTarget, event Hub. Need to get the criminals
// and facilities. 
// filter the facilities by their criminals.
// need custom event on button click that dispatches a custom event called facilitiesButtonClicked.

import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"
import { Facility } from "./Facility.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facility__button")
const buttonTarget = document.querySelector(".facilitiesButton")
const facilitiesContainer = document.querySelector(".facilityContainer")

export const ShowFacilitiesButton = () => {
    contentTarget.innerHTML = '<button class="facilitiesButton" id="facilities">List Facilities</button>'
}

contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "facilities") {
        getFacilities()
            .then(getCriminals)
            .then(getCriminalFacilities)
            .then(() => {
                
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                render(facilities, criminals, crimFac)
            })
    }
})

const render = (facilitiesToRender, allCriminals, allRelationships) => {
    facilitiesContainer.innerHTML = facilitiesToRender.map(
        (facilityObject) => {
            const criminalRelationshipForThisFacility = allRelationships.filter(fc => fc.facilityId === facilityObject.id)

            const criminals = criminalRelationshipForThisFacility.map(fc => {
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id === fc.criminalId)

                return matchingCriminalObject
            })
            return Facility(facilityObject, criminals)
        }
    ).join("")
}
import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js"

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

  getCriminals()
    .then(() => {
      const criminalsArray = useCriminals()
      renderToDom(criminalsArray)

    })
}

const renderToDom = criminalCollection => {
  let criminalsHTMLRepresentations = ""

  for (const criminal of criminalCollection) {
    criminalsHTMLRepresentations += Criminal(criminal)
  }           
           
                     
               
      criminalsContainer.innerHTML = `
        <h3>Glassdale Criminals</h3>
        <section class="criminalList">
            ${criminalsHTMLRepresentations}
        </section>
        `     
}

// Listen for the "crimeChosen" custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
      /* 
        We have the the id of the conviction that the user selected from the drop down (event.target.crimeThatWasChosen). But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. To get the name, we get the conviction object which has the property for name. 
      */
  
      // Get a copy of the array of convictions from the data provider
      const convictionsArray = useConvictions()
  
      // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
      const chosenConvictionObject = convictionsArray.find(convictionObj => {
        return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
      })
  
      /*
          Filter the criminals application state down to the people that committed the crime
      */
  
      // Get a copy of the array of criminals from the data provider
      const criminalsArray = useCriminals()
  
      /*
        Now that we have the name of the chosen crime, filter the criminals data down to the people that committed the crime
      */
      const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
          
        return criminalObj.conviction === chosenConvictionObject.name
      })
  
      /*
          Then invoke render() and pass the filtered collection as
          an argument
      */
  
      renderToDom(filteredCriminalsArray)
    }
  })

  eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.selectedOfficerName

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const filteredCriminalsArray = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
    renderToDom(filteredCriminalsArray)
})




export const FacilityList = () => {
  // Kick off the fetching of both collections of data
  getFacilities()
      .then(getCriminals)
      .then(getCriminalFacilities)
      .then(
          () => {
              // Pull in the data now that it has been fetched
              const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              const criminals = useCriminals()

              // console.table(facilities)
              // console.table(crimFac)
              // console.table(criminals)

              // Pass all three collections of data to render()
              render(criminals, facilities, crimFac)
          }
      )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  criminalsContainer.innerHTML = criminalsToRender.map(
      (criminalObject) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
          // console.log(facilityRelationshipsForThisCriminal) This is connecting the id of the individual crimnal with the criminalId inside of our criminalFacility bridge table.
          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              // console.log(matchingFacilityObject)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminalObject, facilities)
      }
  ).join("")
}

import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
// useCriminals is an array holding a copy of each criminal and their specs.
// getCriminals is using an api to retrieve all of the criminals from the database.

export const CriminalList = () => {
    
    // getCriminals is returning the promise which is getting all the infro from the api
    getCriminals() 
        .then(() => {
            const criminalArray = useCriminals()

            /*
                Now that you have the data, what
                component should be rendered?
            */
           
           
           const criminalContainer = document.querySelectorAll('.criminalsContainer')
           
           criminalHTMLRepresentation = ""
           for(const criminal of criminalArray) {
               criminalHTMLRepresentation += Criminal(criminal)
            }
               
               criminalContainer.innerHTML = `
                <h3>Glassdale Criminals</h3>
                <section>
                ${criminalHTMLRepresentation}
                </section>
                `  
               
        })
        
    
}
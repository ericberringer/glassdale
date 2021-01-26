import { getConvictions, useConvictions } from './ConvictionProvider.js'

/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")


export const ConvictionSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getConvictions()
    .then( () => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
//    the convictionsCollection.map() will iterate through an array that looks like this:
// [
    // {
    //     name: "arson",
    //     id: 1
    // }
    // ]

    // The new array that .map() gives me will lok like this: 
    // [
    //     "<option value="1">arson</option>
    // ]

    // using .map on convictionsCollection will iterate through each item of our convictions array,
    // we use a function as a parameter of .map() and return our option tag that will be sent to the DOM. We 
    //  use string interpolation to select the id of each crime stored in 'value' and the crime name that goes in 
    // the body of the option tag that will show up in the dropdown menu.

    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(conviction => `<option value="${conviction.id}">${conviction.name}</option>`).join("")
            }
        </select>
    `
}
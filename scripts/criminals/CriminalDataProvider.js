let criminals = []
// criminals is set to an empty array to hold the list of criminals.

export const useCriminals = () => { 
   return criminals.slice()
}
// useCriminals returns a copy of each object in the array

// getCriminals is fetching the data from our criminals api and making it usable in JS. Once the api info is 
// gathered we tell it to get stored in the empty criminals array.
export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedCriminals => criminals = parsedCriminals)
        /*
            Load database state into application state with a fetch().
            Make sure the last then() updates the criminals array
        */
            
    
}
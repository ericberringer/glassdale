import { getOfficers, useOfficers } from './OfficerDataProvider.js'
import { Officer } from './Officer.js'

// const eventHub = document.querySelector(".container")
const officerContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {

    getOfficers()
      .then(() => {
        const officersArray = useOfficers()
        renderToDom(officersArray)
  
      })
  }

  const renderToDom = officerCollection => {
      let officerHTMLRepresentation = ""

      for(const officer of officerCollection) {
          officerHTMLRepresentation += Officer(officer)
      }

      officerContainer.innerHTML = `
      <h3>Glassdale Officers</h3>
        <section class="officerList">
            ${officerHTMLRepresentation}
        </section>
      `
  }
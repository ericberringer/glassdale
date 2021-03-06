import { CriminalList } from './criminals/CriminalList.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { useConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerList } from './officers/OfficerList.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js'
import { ShowNoteButton } from './notes/ShowNotesButton.js'
import './notes/NoteList.js'
import { getWitnesses } from './witnesses/WitnessDataProvider.js'
import { ShowWitnessesButton } from './witnesses/ShowWitnessesButton.js'
import { getFacilities } from './facilities/FacilityProvider.js'
import { getCriminalFacilities } from './facilities/CriminalFacilityProvider.js'
import { ShowFacilitiesButton } from './facilities/ShowFacilitiesButton.js'


getCriminalFacilities()
getFacilities()

console.log(getWitnesses())
// getConvictions()
// .then(() => console.log(useConvictions()))
ShowFacilitiesButton()
OfficerList()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()
ShowWitnessesButton

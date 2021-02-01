import { CriminalList } from './criminals/CriminalList.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { useConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerList } from './officers/OfficerList.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js'
import { ShowNoteButton } from './notes/ShowNotesButton.js'
import './notes/NoteList.js'


// getConvictions()
// .then(() => console.log(useConvictions()))
OfficerList()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()

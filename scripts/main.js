import { CriminalList } from './criminals/CriminalList.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { useConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'


// getConvictions()
// .then(() => console.log(useConvictions()))
CriminalList()
ConvictionSelect()


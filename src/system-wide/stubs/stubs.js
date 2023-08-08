import debatesStore from '../entities/Claim/Claims.store'
import narrationsStore from '../entities/Story/Narrations.store'
import resultsStore from '../entities/Result/Results.store'
import designsStore from '../entities/Design/Designs.store'
import './quests'

import {narrations} from './narrations'
import { debates } from './debates'
import { results } from './results'
import { designs } from './designs'

debates.map(debate => {
    debatesStore.add(debate)
})
narrations.map(narration => {
    narrationsStore.add(narration)
})
results.map(el => {
    resultsStore.add(el)
})
designs.map(el => {
    designsStore.add(el)
})
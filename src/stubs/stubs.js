import debatesStore from '../entities/Claim/Claims.store'
import narrationsStore from '../entities/Story/Narrations.store'
import './quests'

import {narrations} from './narrations'
import { debates } from './debates'

debates.map(debate => {
    debatesStore.add(debate)
})
narrations.map(narration => {
    narrationsStore.add(narration)
})
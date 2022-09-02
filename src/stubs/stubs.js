import debatesStore from '../stores/Claims.store'
import narrationsStore from '../stores/Narrations.store'

import {narrations} from './narrations'
import { debates } from './debates'

debates.map(debate => {
    debatesStore.add(debate)
})
narrations.map(narration => {
    narrationsStore.add(narration)
})
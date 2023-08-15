import debatesStore from '../entities/Claim/Claims.store'
import narrationsStore from '../entities/Story/Narrations.store'
import resultsStore from '../entities/Result/Results.store'
import './quests'

import { narrations } from './narrations'
import { debates } from './debates'
import { results } from './results'
import { stub as stubDesigns } from './designs'

stubDesigns()

if (!debatesStore.items.length) {
    debates.map(debate => {
        debatesStore.add(debate)
    })
}

if (!narrationsStore.items.length) {
    narrations.map(narration => {
        narrationsStore.add(narration)
    })
}

if (!resultsStore.items.length) {
    results.map(el => {
        resultsStore.add(el)
    })
}
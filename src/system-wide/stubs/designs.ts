import {life, meaning, loneliness, loved, loving} from './concepts'
import Design from '../entities/Design/Design.model'
import Goal from '../entities/Design/Goal.model'
import Claim from '../entities/Claim/Claim.model'
import {debates} from './debates'
import designsStore from "../entities/Design/Designs.store";
import conceptsStore from "../entities/Concept/Concepts.store";
import claimsStore from "../entities/Claim/Claims.store";

export function stub() {
    const dcLife = new Goal({conceptId: life.id}, conceptsStore, claimsStore)
    const dcMeaning = new Goal({conceptId: meaning.id, parentId: dcLife.id}, conceptsStore, claimsStore)
    // const claim = new Claim(debates[1])

    const design = new Design({
        id: '1',
        name: 'Life worth living',
        mainTree: [dcLife, dcMeaning]
    })

    designsStore.add(design)
}

// const dcLoving = new Goal({concept: loving, children: []})
// const dcLoved = new Goal({concept: loved, children: []})
// const dcLoneliness = new Goal({concept: loneliness, children: [dcLoved, dcLoving]})

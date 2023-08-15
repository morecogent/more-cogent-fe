import {life, meaning, loneliness, loved, loving} from './concepts'
import Design from '../entities/Design/Design.model'
import Goal from '../entities/Design/Goal.model'
import Claim from '../entities/Claim/Claim.model'
import {debates} from './debates'
import designsStore from "../entities/Design/Designs.store";

export function stub(conceptsStore, justificationsStore) {
    const dcMeaning = new Goal({conceptId: meaning.id}, conceptsStore, justificationsStore)
    const dcLife = new Goal({conceptId: life.id}, conceptsStore, justificationsStore)
    // const claim = new Claim(debates[1])

    const design = new Design({
        id: '1',
        name: 'Life worth living',
        mainTree: {
            goals: [dcLife, dcMeaning],
            rootId: dcLife.id,
            decisionsHierarchy: [{
                id: dcLife.id,
                type: 'GOAL',
                parentId: null,
                childrenIds: [dcMeaning.id]
            }, {
                id: dcMeaning.id,
                type: 'GOAL',
                parentId: dcLife.id,
                childrenIds: []
            }]
        }
    })

    designsStore.add(design)
}

// const dcLoving = new Goal({concept: loving, children: []})
// const dcLoved = new Goal({concept: loved, children: []})
// const dcLoneliness = new Goal({concept: loneliness, children: [dcLoved, dcLoving]})

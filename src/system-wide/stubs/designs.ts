import {life, meaning, loneliness, loved, loving} from './concepts'
import Design from '../entities/Design/Design.model'
import Goal from '../entities/Design/Goal.model'
import designsStore from "../entities/Design/Designs.store";
import Activity from "../../domains/Activities/models/Activity.model";

export function stub() {
    const dcLife = new Goal({conceptId: life.id})
    const dcMeaning = new Goal({conceptId: meaning.id, parentId: dcLife.id})
    const activity = new Activity({name: 'Throw trashes', parentId: dcMeaning.id})
    // const claim = new Claim(debates[1])

    const design = new Design({
        id: '1',
        name: 'Life worth living',
        mainTree: {
            goals: [dcLife, dcMeaning],
            activities: [activity]
        },
    })

    if (!designsStore.items.length) designsStore.add(design)
}

// const dcLoving = new Goal({concept: loving, children: []})
// const dcLoved = new Goal({concept: loved, children: []})
// const dcLoneliness = new Goal({concept: loneliness, children: [dcLoved, dcLoving]})

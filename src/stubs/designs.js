import { life, meaning, loneliness, loved, loving } from './concepts'
import Design from '../entities/Design/Design.model'
import Goal from '../entities/Design/Goal.model'

// const dcLoving = new Goal({concept: loving, children: []})
// const dcLoved = new Goal({concept: loved, children: []})
// const dcLoneliness = new Goal({concept: loneliness, children: [dcLoved, dcLoving]})
const dcMeaning = new Goal({concept: meaning, children: []})
const dcLife = new Goal({concept: life, children: [dcMeaning]})

const design = new Design({
    id: '1',
    name: 'Life worth living',
    mainGoal: dcLife
})

export const designs = [design]
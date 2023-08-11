import { life, meaning, loneliness, loved, loving } from './concepts'
import Design from '../entities/Design/Design.model'
import Goal from '../entities/Design/Goal.model'
import Claim from '../entities/Claim/Claim.model'
import {debates} from './debates'

// const dcLoving = new Goal({concept: loving, children: []})
// const dcLoved = new Goal({concept: loved, children: []})
// const dcLoneliness = new Goal({concept: loneliness, children: [dcLoved, dcLoving]})
const dcMeaning = new Goal({concept: meaning})
const dcLife = new Goal({concept: life})
const claim = new Claim(debates[1])

dcLife.attachChild(dcMeaning, [claim])

const design = new Design({
    id: '1',
    name: 'Life worth living',
    mainGoal: dcLife
})

export const designs = [design]
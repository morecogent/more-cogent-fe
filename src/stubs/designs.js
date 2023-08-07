import { life, meaning, loneliness, loved, loving } from './concepts'
import DesignModel from '../entities/Design/Design.model'
import DesignConceptModel from '../entities/Design/DesignConcept.model'

const dcLoving = new DesignConceptModel({concept: loving, children: []})
const dcLoved = new DesignConceptModel({concept: loved, children: []})
const dcLoneliness = new DesignConceptModel({concept: loneliness, children: [dcLoved, dcLoving]})
const dcMeaning = new DesignConceptModel({concept: meaning, children: [dcLoneliness]})
const dcLife = new DesignConceptModel({concept: life, children: [dcMeaning]})

const design = new DesignModel({
    id: '1',
    initialConcept: dcLife
})

export const designs = [design]
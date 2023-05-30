import conceptsStore from '../entities/Concept/Concepts.store'
import ConceptModel from '../entities/Concept/Concept.model'
import CompositeModel from '../entities/Concept/Composite.model'

export const c1 = conceptsStore.add(new ConceptModel({ name: 'capitalism' }))
export const c2 = conceptsStore.add(new ConceptModel({ name: 'ethics' }))
export const c3 = conceptsStore.add(new ConceptModel({ name: 'sex' }))
export const c4 = conceptsStore.add(new ConceptModel({ name: 'romantic relationships' }))
export const c5 = conceptsStore.add(new ConceptModel({ name: 'love' }))

export const human = conceptsStore.add(new ConceptModel({ name: 'human' }))
export const knowledgeAPriori = conceptsStore.add(new ConceptModel({ name: 'knowledge a\'priori' }))
export const compositeHowToLive = conceptsStore.add(new CompositeModel({ name: 'how to live' }))
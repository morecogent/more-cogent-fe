import conceptsStore from '../entities/Concept/Concepts.store'

export const c1 = conceptsStore.add({ name: 'capitalism' })
export const c2 = conceptsStore.add({ name: 'ethics' })
export const c3 = conceptsStore.add({ name: 'sex' })
export const c4 = conceptsStore.add({ name: 'romantic relationships' })
export const c5 = conceptsStore.add({ name: 'love' })

export const human = conceptsStore.add({ name: 'human' })
export const knowledgeAPriori = conceptsStore.add({ name: 'knowledge a\'priori' })
export const compositeHowToLive = conceptsStore.add({ name: 'how to live' })
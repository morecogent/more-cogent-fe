import conceptsStore from '../entities/Concept/Concepts.store'
import ConceptModel from '../entities/Concept/Concept.model'
import CompositeModel from '../entities/Concept/Composite.model'

export const c1 = new ConceptModel({ name: 'capitalism' })
export const c2 = new ConceptModel({ name: 'ethics' })
export const c3 = new ConceptModel({ name: 'sex' })
export const c4 = new ConceptModel({ name: 'romantic relationships' })
export const c5 = new ConceptModel({ name: 'love' })

export const human = new ConceptModel({ name: 'human' })
export const knowledgeAPriori = new ConceptModel({ name: 'knowledge a\'priori' })
export const compositeHowToLive = new CompositeModel({ name: 'how to live' })

export const life = new CompositeModel({ name: 'Life worth living' })
export const meaning = new CompositeModel({ name: 'Feeling that our life that has meaning' })
export const loneliness = new CompositeModel({ name: 'Not living lonely' })
export const loved = new CompositeModel({ name: 'Being loved' })
export const loving = new CompositeModel({ name: 'Loving' })

if (!conceptsStore.items.length) {
    [c1, c2, c3, c4, c5, human, knowledgeAPriori, compositeHowToLive, life,
        meaning, loneliness, loved, loving].map(concept => {
        conceptsStore.add(concept)
    })
}
import { makeObservable, observable } from 'mobx'
import ConceptModel from './Concept.model'
import { v4 } from 'uuid'

export default class NarrationModel {

  constructor({id, text, parentNarrationId, concepts = []}) {
    this.id = id || v4()

    // this.parentClaim = parentClaim

    this.parentNarrationId = parentNarrationId
    this.text = text || ''
    this.concepts = concepts.map(c => new ConceptModel(c))

    makeObservable(this, {
      text: observable,
      concepts: observable,
    })
  }
}
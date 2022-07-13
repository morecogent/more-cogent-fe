import { action, makeObservable, observable } from 'mobx'
import ConceptModel from './Concept.model'
import { v4 } from 'uuid'

class NarrationTextModel {

  constructor({type, content, children = []}) {
    this.type = type || 'paragraph'
    this.content = content || ''
    this.children = children.map(el => new NarrationTextModel(el))

    makeObservable(this, {
      content: observable,
      children: observable,
      setContent: action
    })
  }

  setContent(value){
    this.content = value
  }
}

export default class NarrationModel {

  constructor({id, text = [], parentNarrationId, concepts = []}) {
    this.id = id || v4()

    // this.parentClaim = parentClaim

    this.parentNarrationId = parentNarrationId

    if(!text.length) {
      this.text = [new NarrationTextModel({})]
    } else {
      this.text = text.map(el => new NarrationTextModel(el))
    }

    this.concepts = concepts.map(c => new ConceptModel(c))

    makeObservable(this, {
      text: observable,
      concepts: observable,
    })
  }
}
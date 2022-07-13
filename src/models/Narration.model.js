import { action, makeObservable, observable } from 'mobx'
import ConceptModel from './Concept.model'
import { v4 } from 'uuid'

export class NarrationElementModel {

  constructor({type, content}) {
    this.type = type || 'span'
    this.content = content || ''

    makeObservable(this, {
      content: observable,
      setContent: action
    })
  }

  setContent(value){
    this.content = value
  }
}

class NarrationParagraphModel {

  constructor({children = []}) {
    this.type = 'paragraph'

    if(!children.length) {
      this.children = [new NarrationElementModel({})]
    } else {
      this.children = children.map(el => new NarrationElementModel(el))
    }

    makeObservable(this, {
      children: observable
    })
  }
}

export default class NarrationModel {

  constructor({id, text = [], parentNarrationId, concepts = []}) {
    this.id = id || v4()

    // this.parentClaim = parentClaim

    this.parentNarrationId = parentNarrationId

    if(!text.length) {
      this.text = [new NarrationParagraphModel({})]
    } else {
      this.text = text.map(el => new NarrationParagraphModel(el))
    }

    this.concepts = concepts.map(c => new ConceptModel(c))

    makeObservable(this, {
      text: observable,
      concepts: observable,
    })
  }
}
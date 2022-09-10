import { action, makeObservable, observable } from 'mobx'
import ConceptModel from '../Concept/Concept.model'
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

export class ProblemBeliefModel {

  constructor({question, answer, linked}) {
    this.question = question || ''
    this.answer = answer || ''
    this.linked = linked || []

    makeObservable(this, {
      question: observable,
      answer: observable,
      linked: observable
    })
  }
}

// For questions this should be refactored into Problem (according to problem-posing education)
export default class NarrationModel {

  constructor({id, title, text = [], parentNarrationId, concepts = [], beliefs = []}) {
    this.id = id || v4()

    // this.parentClaim = parentClaim

    this.parentNarrationId = parentNarrationId

    this.title = title

    if(!text.length) {
      this.text = [new NarrationParagraphModel({})]
    } else {
      this.text = text.map(el => new NarrationParagraphModel(el))
    }

    this.beliefs = beliefs.map(el => new ProblemBeliefModel(el))
    this.concepts = concepts.map(c => new ConceptModel(c))
    this.advices = []

    makeObservable(this, {
      text: observable,
      concepts: observable,
      beliefs: observable,
      addParagraph: action,
    })
  }

  addParagraph(){
    return this.text.push(new NarrationParagraphModel({}))
  }
}
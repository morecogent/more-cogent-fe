import { action, computed, makeObservable, observable } from 'mobx'
import ConceptModel from '../Concept/Concept.model'
import AdviceModel from './Advice.model'
import QuestModel from '../Quest/Quest.model'
import quests from '../Quest/Quests.store'
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

  constructor({id, title, text = [], advices = [], beliefs = [], concepts = [], questsIds = []}) {
    this.id = id || v4()

    this.title = title

    if(!text.length) {
      this.text = [new NarrationParagraphModel({})]
    } else {
      this.text = text.map(el => new NarrationParagraphModel(el))
    }

    this.beliefs = beliefs.map(el => new ProblemBeliefModel(el))
    this.concepts = concepts.map(c => new ConceptModel(c))
    this.advices = advices.map(el => new AdviceModel(el))
    this.questsIds = questsIds

    makeObservable(this, {
      text: observable,
      concepts: observable,
      beliefs: observable,
      advices: observable,
      questsIds: observable,
      quests: computed,
      addParagraph: action,
    })
  }

  addParagraph(){
    return this.text.push(new NarrationParagraphModel({}))
  }

  get quests(){
    return quests.items
        .filter(quest => this.questsIds.includes(quest.id))
        .map(el => new QuestModel(el))
  }
}
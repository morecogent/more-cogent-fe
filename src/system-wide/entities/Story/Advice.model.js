import { action, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'
import discussion from './components/Discussion'
import { DiscussionMessageModel } from './Narration.model'

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

// For questions this should be refactored into Problem (according to problem-posing education)
export default class AdviceModel {

  constructor({id, text = [], discussion = []}) {
    this.id = id || v4()

    if(!text.length) {
      this.text = [new NarrationParagraphModel({})]
    } else {
      this.text = text.map(el => new NarrationParagraphModel(el))
    }

    this.discussion = discussion.map(el => new DiscussionMessageModel(el))

    makeObservable(this, {
      text: observable,
      discussion: observable,
      addParagraph: action,
    })
  }

  addParagraph(){
    return this.text.push(new NarrationParagraphModel({}))
  }
}
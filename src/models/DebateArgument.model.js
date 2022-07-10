import { makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export default class DebateArgumentModel {

  static TYPES = ['INDIVIDUAL', 'RESEARCH', 'PUBLIC_REFERENCE']

  constructor({id, text, type, author, source}) {
    this.id = id || v4()
    this.text = text
    this.type = type

    this.author = author
    this.source = source


    makeObservable(this, {
      text: observable,
      type: observable,
      author: observable,
      source: observable
    })
  }
}


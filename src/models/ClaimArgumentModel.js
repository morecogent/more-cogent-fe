import { makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export default class ClaimArgumentModel {

  static TYPES = ['INDIVIDUAL', 'RESEARCH', 'PUBLIC_REFERENCE']

  constructor({id, text, type, author, source, claims}) {
    this.id = id || v4()
    // this.text = text
    // this.type = type
    this.claims = claims

    // this.author = author
    // this.source = source


    makeObservable(this, {
      claims: observable,
      // type: observable,
      // author: observable,
      // source: observable
    })
  }
}


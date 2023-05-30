import { makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export default class ConceptModel {
  static color = '#f0d0d0'

  constructor({id, name, color}) {
    this.id = id || v4()
    this.name = name
    this.color = color || `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    this.type = 'CONCEPT'

    makeObservable(this, {
      name: observable,
      color: observable
    })
  }
}
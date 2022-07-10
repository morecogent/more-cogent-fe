import { makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export default class ConceptModel {

  constructor({id, name, color}) {
    this.id = id || v4()
    this.name = name
    this.color = color || `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

    makeObservable(this, {
      name: observable,
      color: observable
    })
  }
}
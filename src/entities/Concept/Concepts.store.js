import { makeObservable, observable } from 'mobx'
import ConceptModel from './Concept.model'

class ConceptsStore {
  items = []

  constructor() {
    makeObservable(this, {
      items: observable
    })
  }

  add(item){
    const instance = new ConceptModel(item)
    this.items.push(instance)
    return instance
  }
}

export default new ConceptsStore()
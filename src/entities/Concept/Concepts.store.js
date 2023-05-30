import { makeObservable, observable } from 'mobx'
import ConceptModel from './Concept.model'
import CompositeModel from './Composite.model'

class ConceptsStore {
  items = []

  constructor() {
    makeObservable(this, {
      items: observable
    })
  }

  add(item){
    let instance = item
    if(!(item instanceof ConceptModel) && !(item instanceof CompositeModel)) {
      instance = new ConceptModel(item)
    }

    this.items.push(instance)
    return instance
  }
}

export default new ConceptsStore()
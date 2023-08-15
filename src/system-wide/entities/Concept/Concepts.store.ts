import ConceptModel from './Concept.model'
import CompositeModel from './Composite.model'
import Store from "../../services/Store";

class ConceptsStore extends Store {
  constructor() {
    super([], ConceptModel)
  }

  add(item){
    let instance = item
    if(!(item instanceof ConceptModel) && !(item instanceof CompositeModel)) {
      instance = new ConceptModel(item)
    }

    this.items.push(instance)
    return instance
  }

  remove(itemToRemove){
    this.items = this.items.filter(item => item !== itemToRemove)
  }
}

export default new ConceptsStore()
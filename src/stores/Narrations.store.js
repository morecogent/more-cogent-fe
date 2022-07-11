import { makeObservable, observable } from 'mobx'
import NarrationModel from '../models/Narration.model'

class NarrationsStore {
  items = []

  constructor() {
    makeObservable(this, {
      items: observable
    })
  }

  add(item){
    this.items.push(new NarrationModel(item))
  }
}

export default new NarrationsStore()
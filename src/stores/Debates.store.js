import { makeObservable, observable } from 'mobx'
import DebateModel from '../models/Debate.model'

class DebatesStore {
  items = []

  constructor() {
    makeObservable(this, {
      items: observable
    })
  }

  add(debate){
    this.items.push(new DebateModel(debate))
  }
}

export default new DebatesStore()
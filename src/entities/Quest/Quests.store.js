import { makeObservable, observable } from 'mobx'
import QuestModel from './Quest.model'

class QuestsStore {
  items = []

  constructor() {
    makeObservable(this, {
      items: observable
    })
  }

  add(item){
    this.items.push(new QuestModel(item))
  }
}

export default new QuestsStore()
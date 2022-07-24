import { computed, makeObservable, observable } from 'mobx'
import narrations from '../../stores/Narrations.store'
import NarrationModel from '../../models/Narration.model'

class QuestionsPageCtrl {
  newNarration = new NarrationModel({})

  constructor() {
    makeObservable(this, {
      narrations: computed,
      newNarration: observable
    })
  }

  get narrations(){
    return narrations.items
        .filter(item => !item.parentNarrationId)
  }

  changeName = (value) => {
    this.newNarration.text = value
  }

  addNarration = () => {
    narrations.add(this.newNarration)
    this.newNarration = new NarrationModel({})
  }
}

export default new QuestionsPageCtrl()
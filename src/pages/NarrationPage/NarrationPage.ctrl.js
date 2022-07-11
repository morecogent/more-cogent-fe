import { computed, makeObservable, observable } from 'mobx'
import narrations from '../../stores/Narrations.store'
import NarrationModel from '../../models/Narration.model'

export default class NarrationPageCtrl {

  constructor(id) {
    this.id = id
    this.newNarration = new NarrationModel({parentNarrationId: id})

    makeObservable(this, {
      narration: computed,
      narrationResponses: computed,
      newNarration: observable
    })
  }

  get narration(){
    if(this.id){
      return narrations.items.find(item => item.id === this.id)
    } else {
      return new NarrationModel({})
    }
  }

  get narrationResponses(){
    if(!this.id) return []

    return narrations.items.filter(item => item.parentNarrationId === this.id) || []

  }

  changeName = (value) => {
    this.newNarration.text = value
  }

  addNarration = () => {
    narrations.add(this.newNarration)
    this.newNarration = new NarrationModel({parentNarrationId: this.id})
  }
}
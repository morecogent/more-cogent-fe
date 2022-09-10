import { action, computed, makeObservable, observable } from 'mobx'
import narrations from '../../../stores/Narrations.store'
import claims from '../../../stores/Claims.store'
import NarrationModel from '../../../models/Narration.model'

export default class NarrationPageCtrl {

  constructor(id) {
    this.id = id
    this.resetNewNarration()

    makeObservable(this, {
      narration: computed,
      narrationResponses: computed,
      newNarration: observable,
      addNarration: action
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

  getLinkedClaims(ids){
    return claims.items.filter(el => ids.includes(el.id))
  }

  resetNewNarration(){
    this.newNarration = new NarrationModel({parentNarrationId: this.id})
  }

  addNarration = () => {
    narrations.add(this.newNarration)
    this.resetNewNarration()
  }
}
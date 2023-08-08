import { action, computed, makeObservable, observable } from 'mobx'
import narrations from '../../../entities/Story/Narrations.store'
import claims from '../../../entities/Claim/Claims.store'
import NarrationModel from '../../../entities/Story/Narration.model'

export default class NarrationPageCtrl {

  constructor(id) {
    this.id = id
    this.resetNewNarration()

    makeObservable(this, {
      narration: computed,
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
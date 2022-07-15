import { action, computed, makeObservable, observable } from 'mobx'
import claims from '../../stores/Claims.store'
import ClaimModel from '../../models/Claim.model'

export default class ClaimPageCtrl {

  constructor(id) {
    this.id = id

    makeObservable(this, {
      claim: computed
    })
  }

  get claim(){
    if(this.id){
      return claims.items.find(item => item.id === this.id)
    } else {
      return new ClaimModel({})
    }
  }


  // addNarration = () => {
  //   narrations.add(this.newNarration)
  //   this.resetNewNarration()
  // }
}
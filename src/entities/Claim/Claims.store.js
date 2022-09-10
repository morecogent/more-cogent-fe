import { makeObservable, observable } from 'mobx'
import ClaimModel from './Claim.model'

class ClaimsStore {
  items = []

  constructor() {
    makeObservable(this, {
      items: observable
    })
  }

  add(item){
    this.items.push(new ClaimModel(item))
  }
}

export default new ClaimsStore()
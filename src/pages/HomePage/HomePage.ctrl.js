import { makeObservable, observable } from 'mobx'
import claims from '../../stores/Claims.store'
import ClaimModel from '../../models/Claim.model'

class HomePageCtrl {
  claims = claims.items
  newClaim = new ClaimModel({})

  constructor() {
    makeObservable(this, {
      claims: observable,
      newClaim: observable
    })
  }

  changeName = (value) => {
    this.newClaim.name = value
  }

  addDebate = () => {
    claims.add(this.newClaim)
    this.newClaim = new ClaimModel({})
  }
}

export default new HomePageCtrl()
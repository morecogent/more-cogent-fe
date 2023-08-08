import { makeObservable, observable } from 'mobx'
import claims from '../../../system-wide/entities/Claim/Claims.store'

class ScienceLabPageCtrl {
  claims = claims.items

  constructor() {
    makeObservable(this, {
      claims: observable
    })
  }
}

export default new ScienceLabPageCtrl()
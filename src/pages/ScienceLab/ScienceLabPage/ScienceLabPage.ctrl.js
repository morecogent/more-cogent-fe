import { makeObservable, observable } from 'mobx'
import claims from '../../../stores/Claims.store'

class ScienceLabPageCtrl {
  claims = claims.items

  constructor() {
    makeObservable(this, {
      claims: observable
    })
  }
}

export default new ScienceLabPageCtrl()
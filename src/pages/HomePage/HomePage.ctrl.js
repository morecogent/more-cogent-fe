import { makeObservable, observable } from 'mobx'
import claims from '../../stores/Claims.store'

class HomePageCtrl {
  claims = claims.items

  constructor() {
    makeObservable(this, {
      claims: observable
    })
  }
}

export default new HomePageCtrl()
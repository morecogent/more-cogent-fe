import { makeObservable, observable } from 'mobx'
import designs from '../../../entities/Design/Designs.store'

class DesignLabPageCtrl {
  designs = designs.items

  constructor() {
    makeObservable(this, {
      designs: observable
    })
  }
}

export default new DesignLabPageCtrl()
import { computed, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export default class Design {
  constructor({id, name, mainGoal, sideGoals}) {
    this.id = id || v4()
    this.name = name || 'Default design name'
    this.mainTree = mainGoal
    this.sideTrees = sideGoals

    makeObservable(this, {
      mainTree: observable,
      sideTrees: observable
    })
  }

}
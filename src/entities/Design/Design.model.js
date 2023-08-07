import { computed, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export default class DesignModel {
  constructor({id, initialConcept, orphanConcepts}) {
    this.id = id || v4()
    this.initialConcept = initialConcept

    this.orphanConcepts = orphanConcepts

    makeObservable(this, {
      initialConcept: observable,
      name: computed
    })
  }

  get name(){
    return this.initialConcept.name
  }

}
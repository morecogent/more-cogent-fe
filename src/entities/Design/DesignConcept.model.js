import { computed, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export default class DesignConceptModel {

  constructor({id, concept, children, relatedClaimIds}) {
    this.id = id || v4()
    this.concept = concept
    this.children = children || []
    this.relatedClaimIds = relatedClaimIds || []

    makeObservable(this, {
      name: computed,
      children: observable
    })
  }

  get name(){
    return this.concept.name
  }

  get relatedClaims(){}
}
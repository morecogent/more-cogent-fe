import { makeObservable, observable } from 'mobx'

export default class RelatedDebateModel {

  constructor({id, differences}) {
    this.debateId = id
    this.debateDifferences = differences

    makeObservable(this, {
      debateId: observable,
      debateDifferences: observable
    })
  }
}
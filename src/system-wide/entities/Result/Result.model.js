import { action, computed, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export default class ResultModel {

  constructor({id, title}) {
    this.id = id || v4()

    this.title = title

    makeObservable(this, {
      title: observable
    })
  }
}
import { makeObservable, observable } from 'mobx'

export default class NotGoalModel {

  constructor({text}) {
    this.text = text

    makeObservable(this, {
      text: observable
    })
  }
}
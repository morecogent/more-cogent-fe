import { makeObservable, observable } from 'mobx'

export default class TextFragment {

  constructor(value = '') {
    this.value = value
    this.type = 'TEXT'

    makeObservable(this, {
      value: observable
    })
  }
}
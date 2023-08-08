import { makeObservable, observable } from 'mobx'
import ResultModel from './Result.model'

class ResultsStore {
  items = []

  constructor() {
    makeObservable(this, {
      items: observable
    })
  }

  add(item){

    this.items.push(new ResultModel(item))
  }
}

export default new ResultsStore()
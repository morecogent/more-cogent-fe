import { makeObservable, observable } from 'mobx'
import debates from '../../stores/Debates.store'
import DebateModel from '../../models/Debate.model'

class HomePageCtrl {
  debates = debates.items
  newDebate = new DebateModel({})

  constructor() {
    makeObservable(this, {
      debates: observable,
      newDebate: observable
    })
  }

  changeName = (value) => {
    this.newDebate.name = value
  }

  addDebate = () => {
    debates.add(this.newDebate)
    this.newDebate = new DebateModel({})
  }
}

export default new HomePageCtrl()
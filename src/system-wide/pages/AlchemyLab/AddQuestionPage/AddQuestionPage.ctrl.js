import { action, computed, makeObservable, observable } from 'mobx'
import narrations from '../../../entities/Story/Narrations.store'
import NarrationModel from '../../../entities/Story/Narration.model'

export default class AddQuestionPageCtrl {

  constructor(navigate) {
    this.resetNewNarration()
    this.navigate = navigate

    makeObservable(this, {
      newNarration: observable,
      addNarration: action
    })
  }

  resetNewNarration(){
    this.newNarration = new NarrationModel({})
  }

  addNarration = () => {
    const narrationId = this.newNarration.id
    narrations.add(this.newNarration)
    this.resetNewNarration()
    this.navigate(`/narration/${narrationId}`)
  }
}
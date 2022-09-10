import { computed, makeObservable } from 'mobx'
import quests from '../../../stores/Quests.store'
import PropositionModel from '../../../models/Proposition.model'
import QuestModel from '../../../models/Quest.model'

export default class QuestPageCtrl {
  constructor(id) {
    this.id = id

    makeObservable(this, {
      quest: computed,
      propositions: computed
    })
  }

  get quest(){
    if(this.id){
      return quests.items.find(item => item.id === this.id)
    } else {
      return new QuestModel({})
    }
  }

  get propositions(){
    return this.quest.propositions.map(proposition => new PropositionModel(proposition))
  }
}
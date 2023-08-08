import { computed, makeObservable } from 'mobx'
import quests from '../../../system-wide/entities/Quest/Quests.store'
import PropositionModel from '../../../system-wide/entities/Quest/Proposition.model'
import QuestModel from '../../../system-wide/entities/Quest/Quest.model'
import PropositionProblemModel from '../../../system-wide/entities/Quest/PropositionProblem.model'

export default class PropositionPageCtrl {
  constructor(questId, propositionId) {
    this.questId = questId
    this.propositionId = propositionId

    makeObservable(this, {
      quest: computed,
      proposition: computed,
      problems: computed
    })
  }

  get quest(){
    if(this.questId){
      return quests.items.find(item => item.id === this.questId)
    } else {
      return new QuestModel({})
    }
  }

  get proposition(){
    if(this.questId){
      return this.quest.propositions.find(item => item.id === this.propositionId)
    } else {
      return new PropositionModel({})
    }
  }

  get problems(){
    return this.proposition.problems.map(problem => new PropositionProblemModel(problem))
  }
}
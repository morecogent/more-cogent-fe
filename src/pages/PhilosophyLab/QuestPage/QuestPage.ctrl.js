import { action, computed, makeObservable } from 'mobx'
import quests from '../../../entities/Quest/Quests.store'
import PropositionModel from '../../../entities/Quest/Proposition.model'
import QuestModel from '../../../entities/Quest/Quest.model'
import narrations from '../../../entities/Story/Narrations.store'

export default class QuestPageCtrl {
  constructor(id, navigate, searchParams) {
    this.id = id
    this.navigate = navigate
    this.searchParams = searchParams

    makeObservable(this, {
      quest: computed,
      propositions: computed,
      linkPropositionToStory: action
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

  onPropositionSelect(propositionId){
    if(this.searchParams.get('linking') === null){
      this.navigate(`/quest/${this.quest.id}/proposition/${propositionId}`)
    } else {
      this.linkPropositionToStory(propositionId)
    }

  }

  linkPropositionToStory(propositionId){
    const storyId = this.searchParams.get('linking')
    const story = narrations.items.find(el => el.id === storyId)
    story.linkChoice(this.quest.id, propositionId)
    this.navigate(`/narration/${storyId}`)
  }
}
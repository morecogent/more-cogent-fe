import { action, computed, makeObservable, observable } from 'mobx'
import NotGoalModel from './NotGoal.model'
import RelatedDebateModel from './RelatedDebate.model'
import ConceptModel from '../Concept/Concept.model'
import ClaimArgumentModel from './ClaimArgumentModel'
import { v4 } from 'uuid'

export default class ClaimModel {
  id
  name
  nameArr
  supportingArguments
  opposingArguments
  concepts
  notGoals
  relatedDebates
  percentage


  constructor({id, name, nameArr, claimArguments = [], concepts = [], notGoals = [], relatedDebates = [], percentage}) {
    this.id = id || v4()
    this.name = name || ''
    this.nameArr = nameArr || []
    this.supportingArguments = claimArguments
        .filter(item => item.impact === 'POSITIVE')
        .map(item => new ClaimArgumentModel(item))
    this.opposingArguments = claimArguments
        .filter(item => item.impact === 'NEGATIVE')
        .map(item => new ClaimArgumentModel(item))
    // this.claimArguments = claimArguments.map(da => new ClaimArgumentModel(da))
    this.concepts = concepts.map(c => new ConceptModel(c)) || []
    this.notGoals = notGoals.map(ng => new NotGoalModel(ng))
    this.relatedDebates = relatedDebates.map(rd => new RelatedDebateModel(rd))

    // It will be computed
    this.percentage = percentage || 0

    makeObservable(this, {
      name: observable,
      nameArr: observable,
      supportingArguments: observable,
      opposingArguments: observable,
      concepts: observable,
      notGoals: observable,
      relatedDebates: observable,
      linkedClaimIDs: computed,
      linkSupportiveArgument: action,
      linkOpposingArgument: action,
    })
  }

  get linkedClaimIDs(){
    let list = []
    for(let i = 0; i<this.supportingArguments.length; i++){
      list.push(this.supportingArguments[i].claimsID)
    }
    for(let i = 0; i<this.opposingArguments.length; i++){
      list.push(this.opposingArguments[i].claimsID)
    }
    return list.flatMap(f=>f)
  }

  linkSupportiveArgument(item){
    this.supportingArguments.push(item)
  }

  linkOpposingArgument(item){
    this.opposingArguments.push(item)
  }

}
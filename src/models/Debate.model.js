import { makeObservable, observable } from 'mobx'
import NotGoalModel from './NotGoal.model'
import RelatedDebateModel from './RelatedDebate.model'
import ConceptModel from './Concept.model'
import DebateArgumentModel from './DebateArgument.model'
import { v4 } from 'uuid'

export default class DebateModel {

  constructor({id, name, debateArguments = [], concepts = [], notGoals = [], relatedDebates = [], percentage}) {
    this.id = id || v4()
    this.name = name || ''
    this.debateArguments = debateArguments.map(da => new DebateArgumentModel(da))
    this.concepts = concepts.map(c => new ConceptModel(c))
    this.notGoals = notGoals.map(ng => new NotGoalModel(ng))
    this.relatedDebates = relatedDebates.map(rd => new RelatedDebateModel(rd))

    // It will be computed
    this.percentage = percentage || 0

    makeObservable(this, {
      name: observable,
      debateArguments: observable,
      concepts: observable,
      notGoals: observable,
      relatedDebates: observable
    })
  }
}
import { makeObservable, observable } from 'mobx'
import {v4} from 'uuid'
import PropositionProblemModel from './PropositionProblem.model'

export default class PropositionModel {

  constructor({id, title, problems = []}) {
    this.id = id || v4()
    this.title = title || ''
    this.problems = problems
        .map(problem => new PropositionProblemModel(problem))

    makeObservable(this, {
      title: observable,
      problems: observable
    })
  }
}
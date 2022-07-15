import { makeObservable, observable } from 'mobx'
import {v4} from 'uuid'
import DebateModel from './Claim.model'

export default class PropositionModel {

  constructor({id, text, debate = {}}) {
    this.id = id || v4()
    this.text = text || ''
    this.debate = new DebateModel(debate)

    makeObservable(this, {
      text: observable,
      debate: observable
    })
  }
}
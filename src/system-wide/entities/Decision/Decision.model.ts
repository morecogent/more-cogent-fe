import {action, computed, makeObservable, observable} from 'mobx'
import {IDecision, IDecisionConstructor} from "./Decision.types";
import {IClaim} from "../Claim/Claim.types";
import {IGoal} from "../Design/Goal.types";

export default class Decision implements IDecision {
  parent: IGoal
  child: IGoal
  _justifications: IClaim[]

  constructor({parent, child, justifications}: IDecisionConstructor) {
    this.parent = parent
    this.child = child
    this._justifications = justifications || []

    makeObservable(this, {
      _justifications: observable,
      justifications: computed
    })
  }

  get justifications(){
    return this._justifications
  }

  justify(claim: IClaim){
    this.justifications.push(claim)
  }

  removeJustification(id: string){
    this._justifications = this._justifications.filter(claim => claim.id !== id)
  }
}
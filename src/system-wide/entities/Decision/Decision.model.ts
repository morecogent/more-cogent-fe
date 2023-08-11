import {action, computed, makeObservable, observable} from 'mobx'
import {IDecision} from "./Decision.types";
import {IClaim} from "../Claim/Claim.types";
import {IGoal} from "../Design/Goal.types";

export default class Decision implements IDecision {
  parent: IGoal
  child: IGoal
  justifications: IClaim[]

  constructor({parent, child, justifications}: IDecision) {
    this.parent = parent
    this.child = child
    this.justifications = justifications || []

    makeObservable(this, {
      justifications: observable
    })
  }

  justify(claim: IClaim){
    this.justifications.push(claim)
  }
}
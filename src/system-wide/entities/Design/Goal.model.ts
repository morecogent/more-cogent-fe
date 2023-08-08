import {action, computed, makeObservable, observable} from 'mobx'
import { v4 } from 'uuid'

// interface IGoalConstructor {
//   id?: string
//   concept: any
//   children?: any[]
//   relatedClaimIds?: string[]
//   activityIdeas?: any[]
// }
//
// interface IGoal {
//   new (properties: IGoalConstructor)
// }

export default class Goal {
  id
  concept
  children
  relatedClaimIds
  activityIdeas

  constructor({id, concept, children, relatedClaimIds, activityIdeas}) {
    this.id = id || v4()
    this.concept = concept
    this.children = children || []
    this.relatedClaimIds = relatedClaimIds || []
    this.activityIdeas = activityIdeas

    makeObservable(this, {
      name: computed,
      children: observable,
      addSubGoal: action
    })
  }

  get name(){
    return this.concept.name
  }

  addSubGoal(concept){
    // @ts-ignore
    const subGoal = new Goal({concept})
    console.log(subGoal);
    this.children.push(subGoal)
  }
}
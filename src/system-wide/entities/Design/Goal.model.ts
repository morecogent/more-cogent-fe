import {action, computed, makeObservable, observable} from 'mobx'
import { v4 } from 'uuid'

type IGoalConstructor = {
  id?: string
  concept: any
  children?: any[]
}

export default class Goal {
  id
  concept
  children

  constructor({id, concept, children}: IGoalConstructor) {
    this.id = id || v4()
    this.concept = concept
    this.children = children || []

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
    const subGoal = new Goal({concept})
    console.log(subGoal);
    this.children.push(subGoal)
  }
}
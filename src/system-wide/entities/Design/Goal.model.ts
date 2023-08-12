import {action, computed, makeObservable, observable} from 'mobx'
import {v4} from 'uuid'
import {IGoal, IGoalConstructor} from "./Goal.types";
import Decision from "../Decision/Decision.model";
import {IClaim} from "../Claim/Claim.types";

export default class Goal implements IGoal {
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
            attachChild: action
        })
    }

    get name() {
        return this.concept.name
    }

    attachChild(goal: IGoal, justifications?: IClaim[]) {
        const decision = new Decision({parent: this, child: goal, justifications})
        this.children.push(decision)
    }
}
import {action, computed, makeObservable, observable} from 'mobx'
import {v4} from 'uuid'
import {IGoal, IGoalProperties} from "./Goal.types";

export default class Goal implements IGoal {
    id
    parentId
    conceptId
    justificationIds

    constructor({id, conceptId, parentId, justificationIds}: IGoalProperties, private conceptsStore, private justificationsStore) {
        this.id = id || v4()
        this.parentId = parentId
        this.conceptId = conceptId
        this.justificationIds = justificationIds || []

        makeObservable(this, {
            name: computed,
            concept: computed,
            justifications: computed
        })
    }

    get name() {
        return this.concept.name
    }

    get concept(){
        const concepts = this.conceptsStore.getByIds([this.conceptId])
        return concepts[0]
    }

    get justifications(){
        return this.justificationsStore.getByIds(this.justificationIds)
    }



    // Todo: Move out to DesignTree
    // attachChild(goal: IGoal, justifications?: IClaim[]) {
    //     const decision = new Decision({parent: this, child: goal, justifications})
    //     this.children.push(decision)
    // }
}
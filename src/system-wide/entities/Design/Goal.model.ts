import {action, computed, makeObservable, observable} from 'mobx'
import {v4} from 'uuid'
import {IGoal, IGoalProperties} from "./Goal.types";

export default class Goal implements IGoal {
    id
    conceptId
    justificationIds

    constructor({id, conceptId, justificationIds}: IGoalProperties, private conceptsStore, private justificationsStore) {
        this.id = id || v4()
        this.conceptId = conceptId
        this.justificationIds = justificationIds || []

        makeObservable(this, {
            name: computed
        })
    }

    get name() {
        return this.concept.id
    }

    // TODO - Implement getByIds method in new Store base class and extend specific stores
    get concept(){
        return this.conceptsStore.getByIds([this.id])[0]
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
import Goal from "./Goal.model";
import {adjacencyToChildren, ChildrenHashTable} from "../../functions/hierarchical.functions";
import {action, computed, makeObservable, observable} from "mobx";

export default class DesignTree {
    goals

    constructor(goals: Goal[]) {
        this.goals = goals.map(goal => new Goal(goal))

        makeObservable(this, {
            goals: observable,
            asTree: computed,
            removeGoal: action
        })
    }

    get asTree(): ChildrenHashTable<Goal[]> {
        const tree = adjacencyToChildren(this.goals)
        return tree
    }

    removeGoal(id){
        this.goals = this.goals.filter(goal => goal.id !== id)
    }
}